#! /usr/bin/env perl

=pod
 Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
=cut

use 5.026;    # !!perlver.pl
use feature qw( signatures );
use utf8;
use Encode::Guess qw( latin1 );
use open ':utf8';

use strict;
use warnings qw(all);
no warnings qw( experimental::smartmatch experimental::signatures );
use autodie qw( :all );
use Data::Dumper::Simple;
$Data::Dumper::Useqq    = 1;
$Data::Dumper::Sortkeys = 1;
$|                      = 1;
use Carp qw(cluck confess);
$SIG{__DIE__}  = \&confess;
$SIG{__WARN__} = \&cluck;

use JSON;

$/ = undef;

my @text;

sub save ($txt) : prototype($) {
    push @text, split /(?<=\n)/, $txt;
}

sub note($txt) : prototype($) {
    my @txt = split /\n/, $txt;

    # pop @txt unless length $txt[$#txt];
    # save "\n";
    save "// $_\n" for @txt;

    # save "\n";
}

use File::Path qw(make_path remove_tree);

$/ = undef;

my $copyr = <<'EOFCPR';
/**
 * Copyright (c) 2023 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

EOFCPR

my $prefix = <<'EOFPFX';
import { Token } from "./Token";

// classlist

export interface Istruct {
  $type: string;
  __internal_object__: { $val: any };
}

EOFPFX

save($copyr);
save($prefix);

open my $AD, '<', 'src/GnuConfigConverter/gen-api/mvdan-sh/api_dump.json';
my $ad = <$AD>;
close $AD;

my $ads = decode_json($ad);

my $generating = 0;

sub ungo : prototype($;$);

sub ungo ( $name, $recursing = 0 ) : prototype($;$) {
    die 'undefined' unless defined $name;
    my $tx;
    if ( ref($name) eq 'HASH' ) {
        given ( $$name{kind} ) {
            when ('list') {
                $tx = ungo( $$name{elem}, 1 );
                $tx =~ s/(\w+)/${1}[]/ if $generating;
            }
            when ('pointer') {
                $tx = ungo( $$name{elem}, 1 );
                $tx .= ' | null' if $generating;
            }
            default { $tx = $name . $_; }
        }
    }
    else {
        die 'empty' unless length $name;
        $name =~ m{^mvdan\.cc/sh/v3/syntax\.(\w+)$};
        $tx = $1 // $name;
    }
    return $tx unless $generating;
    return $tx if $recursing;
    if ($tx) {
        if ( $tx eq 'bool' )                 { return 'boolean'; }
        if ( $tx eq 'string' )               { return $tx; }
        if ( $$ads{types}{$tx}{enumvalues} ) { return $tx; }
        if ( $tx eq 'Pos' )                  { return "I_$tx"; }
        say Dumper( $name, $tx, $generating, $recursing );
        return "I$tx";

    }
    return $tx;
}

# analyze

my %TYPS;
my $types = $$ads{types};

for my $tn ( sort keys %$types ) {
    $TYPS{$tn}{type}++;
    my $tv      = $$types{$tn};
    my $methods = $$tv{methods};
    for my $mn ( sort keys %$methods ) {
        my $mv  = $$methods{$mn};
        my $mtr = $$mv{type};
        die "method $mn isn't function"
          unless ref $mtr eq 'HASH' and $$mtr{kind} eq 'function';
        $TYPS{$tn}{elems}{$mn}++;
        $TYPS{$_}{ref}{m}{$tn}{$mn}++
          for map { ungo $$_{type}; }
          ( @{ $$mtr{oarams} }, @{ $$mtr{results} } );
    }
    my $type = $$tv{type};
    given ( ref $type ) {
        when ('HASH') {
            given ( $$type{kind} ) {
                when ( [ 'struct', 'interface' ] ) {
                    $TYPS{$tn}{struct}++;
                    my $fields = $$type{fields};
                    for my $fn ( sort keys %$fields ) {
                        my $fv  = $$fields{$fn};
                        my $ftr = $$fv{type};
                        my $ft  = ungo $ftr;
                        $TYPS{$tn}{elems}{$fn}++;
                        $TYPS{$ft}{ref}{f}{$tn}{$fn}++;
                    }
                    for my $i ( @{ $$tv{implementers} } ) {
                        my $u = ungo $i;
                        $TYPS{$tn}{impl}{$u}++;
                        $TYPS{$u}{isa}{$tn}++;
                    }
                }
            }
        }
        when ('') {
            given ($type) {
                when ( [ 'uint32', 'int' ] ) {
                    $TYPS{$tn}{enum}++;
                }
                default {
                    die "Unknown type type '$_'"
                }
            }
        }
        default {
            die "Unknown type kind '$_'"
        }
    }
}

# print Dumper(%TYPS);
# die;

# generate
$generating = 1;

eval {
    for my $tn ( sort keys %$types ) {
        my $tv   = $$types{$tn};
        my $type = $$tv{type};
        note $$tv{doc};
        given ( ref $type ) {
            when ('HASH') {
                given ( $$type{kind} ) {
                    when ('struct') {
                        save "export interface "
                          . ungo($tn)
                          . " extends INode {\n";
                        my $fields = $$type{fields};
                        for my $fn ( sort keys %$fields ) {
                            my $fv  = $$fields{$fn};
                            my $ftr = $$fv{type};
                            my $ft  = ungo $ftr;
                            note $$fv{doc};
                            save "  $fn: $ft;\n";
                        }
                        save "}\n";
                    }
                    when ('interface') {
                        my @impl =
                          map { ungo $_} @{ $$tv{implementers} };
                        save join( "\n  | ",
                            "export type " . ungo($tn) . " =", @impl )
                          . ";\n";
                    }
                }
            }
            when ('') {
                given ($type) {
                    when ( [ 'uint32', 'int' ] ) {

                        # save "export enum $tn {\n";
                        # for my $e ( @{ $$tv{enumvalues} } ) {
                        #     save "  $e,\n";
                        # }
                        # save "}\n";
                    }
                    default {
                        die "Unknown type type '$_'"
                    }
                }
            }
            default {
                die "Unknown type kind '$_'"
            }
        }
    }
};
save $@
  if $@;
open my $PT, '>', 'src/GnuConfigConverter/ParserTypes.ts';
print $PT @text;
close $PT;

warn $@ if $@;
