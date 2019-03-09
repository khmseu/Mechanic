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

function __stack() {
  const origPrep = Error.prepareStackTrace;
  const origLim = Error.stackTraceLimit;
  Error.prepareStackTrace = (_, stk) => {
    return stk;
  };
  Error.stackTraceLimit = Infinity;
  const err = new Error();
  Error.captureStackTrace(err /*arguments.callee*/);
  const { stack } = err;
  Error.prepareStackTrace = origPrep;
  Error.stackTraceLimit = origLim;
  return stack as any;
}

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

function comm(thing: object, dflt: string | null = null): string {
  const stk = __stack();
  //  logg(stk[2].getFunctionName());
  let js = JSON.stringify(thing);
  if (js === dflt || (!dflt && js === "{}")) {
    return "";
  } else {
    // logg({ thing: js, dflt });
  }
  if (js.length > 200) {
    js = inspect(thing, {
      depth: 2,
      breakLength: 999999,
    });
  }
  return "/*" + stk[2].getFunctionName() + " -> " + js + "*/\n";
}

const known: { [key: string]: { [key: string]: number } } = {};

function typelist(thing: object, dscr: [string, string, string]) {
  const hull: { [key: string]: any } = {};
  for (const key in thing) {
    if (thing.hasOwnProperty(key)) {
      hull[key] = typeof (thing as any)[key];
    }
  }
  const kt = thing && thing.hasOwnProperty("Type") ? ((thing as any).Type as string) : "";
  const stack = __stack();
  const stk: string[] = [];
  for (let n = 2; n < stack.length; n++) {
    const fn = stack[n].getFunctionName();
    stk.unshift(fn);
    if (n > 2 && /^(bt|perFile)/.test(fn)) {
      break;
    }
  }
  const dor = {
    aatypeclaimed: kt,
    afield: dscr[2],
    // tslint:disable-next-line:max-line-length
    afrom: stk.join("->"),
    aname: dscr[0],
    atype: dscr[1],
    parms: hull,
  };
  const dorj = JSON.stringify(dor);
  const dorkj = JSON.stringify({ [kt]: dor.parms });
  if (!known[dorkj]) {
    known[dorkj] = {};
  }
  if (!known[dorkj][dorj]) {
    known[dorkj][dorj] = 0;
  }
  known[dorkj][dorj]++;
}

function joiner(list: string[], dlm: string): string {
  return list.filter((s) => !!s).join(dlm);
}

interface IZPos {
  Col: never;
  Line: never;
  Offset: number;
}
interface IZPosition {
  End: IZPos;
  Pos: IZPos;
}
interface IMyComment extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Text: string;
}
interface IMyBlock {
  Last: IMyComment[];
  Stmts: IMyStmt[];
}
interface IBlock extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Last: IMyComment[];
  Stmts: IMyStmt[];
}
interface IWhileClause extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Cond: IMyBlock;
  Do: IMyBlock;
  Until: boolean;
}
interface IByType extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Type: string;
}
interface IWordIter extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Items: IXWord[];
  Name: IZName;
}
interface IForClause extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Do: IMyBlock;
  Loop: IByType;
  Select: boolean;
}
interface ISubshell extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Last: IMyComment[];
  Stmts: IMyStmt[];
}
interface IFuncDecl extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Body: IMyStmt;
  Name: IZName;
  RsrvWord: boolean;
}
interface IIfClause extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Cond: IMyBlock;
  Elif: boolean;
  Else: IMyBlock;
  ElseComments: IMyComment[];
  FiComments: IMyComment[];
  Then: IMyBlock;
}
interface IXArg extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Parts: IByType[];
}
interface ICallExpr extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Args: IXArg[];
  Assigns: IMyAssign[];
}
interface IXPattern extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Parts: IByType[];
}
interface IMyItem extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Comments: IMyComment[];
  Last: IMyComment[];
  Op: Token;
  Patterns: IXPattern[];
  Stmts: IMyStmt[];
}
interface ICaseClause extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Items: IMyItem[];
  Last: IMyComment[];
  Word: IXWord;
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
opcode[Token.semicolon] = " ;\n";

opcode[Token.dblSemicolon] = " ;;\n";
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

opcode[Token.plus] = " + /*1*/";
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

function op(o: Token) {
  return opcode[o] || "Op=" + o;
}

interface IBinaryCmd extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Op: Token;
  X: IMyStmt;
  Y: IMyStmt;
}
interface IMyHdoc extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Parts: IByType[];
}
interface IMyRedir extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Hdoc: IMyHdoc;
  N: ILit;
  Op: Token;
  Word: IXWord;
}
interface IMyStmt extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Background: boolean;
  Cmd: IByType;
  Comments: IMyComment[];
  Coprocess: boolean;
  Negated: boolean;
  Redirs: IMyRedir[];
}
interface IMyShellFile extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Last: IMyComment[];
  Name: string;
  Stmts: IMyStmt[];
}
interface IZName extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Value: string;
}
interface ILit extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Value: string;
}
interface ICmdSubst extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Last: IMyComment[];
  ReplyVar: boolean;
  Stmts: IMyStmt[];
  TempFile: boolean;
}
interface ISglQuoted extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Dollar: boolean;
  Value: string;
}
interface IDblQuoted extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Dollar: boolean;
  Parts: IByType[];
}
interface IMyParam extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Value: string;
}
interface IMyExp {
  Op: Token;
  Word: IXWord;
}
interface IParamExp extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Excl: boolean;
  Exp: IMyExp;
  Index: never;
  Length: boolean;
  Names: number;
  Param: IMyParam;
  Repl: never;
  Short: boolean;
  Slice: never;
  Width: boolean;
}
interface IXValue extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Parts: IByType[];
}
interface IXWord extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Parts: IByType[];
}
interface IMyAssign extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Append: boolean;
  Array: never;
  Index: never;
  Naked: boolean;
  Name: IZName;
  Value: IXValue;
}

function comments(lines: IMyComment[], fromField: string): string {
  if (!lines) {
    return comm({ empty_lines: lines });
  }
  let res = joiner(
    lines.map((l) => {
      typelist(l, ["l", "IMyComment", fromField + "[]"]);
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

function btSglQuoted(prt: ISglQuoted, fromField: string): string[] {
  typelist(prt, ["prt", "ISglQuoted", fromField]);
  const { Pos, End, Type, Value, ...rest_psq } = prt;
  return [JSON.stringify(Value), comm({ rest_psq }, '{"rest_psq":{"Dollar":false}}')];
}

function btCmdSubst(prt: ICmdSubst, fromField: string): string[] {
  typelist(prt, ["prt", "ICmdSubst", fromField]);
  const { Pos, End, Type, Stmts, ...rest_pcs } = prt;
  // tslint:disable-next-line:max-line-length
  return ["$( " + joiner([statements(Stmts, "Stmts"), comm({ rest_pcs }, '{"rest_pcs":{"Last":[],"ReplyVar":false,"TempFile":false}}')], " + /*2*/") + " )"];
}

function btLit(prt: ILit, fromField: string): string[] {
  typelist(prt, ["prt", "ILit", fromField]);
  const { Pos, End, Type, Value, ...rest_pl } = prt;
  return [JSON.stringify(Value), comm({ rest_pl }, '{"rest_pl":{}}')];
}

function btDblQuoted(prt: IDblQuoted, fromField: string): string[] {
  typelist(prt, ["prt", "IDblQuoted", fromField]);
  const { Pos, End, Type, Parts, ...rest_pdq } = prt;
  return [...parts(Parts, "Parts"), comm({ rest_pdq }, '{"rest_pdq":{"Dollar":false}}')];
}

function param(prm: IMyParam, fromField: string): string[] {
  typelist(prm, ["prm", "IMyParam", fromField]);
  const { Pos, End, Value, ...rest_prm } = prm;
  // tslint:disable-next-line:max-line-length
  return [
    /^[a-zA-Z_]\w*$/.test(Value)
      ? Value //
      : Value === "0"
      ? "process.argv0"
      : /^\d+$/.test(Value)
      ? "process.argv[" + Value + "]"
      : Value === "#"
      ? "process.argv.length"
      : Value === "$"
      ? "process.pid"
      : Value == "?"
      ? "process.exitCode"
      : comm({ Value }),
    comm({ rest_prm }, '{"rest_prm":{}}'),
  ];
}

function exp(e: IMyExp, fromField: string): string {
  typelist(e, ["e", "IMyExp", fromField]);
  if (!e) {
    return comm({ e }, '{"e":null}');
  }
  const { Op, Word, ...rest_exp } = e;
  return joiner([op(Op), ...word(Word, "Word"), comm({ rest_exp }, '{"rest_exp":{}}')], " ");
}

function btParamExp(prt: IParamExp, fromField: string): string[] {
  typelist(prt, ["prt", "IParamExp", fromField]);
  const { Pos, End, Type, Param, Exp, Short, ...rest_ppe } = prt;
  if (Short) {
    // tslint:disable-next-line:max-line-length
    return [joiner([...param(Param, "Param"), exp(Exp, "Exp"), comm({ rest_ppe }, '{"rest_ppe":{"Excl":false,"Index":null,"Length":false,"Names":0,"Repl":null,"Slice":null,"Width":false}}')], " ")];
  } else {
    // tslint:disable-next-line:max-line-length
    return [joiner(["(", ...param(Param, "Param"), exp(Exp, "Exp"), comm({ rest_ppe }, '{"rest_ppe":{"Excl":false,"Index":null,"Length":false,"Names":0,"Repl":null,"Slice":null,"Width":false}}'), ")"], " ")];
  }
}

function byType(rec: IByType, fromField: string): string[] {
  if (!rec || !rec.Type) {
    return [comm({ empty_rec: rec })];
  }
  switch (rec.Type) {
    case "BinaryCmd":
      return btBinaryCmd(rec as IBinaryCmd, fromField);
    case "Block":
      return btBlock(rec as IBlock, fromField);
    case "CallExpr":
      return btCallExpr(rec as ICallExpr, fromField);
    case "CaseClause":
      return btCaseClause(rec as ICaseClause, fromField);
    case "CmdSubst":
      return btCmdSubst(rec as ICmdSubst, fromField);
    case "DblQuoted":
      return btDblQuoted(rec as IDblQuoted, fromField);
    case "ForClause":
      return btForClause(rec as IForClause, fromField);
    case "FuncDecl":
      return btFuncDecl(rec as IFuncDecl, fromField);
    case "IfClause":
      return btIfClause(rec as IIfClause, fromField);
    case "Lit":
      return btLit(rec as ILit, fromField);
    case "ParamExp":
      return btParamExp(rec as IParamExp, fromField);
    case "SglQuoted":
      return btSglQuoted(rec as ISglQuoted, fromField);
    case "Subshell":
      return btSubshell(rec as ISubshell, fromField);
    case "WhileClause":
      return btWhileClause(rec as IWhileClause, fromField);
    case "WordIter":
      return btWordIter(rec as IWordIter, fromField);
    default:
      return [comm({ unknown_rec: rec })];
  }
}

function parts(prts: IByType[], fromField: string): string[] {
  if (!prts) {
    return [comm({ prts })];
  }
  const res: string[] = [];
  prts.forEach((part) => {
    // typelist(part, ["part", "IByType", fromField + "[]"]);
    res.push(...byType(part, fromField + "[]"));
  });
  return [joiner(res, " + /*3*/")];
}

function value(val: IXValue, fromField: string): string[] {
  typelist(val, ["val", "IXValue", fromField]);
  if (!val) {
    return ['""', comm({ empty_val: val }, '{"empty_val":null}')];
  }
  const { Pos, End, Parts, ...rest_val } = val;
  return [...parts(Parts, "Parts"), comm({ rest_val }, '{"rest_val":{}}')];
}

function assigns(ass: IMyAssign[], fromField: string): string {
  const res: string[] = [];
  ass.forEach((a) => {
    typelist(a, ["a", "IMyAssign", fromField + "[]"]);
    const { Pos, End, Name, Value, ...rest_ass } = a;
    // tslint:disable-next-line:max-line-length
    res.push("let " + a.Name.Value + " = " + joiner(value(Value, "Value"), " + /*4*/") + comm({ rest_ass }, '{"rest_ass":{"Append":false,"Array":null,"Index":null,"Naked":false}}'));
  });
  return joiner(res, " ;//1\n");
}

function arglist(args: IXArg[], fromField: string): string[] {
  const res: string[] = [];
  args.forEach((a) => {
    typelist(a, ["a", "IXArg", fromField + "[]"]);
    const { Pos, End, Parts, ...rest_args } = a;
    res.push(...parts(Parts, "Parts"));
    res.push(comm({ rest_args }, '{"rest_args":{}}'));
  });
  return res;
}

function btCallExpr(cmd: ICallExpr, fromField: string): string[] {
  typelist(cmd, ["cmd", "ICallExpr", fromField]);
  const { Pos, End, Type, Assigns, Args, ...rest_cce } = cmd;
  return [assigns(Assigns, "Assigns"), ...arglist(Args, "Args"), comm({ rest_cce }, '{"rest_cce":{}}')];
}

function btBinaryCmd(cmd: IBinaryCmd, fromField: string): string[] {
  typelist(cmd, ["cmd", "IBinaryCmd", fromField]);
  const { Pos, End, Type, Op, X, Y, ...rest_cbc } = cmd;
  return ["{\n", statements([X], "[X]"), op(Op), statements([Y], "[Y]"), comm({ rest_cbc }, '{"rest_cbc":{}}'), "\n}"];
}

function btWhileClause(cmd: IWhileClause, fromField: string): string[] {
  typelist(cmd, ["cmd", "IWhileClause", fromField]);
  const { Pos, End, Type, Cond, Do, ...rest_cwc } = cmd;
  // tslint:disable-next-line:max-line-length
  return ["while (" + block(Cond, "Cond") + ") {\n" + block(Do, "Do") + "\n}", comm({ rest_cwc }, '{"rest_cwc":{"Until":false}}')];
}

function word(wrd: IXWord, fromField: string) {
  typelist(wrd, ["wrd", "IXWord", fromField]);
  if (!wrd) {
    return ['""', comm({ empty_wrd: wrd }, '{"empty_wrd":null}')];
  }
  const { Pos, End, Parts, ...rest_wrd } = wrd;
  return [...parts(Parts, "Parts"), comm({ rest_wrd }, '{"rest_wrd":{}}')];
}

function patterns(pts: IXPattern[], fromField: string): string[] {
  const res: string[] = [];
  pts.forEach((pat) => {
    typelist(pat, ["pat", "IXPattern", fromField + "[]"]);
    const { Pos, End, Parts, ...rest_pts } = pat;
    res.push(...parts(Parts, "Parts").map((p) => "case " + p + " :\n"), comm({ rest_pts }, '{"rest_pts":{}}'));
  });
  return res;
}

function item(itm: IMyItem[], fromField: string): string[] {
  const res: string[] = [];
  itm.forEach((i) => {
    typelist(i, ["i", "IMyItem", fromField + "[]"]);
    const { Pos, End, Comments, Patterns, Stmts, Op, Last, ...rest_itm } = i;
    // tslint:disable-next-line:max-line-length
    res.push(comments(Comments, "Comments"), ...patterns(Patterns, "Patterns"), statements(Stmts, "Stmts"), op(Op), comments(Last, "Last"), comm({ rest_itm }, '{"rest_itm":{}}'));
  });
  return res;
}

function btCaseClause(cmd: ICaseClause, fromField: string): string[] {
  typelist(cmd, ["cmd", "ICaseClause", fromField]);
  const { Pos, End, Type, Items, Word, ...rest_ccc } = cmd;
  // tslint:disable-next-line:max-line-length
  return ["switch ( " + joiner(word(Word, "Word"), " + /*5*/") + " ) {\n", ...item(Items, "Items"), "\n}", comm({ rest_ccc }, '{"rest_ccc":{"Last":[]}}')];
}

function btIfClause(cmd: IIfClause, fromField: string): string[] {
  typelist(cmd, ["cmd", "IIfClause", fromField]);
  const { Pos, End, Type, Cond, Then, Else, Elif, ElseComments, FiComments, ...rest_cic } = cmd;
  return [
    (Elif ? " else " : "") + //
      "if ( " +
      block(Cond, "Cond") +
      " ) {\n" +
      block(Then, "Then") +
      "\n} " +
      comments(ElseComments, "ElseComments") +
      " else {\n" +
      block(Else, "Else") +
      "\n} " +
      comments(FiComments, "FiComments"),
    comm({ rest_cic }, '{"rest_cic":{}}'),
  ];
}

function btFuncDecl(cmd: IFuncDecl, fromField: string) {
  typelist(cmd, ["cmd", "IFuncDecl", fromField]);
  const { Pos, End, Type, Name, Body, ...rest_cfd } = cmd;
  // tslint:disable-next-line:max-line-length
  return ["function " + Name.Value + " () {\n" + statements([Body], "[Body]") + "\n}", comm({ rest_cfd }, '{"rest_cfd":{"RsrvWord":false}}')];
}

function block(cmd: IMyBlock, fromField: string): string[] {
  typelist(cmd, ["cmd", "IMyBlock", fromField]);
  const { Stmts, ...rest_cb } = cmd;
  // tslint:disable-next-line:max-line-length
  return [joiner([statements(Stmts, "Stmts"), comm({ rest_cb }, '{"rest_cb":{"Last":[]}}')], " ;//3\n")];
}

function btBlock(cmd: IBlock, fromField: string): string[] {
  typelist(cmd, ["cmd", "IBlock", fromField]);
  const { Pos, End, Type, Stmts, ...rest_cb } = cmd;
  // tslint:disable-next-line:max-line-length
  return [joiner([statements(Stmts, "Stmts"), comm({ rest_cb }, '{"rest_cb":{"Last":[]}}')], " ;//3\n")];
}

function btSubshell(cmd: ISubshell, fromField: string): string[] {
  typelist(cmd, ["cmd", "ISubshell", fromField]);
  const { Pos, End, Type, Stmts, ...rest_css } = cmd;
  return [" ( " + joiner([statements(Stmts, "Stmts"), comm({ rest_css }, '{"rest_css":{"Last":[]}}')], " ") + " ) "];
}

function btForClause(cmd: IForClause, fromField: string): string[] {
  typelist(cmd, ["cmd", "IForClause", fromField]);
  const { Pos, End, Type, Do, Loop, ...rest_cfc } = cmd;
  // tslint:disable-next-line:max-line-length
  return ["for", ...command(Loop, "Loop"), "{\n", ...block(Do, "Do"), "\n}", comm({ rest_cfc }, '{"rest_cfc":{"Select":false}}')];
}

function btWordIter(cmd: IWordIter, fromField: string): string[] {
  typelist(cmd, ["cmd", "IWordIter", fromField]);
  const { Pos, End, Type, Items, Name, ...rest_cwi } = cmd;
  const items: string[] = [];
  Items.forEach((i) => {
    items.push(...word(i, "Items[]"));
  });
  return ["(const " + Name.Value + " of [ " + joiner(items, " , ") + " ])", comm({ rest_cwi }, '{"rest_cwi":{}}')];
}

function command(cmd: IByType, fromField: string): string[] {
  // typelist(cmd, ["cmd", "IByType", fromField]);
  return byType(cmd, fromField);
}

function hdoc(doc: IMyHdoc, fromField: string): string {
  typelist(doc, ["doc", "IMyHdoc", fromField]);
  if (!doc) {
    return comm({ empty_doc: doc }, '{"empty_doc":null}');
  }
  const { Pos, End, Parts, ...rest_doc } = doc;
  return joiner([...parts(Parts, "Parts"), comm({ rest_doc }, '{"rest_doc":{}}')], " ");
}

function redirs(red: IMyRedir[], fromField: string): string {
  if (!red) {
    return comm({ empty_red: red });
  }
  const res: string[] = [];
  red.forEach((r) => {
    typelist(r, ["r", "IMyRedir", fromField + "[]"]);
    const { Pos, End, Op, Word, N, Hdoc, ...rest_red } = r;
    if (N) {
      res.push(N.Value);
    }
    res.push(op(Op), ...word(Word, "Word"));
    res.push(hdoc(Hdoc, "Hdoc"));
    res.push(comm({ rest_red }, '{"rest_red":{}}'));
  });
  return joiner(res, " ");
}

function statements(stmts: IMyStmt[], fromField: string): string {
  if (!stmts) {
    return comm({ empty_stmts: stmts });
  }
  const res: string[] = [];
  stmts.forEach((stmt) => {
    typelist(stmt, ["stmts", "IMyStmt", fromField + "[]"]);
    const { Pos, End, Comments, Cmd, Redirs, ...rest_stmt } = stmt;
    res.push(comments(Comments, "Comments") + joiner([...command(Cmd, "Cmd"), redirs(Redirs, "Redirs")], " "));
    // tslint:disable-next-line:max-line-length
    res.push(comm({ rest_stmt }, '{"rest_stmt":{"Background":false,"Coprocess":false,"Negated":false}}'));
  });
  return joiner(res, " ;//2\n");
}

// ---------------------------------------------------------------------------------------------------------------------

function perFile(f: string): void {
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
  const j: IMyShellFile = JSON.parse(res.stdout);
  typelist(j, ["j", "IMyShellFile", "res.stdout"]);
  // logg({ j });
  const js = statements(j.Stmts, "Stmts") + "\n" + comments(j.Last, "Last");
  // tslint:disable-next-line:no-console
  console.log(js);
}
["config.guess", "config.sub"].forEach(perFile);
// tslint:disable-next-line:no-console
console.log(
  Object.keys(known)
    .map(
      (k) =>
        k +
        "\n\t" +
        Object.keys(known[k])
          .map((v) => known[k][v] + " " + v)
          .sort()
          .join("\n\t"),
    )
    .sort()
    .join("\n"),
);
