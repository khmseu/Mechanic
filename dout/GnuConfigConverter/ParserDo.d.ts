/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ISyntaxTreeNode } from "./ISyntaxTreeNode";
import { BinAritOperator, BinCmdOperator, BinTestOperator, CaseOperator, GlobOperator, I_Expansion, I_Pos, I_Replace, I_Slice, ParNamesOperator, ProcOperator, RedirOperator, UnAritOperator, UnTestOperator } from "./ParserTypes";
export declare function doArithmCmd(Left: I_Pos | null, Right: I_Pos | null, Unsigned: boolean | null, X: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doArithmExp(Left: I_Pos | null, Right: I_Pos | null, Bracket: boolean | null, Unsigned: boolean | null, X: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doArrayElem(Index: ISyntaxTreeNode, Value: ISyntaxTreeNode, Comments: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doArrayExpr(Lparen: I_Pos | null, Rparen: I_Pos | null, Elems: ISyntaxTreeNode, Last: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doAssign(Append: boolean | null, Naked: boolean | null, Name: ISyntaxTreeNode, Index: ISyntaxTreeNode, Value: ISyntaxTreeNode, Array: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doBinaryArithm(OpPos: I_Pos | null, Op: BinAritOperator | null, X: ISyntaxTreeNode, Y: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doBinaryCmd(OpPos: I_Pos | null, Op: BinCmdOperator | null, X: ISyntaxTreeNode, Y: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doBinaryTest(OpPos: I_Pos | null, Op: BinTestOperator | null, X: ISyntaxTreeNode, Y: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doBlock(Lbrace: I_Pos | null, Rbrace: I_Pos | null, StmtList: ISyntaxTreeNode, Last: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doBraceExp(Sequence: boolean | null, Chars: boolean | null, Elems: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doCallExpr(Assigns: ISyntaxTreeNode, Args: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doCaseClause(Case: I_Pos | null, Esac: I_Pos | null, Word: ISyntaxTreeNode, Items: ISyntaxTreeNode, Last: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doCaseItem(Op: CaseOperator | null, OpPos: I_Pos | null, Comments: ISyntaxTreeNode, Patterns: ISyntaxTreeNode, StmtList: ISyntaxTreeNode, Last: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doCmdSubst(Left: I_Pos | null, Right: I_Pos | null, StmtList: ISyntaxTreeNode, Last: ISyntaxTreeNode, TempFile: boolean | null, ReplyVar: boolean | null): ISyntaxTreeNode;
export declare function doComment(Hash: I_Pos | null, Text: string | null): ISyntaxTreeNode;
export declare function doCoprocClause(Coproc: I_Pos | null, Name: ISyntaxTreeNode, Stmt: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doCStyleLoop(Lparen: I_Pos | null, Rparen: I_Pos | null, Init: ISyntaxTreeNode, Cond: ISyntaxTreeNode, Post: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doDblQuoted(Position: I_Pos | null, Dollar: boolean | null, Parts: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doDeclClause(Variant: ISyntaxTreeNode, Opts: ISyntaxTreeNode, Assigns: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doExtGlob(OpPos: I_Pos | null, Op: GlobOperator | null, Pattern: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doFile(Name: string | null, StmtList: ISyntaxTreeNode, Last: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doForClause(ForPos: I_Pos | null, DoPos: I_Pos | null, DonePos: I_Pos | null, Select: boolean | null, Loop: ISyntaxTreeNode, Do: ISyntaxTreeNode, DoLast: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doFuncDecl(Position: I_Pos | null, RsrvWord: boolean | null, Name: ISyntaxTreeNode, Body: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doIfClause(Position: I_Pos | null, ThenPos: I_Pos | null, FiPos: I_Pos | null, Cond: ISyntaxTreeNode, CondLast: ISyntaxTreeNode, Then: ISyntaxTreeNode, ThenLast: ISyntaxTreeNode, Else: ISyntaxTreeNode, Last: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doLetClause(Let: I_Pos | null, Exprs: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doLit(ValuePos: I_Pos | null, ValueEnd: I_Pos | null, Value: string | null): ISyntaxTreeNode;
export declare function doParamExp(Dollar: I_Pos | null, Rbrace: I_Pos | null, Short: boolean | null, Excl: boolean | null, Length: boolean | null, Width: boolean | null, Param: ISyntaxTreeNode, Index: ISyntaxTreeNode, Slice: I_Slice | null, Repl: I_Replace | null, Names: ParNamesOperator | null, Exp: I_Expansion | null): ISyntaxTreeNode;
export declare function doParenArithm(Lparen: I_Pos | null, Rparen: I_Pos | null, X: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doParenTest(Lparen: I_Pos | null, Rparen: I_Pos | null, X: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doProcSubst(OpPos: I_Pos | null, Rparen: I_Pos | null, Op: ProcOperator | null, Stmts: ISyntaxTreeNode, Last: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doRedirect(OpPos: I_Pos | null, Op: RedirOperator | null, N: ISyntaxTreeNode, Word: ISyntaxTreeNode, Hdoc: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doSglQuoted(Left: I_Pos | null, Right: I_Pos | null, Dollar: boolean | null, Value: string | null): ISyntaxTreeNode;
export declare function doStmt(Comments: ISyntaxTreeNode, Cmd: ISyntaxTreeNode, Position: I_Pos | null, Semicolon: I_Pos | null, Negated: boolean | null, Background: boolean | null, Coprocess: boolean | null, Redirs: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doStmtList(Stmts: ISyntaxTreeNode, Last: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doSubshell(Lparen: I_Pos | null, Rparen: I_Pos | null, StmtList: ISyntaxTreeNode, Last: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doTestClause(Left: I_Pos | null, Right: I_Pos | null, X: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doTimeClause(Time: I_Pos | null, PosixFormat: boolean | null, Stmt: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doUnaryArithm(OpPos: I_Pos | null, Op: UnAritOperator | null, Post: boolean | null, X: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doUnaryTest(OpPos: I_Pos | null, Op: UnTestOperator | null, X: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doWhileClause(WhilePos: I_Pos | null, DoPos: I_Pos | null, DonePos: I_Pos | null, Until: boolean | null, Cond: ISyntaxTreeNode, CondLast: ISyntaxTreeNode, Do: ISyntaxTreeNode, DoLast: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doWord(Parts: ISyntaxTreeNode): ISyntaxTreeNode;
export declare function doWordIter(Name: ISyntaxTreeNode, InPos: I_Pos | null, Items: ISyntaxTreeNode): ISyntaxTreeNode;
//# sourceMappingURL=ParserDo.d.ts.map