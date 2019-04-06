#! /usr/bin/perl -w

=pod
 Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
=cut

use v5.26;
no warnings "experimental::smartmatch";
use strict;
use Data::Dumper::Simple;
$Data::Dumper::Useqq    = 1;
$Data::Dumper::Sortkeys = 1;
$|                      = 1;

$/ = undef;

my $copyr = <<'EOFCPR';
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

EOFCPR

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

sub p2aname($) {
    my $p = shift;
    given ($p) {
        when ( [qw( INode )] )   { return "ASTNode"; }
        when ( [qw( Istruct )] ) { return undef; }
        when (/^I_(\w+)$/)     { return "AST$1"; }
        when (/^I(\w+)$/)      { return "ASTNode$1"; }
        when (/^([A-Z]\w\+)$/) { return "ASTToken$1"; }
        default                { return $p; }
    }
}

sub export($$$) {
    my ( $name, $text, $needType ) = @_;
    my %to = map {
            $_ ~~ ['Istruct', $name] ? ()
          : $_ eq 'syntax'      ? ( $_, "mvdan-sh" )
          : $_ =~ /^AST|^logg$/ ? ( $_, "./$_" )
          : ( $_, "./ParserTypes" )
    } sort { lc $a cmp lc $b } keys %$needType;
    my %from;
    push @{ $from{ $to{$_} } }, $_ for keys %to;
    my @hdr =
      map {
        my $want = join ', ', sort { lc $a cmp lc $b } @{ $from{$_} };
        "import { $want } from \"$_\";\n"
      }
      sort { lc $a cmp lc $b } keys %from;
    my @hdr1 = grep !m[/], @hdr;
    my @hdr2 = grep m[/],  @hdr;
    unshift @$text, $copyr, @hdr1, @hdr2, "\n";
    @$text = map { split /(?<=\n)/, $_ } @$text;
    @$text = map {
        if ( length $_ < 120 ) { $_ }
        else {
            $_ =~ /^(\s*)/;
            ( "$1// tslint:disable-next-line:max-line-length\n", $_ );
        }
    } @$text;
    open FO, '>', "src/GnuConfigConverter/$name.ts"
      or die "src/GnuConfigConverter/$name.ts: $!";
    print FO @$text;
    close FO or die "src/GnuConfigConverter/$name.ts: $!";
    @$text     = ();
    %$needType = ();
}

my %needType;
my %kind;

open FI, '<', 'dout/GnuConfigConverter/ParserTypes.d.ts'
  or die "dout/GnuConfigConverter/ParserTypes.d.ts: $!";
my $fi = <FI>;
close FI or die "dout/GnuConfigConverter/ParserTypes.d.ts: $!";

export 'ASTSimpleSingle', [<<EOFASS], {};
export function ASTSimpleSingle<AE, PE>(at: new(pt: PE) => AE, pe: PE | null) {
  const ae = pe ? new at(pe) : null;
  return ae;
}
EOFASS
export 'ASTSingle', [<<EOFAS], { ASTNode => 1 };
export function ASTSingle<AE extends ASTNode, PE>(at: new(pt: PE) => AE, pe: PE | null) {
  const ae = pe ? new at(pe) : null;
  return ae;
}
EOFAS
export 'ASTArray', [<<EOFAA], { ASTNode => 1, ASTSingle => 1 };
export function ASTArray<AE extends ASTNode, PE>(at: new(pt: PE) => AE, pa: PE[] | null) {
  const aa: AE[] = [];
  if (pa) {
    pa.forEach((pe) => {
        const ae = ASTSingle<AE, PE>(at, pe);
        if (ae) {
          aa.push(ae);
        }
    });
  }
  return aa;
}
EOFAA

my @fi = split /\bexport\s+(?:declare\s+)?/, $fi;
for my $typ (@fi) {
    next unless length $typ;
    next if $typ =~ /^\/\*/;
    my ( $what, $name, $body ) = ( $typ =~ /^(\w+)\s+(\w+)\s+(.*\S)\s*$/s );

    #note Dumper($what, $name, $body);
    my $an = p2aname $name;
    next unless defined $an;    # Istruct
    given ($what) {
        when ( [qw(interface)] ) {
            my ( $ext, $body1 ) = ( $body =~ /^extends\s+(\w+)\s+(.*)$/s );

            #note Dumper( $ext, $body1 );
            if ( defined $ext and $ext ~~ [qw( INode Istruct )] ) {
                $needType{$name}++;
                if ( $ext eq 'INode' ) {
                    save <<EOFN1a;
export class $an extends ASTNode {
  public kind: ASTnodeKind.$an = ASTnodeKind.$an;
EOFN1a
                    $needType{ASTNode}++;
                    $needType{ASTnodeKind}++;
                    $kind{$an}++;
                }
                elsif ( $name eq 'INode' ) {
                    save <<EOFN1b;
export class $an {
  public kind: ASTnodeKind = ASTnodeKind.bad;
  public rest: object | null;
EOFN1b
                    $needType{ASTnodeKind}++;
                }
                else {
                    save <<EOFN1c;
export class $an {
  public rest: object | null;
EOFN1c
                }
                my @fields = grep /\w/, split /\n/, $body1;

                #note Dumper(@fields);
                my %fdef;
                my @fdef;
                for my $field (@fields) {
                    my ( $name1, $func, $def, $kind ) =
                      ( $field =~
/^\s*(\w*)\s*:\s*((?:\([^()]*\)\s*=>\s*)?)(\w*)\s*(.*);$/
                      );

                    #note Dumper( $name1, $def, $func, $kind );
                    my ( $a, $n, $f ) = ( 0, 0, 0 );
                    if ( length $func ) {
                        $f = 1;
                        $f++ if $func !~ /\(\)/;
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
                    my $aft = p2aname $def;
                    $fdef{$name1} = {
                        t    => $def,
                        a    => $a,
                        n    => $n,
                        f    => $f,
                        text => $field,
                        aft  => $aft
                    };
                    if ( $f < 2 ) {
                        my $tail = '';
                        $tail .= '[]' if $a;
                        $tail .= ' | null' if $n and not $a;
                        save <<EOFN2;
  public $name1: $aft$tail; // $field
EOFN2
                        if ( $aft ne $def ) {
                            if ($a) {
                                $needType{ASTArray}++;
                            }
                            elsif ( $def =~ /^I_/ ) {
                                $needType{ASTSimpleSingle}++;
                            }
                            else {
                                $needType{ASTSingle}++;
                            }
                            $needType{$aft}++;
                        }
                        elsif ( $def =~ /^[A-Z]/ ) {
                            $needType{$aft}++;
                        }
                    }
                    else {
                        save <<EOFN2;
  // ignored: $field
EOFN2
                    }
                    push @fdef, $name1;
                }

                #note Dumper( $name, %fdef, @fdef );
                my $list1 =
                  join( ', ', grep { $fdef{$_}{f} < 2 } @fdef );
                my @recur = map {
                    my $sin = $fdef{$_}{aft};

                    #note Dumper( $_, $fdef{$_} );
                    if ( $fdef{$_}{t} eq $sin ) {
                        "    this.$_ = $_" . ( $fdef{$_}{f} ? '()' : '' ) . ";";
                    }
                    else {
                        "    this.$_ = "
                          . (
                              $fdef{$_}{a}          ? 'ASTArray'
                            : $fdef{$_}{t} =~ /^I_/ ? 'ASTSimpleSingle'
                            :                         'ASTSingle'
                          )
                          . "($sin, $_"
                          . ( $fdef{$_}{f}  ? '()' : '' ) . ")"
                          . ( !$fdef{$_}{n} ? '!'  : '' ) . ";";
                    }
                } grep { $fdef{$_}{f} < 2 } @fdef;
                my $recur = join( "\n", @recur );
                my $ln = lc $name;
                $ln =~ s/^i_*//;
                save <<EOFN3;

  constructor($ln: $name) {
EOFN3
                if ( $ext eq 'INode' ) {
                    save <<EOFN4;
    super($ln);
EOFN4
                }
                save <<EOFN5;
    logg("$an");
    const { $list1, ...rest_$ln } = $ln;
$recur
    this.rest = rest_$ln;
  }
}
EOFN5
                $needType{logg}++;
            }
            else {
                die "interface $name/$an extends " . Dumper($ext) . " ";
            }
        }
        when ( [qw(type)] ) {
            $needType{$name}++;

            #note Dumper( $what, $name, $body );
            my @alts = grep /./, split /\W+/, $body;
            my $list1 = join ' | ', map { 'ASTnodeKind.' . p2aname $_ } @alts;
            save <<EOFT1;
export class $an extends ASTNode {
  public kind: ASTnodeKind.bad | $list1 = ASTnodeKind.bad;
EOFT1
            $needType{ASTNode}++;
            $needType{ASTnodeKind}++;

            #note Dumper(@alts);
            my $ln = lc $name;
            $ln =~ s/^i_*//;
            my @recur = map {
                my $san = $_;
                $san =~ s/^I_*//;
                my $atn = p2aname $_;
                $needType{$atn}++;
                $needType{$_}++;
                "      case \"$san\":\n        return new $atn($ln as $_);"
            } @alts;
            my $recur = join( "\n", @recur );
            save <<EOFT;
  constructor($ln: $name) {
    super($ln);
    logg("$an");
    switch (syntax.NodeType($ln)) {
$recur
      default:
        this.rest = { NodeType: syntax.NodeType($ln) };
    }
  }
}
EOFT
            $needType{logg}++;
            $needType{syntax}++;
        }
        when ( [qw(enum)] ) {

            # skip die "missing " . $what;
        }
        default {
            die 'Unknown ' . Dumper( $what, $typ );
        }
    }
    export $an, \@text, \%needType;
}

my $list0 = join ",\n  ", sort { lc $a cmp lc $b } keys %kind;
save <<EOFK;
export enum ASTnodeKind {
  bad,
  $list0,
}
EOFK
export 'ASTnodeKind', \@text, \%needType;

