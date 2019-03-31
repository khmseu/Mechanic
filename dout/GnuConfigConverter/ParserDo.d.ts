/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { BinAritOperator, BinCmdOperator, BinTestOperator, CaseOperator, GlobOperator, I_Expansion, I_Pos, I_Replace, I_Slice, ParNamesOperator, ProcOperator, RedirOperator, UnAritOperator, UnTestOperator } from "./ParserTypes";
export declare function doArithmCmd(Left: I_Pos | null, Right: I_Pos | null, Unsigned: boolean | null, X: string[]): string[];
export declare function doArithmExp(Left: I_Pos | null, Right: I_Pos | null, Bracket: boolean | null, Unsigned: boolean | null, X: string[]): string[];
export declare function doArrayElem(Index: string[], Value: string[], Comments: string[]): string[];
export declare function doArrayExpr(Lparen: I_Pos | null, Rparen: I_Pos | null, Elems: string[], Last: string[]): string[];
export declare function doAssign(Append: boolean | null, Naked: boolean | null, Name: string[], Index: string[], Value: string[], Array: string[]): string[];
export declare function doBinaryArithm(OpPos: I_Pos | null, Op: BinAritOperator | null, X: string[], Y: string[]): string[];
export declare function doBinaryCmd(OpPos: I_Pos | null, Op: BinCmdOperator | null, X: string[], Y: string[]): string[];
export declare function doBinaryTest(OpPos: I_Pos | null, Op: BinTestOperator | null, X: string[], Y: string[]): string[];
export declare function doBlock(Lbrace: I_Pos | null, Rbrace: I_Pos | null, StmtList: string[], Last: string[]): string[];
export declare function doBraceExp(Sequence: boolean | null, Chars: boolean | null, Elems: string[]): string[];
export declare function doCallExpr(Assigns: string[], Args: string[]): string[];
export declare function doCaseClause(Case: I_Pos | null, Esac: I_Pos | null, Word: string[], Items: string[], Last: string[]): string[];
export declare function doCaseItem(Op: CaseOperator | null, OpPos: I_Pos | null, Comments: string[], Patterns: string[], StmtList: string[], Last: string[]): string[];
export declare function doCmdSubst(Left: I_Pos | null, Right: I_Pos | null, StmtList: string[], Last: string[], TempFile: boolean | null, ReplyVar: boolean | null): string[];
export declare function doComment(Hash: I_Pos | null, Text: string | null): string[];
export declare function doCoprocClause(Coproc: I_Pos | null, Name: string[], Stmt: string[]): string[];
export declare function doCStyleLoop(Lparen: I_Pos | null, Rparen: I_Pos | null, Init: string[], Cond: string[], Post: string[]): string[];
export declare function doDblQuoted(Position: I_Pos | null, Dollar: boolean | null, Parts: string[]): string[];
export declare function doDeclClause(Variant: string[], Opts: string[], Assigns: string[]): string[];
export declare function doExtGlob(OpPos: I_Pos | null, Op: GlobOperator | null, Pattern: string[]): string[];
export declare function doFile(Name: string | null, StmtList: string[], Last: string[]): string[];
export declare function doForClause(ForPos: I_Pos | null, DoPos: I_Pos | null, DonePos: I_Pos | null, Select: boolean | null, Loop: string[], Do: string[], DoLast: string[]): string[];
export declare function doFuncDecl(Position: I_Pos | null, RsrvWord: boolean | null, Name: string[], Body: string[]): string[];
export declare function doIfClause(Position: I_Pos | null, ThenPos: I_Pos | null, FiPos: I_Pos | null, Cond: string[], CondLast: string[], Then: string[], ThenLast: string[], Else: string[], Last: string[]): string[];
export declare function doLetClause(Let: I_Pos | null, Exprs: string[]): string[];
export declare function doLit(ValuePos: I_Pos | null, ValueEnd: I_Pos | null, Value: string | null): string[];
export declare function doParamExp(Dollar: I_Pos | null, Rbrace: I_Pos | null, Short: boolean | null, Excl: boolean | null, Length: boolean | null, Width: boolean | null, Param: string[], Index: string[], Slice: I_Slice | null, Repl: I_Replace | null, Names: ParNamesOperator | null, Exp: I_Expansion | null): string[];
export declare function doParenArithm(Lparen: I_Pos | null, Rparen: I_Pos | null, X: string[]): string[];
export declare function doParenTest(Lparen: I_Pos | null, Rparen: I_Pos | null, X: string[]): string[];
export declare function doProcSubst(OpPos: I_Pos | null, Rparen: I_Pos | null, Op: ProcOperator | null, Stmts: string[], Last: string[]): string[];
export declare function doRedirect(OpPos: I_Pos | null, Op: RedirOperator | null, N: string[], Word: string[], Hdoc: string[]): string[];
export declare function doSglQuoted(Left: I_Pos | null, Right: I_Pos | null, Dollar: boolean | null, Value: string | null): string[];
export declare function doStmt(Comments: string[], Cmd: string[], Position: I_Pos | null, Semicolon: I_Pos | null, Negated: boolean | null, Background: boolean | null, Coprocess: boolean | null, Redirs: string[]): string[];
export declare function doStmtList(Stmts: string[], Last: string[]): string[];
export declare function doSubshell(Lparen: I_Pos | null, Rparen: I_Pos | null, StmtList: string[], Last: string[]): string[];
export declare function doTestClause(Left: I_Pos | null, Right: I_Pos | null, X: string[]): string[];
export declare function doTimeClause(Time: I_Pos | null, PosixFormat: boolean | null, Stmt: string[]): string[];
export declare function doUnaryArithm(OpPos: I_Pos | null, Op: UnAritOperator | null, Post: boolean | null, X: string[]): string[];
export declare function doUnaryTest(OpPos: I_Pos | null, Op: UnTestOperator | null, X: string[]): string[];
export declare function doWhileClause(WhilePos: I_Pos | null, DoPos: I_Pos | null, DonePos: I_Pos | null, Until: boolean | null, Cond: string[], CondLast: string[], Do: string[], DoLast: string[]): string[];
export declare function doWord(Parts: string[]): string[];
export declare function doWordIter(Name: string[], InPos: I_Pos | null, Items: string[]): string[];
//# sourceMappingURL=ParserDo.d.ts.map