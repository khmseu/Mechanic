#! /usr/bin/perl -w

use v5.26;
no warnings "experimental::smartmatch";
use strict;
use Data::Dumper::Simple;
$Data::Dumper::Useqq    = 1;
$Data::Dumper::Sortkeys = 1;
$|                      = 1;

$/ = undef;

my @text;

sub save($) {
    my $txt = shift;
    push @text, split /(?<=\n)/, $txt;
}

sub note($) {
    my $txt = shift;
    my @txt = split /\n/, $txt;
    pop @txt unless length $txt[$#txt];
    save "\n";
    save "// $_\n" for @txt;
    save "\n";
}

my %needArray;
my %needSimple;
my %needType;
my %needDo;
my %doNeedType;
my %have;

open FI, '<', 'dout/GnuConfigConverter/ParserTypes.d.ts'
  or die "dout/GnuConfigConverter/ParserTypes.d.ts: $!";
my $fi = <FI>;
close FI or die "dout/GnuConfigConverter/ParserTypes.d.ts: $!";

my @fi = split /\bexport\s+(?:declare\s+)?/, $fi;
for my $typ (@fi) {
    next unless length $typ;
    my ( $what, $name, $body ) = ( $typ =~ /^(\w+)\s+(\w+)\s+(.*\S)\s*$/s );

    #note Dumper($what, $name, $body);
    $have{$name}++;
    my $sn = $name;
    $sn =~ s/^I_*//;
    my $lsn = lc $sn;
    given ($what) {
        when ( [qw(interface)] ) {
            my ( $ext, $body1 ) = ( $body =~ /^extends\s+(\w+)\s+(.*)$/s );

            #note Dumper( $ext, $body1 );
            if ( defined $ext and $ext eq 'INode' ) {    # ignore others
                $needType{$name}++;
                my @fields = grep /\w/, split /\n/, $body1;

                #note Dumper(@fields);
                my %fdef;
                my @fdef;
                for my $field (@fields) {
                    my ( $name1, $func, $def, $kind ) =
                      ( $field =~
                          /^\s*(\w*)\s*:\s*((?:\(\)\s*=>\s*)?)(\w*)\s*(.*);$/ );

                    #note Dumper( $name1, $def, $func, $kind );
                    my ( $a, $n, $f ) = ( 0, 0, 0 );
                    if ( length $func ) {
                        $f = 1;
                    }
                    given ($kind) {
                        when ( [''] ) {

                            # ok
                        }
                        when (/^\|\s*null$/) {
                            $n = 1;
                        }
                        when ( [qw([])] ) {
                            $a = 1;
                        }
                        when (/^\[\]\s*\|\s*null$/) {
                            $a = 1;
                            $n = 1;
                        }
                        default {
                            die 'Unknown ' . Dumper($kind);
                        }
                    }
                    $fdef{$name1} = {
                        t    => $def,
                        a    => $a,
                        n    => $n,
                        f    => $f,
                        text => $field
                    };
                    push @fdef, $name1;
                    $needArray{$def}++ if $a;
                    $needSimple{$def}++ unless $def =~ /^I[^_]/;
                }

                #note Dumper( $name, %fdef, @fdef );
                my $list1 = join( ', ', grep { !$fdef{$_}{f} } @fdef );
                my @recur = map {
                    my $sin = $fdef{$_}{t};
                    $sin =~ s/^I_*//;

                    #note Dumper( $_, $fdef{$_} );
                    "  const r$_ = prep$sin"
                      . ( $fdef{$_}{a} ? 's' : '' ) . "($_);"
                } grep { !$fdef{$_}{f} } @fdef;
                my $recur = join( "\n", @recur );
                my $list2 = 'r' . join( ', r', grep { !$fdef{$_}{f} } @fdef );
                my $list3 = join(
                    ', ',
                    map {
                        my $t = $fdef{$_}{t};
                        my $pt;
                        if ( $t =~ /^I[^_]/ ) { $pt = 'string[]' }
                        else {
                            $doNeedType{$t}++;
                            $pt = "$t | null";
                        }
                        "$_: $pt"
                    } grep { !$fdef{$_}{f} } @fdef
                );
                save <<EOFI;
export function prep$sn($lsn: $name | null): string[] {
  logg("prep$sn");
  if (!$lsn) {
    return [comm({ empty_$lsn: $lsn }, '{"empty_$lsn":null}')];
  }
  const { $list1, ...rest_$lsn } = $lsn;
$recur
  return [...do$sn($list2), comm({ rest_$lsn }, '{"rest_$lsn":{}}')];
}
EOFI
                $needDo{"do$sn"} = <<EOFD;
export function do$sn($list3): string[] { return []; }
EOFD
            }
        }
        when ( [qw(type)] ) {
            $needType{$name}++;

            #note Dumper( $what, $name, $body );
            my @alts = grep /./, split /\W+/, $body;

            #note Dumper(@alts);
            my @recur = map {
                my $san = $_;
                $san =~ s/^I_*//;
                "    case \"$san\":\n      return prep$san($lsn as $_);"
            } @alts;
            my $recur = join( "\n", @recur );
            save <<EOFT;
export function prep$sn($lsn: $name | null): string[] {
  logg("prep$sn");
  if (!$lsn) {
    return [comm({ empty_$lsn: $lsn }, '{"empty_$lsn":null}')];
  }
  switch (syntax.NodeType($lsn)) {
$recur
    default:
      return [comm({ unknown_$lsn: $lsn })];
  }
}
EOFT
        }
        when ( [qw(enum)] ) {

            # skip die "missing " . $what;
        }
        default {
            die 'Unknown ' . Dumper($what);
        }
    }
}

for my $typ ( sort { lc $a cmp lc $b } keys %needArray ) {
    my $sns = $typ;
    $sns =~ s/^I_*//;
    my $lsns = lc $sns;
    my $lsn  = $lsns . 's';
    my $sn   = $sns . 's';
    save <<EOFA;
export function prep$sn($lsn: ${typ}[] | null): string[] {
  logg("prep$sn");
  if (!$lsn) {
    return [comm({ empty_$lsn: $lsn }, '{"empty_$lsn":null}')];
  }
  const res: string[] = [];
  $lsn.forEach(($lsns) => {
    res.push(...prep$sns($lsns));
  });
  return res;
}
EOFA
}
for my $typ ( sort { lc $a cmp lc $b } keys %needSimple ) {
    $needType{$typ}++ if $have{$typ};

    #note "Don't have $typ" unless $have{$typ};
    my $sn = $typ;
    $sn =~ s/^I_*//;
    my $lsn = 'a' . ucfirst lc $sn;
    save <<EOFS;
export function prep$sn($lsn: $typ | null): $typ | null {
  return $lsn;
}
EOFS
}
my $list1 = join( ', ',
    sort { lc $a cmp lc $b } grep { !/^(INode|Istruct)$/ } keys %needType );
my $list2 = join( ', ', sort { lc $a cmp lc $b } keys %needDo );
my $hdr = <<EOFH;
import { syntax } from "mvdan-sh";
import { comm, logg } from ".";
import { $list2 } from "./ParserDo";
import { $list1 } from "./ParserTypes";

EOFH
unshift @text, split /(?<=\n)/, $hdr;
@text = map {
    if ( length $_ < 120 ) { $_ }
    else {
        $_ =~ /^(\s*)/;
        ( "$1// tslint:disable-next-line:max-line-length\n", $_ );
    }
} @text;
open FO, '>', 'src/GnuConfigConverter/ParserPrep.ts'
  or die "src/GnuConfigConverter/ParserPrep.ts: $!";
print FO @text;
close FO or die "src/GnuConfigConverter/ParserPrep.ts: $!";

my @dotxt;
for my $do ( sort { lc $a cmp lc $b } keys %needDo ) {
    push @dotxt, $needDo{$do};
}
my $dlist1 = join( ', ',
    sort { lc $a cmp lc $b } grep { $have{$_} ? $_ : () } keys %doNeedType );
my $dhdr = <<EOFDH;
import { $dlist1 } from "./ParserTypes";

EOFDH
unshift @dotxt, split /(?<=\n)/, $dhdr;
@dotxt = map {
    if ( length $_ < 120 ) { $_ }
    else {
        $_ =~ /^(\s*)/;
        ( "$1// tslint:disable-next-line:max-line-length\n", $_ );
    }
} @dotxt;
open FD, '>', 'src/GnuConfigConverter/ParserDo.ts.template'
  or die "src/GnuConfigConverter/ParserDo.ts.template: $!";
print FD @dotxt;
close FD or die "src/GnuConfigConverter/ParserDo.ts.template: $!";
