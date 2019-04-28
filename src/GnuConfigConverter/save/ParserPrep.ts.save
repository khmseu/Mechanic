/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { syntax } from "mvdan-sh";
import { comm } from "./comm";
import { ISyntaxTreeNode } from "./ISyntaxTreeNode";
import { logg } from "./logg";
// tslint:disable-next-line:max-line-length
import { doArithmCmd, doArithmExp, doArrayElem, doArrayExpr, doAssign, doBinaryArithm, doBinaryCmd, doBinaryTest, doBlock, doBraceExp, doCallExpr, doCaseClause, doCaseItem, doCmdSubst, doComment, doCoprocClause, doCStyleLoop, doDblQuoted, doDeclClause, doExtGlob, doFile, doForClause, doFuncDecl, doIfClause, doLetClause, doLit, doParamExp, doParenArithm, doParenTest, doProcSubst, doRedirect, doSglQuoted, doStmt, doStmtList, doSubshell, doTestClause, doTimeClause, doUnaryArithm, doUnaryTest, doWhileClause, doWord, doWordIter } from "./ParserDo";
// tslint:disable-next-line:max-line-length
import { BinAritOperator, BinCmdOperator, BinTestOperator, CaseOperator, GlobOperator, I_Expansion, I_Pos, I_Replace, I_Slice, IArithmCmd, IArithmExp, IArithmExpr, IArrayElem, IArrayExpr, IAssign, IBinaryArithm, IBinaryCmd, IBinaryTest, IBlock, IBraceExp, ICallExpr, ICaseClause, ICaseItem, ICmdSubst, ICommand, IComment, ICoprocClause, ICStyleLoop, IDblQuoted, IDeclClause, IExtGlob, IFile, IForClause, IFuncDecl, IIfClause, ILetClause, ILit, ILoop, IParamExp, IParenArithm, IParenTest, IProcSubst, IRedirect, ISglQuoted, IStmt, IStmtList, ISubshell, ITestClause, ITestExpr, ITimeClause, IUnaryArithm, IUnaryTest, IWhileClause, IWord, IWordIter, IWordPart, ParNamesOperator, ProcOperator, RedirOperator, UnAritOperator, UnTestOperator } from "./ParserTypes";

export function prepArithmCmd(arithmcmd: IArithmCmd | null): ISyntaxTreeNode {
  logg("prepArithmCmd");
  if (!arithmcmd) {
    return [new RestComment({ empty_arithmcmd: arithmcmd }, '{"empty_arithmcmd":null}')];
  }
  const { Left, Right, Unsigned, X, ...rest_arithmcmd } = arithmcmd;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rUnsigned = prepboolean(Unsigned);
  const rX = prepArithmExpr(X);
  return [...doArithmCmd(rLeft, rRight, rUnsigned, rX), new RestComment({ rest_arithmcmd }, '{"rest_arithmcmd":{}}')];
}
export function prepArithmExp(arithmexp: IArithmExp | null): ISyntaxTreeNode {
  logg("prepArithmExp");
  if (!arithmexp) {
    return [new RestComment({ empty_arithmexp: arithmexp }, '{"empty_arithmexp":null}')];
  }
  const { Left, Right, Bracket, Unsigned, X, ...rest_arithmexp } = arithmexp;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rBracket = prepboolean(Bracket);
  const rUnsigned = prepboolean(Unsigned);
  const rX = prepArithmExpr(X);
  return [...doArithmExp(rLeft, rRight, rBracket, rUnsigned, rX), new RestComment({ rest_arithmexp }, '{"rest_arithmexp":{}}')];
}
export function prepArithmExpr(arithmexpr: IArithmExpr | null): ISyntaxTreeNode {
  logg("prepArithmExpr");
  if (!arithmexpr) {
    return [new RestComment({ empty_arithmexpr: arithmexpr }, '{"empty_arithmexpr":null}')];
  }
  switch (syntax.NodeType(arithmexpr)) {
    case "BinaryArithm":
      return prepBinaryArithm(arithmexpr as IBinaryArithm);
    case "UnaryArithm":
      return prepUnaryArithm(arithmexpr as IUnaryArithm);
    case "ParenArithm":
      return prepParenArithm(arithmexpr as IParenArithm);
    case "Word":
      return prepWord(arithmexpr as IWord);
    default:
      return [new RestComment({ unknown_arithmexpr: arithmexpr })];
  }
}
export function prepArrayElem(arrayelem: IArrayElem | null): ISyntaxTreeNode {
  logg("prepArrayElem");
  if (!arrayelem) {
    return [new RestComment({ empty_arrayelem: arrayelem }, '{"empty_arrayelem":null}')];
  }
  const { Index, Value, Comments, ...rest_arrayelem } = arrayelem;
  const rIndex = prepArithmExpr(Index);
  const rValue = prepWord(Value);
  const rComments = prepComments(Comments);
  return [...doArrayElem(rIndex, rValue, rComments), new RestComment({ rest_arrayelem }, '{"rest_arrayelem":{}}')];
}
export function prepArrayExpr(arrayexpr: IArrayExpr | null): ISyntaxTreeNode {
  logg("prepArrayExpr");
  if (!arrayexpr) {
    return [new RestComment({ empty_arrayexpr: arrayexpr }, '{"empty_arrayexpr":null}')];
  }
  const { Lparen, Rparen, Elems, Last, ...rest_arrayexpr } = arrayexpr;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rElems = prepArrayElems(Elems);
  const rLast = prepComments(Last);
  return [...doArrayExpr(rLparen, rRparen, rElems, rLast), new RestComment({ rest_arrayexpr }, '{"rest_arrayexpr":{}}')];
}
export function prepAssign(assign: IAssign | null): ISyntaxTreeNode {
  logg("prepAssign");
  if (!assign) {
    return [new RestComment({ empty_assign: assign }, '{"empty_assign":null}')];
  }
  const { Append, Naked, Name, Index, Value, Array, ...rest_assign } = assign;
  const rAppend = prepboolean(Append);
  const rNaked = prepboolean(Naked);
  const rName = prepLit(Name);
  const rIndex = prepArithmExpr(Index);
  const rValue = prepWord(Value);
  const rArray = prepArrayExpr(Array);
  return [...doAssign(rAppend, rNaked, rName, rIndex, rValue, rArray), new RestComment({ rest_assign }, '{"rest_assign":{}}')];
}
export function prepBinaryArithm(binaryarithm: IBinaryArithm | null): ISyntaxTreeNode {
  logg("prepBinaryArithm");
  if (!binaryarithm) {
    return [new RestComment({ empty_binaryarithm: binaryarithm }, '{"empty_binaryarithm":null}')];
  }
  const { OpPos, Op, X, Y, ...rest_binaryarithm } = binaryarithm;
  const rOpPos = prepPos(OpPos);
  const rOp = prepBinAritOperator(Op);
  const rX = prepArithmExpr(X);
  const rY = prepArithmExpr(Y);
  return [...doBinaryArithm(rOpPos, rOp, rX, rY), new RestComment({ rest_binaryarithm }, '{"rest_binaryarithm":{}}')];
}
export function prepBinaryCmd(binarycmd: IBinaryCmd | null): ISyntaxTreeNode {
  logg("prepBinaryCmd");
  if (!binarycmd) {
    return [new RestComment({ empty_binarycmd: binarycmd }, '{"empty_binarycmd":null}')];
  }
  const { OpPos, Op, X, Y, ...rest_binarycmd } = binarycmd;
  const rOpPos = prepPos(OpPos);
  const rOp = prepBinCmdOperator(Op);
  const rX = prepStmt(X);
  const rY = prepStmt(Y);
  return [...doBinaryCmd(rOpPos, rOp, rX, rY), new RestComment({ rest_binarycmd }, '{"rest_binarycmd":{}}')];
}
export function prepBinaryTest(binarytest: IBinaryTest | null): ISyntaxTreeNode {
  logg("prepBinaryTest");
  if (!binarytest) {
    return [new RestComment({ empty_binarytest: binarytest }, '{"empty_binarytest":null}')];
  }
  const { OpPos, Op, X, Y, ...rest_binarytest } = binarytest;
  const rOpPos = prepPos(OpPos);
  const rOp = prepBinTestOperator(Op);
  const rX = prepTestExpr(X);
  const rY = prepTestExpr(Y);
  return [...doBinaryTest(rOpPos, rOp, rX, rY), new RestComment({ rest_binarytest }, '{"rest_binarytest":{}}')];
}
export function prepBlock(block: IBlock | null): ISyntaxTreeNode {
  logg("prepBlock");
  if (!block) {
    return [new RestComment({ empty_block: block }, '{"empty_block":null}')];
  }
  const { Lbrace, Rbrace, StmtList, Last, ...rest_block } = block;
  const rLbrace = prepPos(Lbrace);
  const rRbrace = prepPos(Rbrace);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  return [...doBlock(rLbrace, rRbrace, rStmtList, rLast), new RestComment({ rest_block }, '{"rest_block":{}}')];
}
export function prepBraceExp(braceexp: IBraceExp | null): ISyntaxTreeNode {
  logg("prepBraceExp");
  if (!braceexp) {
    return [new RestComment({ empty_braceexp: braceexp }, '{"empty_braceexp":null}')];
  }
  const { Sequence, Chars, Elems, ...rest_braceexp } = braceexp;
  const rSequence = prepboolean(Sequence);
  const rChars = prepboolean(Chars);
  const rElems = prepWords(Elems);
  return [...doBraceExp(rSequence, rChars, rElems), new RestComment({ rest_braceexp }, '{"rest_braceexp":{}}')];
}
export function prepCStyleLoop(cstyleloop: ICStyleLoop | null): ISyntaxTreeNode {
  logg("prepCStyleLoop");
  if (!cstyleloop) {
    return [new RestComment({ empty_cstyleloop: cstyleloop }, '{"empty_cstyleloop":null}')];
  }
  const { Lparen, Rparen, Init, Cond, Post, ...rest_cstyleloop } = cstyleloop;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rInit = prepArithmExpr(Init);
  const rCond = prepArithmExpr(Cond);
  const rPost = prepArithmExpr(Post);
  // tslint:disable-next-line:max-line-length
  return [...doCStyleLoop(rLparen, rRparen, rInit, rCond, rPost), new RestComment({ rest_cstyleloop }, '{"rest_cstyleloop":{}}')];
}
export function prepCallExpr(callexpr: ICallExpr | null): ISyntaxTreeNode {
  logg("prepCallExpr");
  if (!callexpr) {
    return [new RestComment({ empty_callexpr: callexpr }, '{"empty_callexpr":null}')];
  }
  const { Assigns, Args, ...rest_callexpr } = callexpr;
  const rAssigns = prepAssigns(Assigns);
  const rArgs = prepWords(Args);
  return [...doCallExpr(rAssigns, rArgs), new RestComment({ rest_callexpr }, '{"rest_callexpr":{}}')];
}
export function prepCaseClause(caseclause: ICaseClause | null): ISyntaxTreeNode {
  logg("prepCaseClause");
  if (!caseclause) {
    return [new RestComment({ empty_caseclause: caseclause }, '{"empty_caseclause":null}')];
  }
  const { Case, Esac, Word, Items, Last, ...rest_caseclause } = caseclause;
  const rCase = prepPos(Case);
  const rEsac = prepPos(Esac);
  const rWord = prepWord(Word);
  const rItems = prepCaseItems(Items);
  const rLast = prepComments(Last);
  return [...doCaseClause(rCase, rEsac, rWord, rItems, rLast), new RestComment({ rest_caseclause }, '{"rest_caseclause":{}}')];
}
export function prepCaseItem(caseitem: ICaseItem | null): ISyntaxTreeNode {
  logg("prepCaseItem");
  if (!caseitem) {
    return [new RestComment({ empty_caseitem: caseitem }, '{"empty_caseitem":null}')];
  }
  const { Op, OpPos, Comments, Patterns, StmtList, Last, ...rest_caseitem } = caseitem;
  const rOp = prepCaseOperator(Op);
  const rOpPos = prepPos(OpPos);
  const rComments = prepComments(Comments);
  const rPatterns = prepWords(Patterns);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  // tslint:disable-next-line:max-line-length
  return [...doCaseItem(rOp, rOpPos, rComments, rPatterns, rStmtList, rLast), new RestComment({ rest_caseitem }, '{"rest_caseitem":{}}')];
}
export function prepCmdSubst(cmdsubst: ICmdSubst | null): ISyntaxTreeNode {
  logg("prepCmdSubst");
  if (!cmdsubst) {
    return [new RestComment({ empty_cmdsubst: cmdsubst }, '{"empty_cmdsubst":null}')];
  }
  const { Left, Right, StmtList, Last, TempFile, ReplyVar, ...rest_cmdsubst } = cmdsubst;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  const rTempFile = prepboolean(TempFile);
  const rReplyVar = prepboolean(ReplyVar);
  // tslint:disable-next-line:max-line-length
  return [...doCmdSubst(rLeft, rRight, rStmtList, rLast, rTempFile, rReplyVar), new RestComment({ rest_cmdsubst }, '{"rest_cmdsubst":{}}')];
}
export function prepCommand(command: ICommand | null): ISyntaxTreeNode {
  logg("prepCommand");
  if (!command) {
    return [new RestComment({ empty_command: command }, '{"empty_command":null}')];
  }
  switch (syntax.NodeType(command)) {
    case "CallExpr":
      return prepCallExpr(command as ICallExpr);
    case "IfClause":
      return prepIfClause(command as IIfClause);
    case "WhileClause":
      return prepWhileClause(command as IWhileClause);
    case "ForClause":
      return prepForClause(command as IForClause);
    case "CaseClause":
      return prepCaseClause(command as ICaseClause);
    case "Block":
      return prepBlock(command as IBlock);
    case "Subshell":
      return prepSubshell(command as ISubshell);
    case "BinaryCmd":
      return prepBinaryCmd(command as IBinaryCmd);
    case "FuncDecl":
      return prepFuncDecl(command as IFuncDecl);
    case "ArithmCmd":
      return prepArithmCmd(command as IArithmCmd);
    case "TestClause":
      return prepTestClause(command as ITestClause);
    case "DeclClause":
      return prepDeclClause(command as IDeclClause);
    case "LetClause":
      return prepLetClause(command as ILetClause);
    case "TimeClause":
      return prepTimeClause(command as ITimeClause);
    case "CoprocClause":
      return prepCoprocClause(command as ICoprocClause);
    default:
      return [new RestComment({ unknown_command: command })];
  }
}
export function prepComment(comment: IComment | null): ISyntaxTreeNode {
  logg("prepComment");
  if (!comment) {
    return [new RestComment({ empty_comment: comment }, '{"empty_comment":null}')];
  }
  const { Hash, Text, ...rest_comment } = comment;
  const rHash = prepPos(Hash);
  const rText = prepstring(Text);
  return [...doComment(rHash, rText), new RestComment({ rest_comment }, '{"rest_comment":{}}')];
}
export function prepCoprocClause(coprocclause: ICoprocClause | null): ISyntaxTreeNode {
  logg("prepCoprocClause");
  if (!coprocclause) {
    return [new RestComment({ empty_coprocclause: coprocclause }, '{"empty_coprocclause":null}')];
  }
  const { Coproc, Name, Stmt, ...rest_coprocclause } = coprocclause;
  const rCoproc = prepPos(Coproc);
  const rName = prepWord(Name);
  const rStmt = prepStmt(Stmt);
  return [...doCoprocClause(rCoproc, rName, rStmt), new RestComment({ rest_coprocclause }, '{"rest_coprocclause":{}}')];
}
export function prepDblQuoted(dblquoted: IDblQuoted | null): ISyntaxTreeNode {
  logg("prepDblQuoted");
  if (!dblquoted) {
    return [new RestComment({ empty_dblquoted: dblquoted }, '{"empty_dblquoted":null}')];
  }
  const { Position, Dollar, Parts, ...rest_dblquoted } = dblquoted;
  const rPosition = prepPos(Position);
  const rDollar = prepboolean(Dollar);
  const rParts = prepWordParts(Parts);
  return [...doDblQuoted(rPosition, rDollar, rParts), new RestComment({ rest_dblquoted }, '{"rest_dblquoted":{}}')];
}
export function prepDeclClause(declclause: IDeclClause | null): ISyntaxTreeNode {
  logg("prepDeclClause");
  if (!declclause) {
    return [new RestComment({ empty_declclause: declclause }, '{"empty_declclause":null}')];
  }
  const { Variant, Opts, Assigns, ...rest_declclause } = declclause;
  const rVariant = prepLit(Variant);
  const rOpts = prepWords(Opts);
  const rAssigns = prepAssigns(Assigns);
  return [...doDeclClause(rVariant, rOpts, rAssigns), new RestComment({ rest_declclause }, '{"rest_declclause":{}}')];
}
export function prepExtGlob(extglob: IExtGlob | null): ISyntaxTreeNode {
  logg("prepExtGlob");
  if (!extglob) {
    return [new RestComment({ empty_extglob: extglob }, '{"empty_extglob":null}')];
  }
  const { OpPos, Op, Pattern, ...rest_extglob } = extglob;
  const rOpPos = prepPos(OpPos);
  const rOp = prepGlobOperator(Op);
  const rPattern = prepLit(Pattern);
  return [...doExtGlob(rOpPos, rOp, rPattern), new RestComment({ rest_extglob }, '{"rest_extglob":{}}')];
}
export function prepFile(file: IFile | null): ISyntaxTreeNode {
  logg("prepFile");
  if (!file) {
    return [new RestComment({ empty_file: file }, '{"empty_file":null}')];
  }
  const { Name, StmtList, Last, ...rest_file } = file;
  const rName = prepstring(Name);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  return [...doFile(rName, rStmtList, rLast), new RestComment({ rest_file }, '{"rest_file":{}}')];
}
export function prepForClause(forclause: IForClause | null): ISyntaxTreeNode {
  logg("prepForClause");
  if (!forclause) {
    return [new RestComment({ empty_forclause: forclause }, '{"empty_forclause":null}')];
  }
  const { ForPos, DoPos, DonePos, Select, Loop, Do, DoLast, ...rest_forclause } = forclause;
  const rForPos = prepPos(ForPos);
  const rDoPos = prepPos(DoPos);
  const rDonePos = prepPos(DonePos);
  const rSelect = prepboolean(Select);
  const rLoop = prepLoop(Loop);
  const rDo = prepStmtList(Do);
  const rDoLast = prepComments(DoLast);
  // tslint:disable-next-line:max-line-length
  return [...doForClause(rForPos, rDoPos, rDonePos, rSelect, rLoop, rDo, rDoLast), new RestComment({ rest_forclause }, '{"rest_forclause":{}}')];
}
export function prepFuncDecl(funcdecl: IFuncDecl | null): ISyntaxTreeNode {
  logg("prepFuncDecl");
  if (!funcdecl) {
    return [new RestComment({ empty_funcdecl: funcdecl }, '{"empty_funcdecl":null}')];
  }
  const { Position, RsrvWord, Name, Body, ...rest_funcdecl } = funcdecl;
  const rPosition = prepPos(Position);
  const rRsrvWord = prepboolean(RsrvWord);
  const rName = prepLit(Name);
  const rBody = prepStmt(Body);
  return [...doFuncDecl(rPosition, rRsrvWord, rName, rBody), new RestComment({ rest_funcdecl }, '{"rest_funcdecl":{}}')];
}
export function prepIfClause(ifclause: IIfClause | null): ISyntaxTreeNode {
  logg("prepIfClause");
  if (!ifclause) {
    return [new RestComment({ empty_ifclause: ifclause }, '{"empty_ifclause":null}')];
  }
  const { Position, ThenPos, FiPos, Cond, CondLast, Then, ThenLast, Else, Last, ...rest_ifclause } = ifclause;
  const rPosition = prepPos(Position);
  const rThenPos = prepPos(ThenPos);
  const rFiPos = prepPos(FiPos);
  const rCond = prepStmtList(Cond);
  const rCondLast = prepComments(CondLast);
  const rThen = prepStmtList(Then);
  const rThenLast = prepComments(ThenLast);
  const rElse = prepIfClause(Else);
  const rLast = prepComments(Last);
  // tslint:disable-next-line:max-line-length
  return [...doIfClause(rPosition, rThenPos, rFiPos, rCond, rCondLast, rThen, rThenLast, rElse, rLast), new RestComment({ rest_ifclause }, '{"rest_ifclause":{}}')];
}
export function prepLetClause(letclause: ILetClause | null): ISyntaxTreeNode {
  logg("prepLetClause");
  if (!letclause) {
    return [new RestComment({ empty_letclause: letclause }, '{"empty_letclause":null}')];
  }
  const { Let, Exprs, ...rest_letclause } = letclause;
  const rLet = prepPos(Let);
  const rExprs = prepArithmExprs(Exprs);
  return [...doLetClause(rLet, rExprs), new RestComment({ rest_letclause }, '{"rest_letclause":{}}')];
}
export function prepLit(lit: ILit | null): ISyntaxTreeNode {
  logg("prepLit");
  if (!lit) {
    return [new RestComment({ empty_lit: lit }, '{"empty_lit":null}')];
  }
  const { ValuePos, ValueEnd, Value, ...rest_lit } = lit;
  const rValuePos = prepPos(ValuePos);
  const rValueEnd = prepPos(ValueEnd);
  const rValue = prepstring(Value);
  return [...doLit(rValuePos, rValueEnd, rValue), new RestComment({ rest_lit }, '{"rest_lit":{}}')];
}
export function prepLoop(loop: ILoop | null): ISyntaxTreeNode {
  logg("prepLoop");
  if (!loop) {
    return [new RestComment({ empty_loop: loop }, '{"empty_loop":null}')];
  }
  switch (syntax.NodeType(loop)) {
    case "WordIter":
      return prepWordIter(loop as IWordIter);
    case "CStyleLoop":
      return prepCStyleLoop(loop as ICStyleLoop);
    default:
      return [new RestComment({ unknown_loop: loop })];
  }
}
export function prepParamExp(paramexp: IParamExp | null): ISyntaxTreeNode {
  logg("prepParamExp");
  if (!paramexp) {
    return [new RestComment({ empty_paramexp: paramexp }, '{"empty_paramexp":null}')];
  }
  // tslint:disable-next-line:max-line-length
  const { Dollar, Rbrace, Short, Excl, Length, Width, Param, Index, Slice, Repl, Names, Exp, ...rest_paramexp } = paramexp;
  const rDollar = prepPos(Dollar);
  const rRbrace = prepPos(Rbrace);
  const rShort = prepboolean(Short);
  const rExcl = prepboolean(Excl);
  const rLength = prepboolean(Length);
  const rWidth = prepboolean(Width);
  const rParam = prepLit(Param);
  const rIndex = prepArithmExpr(Index);
  const rSlice = prepSlice(Slice);
  const rRepl = prepReplace(Repl);
  const rNames = prepParNamesOperator(Names);
  const rExp = prepExpansion(Exp);
  // tslint:disable-next-line:max-line-length
  return [...doParamExp(rDollar, rRbrace, rShort, rExcl, rLength, rWidth, rParam, rIndex, rSlice, rRepl, rNames, rExp), new RestComment({ rest_paramexp }, '{"rest_paramexp":{}}')];
}
export function prepParenArithm(parenarithm: IParenArithm | null): ISyntaxTreeNode {
  logg("prepParenArithm");
  if (!parenarithm) {
    return [new RestComment({ empty_parenarithm: parenarithm }, '{"empty_parenarithm":null}')];
  }
  const { Lparen, Rparen, X, ...rest_parenarithm } = parenarithm;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rX = prepArithmExpr(X);
  return [...doParenArithm(rLparen, rRparen, rX), new RestComment({ rest_parenarithm }, '{"rest_parenarithm":{}}')];
}
export function prepParenTest(parentest: IParenTest | null): ISyntaxTreeNode {
  logg("prepParenTest");
  if (!parentest) {
    return [new RestComment({ empty_parentest: parentest }, '{"empty_parentest":null}')];
  }
  const { Lparen, Rparen, X, ...rest_parentest } = parentest;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rX = prepTestExpr(X);
  return [...doParenTest(rLparen, rRparen, rX), new RestComment({ rest_parentest }, '{"rest_parentest":{}}')];
}
export function prepProcSubst(procsubst: IProcSubst | null): ISyntaxTreeNode {
  logg("prepProcSubst");
  if (!procsubst) {
    return [new RestComment({ empty_procsubst: procsubst }, '{"empty_procsubst":null}')];
  }
  const { OpPos, Rparen, Op, Stmts, Last, ...rest_procsubst } = procsubst;
  const rOpPos = prepPos(OpPos);
  const rRparen = prepPos(Rparen);
  const rOp = prepProcOperator(Op);
  const rStmts = prepStmts(Stmts);
  const rLast = prepComments(Last);
  return [...doProcSubst(rOpPos, rRparen, rOp, rStmts, rLast), new RestComment({ rest_procsubst }, '{"rest_procsubst":{}}')];
}
export function prepRedirect(redirect: IRedirect | null): ISyntaxTreeNode {
  logg("prepRedirect");
  if (!redirect) {
    return [new RestComment({ empty_redirect: redirect }, '{"empty_redirect":null}')];
  }
  const { OpPos, Op, N, Word, Hdoc, ...rest_redirect } = redirect;
  const rOpPos = prepPos(OpPos);
  const rOp = prepRedirOperator(Op);
  const rN = prepLit(N);
  const rWord = prepWord(Word);
  const rHdoc = prepWord(Hdoc);
  return [...doRedirect(rOpPos, rOp, rN, rWord, rHdoc), new RestComment({ rest_redirect }, '{"rest_redirect":{}}')];
}
export function prepSglQuoted(sglquoted: ISglQuoted | null): ISyntaxTreeNode {
  logg("prepSglQuoted");
  if (!sglquoted) {
    return [new RestComment({ empty_sglquoted: sglquoted }, '{"empty_sglquoted":null}')];
  }
  const { Left, Right, Dollar, Value, ...rest_sglquoted } = sglquoted;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rDollar = prepboolean(Dollar);
  const rValue = prepstring(Value);
  return [...doSglQuoted(rLeft, rRight, rDollar, rValue), new RestComment({ rest_sglquoted }, '{"rest_sglquoted":{}}')];
}
export function prepStmt(stmt: IStmt | null): ISyntaxTreeNode {
  logg("prepStmt");
  if (!stmt) {
    return [new RestComment({ empty_stmt: stmt }, '{"empty_stmt":null}')];
  }
  const { Comments, Cmd, Position, Semicolon, Negated, Background, Coprocess, Redirs, ...rest_stmt } = stmt;
  const rComments = prepComments(Comments);
  const rCmd = prepCommand(Cmd);
  const rPosition = prepPos(Position);
  const rSemicolon = prepPos(Semicolon);
  const rNegated = prepboolean(Negated);
  const rBackground = prepboolean(Background);
  const rCoprocess = prepboolean(Coprocess);
  const rRedirs = prepRedirects(Redirs);
  // tslint:disable-next-line:max-line-length
  return [...doStmt(rComments, rCmd, rPosition, rSemicolon, rNegated, rBackground, rCoprocess, rRedirs), new RestComment({ rest_stmt }, '{"rest_stmt":{}}')];
}
export function prepStmtList(stmtlist: IStmtList | null): ISyntaxTreeNode {
  logg("prepStmtList");
  if (!stmtlist) {
    return [new RestComment({ empty_stmtlist: stmtlist }, '{"empty_stmtlist":null}')];
  }
  const { Stmts, Last, ...rest_stmtlist } = stmtlist;
  const rStmts = prepStmts(Stmts);
  const rLast = prepComments(Last);
  return [...doStmtList(rStmts, rLast), new RestComment({ rest_stmtlist }, '{"rest_stmtlist":{}}')];
}
export function prepSubshell(subshell: ISubshell | null): ISyntaxTreeNode {
  logg("prepSubshell");
  if (!subshell) {
    return [new RestComment({ empty_subshell: subshell }, '{"empty_subshell":null}')];
  }
  const { Lparen, Rparen, StmtList, Last, ...rest_subshell } = subshell;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  return [...doSubshell(rLparen, rRparen, rStmtList, rLast), new RestComment({ rest_subshell }, '{"rest_subshell":{}}')];
}
export function prepTestClause(testclause: ITestClause | null): ISyntaxTreeNode {
  logg("prepTestClause");
  if (!testclause) {
    return [new RestComment({ empty_testclause: testclause }, '{"empty_testclause":null}')];
  }
  const { Left, Right, X, ...rest_testclause } = testclause;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rX = prepTestExpr(X);
  return [...doTestClause(rLeft, rRight, rX), new RestComment({ rest_testclause }, '{"rest_testclause":{}}')];
}
export function prepTestExpr(testexpr: ITestExpr | null): ISyntaxTreeNode {
  logg("prepTestExpr");
  if (!testexpr) {
    return [new RestComment({ empty_testexpr: testexpr }, '{"empty_testexpr":null}')];
  }
  switch (syntax.NodeType(testexpr)) {
    case "BinaryTest":
      return prepBinaryTest(testexpr as IBinaryTest);
    case "UnaryTest":
      return prepUnaryTest(testexpr as IUnaryTest);
    case "ParenTest":
      return prepParenTest(testexpr as IParenTest);
    case "Word":
      return prepWord(testexpr as IWord);
    default:
      return [new RestComment({ unknown_testexpr: testexpr })];
  }
}
export function prepTimeClause(timeclause: ITimeClause | null): ISyntaxTreeNode {
  logg("prepTimeClause");
  if (!timeclause) {
    return [new RestComment({ empty_timeclause: timeclause }, '{"empty_timeclause":null}')];
  }
  const { Time, PosixFormat, Stmt, ...rest_timeclause } = timeclause;
  const rTime = prepPos(Time);
  const rPosixFormat = prepboolean(PosixFormat);
  const rStmt = prepStmt(Stmt);
  return [...doTimeClause(rTime, rPosixFormat, rStmt), new RestComment({ rest_timeclause }, '{"rest_timeclause":{}}')];
}
export function prepUnaryArithm(unaryarithm: IUnaryArithm | null): ISyntaxTreeNode {
  logg("prepUnaryArithm");
  if (!unaryarithm) {
    return [new RestComment({ empty_unaryarithm: unaryarithm }, '{"empty_unaryarithm":null}')];
  }
  const { OpPos, Op, Post, X, ...rest_unaryarithm } = unaryarithm;
  const rOpPos = prepPos(OpPos);
  const rOp = prepUnAritOperator(Op);
  const rPost = prepboolean(Post);
  const rX = prepArithmExpr(X);
  return [...doUnaryArithm(rOpPos, rOp, rPost, rX), new RestComment({ rest_unaryarithm }, '{"rest_unaryarithm":{}}')];
}
export function prepUnaryTest(unarytest: IUnaryTest | null): ISyntaxTreeNode {
  logg("prepUnaryTest");
  if (!unarytest) {
    return [new RestComment({ empty_unarytest: unarytest }, '{"empty_unarytest":null}')];
  }
  const { OpPos, Op, X, ...rest_unarytest } = unarytest;
  const rOpPos = prepPos(OpPos);
  const rOp = prepUnTestOperator(Op);
  const rX = prepTestExpr(X);
  return [...doUnaryTest(rOpPos, rOp, rX), new RestComment({ rest_unarytest }, '{"rest_unarytest":{}}')];
}
export function prepWhileClause(whileclause: IWhileClause | null): ISyntaxTreeNode {
  logg("prepWhileClause");
  if (!whileclause) {
    return [new RestComment({ empty_whileclause: whileclause }, '{"empty_whileclause":null}')];
  }
  const { WhilePos, DoPos, DonePos, Until, Cond, CondLast, Do, DoLast, ...rest_whileclause } = whileclause;
  const rWhilePos = prepPos(WhilePos);
  const rDoPos = prepPos(DoPos);
  const rDonePos = prepPos(DonePos);
  const rUntil = prepboolean(Until);
  const rCond = prepStmtList(Cond);
  const rCondLast = prepComments(CondLast);
  const rDo = prepStmtList(Do);
  const rDoLast = prepComments(DoLast);
  // tslint:disable-next-line:max-line-length
  return [...doWhileClause(rWhilePos, rDoPos, rDonePos, rUntil, rCond, rCondLast, rDo, rDoLast), new RestComment({ rest_whileclause }, '{"rest_whileclause":{}}')];
}
export function prepWord(word: IWord | null): ISyntaxTreeNode {
  logg("prepWord");
  if (!word) {
    return [new RestComment({ empty_word: word }, '{"empty_word":null}')];
  }
  const { Parts, ...rest_word } = word;
  const rParts = prepWordParts(Parts);
  return [...doWord(rParts), new RestComment({ rest_word }, '{"rest_word":{}}')];
}
export function prepWordIter(worditer: IWordIter | null): ISyntaxTreeNode {
  logg("prepWordIter");
  if (!worditer) {
    return [new RestComment({ empty_worditer: worditer }, '{"empty_worditer":null}')];
  }
  const { Name, InPos, Items, ...rest_worditer } = worditer;
  const rName = prepLit(Name);
  const rInPos = prepPos(InPos);
  const rItems = prepWords(Items);
  return [...doWordIter(rName, rInPos, rItems), new RestComment({ rest_worditer }, '{"rest_worditer":{}}')];
}
export function prepWordPart(wordpart: IWordPart | null): ISyntaxTreeNode {
  logg("prepWordPart");
  if (!wordpart) {
    return [new RestComment({ empty_wordpart: wordpart }, '{"empty_wordpart":null}')];
  }
  switch (syntax.NodeType(wordpart)) {
    case "Lit":
      return prepLit(wordpart as ILit);
    case "SglQuoted":
      return prepSglQuoted(wordpart as ISglQuoted);
    case "DblQuoted":
      return prepDblQuoted(wordpart as IDblQuoted);
    case "ParamExp":
      return prepParamExp(wordpart as IParamExp);
    case "CmdSubst":
      return prepCmdSubst(wordpart as ICmdSubst);
    case "ArithmExp":
      return prepArithmExp(wordpart as IArithmExp);
    case "ProcSubst":
      return prepProcSubst(wordpart as IProcSubst);
    case "ExtGlob":
      return prepExtGlob(wordpart as IExtGlob);
    case "BraceExp":
      return prepBraceExp(wordpart as IBraceExp);
    default:
      return [new RestComment({ unknown_wordpart: wordpart })];
  }
}
export function prepArithmExprs(arithmexprs: IArithmExpr[] | null): ISyntaxTreeNode {
  logg("prepArithmExprs");
  if (!arithmexprs) {
    return [new RestComment({ empty_arithmexprs: arithmexprs }, '{"empty_arithmexprs":null}')];
  }
  const res: ISyntaxTreeNode = [];
  arithmexprs.forEach((arithmexpr) => {
    res.push(...prepArithmExpr(arithmexpr));
  });
  return res;
}
export function prepArrayElems(arrayelems: IArrayElem[] | null): ISyntaxTreeNode {
  logg("prepArrayElems");
  if (!arrayelems) {
    return [new RestComment({ empty_arrayelems: arrayelems }, '{"empty_arrayelems":null}')];
  }
  const res: ISyntaxTreeNode = [];
  arrayelems.forEach((arrayelem) => {
    res.push(...prepArrayElem(arrayelem));
  });
  return res;
}
export function prepAssigns(assigns: IAssign[] | null): ISyntaxTreeNode {
  logg("prepAssigns");
  if (!assigns) {
    return [new RestComment({ empty_assigns: assigns }, '{"empty_assigns":null}')];
  }
  const res: ISyntaxTreeNode = [];
  assigns.forEach((assign) => {
    res.push(...prepAssign(assign));
  });
  return res;
}
export function prepCaseItems(caseitems: ICaseItem[] | null): ISyntaxTreeNode {
  logg("prepCaseItems");
  if (!caseitems) {
    return [new RestComment({ empty_caseitems: caseitems }, '{"empty_caseitems":null}')];
  }
  const res: ISyntaxTreeNode = [];
  caseitems.forEach((caseitem) => {
    res.push(...prepCaseItem(caseitem));
  });
  return res;
}
export function prepComments(comments: IComment[] | null): ISyntaxTreeNode {
  logg("prepComments");
  if (!comments) {
    return [new RestComment({ empty_comments: comments }, "{}")];
  }
  const res: ISyntaxTreeNode = [];
  comments.forEach((comment) => {
    res.push(...prepComment(comment));
  });
  return res;
}
export function prepRedirects(redirects: IRedirect[] | null): ISyntaxTreeNode {
  logg("prepRedirects");
  if (!redirects) {
    return [new RestComment({ empty_redirects: redirects }, '{"empty_redirects":null}')];
  }
  const res: ISyntaxTreeNode = [];
  redirects.forEach((redirect) => {
    res.push(...prepRedirect(redirect));
  });
  return res;
}
export function prepStmts(stmts: IStmt[] | null): ISyntaxTreeNode {
  logg("prepStmts");
  if (!stmts) {
    return [new RestComment({ empty_stmts: stmts }, '{"empty_stmts":null}')];
  }
  const res: ISyntaxTreeNode = [];
  stmts.forEach((stmt) => {
    res.push(...prepStmt(stmt));
  });
  return res;
}
export function prepWords(words: IWord[] | null): ISyntaxTreeNode {
  logg("prepWords");
  if (!words) {
    return [new RestComment({ empty_words: words }, '{"empty_words":null}')];
  }
  const res: ISyntaxTreeNode = [];
  words.forEach((word) => {
    res.push(...prepWord(word));
  });
  return res;
}
export function prepWordParts(wordparts: IWordPart[] | null): ISyntaxTreeNode {
  logg("prepWordParts");
  if (!wordparts) {
    return [new RestComment({ empty_wordparts: wordparts }, '{"empty_wordparts":null}')];
  }
  const res: ISyntaxTreeNode = [];
  wordparts.forEach((wordpart) => {
    res.push(...prepWordPart(wordpart));
  });
  return res;
}
export function prepBinAritOperator(aBinaritoperator: BinAritOperator | null): BinAritOperator | null {
  return aBinaritoperator;
}
export function prepBinCmdOperator(aBincmdoperator: BinCmdOperator | null): BinCmdOperator | null {
  return aBincmdoperator;
}
export function prepBinTestOperator(aBintestoperator: BinTestOperator | null): BinTestOperator | null {
  return aBintestoperator;
}
export function prepboolean(aBoolean: boolean | null): boolean | null {
  return aBoolean;
}
export function prepCaseOperator(aCaseoperator: CaseOperator | null): CaseOperator | null {
  return aCaseoperator;
}
export function prepGlobOperator(aGloboperator: GlobOperator | null): GlobOperator | null {
  return aGloboperator;
}
export function prepExpansion(aExpansion: I_Expansion | null): I_Expansion | null {
  return aExpansion;
}
export function prepPos(aPos: I_Pos | null): I_Pos | null {
  return aPos;
}
export function prepReplace(aReplace: I_Replace | null): I_Replace | null {
  return aReplace;
}
export function prepSlice(aSlice: I_Slice | null): I_Slice | null {
  return aSlice;
}
export function prepParNamesOperator(aParnamesoperator: ParNamesOperator | null): ParNamesOperator | null {
  return aParnamesoperator;
}
export function prepProcOperator(aProcoperator: ProcOperator | null): ProcOperator | null {
  return aProcoperator;
}
export function prepRedirOperator(aRediroperator: RedirOperator | null): RedirOperator | null {
  return aRediroperator;
}
export function prepstring(aString: string | null): string | null {
  return aString;
}
export function prepUnAritOperator(aUnaritoperator: UnAritOperator | null): UnAritOperator | null {
  return aUnaritoperator;
}
export function prepUnTestOperator(aUntestoperator: UnTestOperator | null): UnTestOperator | null {
  return aUntestoperator;
}
