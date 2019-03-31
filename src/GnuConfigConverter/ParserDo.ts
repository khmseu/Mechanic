/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { joiner } from ".";
import { comm } from "./comm";
import { logg } from "./logg";
import { prepWord } from "./ParserPrep";
// tslint:disable-next-line:max-line-length
import { BinAritOperator, BinCmdOperator, BinTestOperator, CaseOperator, GlobOperator, I_Expansion, I_Pos, I_Replace, I_Slice, ParNamesOperator, ProcOperator, RedirOperator, UnAritOperator, UnTestOperator } from "./ParserTypes";
import { op, Token } from "./Token";

// tslint:disable-next-line:max-line-length
export function doArithmCmd(Left: I_Pos | null, Right: I_Pos | null, Unsigned: boolean | null, X: string[]): string[] {
  logg("doArithmCmd");
  return [comm({ Left, Right, Unsigned, X })];
}
// tslint:disable-next-line:max-line-length
export function doArithmExp(Left: I_Pos | null, Right: I_Pos | null, Bracket: boolean | null, Unsigned: boolean | null, X: string[]): string[] {
  logg("doArithmExp");
  return [comm({ Left, Right, Bracket, Unsigned, X })];
}
export function doArrayElem(Index: string[], Value: string[], Comments: string[]): string[] {
  logg("doArrayElem");
  return [...Index, ...Value, ...Comments];
}
// tslint:disable-next-line:max-line-length
export function doArrayExpr(Lparen: I_Pos | null, Rparen: I_Pos | null, Elems: string[], Last: string[]): string[] {
  logg("doArrayExpr");
  return [...Elems, ...Last, comm({ Lparen, Rparen })];
}
// tslint:disable-next-line:max-line-length
export function doAssign(Append: boolean | null, Naked: boolean | null, Name: string[], Index: string[], Value: string[], Array: string[]): string[] {
  logg("doAssign");
  // tslint:disable-next-line:max-line-length
  return ["let ", ...Name, " = ", ...Value, " ; /*4*/", comm({ Append, Naked, Index, Array }, '{"Append":false,"Naked":false,"Index":[""],"Array":[""]}')];
}
// tslint:disable-next-line:max-line-length
export function doBinaryArithm(OpPos: I_Pos | null, Op: BinAritOperator | null, X: string[], Y: string[]): string[] {
  logg("doBinaryArithm");
  return [...X, op((Op as unknown) as Token), ...Y, comm({ OpPos })];
}
// tslint:disable-next-line:max-line-length
export function doBinaryCmd(OpPos: I_Pos | null, Op: BinCmdOperator | null, X: string[], Y: string[]): string[] {
  logg("doBinaryCmd");
  return ["{\n", ...X, op((Op as unknown) as Token), ...Y, comm({ OpPos }, '{"OpPos":{}}'), "\n}"];
}
// tslint:disable-next-line:max-line-length
export function doBinaryTest(OpPos: I_Pos | null, Op: BinTestOperator | null, X: string[], Y: string[]): string[] {
  logg("doBinaryTest");
  return [...X, op((Op as unknown) as Token), ...Y, comm({ OpPos })];
}
// tslint:disable-next-line:max-line-length
export function doBlock(Lbrace: I_Pos | null, Rbrace: I_Pos | null, StmtList: string[], Last: string[]): string[] {
  logg("doBlock");
  return [...StmtList, ...Last, comm({ Lbrace, Rbrace }, '{"Lbrace":{},"Rbrace":{}}'), " ;//3\n"];
}
export function doBraceExp(Sequence: boolean | null, Chars: boolean | null, Elems: string[]): string[] {
  logg("doBraceExp");
  return [...Elems, comm({ Sequence, Chars })];
}
export function doCallExpr(Assigns: string[], Args: string[]): string[] {
  logg("doCallExpr");
  return [...Assigns, ...Args];
}
// tslint:disable-next-line:max-line-length
export function doCaseClause(Case: I_Pos | null, Esac: I_Pos | null, Word: string[], Items: string[], Last: string[]): string[] {
  logg("doCaseClause");
  // tslint:disable-next-line:max-line-length
  return ["switch ( ", ...Word, " + /*5*/", " ) {\n", ...Items, "\n}", ...Last, comm({ Case, Esac }, '{"Case":{},"Esac":{}}')];
}
// tslint:disable-next-line:max-line-length
export function doCaseItem(Op: CaseOperator | null, OpPos: I_Pos | null, Comments: string[], Patterns: string[], StmtList: string[], Last: string[]): string[] {
  logg("doCaseItem");
  // tslint:disable-next-line:max-line-length
  return [...Comments, ...Patterns, ...StmtList, op((Op as unknown) as Token), ...Last, comm({ OpPos }, '{"OpPos":{}}')];
}
// tslint:disable-next-line:max-line-length
export function doCmdSubst(Left: I_Pos | null, Right: I_Pos | null, StmtList: string[], Last: string[], TempFile: boolean | null, ReplyVar: boolean | null): string[] {
  logg("doCmdSubst");
  // tslint:disable-next-line:max-line-length
  return ["$( " + joiner([...StmtList, ...Last, comm({ Left, Right, TempFile, ReplyVar }, '{"Left":{},"Right":{},"TempFile":false,"ReplyVar":false}')], " + /*2*/") + " )"];
}
export function doComment(Hash: I_Pos | null, Text: string | null): string[] {
  logg("doComment");
  if (Hash && Hash.Offset() === 0 && Text && Text[0] === "!") {
    return [];
  }
  return ["// " + Text];
}
export function doCoprocClause(Coproc: I_Pos | null, Name: string[], Stmt: string[]): string[] {
  logg("doCoprocClause");
  return [...Name, ...Stmt, comm({ Coproc })];
}
// tslint:disable-next-line:max-line-length
export function doCStyleLoop(Lparen: I_Pos | null, Rparen: I_Pos | null, Init: string[], Cond: string[], Post: string[]): string[] {
  logg("doCStyleLoop");
  return [...Init, ...Cond, ...Post, comm({ Lparen, Rparen })];
}
export function doDblQuoted(Position: I_Pos | null, Dollar: boolean | null, Parts: string[]): string[] {
  logg("doDblQuoted");
  return [...Parts, comm({ Position, Dollar }, '{"Position":{},"Dollar":false}')];
}
export function doDeclClause(Variant: string[], Opts: string[], Assigns: string[]): string[] {
  logg("doDeclClause");
  return [...Variant, ...Opts, ...Assigns];
}
export function doExtGlob(OpPos: I_Pos | null, Op: GlobOperator | null, Pattern: string[]): string[] {
  logg("doExtGlob");
  return [...Pattern, op((Op as unknown) as Token), comm({ OpPos })];
}
export function doFile(Name: string | null, StmtList: string[], Last: string[]): string[] {
  logg("doFile");
  return [comm({ Name }), ...StmtList, ...Last];
}
// tslint:disable-next-line:max-line-length
export function doForClause(ForPos: I_Pos | null, DoPos: I_Pos | null, DonePos: I_Pos | null, Select: boolean | null, Loop: string[], Do: string[], DoLast: string[]): string[] {
  logg("doForClause");
  // tslint:disable-next-line:max-line-length
  return ["for", ...Loop, "{\n", ...Do, ...DoLast, "\n}", comm({ ForPos, DoPos, DonePos, Select }, '{"ForPos":{},"DoPos":{},"DonePos":{},"Select":false}')];
}
// tslint:disable-next-line:max-line-length
export function doFuncDecl(Position: I_Pos | null, RsrvWord: boolean | null, Name: string[], Body: string[]): string[] {
  logg("doFuncDecl");
  // tslint:disable-next-line:max-line-length
  return ["function ", ...Name, " () {\n", ...Body, "\n}", comm({ Position, RsrvWord }, '{"Position":{},"RsrvWord":false}')];
}
// tslint:disable-next-line:max-line-length
export function doIfClause(Position: I_Pos | null, ThenPos: I_Pos | null, FiPos: I_Pos | null, Cond: string[], CondLast: string[], Then: string[], ThenLast: string[], Else: string[], Last: string[]): string[] {
  logg("doIfClause");
  // tslint:disable-next-line:max-line-length
  return ["if ( ", ...Cond, ...CondLast, " ) ", "{\n", ...Then, ...ThenLast, "\n} ", " else {\n", ...Else, "\n} ", ...Last, comm({ Position, ThenPos, FiPos }, '{"Position":{},"ThenPos":{},"FiPos":{}}')];
}
export function doLetClause(Let: I_Pos | null, Exprs: string[]): string[] {
  logg("doLetClause");
  return [...Exprs, comm({ Let })];
}
export function doLit(ValuePos: I_Pos | null, ValueEnd: I_Pos | null, Value: string | null): string[] {
  logg("doLit");
  return [JSON.stringify(Value), comm({ ValuePos, ValueEnd }, '{"ValuePos":{},"ValueEnd":{}}')];
}
function exp(e: I_Expansion | null): string {
  logg("exp");
  if (!e) {
    return comm({ e }, '{"e":null}');
  }
  const { Op, Word, ...rest_exp } = e;
  return joiner([op((Op as unknown) as Token), ...prepWord(Word), comm({ rest_exp }, '{"rest_exp":{}}')], " ");
}
function param(prm: string): string[] {
  logg("param");
  if (!prm) {
    return [comm({ prm }, '{"e":null}')];
  }
  const prmr = JSON.parse(prm);
  return [
    /^[a-zA-Z_]\w*$/.test(prmr)
      ? prmr //
      : prmr === "0"
      ? "process.argv0"
      : /^\d+$/.test(prmr)
      ? "process.argv[" + prmr + "]"
      : prmr === "#"
      ? "process.argv.length"
      : prmr === "$"
      ? "process.pid"
      : prmr === "?"
      ? "process.exitCode"
      : comm({ prmr }),
  ];
}
// tslint:disable-next-line:max-line-length
export function doParamExp(Dollar: I_Pos | null, Rbrace: I_Pos | null, Short: boolean | null, Excl: boolean | null, Length: boolean | null, Width: boolean | null, Param: string[], Index: string[], Slice: I_Slice | null, Repl: I_Replace | null, Names: ParNamesOperator | null, Exp: I_Expansion | null): string[] {
  logg("doParamExp");
  const parm = param(joiner(Param, ""));
  if (Short) {
    // tslint:disable-next-line:max-line-length
    return [...parm, exp(Exp), comm({ Dollar, Rbrace, Excl, Length, Width, Index, Slice, Repl, Names }, '{"Dollar":{},"Rbrace":{},"Excl":false,"Length":false,"Width":false,"Index":[""],"Slice":null,"Repl":null,"Names":0}'), " "];
  } else {
    // tslint:disable-next-line:max-line-length
    return ["(", ...parm, exp(Exp), comm({ Dollar, Rbrace, Excl, Length, Width, Index, Slice, Repl, Names }, '{"Dollar":{},"Rbrace":{},"Excl":false,"Length":false,"Width":false,"Index":[""],"Slice":null,"Repl":null,"Names":0}'), ")", " "];
  }
}
export function doParenArithm(Lparen: I_Pos | null, Rparen: I_Pos | null, X: string[]): string[] {
  logg("doParenArithm");
  return [...X, comm({ Lparen, Rparen })];
}
export function doParenTest(Lparen: I_Pos | null, Rparen: I_Pos | null, X: string[]): string[] {
  logg("doParenTest");
  return [...X, comm({ Lparen, Rparen })];
}
// tslint:disable-next-line:max-line-length
export function doProcSubst(OpPos: I_Pos | null, Rparen: I_Pos | null, Op: ProcOperator | null, Stmts: string[], Last: string[]): string[] {
  logg("doProcSubst");
  return [op((Op as unknown) as Token), ...Stmts, ...Last, comm({ OpPos, Rparen })];
}
// tslint:disable-next-line:max-line-length
export function doRedirect(OpPos: I_Pos | null, Op: RedirOperator | null, N: string[], Word: string[], Hdoc: string[]): string[] {
  logg("doRedirect");
  const res: string[] = [];
  if (N) {
    res.push(...N);
  }
  res.push(op((Op as unknown) as Token), ...Word);
  res.push(...Hdoc);
  res.push(comm({ OpPos }, '{"OpPos":{}}'));
  return res;
}
// tslint:disable-next-line:max-line-length
export function doSglQuoted(Left: I_Pos | null, Right: I_Pos | null, Dollar: boolean | null, Value: string | null): string[] {
  logg("doSglQuoted");
  return [JSON.stringify(Value), comm({ Left, Right, Dollar }, '{"Left":{},"Right":{},"Dollar":false}')];
}
// tslint:disable-next-line:max-line-length
export function doStmt(Comments: string[], Cmd: string[], Position: I_Pos | null, Semicolon: I_Pos | null, Negated: boolean | null, Background: boolean | null, Coprocess: boolean | null, Redirs: string[]): string[] {
  logg("doStmt");
  // tslint:disable-next-line:max-line-length
  return [...Comments, ...Cmd, ...Redirs, comm({ Position, Semicolon, Negated, Background, Coprocess }, '{"Position":{},"Semicolon":{},"Negated":false,"Background":false,"Coprocess":false}')];
}
export function doStmtList(Stmts: string[], Last: string[]): string[] {
  logg("doStmtList");
  return [...Stmts, ...Last];
}
// tslint:disable-next-line:max-line-length
export function doSubshell(Lparen: I_Pos | null, Rparen: I_Pos | null, StmtList: string[], Last: string[]): string[] {
  logg("doSubshell");
  return [" ( ", ...StmtList, ...Last, comm({ Lparen, Rparen }, '{"Lparen":{},"Rparen":{}}'), " ", " ) "];
}
export function doTestClause(Left: I_Pos | null, Right: I_Pos | null, X: string[]): string[] {
  logg("doTestClause");
  return [...X, comm({ Left, Right })];
}
export function doTimeClause(Time: I_Pos | null, PosixFormat: boolean | null, Stmt: string[]): string[] {
  logg("doTimeClause");
  return [...Stmt, comm({ Time, PosixFormat })];
}
// tslint:disable-next-line:max-line-length
export function doUnaryArithm(OpPos: I_Pos | null, Op: UnAritOperator | null, Post: boolean | null, X: string[]): string[] {
  logg("doUnaryArithm");
  return [...X, op((Op as unknown) as Token), comm({ OpPos, Post })];
}
export function doUnaryTest(OpPos: I_Pos | null, Op: UnTestOperator | null, X: string[]): string[] {
  logg("doUnaryTest");
  return [...X, op((Op as unknown) as Token), comm({ OpPos })];
}
// tslint:disable-next-line:max-line-length
export function doWhileClause(WhilePos: I_Pos | null, DoPos: I_Pos | null, DonePos: I_Pos | null, Until: boolean | null, Cond: string[], CondLast: string[], Do: string[], DoLast: string[]): string[] {
  logg("doWhileClause");
  // tslint:disable-next-line:max-line-length
  return ["while (", ...Cond, ") {\n", ...Do, ...DoLast, "\n}", ...CondLast, comm({ WhilePos, DoPos, DonePos, Until }, '{"WhilePos":{},"DoPos":{},"DonePos":{},"Until":false}')];
}
export function doWord(Parts: string[]): string[] {
  logg("doWord");
  return [...Parts];
}
export function doWordIter(Name: string[], InPos: I_Pos | null, Items: string[]): string[] {
  logg("doWordIter");
  return ["(const ", ...Name, " of [ ", ...Items, " , ", " ])", comm({ InPos }, '{"InPos":{}}')];
}
