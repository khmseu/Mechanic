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
        when (/^I_(\w+)$/) { return "AST$1"; }
        when (/^I(\w+)$/)  { return "ASTNode$1"; }

        #when (/^([A-Z]\w+)$/) { return "ASTToken$1"; }
        default { return $pp; }
    }
}

sub export($$$) {
    my ( $name, $text, $needType ) = @_;
    return unless @$text;
    my %to = map {
            $_ ~~ [ 'Istruct', $name ] ? ()
          : $_ eq 'syntax'              ? ( $_, "mvdan-sh" )
          : $_ eq 'ok'                  ? ( $_, 'assert' )
          : $_ eq 'op'                  ? ( $_, "./Token" )
          : $_ =~ /^AST|^(logg|Token)$/ ? ( $_, "./$_" )
          : ( $_, "./ParserTypes" )
    } sort { lc $a cmp lc $b } keys %$needType;
    my %from;
    push @{ $from{ $to{$_} } }, $_ for keys %to;
    my @hdr =
      map {
        my $want = join ', ', sort { lc $a cmp lc $b } @{ $from{$_} };
        qq[import { $want } from "$_";\n]
      }
      sort { lc $a cmp lc $b } keys %from;
    my @hdr1 = grep !m[/], @hdr;
    my @hdr2 = grep m[/],  @hdr;
    unshift @$text, "\n" if @hdr;
    unshift @$text, $copyr, @hdr1, @hdr2;
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

export 'ASTCall', [<<EOFCALL], {};
export function ASTCall<PE>(pe: (() => PE) | null) {
  return pe ? pe() : null;
}
EOFCALL
export 'ASTSimpleSingle', [<<EOFASS], {};
export function ASTSimpleSingle<AE, PE>(at: new(pt: PE) => AE, pe: PE | null) {
  const ae = pe ? new at(pe) : null;
  return ae;
}
EOFASS
export 'ASTSimpleSingleNotNull', [<<EOFASS], { ok => 1 };
export function ASTSimpleSingleNotNull<AE, PE>(at: new(pt: PE) => AE, pe: PE | null) {
  ok(pe, "ASTSimpleSingleNotNull");
  const ae = new at(pe!);
  return ae;
}
EOFASS
export 'ASTSingle', [<<EOFAS], { ASTNode => 1 };
export function ASTSingle<AE extends ASTNode, PE>(at: new (pt: PE, parent: ASTNode | null, parentField: string) => AE, pe: PE | null, parent: ASTNode | null, parentField: string) {
  const ae = pe ? new at(pe, parent, parentField) : null;
  return ae;
}
EOFAS
export 'ASTSingleNotNull', [<<EOFAS], { ASTNode => 1, ok => 1 };
export function ASTSingleNotNull<AE extends ASTNode, PE>(at: new (pt: PE, parent: ASTNode | null, parentField: string) => AE, pe: PE | null, parent: ASTNode | null, parentField: string) {
  ok(pe, parentField);
  const ae = new at(pe!, parent, parentField);
  return ae;
}
EOFAS
export 'ASTArray', [<<EOFAA], { ASTNode => 1, ASTSingle => 1 };
export function ASTArray<AE extends ASTNode, PE>(at: new(pt: PE, parent: ASTNode | null, parentField: string) => AE, pa: PE[] | null, parent: ASTNode | null, parentField: string) {
  const aa: AE[] = [];
  if (pa) {
    pa.forEach((pe) => {
        const ae = ASTSingle<AE, PE>(at, pe, parent, parentField);
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
  public more: { [key: string]: any } = {};
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
                    my $s1 = $fdef{$_}{t} eq $sin;
                    my $s2 = ( $s1 and $sin =~ /^[A-Z]/ );

                    #note Dumper( $_, $fdef{$_} );
                    # Flags:
                    # $aa
                    # $s1
                    # $ff
                    # $ii
                    # $nn
                    # $s2
                    # Strings:
                    # $_
                    # $ln
                    # $sin
                    # $this
                    my $fv0 = "$ln.$_";
                    my $fv  = $fv0;
                    if ($ff) {
                        $fv = "ASTCall($fv)";
                        $needType{ASTCall}++;
                    }

                    my $par = ", $this, \"$_\"";
                    if ($ii) {
                        $par = '';
                    }

                    my ( $pre, $post ) = ( '', '' );
                    if ($s1) {
                        if ($nn) {
                            $pre  = "$fv0 ? ";
                            $post = ' : null';
                        }
                    }
                    else {
                        if ($aa) {
                            $fv = "ASTArray($sin, $fv$par)";
                            $needType{ASTArray}++;
                        }
                        else {
                            my $nnt = $nn ? '' : 'NotNull';
                            if ($ii) {
                                $fv = "ASTSimpleSingle$nnt($sin, $fv)";
                                $needType{"ASTSimpleSingle$nnt"}++;
                            }
                            else {
                                $fv = "ASTSingle$nnt($sin, $fv$par)";
                                $needType{"ASTSingle$nnt"}++;
                            }
                        }
                    }

                    my $res;
                    if ($s2) {
                        $res = <<EOR;
    this.$_ = $pre$sin\[$fv\]$post;
    this.${_}String = ${pre}op(($fv as unknown) as Token)$post;
EOR
                    }
                    else {
                        $res = <<EOR;
    this.$_ = $pre$fv$post;
EOR
                    }
                    { $/ = ''; chomp $res; }

                 #Dumper( $aa, $s1, $ff, $ii, $nn, $s2, $_, $ln, $sin, $this,) .
                    $res;
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
                my $list2 = (
                    (
                             $ext eq 'INode'
                          or $name eq 'INode'
                    )
                    ? (
                        join ', ',
                        map { qq["$_"] } (
                            qw(kind parent parentField),
                            grep { $fdef{$_}{t} eq 'I_Pos' } @fdef
                        )
                      )
                    : ''
                );
                if ( $ext eq 'INode' or $name eq 'INode' ) {
                    save <<EOFN3;

  constructor($ln: $name, public parent: ASTNode | null, public parentField: string) {
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
    super($ln, parent, parentField);
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
                    $needType{ASTVisitorBase}++;
                    save <<EOFN5b;
  public accept(visitor: ASTVisitorBase) {
    visitor.visit${an}Pre(this);
$recur2
    visitor.visit${an}Post(this);
  }
EOFN5b
                }
                elsif ( $name eq 'INode' ) {
                    $needType{ASTVisitorBase}++;
                    save <<EOFN5c;
  public accept(visitor: ASTVisitorBase) {
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
        return new $atn($ln as $_, parent, parentField);
EOFT1a
            } @alts;
            my $recur = join( "", @recur );
            chop $recur;
            save <<EOFT;
  constructor($ln: $name, public parent: ASTNode | null, public parentField: string) {
    super($ln, parent, parentField);
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
export class ASTVisitorBase {
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
export 'ASTVisitorBase', \@text, \%needType;

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
