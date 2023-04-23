/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Token } from "./Token";

// classlist

export interface Istruct {
  $type: string;
  __internal_object__: { $val: any };
}

// ArithmCmd represents an arithmetic command.
// This node will only appear in LangBash and LangMirBSDKorn.
export interface IArithmCmd extends INode {
  Left: I_Pos;
  Right: I_Pos;
  Unsigned: boolean; // mksh's ((# expr))

  X: IArithmExpr;
}
// ArithmExp represents an arithmetic expansion.
export interface IArithmExp extends INode {
  Left: I_Pos;
  Right: I_Pos;
  Bracket: boolean; // deprecated $[expr] form
  Unsigned: boolean; // mksh's $((# expr))

  X: IArithmExpr;
}
// ArithmExpr represents all nodes that form arithmetic expressions.
export type IArithmExpr = IBinaryArithm | IUnaryArithm | IParenArithm | IWord;
// ArrayElem represents a Bash array element.
// Index can be nil; for example, declare -a x=(value). Value can be nil; for
// example, declare -A x=([index]=). Finally, neither can be nil; for example,
// declare -A x=([index]=value)
export interface IArrayElem extends INode {
  Index: IArithmExpr;
  Value: IWord | null;
  Comments: IComment[];
}
// ArrayExpr represents a Bash array expression.
// This node will only appear with LangBash.
export interface IArrayExpr extends INode {
  Lparen: I_Pos;
  Rparen: I_Pos;

  Elems: IArrayElem[] | null;
  Last: IComment[];
}
// Assign represents an assignment to a variable.
// Here and elsewhere, Index can mean either an index expression into an
// indexed array, or a string key into an associative array.
// If Index is non-nil, the value will be a word and not an array as nested arrays are not allowed.
// If Naked is true and Name is nil, the assignment is part of a DeclClause and
// the assignment expression (in the Value field) will be evaluated at
// run-time.
export interface IAssign extends INode {
  Append: boolean; // +=
  Naked: boolean; // without '='
  Name: ILit | null;
  Index: IArithmExpr | null; // [i], ["k"]
  Value: IWord | null; // =val
  Array: IArrayExpr | null; // =(arr)
}
// BinaryArithm represents a binary arithmetic expression.
// If Op is any assign operator, X will be a word with a single *Lit whose value is a valid name.
// Ternary operators like "a ? b : c" are fit into this structure. Thus, if
// Op==TernQuest, Y will be a *BinaryArithm with Op==TernColon. Op can only be
// TernColon in that scenario.
export interface IBinaryArithm extends INode {
  OpPos: I_Pos;
  Op: BinAritOperator;
  X: IArithmExpr;
  Y: IArithmExpr;
}
// BinaryCmd represents a binary expression between two statements.
export interface IBinaryCmd extends INode {
  OpPos: I_Pos;
  Op: BinCmdOperator;
  X: IStmt;
  Y: IStmt;
}
// BinaryTest represents a binary test expression.
export interface IBinaryTest extends INode {
  OpPos: I_Pos;
  Op: BinTestOperator;
  X: ITestExpr;
  Y: ITestExpr;
}
// Block represents a series of commands that should be executed in a nested
// scope. It is essentially a list of statements within curly braces.
export interface IBlock extends INode {
  Lbrace: I_Pos;
  Rbrace: I_Pos;

  StmtList: IStmtList | null;
  Last: IComment[];
}
// BraceExp represents a Bash brace expression, such as "{x,y}" or "{1..10}".
// This node will only appear as a result of SplitBraces.
export interface IBraceExp extends INode {
  Sequence: boolean; // {x..y[..incr]} instead of {x,y[,...]}
  Chars: boolean; // sequence is of chars, not numbers (TODO: remove)
  Elems: IWord[] | null;
}
// CStyleLoop represents the behaviour of a for clause similar to the C language.
// This node will only appear with LangBash.
export interface ICStyleLoop extends INode {
  Lparen: I_Pos;
  Rparen: I_Pos;
  Init: IArithmExpr;
  Cond: IArithmExpr;
  Post: IArithmExpr;
}
// CallExpr represents a command execution or function call, otherwise known as a "simple command".
// If Args is empty, Assigns apply to the shell environment. Otherwise, they
// are variables that cannot be arrays and which only apply to the call.
export interface ICallExpr extends INode {
  Assigns: IAssign[] | null; // a=x b=y args
  Args: IWord[] | null;
}
// CaseClause represents a case (switch) clause.
export interface ICaseClause extends INode {
  Case: I_Pos;
  Esac: I_Pos;

  Word: IWord | null;
  Items: ICaseItem[] | null;
  Last: IComment[];
}
// CaseItem represents a pattern list (case) within a CaseClause.
export interface ICaseItem extends INode {
  Op: CaseOperator;
  OpPos: I_Pos; // unset if it was finished by "esac"
  Comments: IComment[];
  Patterns: IWord[] | null;

  StmtList: IStmtList | null;
  Last: IComment[];
}
// CmdSubst represents a command substitution.
export interface ICmdSubst extends INode {
  Left: I_Pos;
  Right: I_Pos;

  StmtList: IStmtList | null;
  Last: IComment[];

  TempFile: boolean; // mksh's ${ foo;}
  ReplyVar: boolean; // mksh's ${|foo;}
}
// Command represents all nodes that are simple or compound commands, including function declarations.
// eslint-disable-next-line max-len
export type ICommand =
  | ICallExpr
  | IIfClause
  | IWhileClause
  | IForClause
  | ICaseClause
  | IBlock
  | ISubshell
  | IBinaryCmd
  | IFuncDecl
  | IArithmCmd
  | ITestClause
  | IDeclClause
  | ILetClause
  | ITimeClause
  | ICoprocClause;
// Comment represents a single comment on a single line.
export interface IComment extends INode {
  Hash: I_Pos;
  Text: string;
}
// CoprocClause represents a Bash coproc clause.
// This node will only appear with LangBash.
export interface ICoprocClause extends INode {
  Coproc: I_Pos;
  Name: IWord | null;
  Stmt: IStmt | null;
}
// DblQuoted represents a list of nodes within double quotes.
export interface IDblQuoted extends INode {
  Position: I_Pos;
  Dollar: boolean; // $""
  Parts: IWordPart[];
}
// DeclClause represents a Bash declare clause.
// This node will only appear with LangBash.
export interface IDeclClause extends INode {
  // Variant is one of "declare", "local", "export", "readonly",
  // "typeset", or "nameref".
  Variant: ILit | null;
  Opts: IWord[] | null;
  Assigns: IAssign[] | null;
}
// Expansion represents string manipulation in a ParamExp other than those covered by Replace.
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface I_Expansion extends Istruct {
  Op: ParExpOperator;
  Word: IWord | null;
}
// ExtGlob represents a Bash extended globbing expression. Note that these are
// parsed independently of whether shopt has been called or not.
// This node will only appear in LangBash and LangMirBSDKorn.
export interface IExtGlob extends INode {
  OpPos: I_Pos;
  Op: GlobOperator;
  Pattern: ILit | null;
}
// File represents a shell source file.
export interface IFile extends INode {
  Name: string;

  StmtList: IStmtList | null;
  Last: IComment[];
}
// ForClause represents a for or a select clause. The latter is only present in Bash.
export interface IForClause extends INode {
  ForPos: I_Pos;
  DoPos: I_Pos;
  DonePos: I_Pos;
  Select: boolean;
  Loop: ILoop;

  Do: IStmtList | null;
  DoLast: IComment[];
}
// FuncDecl represents the declaration of a function.
export interface IFuncDecl extends INode {
  Position: I_Pos;
  RsrvWord: boolean; // non-posix "function f()" style
  Name: ILit | null;
  Body: IStmt | null;
}
// IfClause represents an if statement.
export interface IIfClause extends INode {
  Position: I_Pos; // position of the starting "if", "elif", or "else" token
  ThenPos: I_Pos; // position of "then", empty if this is an "else"
  FiPos: I_Pos; // position of "fi", shared with .Else if non-nil

  Cond: IStmtList | null;
  CondLast: IComment[];
  Then: IStmtList | null;
  ThenLast: IComment[];

  Else: IIfClause | null; // if non-nil, an "elif" or an "else"

  Last: IComment[]; // comments on the first "elif", "else", or "fi"
}
// LetClause represents a Bash let clause.
// This node will only appear in LangBash and LangMirBSDKorn.
export interface ILetClause extends INode {
  Let: I_Pos;
  Exprs: IArithmExpr[];
}
// Lit represents a string literal.
// Note that a parsed string literal may not appear as-is in the original
// source code, as it is possible to split literals by escaping newlines. The
// splitting is lost, but the end position is not.
export interface ILit extends INode {
  ValuePos: I_Pos;
  ValueEnd: I_Pos;
  Value: string;
}
// Loop holds either *WordIter or *CStyleLoop.
export type ILoop = IWordIter | ICStyleLoop;
// Node represents a syntax tree node.
export interface INode extends Istruct {
  // Pos returns the position of the first character of the node. Comments
  // are ignored, except if the node is a *File.
  Pos: (() => I_Pos) | null;
  // End returns the position of the character immediately after the node.
  // If the character is a newline, the line number won't cross into the
  // next line. Comments are ignored, except if the node is a *File.
  End: (() => I_Pos) | null;
}
// ParamExp represents a parameter expansion.
export interface IParamExp extends INode {
  Dollar: I_Pos;
  Rbrace: I_Pos;

  Short: boolean; // $a instead of ${a}
  Excl: boolean; // ${!a}
  Length: boolean; // ${#a}
  Width: boolean; // ${%a}
  Param: ILit | null;
  Index: IArithmExpr | null; // ${a[i]}, ${a["k"]}
  Slice: I_Slice | null; // ${a:x:y}
  Repl: I_Replace | null; // ${a/x/y}
  Names: ParNamesOperator | null; // ${!prefix*} or ${!prefix@}
  Exp: I_Expansion | null; // ${a:-b}, ${a#b}, etc
}
// ParenArithm represents an arithmetic expression within parentheses.
export interface IParenArithm extends INode {
  Lparen: I_Pos;
  Rparen: I_Pos;

  X: IArithmExpr;
}
// ParenTest represents a test expression within parentheses.
export interface IParenTest extends INode {
  Lparen: I_Pos;
  Rparen: I_Pos;

  X: ITestExpr;
}
// Pos is a position within a shell source file.
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface I_Pos extends Istruct {
  // eslint-disable-next-line max-len
  After: ((p2: I_Pos) => boolean) | null; // After reports whether the position p is after p2. It is a more expressive version of p.Offset() > p2.Offset().
  Col: (() => number) | null; // Col returns the column number of the position, starting at 1. It counts in bytes.
  // eslint-disable-next-line max-len
  IsValid: (() => boolean) | null; // IsValid reports whether the position is valid. All positions in nodes returned by Parse are valid.
  Line: (() => number) | null; // Line returns the line number of the position, starting at 1.
  // eslint-disable-next-line max-len
  Offset: (() => number) | null; // Offset returns the byte offset of the position in the original source file. Byte offsets start at 0.
  ["String"]: (() => string) | null;
}
// ProcSubst represents a Bash process substitution.
// This node will only appear with LangBash.
export interface IProcSubst extends INode {
  OpPos: I_Pos;
  Rparen: I_Pos;
  Op: ProcOperator;

  Stmts: IStmt[] | null;
  Last: IComment[];
}
// Redirect represents an input/output redirection.
export interface IRedirect extends INode {
  OpPos: I_Pos;
  Op: RedirOperator;
  N: ILit | null; // fd>, or {varname}> in Bash
  Word: IWord | null; // >word
  Hdoc: IWord | null; // here-document body
}
// Replace represents a search and replace expression inside a ParamExp.
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface I_Replace extends Istruct {
  All: boolean;
  Orig: IWord | null;
  With: IWord | null;
}
// SglQuoted represents a string within single quotes.
export interface ISglQuoted extends INode {
  Left: I_Pos;
  Right: I_Pos;
  Dollar: boolean; // $''
  Value: string;
}
// Slice represents a character slicing expression inside a ParamExp.
// This node will only appear in LangBash and LangMirBSDKorn.
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface I_Slice extends Istruct {
  Offset: IArithmExpr;
  Length: IArithmExpr;
}
// Stmt represents a statement, also known as a "complete command". It is
// compromised of a command and other components that may come before or after
// it.
export interface IStmt extends INode {
  Comments: IComment[];
  Cmd: ICommand;
  Position: I_Pos;
  Semicolon: I_Pos; // position of ';', '&', or '|&', if any
  Negated: boolean; // ! stmt
  Background: boolean; // stmt &
  Coprocess: boolean; // mksh's |&

  Redirs: IRedirect[] | null; // stmt >a <b
}
export interface IStmtList extends INode {
  Stmts: IStmt[];
  Last: IComment[];
}
// Subshell represents a series of commands that should be executed in a nested shell environment.
export interface ISubshell extends INode {
  Lparen: I_Pos;
  Rparen: I_Pos;
  StmtList: IStmtList | null;
  Last: IComment[];
}
// TestClause represents a Bash extended test clause.
// This node will only appear in LangBash and LangMirBSDKorn.
export interface ITestClause extends INode {
  Left: I_Pos;
  Right: I_Pos;

  X: ITestExpr;
}
// TestExpr represents all nodes that form test expressions.
export type ITestExpr = IBinaryTest | IUnaryTest | IParenTest | IWord;
// TimeClause represents a Bash time clause. PosixFormat corresponds to the -p flag.
// This node will only appear in LangBash and LangMirBSDKorn.
export interface ITimeClause extends INode {
  Time: I_Pos;
  PosixFormat: boolean;
  Stmt: IStmt | null;
}
// UnaryArithm represents an unary arithmetic expression. The unary opearator
// may come before or after the sub-expression.
// If Op is Inc or Dec, X will be a word with a single *Lit whose value is a valid name.
export interface IUnaryArithm extends INode {
  OpPos: I_Pos;
  Op: UnAritOperator;
  Post: boolean;
  X: IArithmExpr;
}
// UnaryTest represents a unary test expression. The unary opearator may come before or after the sub-expression.
export interface IUnaryTest extends INode {
  OpPos: I_Pos;
  Op: UnTestOperator;
  X: ITestExpr;
}
// WhileClause represents a while or an until clause.
export interface IWhileClause extends INode {
  WhilePos: I_Pos;
  DoPos: I_Pos;
  DonePos: I_Pos;
  Until: boolean;

  Cond: IStmtList | null;
  CondLast: IComment[];
  Do: IStmtList | null;
  DoLast: IComment[];
}
// Word represents a shell word, containing one or more word parts contiguous
// to each other. The word is delimeted by word boundaries, such as spaces,
// newlines, semicolons, or parentheses.
export interface IWord extends INode {
  Parts: IWordPart[];

  SplitBraces: (() => IWord) | null;
  Lit: (() => string) | null;
}
// WordIter represents the iteration of a variable over a series of words in a
// for clause. If InPos is an invalid position, the "in" token was missing, so
// the iteration is over the shell's positional parameters.
export interface IWordIter extends INode {
  Name: ILit | null;
  InPos: I_Pos; // position of "in"
  Items: IWord[] | null;
}
// WordPart represents all nodes that can form part of a word.
// eslint-disable-next-line max-len
export type IWordPart =
  | ILit
  | ISglQuoted
  | IDblQuoted
  | IParamExp
  | ICmdSubst
  | IArithmExp
  | IProcSubst
  | IExtGlob
  | IBraceExp;

export enum RedirOperator {
  RdrOut = Token.rdrOut, // >
  AppOut, // >>
  RdrIn, // <
  RdrInOut, // <>
  DplIn, // <&
  DplOut, // >&
  ClbOut, // >|
  Hdoc, // <<
  DashHdoc, // <<-
  WordHdoc, // <<<
  RdrAll, // &>
  AppAll, // &>>
}

export enum ProcOperator {
  CmdIn = Token.cmdIn, // <(
  CmdOut, // >(
}

export enum GlobOperator {
  GlobZeroOrOne = Token.globQuest, // ?(
  GlobZeroOrMore, // *(
  GlobOneOrMore, // +(
  GlobOne, // @(
  GlobExcept, // !(
}

export enum BinCmdOperator {
  AndStmt = Token.andAnd, // &&
  OrStmt, // ||
  Pipe, // |
  PipeAll, // |&
}

export enum CaseOperator {
  Break = Token.dblSemicolon, // ;;
  Fallthrough, // ;&
  Resume, // ;;&
  ResumeKorn, // ;|
}

export enum ParNamesOperator {
  NamesPrefix = Token.star, // *
  NamesPrefixWords = Token.at, // @
}

export enum ParExpOperator {
  AlternateUnset = Token.plus, // +
  AlternateUnsetOrNull, // :+
  DefaultUnset, // -
  DefaultUnsetOrNull, // :-
  ErrorUnset, // ?
  ErrorUnsetOrNull, // :?
  AssignUnset, // =
  AssignUnsetOrNull, // :=
  RemSmallSuffix, // %
  RemLargeSuffix, // %%
  RemSmallPrefix, // #
  RemLargePrefix, // ##
  UpperFirst, // ^
  UpperAll, // ^^
  LowerFirst, // ,
  LowerAll, // ,,
  OtherParamOps, // @
}

export enum UnAritOperator {
  Not = Token.exclMark, // !
  BitNegation, // ~
  Inc, // ++
  Dec, // --
  Plus = Token.plus, // +
  Minus = Token.minus, // -
}

export enum BinAritOperator {
  Add = Token.plus, // +
  Sub = Token.minus, // -
  Mul = Token.star, // *
  Quo = Token.slash, // /
  Rem = Token.perc, // %
  Pow = Token.power, // **
  Eql = Token.equal, // ==
  Gtr = Token.rdrOut, // >
  Lss = Token.rdrIn, // <
  Neq = Token.nequal, // !=
  Leq = Token.lequal, // <=
  Geq = Token.gequal, // >=
  And = Token.and, // &
  Or = Token.or, // |
  Xor = Token.caret, // ^
  Shr = Token.appOut, // >>
  Shl = Token.hdoc, // <<

  AndArit = Token.andAnd, // &&
  OrArit = Token.orOr, // ||
  Comma = Token.comma, // ,
  TernQuest = Token.quest, // ?
  TernColon = Token.colon, // :

  Assgn = Token.assgn, // =
  AddAssgn = Token.addAssgn, // +=
  SubAssgn = Token.subAssgn, // -=
  MulAssgn = Token.mulAssgn, // *=
  QuoAssgn = Token.quoAssgn, // /=
  RemAssgn = Token.remAssgn, // %=
  AndAssgn = Token.andAssgn, // &=
  OrAssgn = Token.orAssgn, // |=
  XorAssgn = Token.xorAssgn, // ^=
  ShlAssgn = Token.shlAssgn, // <<=
  ShrAssgn = Token.shrAssgn, // >>=
}

export enum UnTestOperator {
  TsExists = Token.tsExists, // -e
  TsRegFile, // -f
  TsDirect, // -d
  TsCharSp, // -c
  TsBlckSp, // -b
  TsNmPipe, // -p
  TsSocket, // -S
  TsSmbLink, // -L
  TsSticky, // -k
  TsGIDSet, // -g
  TsUIDSet, // -u
  TsGrpOwn, // -G
  TsUsrOwn, // -O
  TsModif, // -N
  TsRead, // -r
  TsWrite, // -w
  TsExec, // -x
  TsNoEmpty, // -s
  TsFdTerm, // -t
  TsEmpStr, // -z
  TsNempStr, // -n
  TsOptSet, // -o
  TsVarSet, // -v
  TsRefVar, // -R
  TsNot = Token.exclMark, // !
}

export enum BinTestOperator {
  TsReMatch = Token.tsReMatch, // =~
  TsNewer, // -nt
  TsOlder, // -ot
  TsDevIno, // -ef
  TsEql, // -eq
  TsNeq, // -ne
  TsLeq, // -le
  TsGeq, // -ge
  TsLss, // -lt
  TsGtr, // -gt
  AndTest = Token.andAnd, // &&
  OrTest = Token.orOr, // ||
  TsMatchShort = Token.assgn, // =
  TsMatch = Token.equal, // ==
  TsNoMatch = Token.nequal, // !=
  TsBefore = Token.rdrIn, // <
  TsAfter = Token.rdrOut, // >
}
