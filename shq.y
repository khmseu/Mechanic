%token NUL /* can't handle via literal */
%token TODO /* mark places that need work */
%start tklist
%%
special : NUL /* can't handle via literal */
	| '\t'
	| '\n'
	| ' '
	| '"'
	| '$'
	| '&'
	| '\''
	| '('
	| ')'
	| ';'
	| '<'
	| '>'
	| '\\'
	| '`'
	| '|'
	;
condspecial : '#'
	    | '%'
	    | '*'
	    | '='
	    | '?'
	    | '['
	    | '~'
	    ;
normal : "[\x01-\x08\x0b-\x1f]"
       | '!'
       | '+'
       | ','
       | '-'
       | '.'
       | '/'
       | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
       | ':'
       | '@'
       | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'
       | ']'
       | '^'
       | '_'
       | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
       | '{'
       | '}'
       | '~'
       | "[\x7f-􏿿]"
       ;
anynonl : normal /* also no NUL */
	| '\t'
	| ' '
	| '"'
	| '#'
	| '$'
	| '%'
	| '&'
	| '\''
	| '('
	| ')'
	| '*'
	| ';'
	| '<'
	| '='
	| '>'
	| '?'
	| '['
	| '\\'
	| '`'
	| '|'
	| '~'
	;
sqele : normal
      | '\t'
      | '\n'
      | ' '
      | '"'
      | '#'
      | '$'
      | '%'
      | '&'
      | '('
      | ')'
      | '*'
      | ';'
      | '<'
      | '='
      | '>'
      | '?'
      | '['
      | '\\'
      | '`'
      | '|'
      | '~'
      ;
sqeleseq : %empty
	 | sqeleseq sqele
	 ;
dollarstuff : parameter | dcommand | arithmetic
	    ;
bqstring : bqcommand
	 ;
bsindq : '\\' '$'
       | '\\' '`'
       | '\\' '"'
       | '\\' '\\'
       | '\\' /* not special */
       ;
dqele : normal
      | '\t'
      | '\n'
      | ' '
      | '"'
      | '#'
      | '%'
      | '&'
      | '\''
      | '('
      | ')'
      | '*'
      | ';'
      | '<'
      | '='
      | '>'
      | '?'
      | '['
      | '|'
      | '~'
      | dollarstuff
      | bqstring
      | bsindq
      ;
dqeleseq : %empty
	 | dqeleseq dqele
	 ;
arithmetic: TODO ;
bqcommand: TODO ;
dcommand: TODO ;
parameter: TODO ;
tklist: TODO ;

/* constructing tokens */
nonewline : '\\' '\n'
	  ; /* delete completely */
escaped : '\\' anynonl
	;
single : '\'' sqeleseq '\''
       ;
double : '"' dqeleseq '"'
       ;

tklist : double | single | escaped | nonewline | special | condspecial
       ;

