/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { spawnSync } from "child_process";
import { readFileSync } from "fs";
import { resolve } from "path";
import { inspect } from "util";

function logg(thing: object) {
  // tslint:disable-next-line:no-console
  console.log(
    inspect(thing, {
      depth: 2,
      compact: false,
      sorted: true,
      // getters: true,
    }),
  );
}

function comm(thing: object, dflt: string = "#"): string {
  if (JSON.stringify(thing) === dflt) {
    return "";
  } else {
    // logg({ thing: JSON.stringify(thing), dflt });
  }
  return (
    "/*" +
    inspect(thing, {
      depth: 2,
      breakLength: 999999,
    }) +
    "*/\n"
  );
}

function joiner(list: string[], dlm: string): string {
  return list.filter((s) => !!s).join(dlm);
}

interface IPos {
  Col: never;
  Line: never;
  Offset: number;
}
interface ICommentLine {
  End: IPos;
  Pos: IPos;
  // ---------
  Text: string;
}
interface IBlock {
  End: IPos;
  Pos: IPos;
  // ---------
  Last: never[];
  Stmts: IStatement[];
}
interface IWhileClause extends ICmd {
  End: IPos;
  Pos: IPos;
  Type: string;
  // ---------
  Cond: IBlock;
  Do: IBlock;
  Until: boolean;
}
interface ICmd {
  End: IPos;
  Pos: IPos;
  // ---------
  Type: string;
}
interface IFuncDecl extends ICmd {
  End: IPos;
  Pos: IPos;
  Type: string;
  // ---------
  Body: IBlock;
  Name: IName;
  RsrvWord: boolean;
}
interface IIfClause extends ICmd {
  End: IPos;
  Pos: IPos;
  Type: string;
  // ---------
  Cond: IBlock;
  Elif: boolean;
  Else: IBlock;
  ElseComments: ICommentLine[];
  FiComments: ICommentLine[];
  Then: IBlock;
}
interface IArg {
  End: IPos;
  Pos: IPos;
  // ---------
  Parts: IPart[];
}
interface ICallExpr extends ICmd {
  End: IPos;
  Pos: IPos;
  Type: string;
  // ---------
  Args: IArg[];
  Assigns: IAssign[];
}
interface IPattern {
  End: IPos;
  Pos: IPos;
  // ---------
  Parts: IPart[];
}
interface IItem {
  End: IPos;
  Pos: IPos;
  // ---------
  Comments: ICommentLine[];
  Last: never[];
  Op: Token;
  Patterns: IPattern[];
  Stmts: IStatement[];
}
interface ICaseClause extends ICmd {
  End: IPos;
  Pos: IPos;
  Type: string;
  // ---------
  Items: IItem[];
  Last: never;
  Word: IWord;
}

// from https://github.com/mvdan/sh/blob/master/syntax/tokens.go
// The list of all possible tokens.
enum Token {
  illegalTok,

  _EOF,
  _Newl,
  _Lit,
  _LitWord,
  _LitRedir,

  sglQuote, // '
  dblQuote, // "
  bckQuote, // `

  and, // &
  andAnd, // &&
  orOr, // ||
  or, // |
  orAnd, // |&

  dollar, // $
  dollSglQuote, // $'
  dollDblQuote, // $"
  dollBrace, // ${
  dollBrack, // $[
  dollParen, // $(
  dollDblParen, // $((
  leftBrack, // [
  dblLeftBrack, // [[
  leftParen, // (
  dblLeftParen, // ((

  rightBrace, // }
  rightBrack, // ]
  rightParen, // )
  dblRightParen, // ))
  semicolon, // ;

  dblSemicolon, // ;;
  semiAnd, // ;&
  dblSemiAnd, // ;;&
  semiOr, // ;|

  exclMark, // !
  addAdd, // ++
  subSub, // --
  star, // *
  power, // **
  equal, // ==
  nequal, // !=
  lequal, // <=
  gequal, // >=

  addAssgn, // +=
  subAssgn, // -=
  mulAssgn, // *=
  quoAssgn, // /=
  remAssgn, // %=
  andAssgn, // &=
  orAssgn, // |=
  xorAssgn, // ^=
  shlAssgn, // <<=
  shrAssgn, // >>=

  rdrOut, // >
  appOut, // >>
  rdrIn, // <
  rdrInOut, // <>
  dplIn, // <&
  dplOut, // >&
  clbOut, // >|
  hdoc, // <<
  dashHdoc, // <<-
  wordHdoc, // <<<
  rdrAll, // &>
  appAll, // &>>

  cmdIn, // <(
  cmdOut, // >(

  plus, // +
  colPlus, // :+
  minus, // -
  colMinus, // :-
  quest, // ?
  colQuest, // :?
  assgn, // =
  colAssgn, // :=
  perc, // %
  dblPerc, // %%
  hash, // #
  dblHash, // ##
  caret, // ^
  dblCaret, // ^^
  comma, // ,
  dblComma, // ,,
  at, // @
  slash, // /
  dblSlash, // //
  colon, // :

  tsExists, // -e
  tsRegFile, // -f
  tsDirect, // -d
  tsCharSp, // -c
  tsBlckSp, // -b
  tsNmPipe, // -p
  tsSocket, // -S
  tsSmbLink, // -L
  tsSticky, // -k
  tsGIDSet, // -g
  tsUIDSet, // -u
  tsGrpOwn, // -G
  tsUsrOwn, // -O
  tsModif, // -N
  tsRead, // -r
  tsWrite, // -w
  tsExec, // -x
  tsNoEmpty, // -s
  tsFdTerm, // -t
  tsEmpStr, // -z
  tsNempStr, // -n
  tsOptSet, // -o
  tsVarSet, // -v
  tsRefVar, // -R

  tsReMatch, // =~
  tsNewer, // -nt
  tsOlder, // -ot
  tsDevIno, // -ef
  tsEql, // -eq
  tsNeq, // -ne
  tsLeq, // -le
  tsGeq, // -ge
  tsLss, // -lt
  tsGtr, // -gt

  globQuest, // ?(
  globStar, // *(
  globPlus, // +(
  globAt, // @(
  globExcl, // !(
}

const opcode: string[] = [];

opcode[Token.illegalTok] = " :illegalTok: ";

opcode[Token._EOF] = " :_EOF: ";
opcode[Token._Newl] = " :_Newl: ";
opcode[Token._Lit] = " :_Lit: ";
opcode[Token._LitWord] = " :_LitWord: ";
opcode[Token._LitRedir] = " :_LitRedir: ";

opcode[Token.sglQuote] = " ' ";
opcode[Token.dblQuote] = ' " ';
opcode[Token.bckQuote] = " ` ";

opcode[Token.and] = " & ";
opcode[Token.andAnd] = " && ";
opcode[Token.orOr] = " || ";
opcode[Token.or] = " | ";
opcode[Token.orAnd] = " |& ";

opcode[Token.dollar] = " $ ";
opcode[Token.dollSglQuote] = " $' ";
opcode[Token.dollDblQuote] = ' $" ';
opcode[Token.dollBrace] = " ${ ";
opcode[Token.dollBrack] = " $[ ";
opcode[Token.dollParen] = " $( ";
opcode[Token.dollDblParen] = " $(( ";
opcode[Token.leftBrack] = " [ ";
opcode[Token.dblLeftBrack] = " [[ ";
opcode[Token.leftParen] = " ( ";
opcode[Token.dblLeftParen] = " (( ";

opcode[Token.rightBrace] = " } ";
opcode[Token.rightBrack] = " ] ";
opcode[Token.rightParen] = " ) ";
opcode[Token.dblRightParen] = " )) ";
opcode[Token.semicolon] = " ; ";

opcode[Token.dblSemicolon] = " ;; ";
opcode[Token.semiAnd] = " ;& ";
opcode[Token.dblSemiAnd] = " ;;& ";
opcode[Token.semiOr] = " ;| ";

opcode[Token.exclMark] = " ! ";
opcode[Token.addAdd] = " ++ ";
opcode[Token.subSub] = " -- ";
opcode[Token.star] = " * ";
opcode[Token.power] = " ** ";
opcode[Token.equal] = " == ";
opcode[Token.nequal] = " != ";
opcode[Token.lequal] = " <= ";
opcode[Token.gequal] = " >= ";

opcode[Token.addAssgn] = " += ";
opcode[Token.subAssgn] = " -= ";
opcode[Token.mulAssgn] = " *= ";
opcode[Token.quoAssgn] = " /= ";
opcode[Token.remAssgn] = " %= ";
opcode[Token.andAssgn] = " &= ";
opcode[Token.orAssgn] = " |= ";
opcode[Token.xorAssgn] = " ^= ";
opcode[Token.shlAssgn] = " <<= ";
opcode[Token.shrAssgn] = " >>= ";

opcode[Token.rdrOut] = " > ";
opcode[Token.appOut] = " >> ";
opcode[Token.rdrIn] = " < ";
opcode[Token.rdrInOut] = " <> ";
opcode[Token.dplIn] = " <& ";
opcode[Token.dplOut] = " >& ";
opcode[Token.clbOut] = " >| ";
opcode[Token.hdoc] = " << ";
opcode[Token.dashHdoc] = " <<- ";
opcode[Token.wordHdoc] = " <<< ";
opcode[Token.rdrAll] = " &> ";
opcode[Token.appAll] = " &>> ";

opcode[Token.cmdIn] = " <( ";
opcode[Token.cmdOut] = " >( ";

opcode[Token.plus] = " + ";
opcode[Token.colPlus] = " :+ ";
opcode[Token.minus] = " - ";
opcode[Token.colMinus] = " :- ";
opcode[Token.quest] = " ? ";
opcode[Token.colQuest] = " :? ";
opcode[Token.assgn] = " = ";
opcode[Token.colAssgn] = " := ";
opcode[Token.perc] = " % ";
opcode[Token.dblPerc] = " %% ";
opcode[Token.hash] = " # ";
opcode[Token.dblHash] = " ## ";
opcode[Token.caret] = " ^ ";
opcode[Token.dblCaret] = " ^^ ";
opcode[Token.comma] = " , ";
opcode[Token.dblComma] = " ,, ";
opcode[Token.at] = " @ ";
opcode[Token.slash] = " / ";
opcode[Token.dblSlash] = " // ";
opcode[Token.colon] = " : ";

opcode[Token.tsExists] = " -e ";
opcode[Token.tsRegFile] = " -f ";
opcode[Token.tsDirect] = " -d ";
opcode[Token.tsCharSp] = " -c ";
opcode[Token.tsBlckSp] = " -b ";
opcode[Token.tsNmPipe] = " -p ";
opcode[Token.tsSocket] = " -S ";
opcode[Token.tsSmbLink] = " -L ";
opcode[Token.tsSticky] = " -k ";
opcode[Token.tsGIDSet] = " -g ";
opcode[Token.tsUIDSet] = " -u ";
opcode[Token.tsGrpOwn] = " -G ";
opcode[Token.tsUsrOwn] = " -O ";
opcode[Token.tsModif] = " -N ";
opcode[Token.tsRead] = " -r ";
opcode[Token.tsWrite] = " -w ";
opcode[Token.tsExec] = " -x ";
opcode[Token.tsNoEmpty] = " -s ";
opcode[Token.tsFdTerm] = " -t ";
opcode[Token.tsEmpStr] = " -z ";
opcode[Token.tsNempStr] = " -n ";
opcode[Token.tsOptSet] = " -o ";
opcode[Token.tsVarSet] = " -v ";
opcode[Token.tsRefVar] = " -R ";

opcode[Token.tsReMatch] = " =~ ";
opcode[Token.tsNewer] = " -nt ";
opcode[Token.tsOlder] = " -ot ";
opcode[Token.tsDevIno] = " -ef ";
opcode[Token.tsEql] = " -eq ";
opcode[Token.tsNeq] = " -ne ";
opcode[Token.tsLeq] = " -le ";
opcode[Token.tsGeq] = " -ge ";
opcode[Token.tsLss] = " -lt ";
opcode[Token.tsGtr] = " -gt ";

opcode[Token.globQuest] = " ?( ";
opcode[Token.globStar] = " *( ";
opcode[Token.globPlus] = " +( ";
opcode[Token.globAt] = " @( ";
opcode[Token.globExcl] = " !( ";

interface IBinaryCmd extends ICmd {
  End: IPos;
  Pos: IPos;
  Type: string;
  // ---------
  Op: Token;
  X: IStatement;
  Y: IStatement;
}
interface IRedir {
  End: IPos;
  Pos: IPos;
  // ---------
  Hdoc: never;
  N: never;
  Op: Token;
  Word: IWord;
}
interface IStatement {
  End: IPos;
  Pos: IPos;
  // ---------
  Background: boolean;
  Cmd: ICmd;
  Comments: ICommentLine[];
  Coprocess: boolean;
  Negated: boolean;
  Redirs: IRedir[];
}
interface IShellFile {
  End: IPos;
  Pos: IPos;
  // ---------
  Last: ICommentLine[];
  Name: never;
  Stmts: IStatement[];
}
interface IName {
  End: IPos;
  Pos: IPos;
  // ---------
  Value: string;
}
interface IPart {
  End: IPos;
  Pos: IPos;
  // ---------
  Type: string;
}
interface ILit extends IPart {
  End: IPos;
  Pos: IPos;
  Type: string;
  // ---------
  Value: string;
}
interface ICmdSubst extends IPart {
  End: IPos;
  Pos: IPos;
  Type: string;
  // ---------
  Last: never;
  ReplyVar: never;
  Stmts: IStatement[];
  TempFile: never;
}
interface ISglQuoted extends IPart {
  End: IPos;
  Pos: IPos;
  Type: string;
  // ---------
  Dollar: never;
  Value: never;
}
interface IDblQuoted extends IPart {
  End: IPos;
  Pos: IPos;
  Type: string;
  // ---------
  Dollar: boolean;
  Parts: IPart[];
}
interface IParam {
  End: IPos;
  Pos: IPos;
  // ---------
  Value: string;
}
interface IParamExp extends IPart {
  End: IPos;
  Pos: IPos;
  Type: string;
  // ---------
  Excl: boolean;
  Exp: never;
  Index: never;
  Length: boolean;
  Names: number;
  Param: IParam;
  Repl: never;
  Short: boolean;
  Slice: never;
  Width: boolean;
}
interface IValue {
  End: IPos;
  Pos: IPos;
  // ---------
  Parts: IPart[];
}
interface IWord {
  End: IPos;
  Pos: IPos;
  // ---------
  Parts: IPart[];
}
interface IAssign {
  End: IPos;
  Pos: IPos;
  // ---------
  Append: never;
  Array: never;
  Index: never;
  Naked: never;
  Name: IName;
  Value: IValue;
}

function comments(lines: ICommentLine[]): string {
  let res = joiner(
    lines.map((l) => {
      if (l.Pos.Offset === 0 && l.Text[0] === "!") {
        return "";
      }
      return "// " + l.Text;
    }),
    "\n",
  );
  if (res) {
    res += "\n";
  }
  return res;
}

function prtSglQuoted(prt: ISglQuoted): string[] {
  const { Pos, End, Type, Value, ...rest_psq } = prt;
  return [JSON.stringify(Value), comm({ rest_psq }, '{"rest_psq":{"Dollar":false}}')];
}

function prtCmdSubst(prt: ICmdSubst): string[] {
  const { Pos, End, Type, Stmts, ...rest_pcs } = prt;
  // tslint:disable-next-line:max-line-length
  return ["$( " + joiner([statements(Stmts), comm({ rest_pcs }, '{"rest_pcs":{"Last":[],"ReplyVar":false,"TempFile":false}}')], " + ") + " )"];
}

function prtLit(prt: ILit): string[] {
  const { Pos, End, Type, Value, ...rest_pl } = prt;
  return [JSON.stringify(Value), comm({ rest_pl }, '{"rest_pl":{}}')];
}

function prtDblQuoted(prt: IDblQuoted): string[] {
  const { Pos, End, Type, Parts, ...rest_pdq } = prt;
  return [...parts(Parts), comm({ rest_pdq }, '{"rest_pdq":{"Dollar":false}}')];
}

function param(prm: IParam): string[] {
  const { Pos, End, Value, ...rest_prm } = prm;
  // tslint:disable-next-line:max-line-length
  return [/^[a-zA-Z_]\w*$/.test(Value) ? Value : Value === "0" ? "process.argv0" : /^\d+$/.test(Value) ? "process.argv[" + Value + "]" : Value === "#" ? "process.argv.length" : comm({ Value }), comm({ rest_prm }, '{"rest_prm":{}}')];
}

function prtParamExp(prt: IParamExp): string[] {
  const { Pos, End, Type, Param, ...rest_ppe } = prt;
  // tslint:disable-next-line:max-line-length
  return [...param(Param), comm({ rest_ppe }, '{"rest_ppe":{"Excl":false,"Exp":null,"Index":null,"Length":false,"Names":0,"Repl":null,"Short":true,"Slice":null,"Width":false}}')];
}

function parts(prts: IPart[]): string[] {
  if (!prts) {
    return [comm({ prts })];
  }
  const res: string[] = [];
  prts.forEach((part) => {
    if (!part) {
      res.push(comm({ empty_part: part }));
    }
    switch (part.Type) {
      case "SglQuoted":
        res.push(...prtSglQuoted(part as ISglQuoted));
        break;
      case "CmdSubst":
        res.push(...prtCmdSubst(part as ICmdSubst));
        break;
      case "Lit":
        res.push(...prtLit(part as ILit));
        break;
      case "DblQuoted":
        res.push(...prtDblQuoted(part as IDblQuoted));
        break;
      case "ParamExp":
        res.push(...prtParamExp(part as IParamExp));
        break;
      default:
        res.push(comm({ unknown_part: part }));
        break;
    }
  });
  return [joiner(res, " + ")];
}

function value(val: IValue): string[] {
  if (!val) {
    return ['""', comm({ empty_val: val }, '{"empty_val":null}')];
  }
  const { Pos, End, Parts, ...rest_val } = val;
  return [...parts(Parts), comm({ rest_val }, '{"rest_val":{}}')];
}

function assigns(ass: IAssign[]): string {
  const res: string[] = [];
  ass.forEach((a) => {
    const { Pos, End, Name, Value, ...rest_ass } = a;
    // tslint:disable-next-line:max-line-length
    res.push("let " + a.Name.Value + " = " + joiner(value(Value), " + ") + comm({ rest_ass }, '{"rest_ass":{"Append":false,"Array":null,"Index":null,"Naked":false}}'));
  });
  return joiner(res, " ;//1\n");
}

function arglist(args: IArg[]): string[] {
  const res: string[] = [];
  args.forEach((a) => {
    const { Pos, End, Parts, ...rest_args } = a;
    res.push(...parts(Parts));
    res.push(comm({ rest_args }, '{"rest_args":{}}'));
  });
  return res;
}

function cmdCallExpr(cmd: ICallExpr): string[] {
  const { Pos, End, Type, Assigns, Args, ...rest_cce } = cmd;
  return [assigns(Assigns), ...arglist(Args), comm({ rest_cce }, '{"rest_cce":{}}')];
}

function cmdBinaryCmd(cmd: IBinaryCmd): string[] {
  const { Pos, End, Type, Op, X, Y, ...rest_cbc } = cmd;
  return [statements([X]), opcode[Op] || "Op=" + Op, statements([Y]), comm({ rest_cbc }, '{"rest_cbc":{}}')];
}

function block(blk: IBlock): string {
  const { Pos, End, Stmts, ...rest_blk } = blk;
  return joiner([statements(Stmts), comm({ rest_blk }, '{"rest_blk":{"Last":[]}}')], " ;//3\n");
}

function cmdWhileClause(cmd: IWhileClause): string[] {
  const { Pos, End, Type, Cond, Do, ...rest_cwc } = cmd;
  // tslint:disable-next-line:max-line-length
  return ["while (" + block(Cond) + ") {\n" + block(Do) + "\n}", comm({ rest_cwc }, '{"rest_cwc":{"Until":false}}')];
}

function word(wrd: IWord) {
  if (!wrd) {
    return ['""', comm({ empty_wrd: wrd }, '{"empty_wrd":null}')];
  }
  const { Pos, End, Parts, ...rest_wrd } = wrd;
  return [...parts(Parts), comm({ rest_wrd }, '{"rest_wrd":{}}')];
}

function patterns(pts: IPattern[]): string[] {
  const res: string[] = [];
  pts.forEach((pat) => {
    const { Pos, End, Parts, ...rest_pts } = pat;
    res.push(...parts(Parts).map((p) => "case " + p + " :\n"), comm({ rest_pts }, '{"rest_pts":{}}'));
  });
  return res;
}

function item(itm: IItem[]): string[] {
  const res: string[] = [];
  itm.forEach((i) => {
    const { Pos, End, Comments, Patterns, Stmts, Op, ...rest_itm } = i;
    // tslint:disable-next-line:max-line-length
    res.push(comments(Comments), ...patterns(Patterns), statements(Stmts), opcode[Op] || "Op=" + Op, comm({ rest_itm }, '{"rest_itm":{"Last":[]}}'));
  });
  return res;
}

function cmdCaseClause(cmd: ICaseClause): string[] {
  const { Pos, End, Type, Items, Word, ...rest_ccc } = cmd;
  // tslint:disable-next-line:max-line-length
  return ["switch ( " + joiner(word(Word), " + ") + " ) {\n", ...item(Items), "\n}", comm({ rest_ccc }, '{"rest_ccc":{"Last":[]}}')];
}

function cmdIfClause(cmd: IIfClause): string[] {
  const { Pos, End, Type, Cond, Then, Else, ...rest_cic } = cmd;
  // tslint:disable-next-line:max-line-length
  return ["if ( " + block(Cond) + " ) {\n" + block(Then) + "\n}else{\n" + block(Else) + "\n)", comm({ rest_cic }, '{"rest_cic":{"Elif":false,"ElseComments":[],"FiComments":[]}}')];
}

function cmdFuncDecl(cmd: IFuncDecl) {
  const { Pos, End, Type, Name, Body, ...rest_cfd } = cmd;
  // tslint:disable-next-line:max-line-length
  return ["function " + Name.Value + " () {\n" + block(Body) + "\n}", comm({ rest_cfd }, '{"rest_cfd":{"RsrvWord":false}}')];
}

function command(cmd: ICmd): string[] {
  switch (cmd.Type) {
    case "CallExpr":
      return cmdCallExpr(cmd as ICallExpr);
    case "BinaryCmd":
      return cmdBinaryCmd(cmd as IBinaryCmd);
    case "WhileClause":
      return cmdWhileClause(cmd as IWhileClause);
    case "CaseClause":
      return cmdCaseClause(cmd as ICaseClause);
    case "IfClause":
      return cmdIfClause(cmd as IIfClause);
    case "FuncDecl":
      return cmdFuncDecl(cmd as IFuncDecl);
    default:
      return [comm({ unknown_command: cmd })];
  }
}

function redirs(red: IRedir[]): string {
  const res: string[] = [];
  red.forEach((r) => {
    const { Pos, End, Op, Word, ...rest_red } = r;
    res.push(opcode[Op] || "Op=" + Op, ...word(Word));
    res.push(comm({ rest_red }, '{"rest_red":{"Hdoc":null,"N":null}}'));
  });
  return joiner(res, " ");
}

function statements(stmts: IStatement[]): string {
  if (!stmts) {
    return comm({ empty_stmts: stmts });
  }
  const res: string[] = [];
  stmts.forEach((stmt) => {
    const { Pos, End, Comments, Cmd, Redirs, ...rest_stmt } = stmt;
    res.push(comments(Comments) + joiner(command(Cmd), " ") + redirs(Redirs));
    // tslint:disable-next-line:max-line-length
    res.push(comm({ rest_stmt }, '{"rest_stmt":{"Background":false,"Coprocess":false,"Negated":false}}'));
  });
  return joiner(res, " ;//2\n");
}

// ---------------------------------------------------------------------------------------------------------------------

["config.guess", "config.sub"].forEach((f) => {
  logg({ f });
  const t = readFileSync(resolve("gnu-config", f), { encoding: "ascii" });
  // FIXME: replace with mvdan-sh!
  const res = spawnSync("shfmt", ["-p", "-tojson"], {
    encoding: "utf8",
    input: t,
    maxBuffer: 10 * 1024 * 1024,
  });
  if (res.error) {
    logg({ res });
    throw res.error;
  }
  const j: IShellFile = JSON.parse(res.stdout);
  // logg({ j });
  const js = statements(j.Stmts) + "\n" + comments(j.Last);
  // tslint:disable-next-line:no-console
  console.log(js);
});
