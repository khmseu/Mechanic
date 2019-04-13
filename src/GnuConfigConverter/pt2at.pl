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
    my $pp = shift;
    given ($pp) {
        when ( [qw( INode )] )   { return "ASTNode"; }
        when ( [qw( Istruct )] ) { return undef; }
        when (/^I_(\w+)$/)     { return "AST$1"; }
        when (/^I(\w+)$/)      { return "ASTNode$1"; }
        when (/^([A-Z]\w\+)$/) { return "ASTToken$1"; }
        default                { return $pp; }
    }
}

sub export($$$) {
    my ( $name, $text, $needType ) = @_;
    return unless @$text;
    my %to = map {
            $_ ~~ [ 'Istruct', $name ] ? ()
          : $_ eq 'syntax'              ? ( $_, "mvdan-sh" )
          : $_ eq 'op'                  ? ( $_, "./Token" )
          : $_ =~ /^AST|^(logg|Token)$/ ? ( $_, "./$_" )
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

sub export_maybe($$$) {
    my ( $name, $text, $needType ) = @_;
    export $name, $text, $needType
      unless -f "src/GnuConfigConverter/$name.ts";
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
export function ASTSingle<AE extends ASTNode, PE>(at: new (pt: PE, parent: ASTNode | null) => AE, pe: PE | null, parent: ASTNode | null) {
  const ae = pe ? new at(pe, parent) : null;
  return ae;
}
EOFAS
export 'ASTArray', [<<EOFAA], { ASTNode => 1, ASTSingle => 1 };
export function ASTArray<AE extends ASTNode, PE>(at: new(pt: PE, parent: ASTNode | null) => AE, pa: PE[] | null, parent: ASTNode | null) {
  const aa: AE[] = [];
  if (pa) {
    pa.forEach((pe) => {
        const ae = ASTSingle<AE, PE>(at, pe, parent);
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
            my $this;
            if ( defined $ext and $ext ~~ [qw( INode Istruct )] ) {
                $needType{$name}++;
                if ( $ext eq 'INode' ) {
                    my $more = $an;
                    $more =~ s/^ASTNode/ASTMore/;
                    $needType{$more}++;
                    save <<EOFN1a;
export class $an extends ASTNode {
  public kind: ASTnodeKind.$an = ASTnodeKind.$an;
  public kindString: string = ASTnodeKind[ASTnodeKind.$an];
  public more: $more = new $more();
EOFN1a
                    $needType{ASTNode}++;
                    $needType{ASTnodeKind}++;
                    $kind{$an}++;
                    $this = 'this';
                }
                elsif ( $name eq 'INode' ) {
                    save <<EOFN1b;
export class $an {
  public kind: ASTnodeKind = ASTnodeKind.bad;
  public kindString: string = ASTnodeKind[ASTnodeKind.bad];
EOFN1b
                    $needType{ASTnodeKind}++;
                    $this = 'this';
                }
                else {
                    save <<EOFN1c;
export class $an {
EOFN1c
                    $this = 'null';
                }
                my @fields = grep /\w/, split /\n/, $body1;

                #note Dumper(@fields);
                my %fdef;
                my @fdef;
                for my $field (@fields) {
                    my ( $name1, $func, $def, $kind ) =
                      ( $field =~
/^\s*(\w*)\s*:\s*((?:\(?(?:\([^()]*\)\s*=>\s*))?)(\w*)\)?\s*(.*);$/
                      );

                   #print( Dumper( $field, $name1, $def, $func, $kind ), "\n" );

                    #note Dumper( $name1, $def, $func, $kind );
                    my ( $aa, $nn, $ff, $ii ) = ( 0, 0, 0, 0 );
                    if ( length $func ) {
                        $ff = 1;
                        $ff++ if $func !~ /\(\)/;
                    }
                    given ($kind) {
                        when ( [''] ) {

                            # ok
                        }
                        when (/^\|\s*null$/) {
                            $nn = 1;
                        }
                        when ( [qw([])] ) {
                            $aa = 1;
                        }
                        when (/^\[\]\s*\|\s*null$/) {
                            $aa = 1;
                            $nn = 1;
                        }
                        default {
                            die 'Unknown ' . Dumper($kind);
                        }
                    }
                    my $aft = p2aname $def;
                    $ii = 1 if $def =~ /^I_/;
                    $fdef{$name1} = {
                        t    => $def,
                        a    => $aa,
                        n    => $nn,
                        f    => $ff,
                        text => $field,
                        aft  => $aft,
                        i    => $ii
                    };
                    if ( $ff < 2 ) {
                        my $tail = '';
                        $tail .= '[]' if $aa;
                        $tail .= ' | null' if $nn and not $aa;
                        if ( $aft eq $def and $aft =~ /^[A-Z]/ ) {
                            save <<EOFN2a;
  public $name1: string$tail; // $field
  public ${name1}String: string$tail;
EOFN2a
                            $needType{op}++;
                            $needType{Token}++;
                        }
                        else {
                            save <<EOFN2b;
  public $name1: $aft$tail; // $field
EOFN2b
                        }
                        if ( $aft ne $def ) {
                            if ($aa) {
                                $needType{ASTArray}++;
                            }
                            elsif ($ii) {
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
                my $ln = lc $name;
                $ln =~ s/^i_*//;
                my @recur = map {
                    my $sin = $fdef{$_}{aft};
                    my ( $ff, $nn, $aa, $ii ) =
                      ( $fdef{$_}{f}, $fdef{$_}{n}, $fdef{$_}{a},
                        $fdef{$_}{i} );

                    #note Dumper( $_, $fdef{$_} );
                    if ( $fdef{$_}{t} eq $sin ) {
                        (
                            "    this.$_ = "
                              . ( $ff && $nn ? "$ln.$_ ? " : "" )
                              . (
                                $sin =~ /^[A-Z]/ ? "$sin\[$ln.$_]" : "$ln.$_" )
                              . ( $fdef{$_}{f} ? '()' : '' )
                              . ( $ff && $nn ? " : null" : "" ) . ";",
                            (
                                $sin =~ /^[A-Z]/
                                ? "    this.${_}String = "
                                  . ( $ff && $nn ? "$ln.$_ ? " : "" )
                                  . "op(($ln.$_ as unknown) as Token)"
                                  . ( $fdef{$_}{f} ? '()' : '' )
                                  . ( $ff && $nn ? " : null" : "" ) . ";"
                                : ()
                            )
                          )
                    }
                    else {
                        "    this.$_ = "
                          . ( $ff && $nn ? "$ln.$_ ? " : "" )
                          . (
                              $aa ? 'ASTArray'
                            : $ii ? 'ASTSimpleSingle'
                            :       'ASTSingle'
                          )
                          . "($sin, $ln.$_"
                          . ( $ff ? '()' : '' )
                          . ( $ii ? ""   : ", $this" ) . ")"
                          . ( $ff && $nn ? " : null" : "" )
                          . ( !$nn ? '!' : '' ) . ";";
                    }
                } grep { $fdef{$_}{f} < 2 } @fdef;
                my $recur = join( "\n", @recur );
                my @recur2 = map {
                    if ( $fdef{$_}{a} ) {
                        <<EOFN5a;
    this.$_.forEach((e) => e.accept(visitor));
EOFN5a
                    }
                    elsif ( $fdef{$_}{n} ) {
                        <<EOFN5b;
    if (this.$_) {
      this.$_.accept(visitor);
    }
EOFN5b
                    }
                    else {
                        <<EOFN5b;
    this.$_.accept(visitor);
EOFN5b
                    }
                  }
                  grep { $fdef{$_}{aft} =~ /^ASTNode/ } @fdef;
                my $recur2 = join( '', @recur2 );
                chop $recur2;
                my $list2 = join ', ',
                  map { "\"$_\"" } grep { $fdef{$_}{t} eq 'I_Pos' } @fdef;
                if ( $ext eq 'INode' or $name eq 'INode' ) {
                    save <<EOFN3;

  constructor($ln: $name, public parent: ASTNode | null) {
EOFN3
                    $needType{ASTNode}++;
                }
                else {
                    save <<EOFN3;

  constructor($ln: $name) {
EOFN3
                }
                if ( $ext eq 'INode' ) {
                    save <<EOFN4;
    super($ln, parent);
EOFN4
                }
                save <<EOFN5a;
    logg("$an");
$recur
    [$list2].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
EOFN5a
                $needType{logg}++;
                if ( $ext eq 'INode' ) {
                    $needType{ASTnodeVisitor}++;
                    save <<EOFN5b;
  public accept(visitor: ASTnodeVisitor) {
    visitor.visit${an}Pre(this);
$recur2
    visitor.visit${an}Post(this);
  }
EOFN5b
                }
                elsif ( $name eq 'INode' ) {
                    $needType{ASTnodeVisitor}++;
                    save <<EOFN5c;
  public accept(visitor: ASTnodeVisitor) {
    visitor = visitor;
  }
EOFN5c
                }
                save <<EOFN5d;
}
EOFN5d
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
  public kindString: string = ASTnodeKind[ASTnodeKind.bad];
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
                <<EOFT1a
      case "$san":
        return new $atn($ln as $_, parent);
EOFT1a
            } @alts;
            my $recur = join( "", @recur );
            chop $recur;
            save <<EOFT;
  constructor($ln: $name, public parent: ASTNode | null) {
    super($ln, parent);
    logg("$an");
    switch (syntax.NodeType($ln)) {
$recur
      default:
        throw { NodeType: syntax.NodeType($ln) };
    }
  }
}
EOFT
            $needType{ASTNode}++;
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

save <<EOFV1;
export class ASTnodeVisitor {
EOFV1
for my $cc ( sort { lc $a cmp lc $b } keys %kind ) {
    $needType{$cc}++;
    save <<EOFV2;
  public visit${cc}Pre(node: $cc): void {
    node = node;
  }
  public visit${cc}Post(node: $cc): void {
    node = node;
  }
EOFV2
}
save <<EOFV3;
}
EOFV3
export 'ASTnodeVisitor', \@text, \%needType;

for my $cc ( sort { lc $a cmp lc $b } keys %kind ) {
    my $kk = $cc;
    $kk =~ s/^ASTNode/ASTMore/;
    $needType{$kk}++;
    save <<EOFU;
export class $kk {
}
EOFU
    export_maybe $kk, \@text, \%needType;
}
