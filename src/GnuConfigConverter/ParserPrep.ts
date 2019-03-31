/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { syntax } from "mvdan-sh";
import { comm } from "./comm";
import { logg } from "./logg";
// tslint:disable-next-line:max-line-length
import { doArithmCmd, doArithmExp, doArrayElem, doArrayExpr, doAssign, doBinaryArithm, doBinaryCmd, doBinaryTest, doBlock, doBraceExp, doCallExpr, doCaseClause, doCaseItem, doCmdSubst, doComment, doCoprocClause, doCStyleLoop, doDblQuoted, doDeclClause, doExtGlob, doFile, doForClause, doFuncDecl, doIfClause, doLetClause, doLit, doParamExp, doParenArithm, doParenTest, doProcSubst, doRedirect, doSglQuoted, doStmt, doStmtList, doSubshell, doTestClause, doTimeClause, doUnaryArithm, doUnaryTest, doWhileClause, doWord, doWordIter } from "./ParserDo";
// tslint:disable-next-line:max-line-length
import { BinAritOperator, BinCmdOperator, BinTestOperator, CaseOperator, GlobOperator, I_Expansion, I_Pos, I_Replace, I_Slice, IArithmCmd, IArithmExp, IArithmExpr, IArrayElem, IArrayExpr, IAssign, IBinaryArithm, IBinaryCmd, IBinaryTest, IBlock, IBraceExp, ICallExpr, ICaseClause, ICaseItem, ICmdSubst, ICommand, IComment, ICoprocClause, ICStyleLoop, IDblQuoted, IDeclClause, IExtGlob, IFile, IForClause, IFuncDecl, IIfClause, ILetClause, ILit, ILoop, IParamExp, IParenArithm, IParenTest, IProcSubst, IRedirect, ISglQuoted, IStmt, IStmtList, ISubshell, ITestClause, ITestExpr, ITimeClause, IUnaryArithm, IUnaryTest, IWhileClause, IWord, IWordIter, IWordPart, ParNamesOperator, ProcOperator, RedirOperator, UnAritOperator, UnTestOperator } from "./ParserTypes";

export function prepArithmCmd(arithmcmd: IArithmCmd | null): string[] {
  logg("prepArithmCmd");
  if (!arithmcmd) {
    return [comm({ empty_arithmcmd: arithmcmd }, '{"empty_arithmcmd":null}')];
  }
  const { Left, Right, Unsigned, X, ...rest_arithmcmd } = arithmcmd;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rUnsigned = prepboolean(Unsigned);
  const rX = prepArithmExpr(X);
  return [...doArithmCmd(rLeft, rRight, rUnsigned, rX), comm({ rest_arithmcmd }, '{"rest_arithmcmd":{}}')];
}
export function prepArithmExp(arithmexp: IArithmExp | null): string[] {
  logg("prepArithmExp");
  if (!arithmexp) {
    return [comm({ empty_arithmexp: arithmexp }, '{"empty_arithmexp":null}')];
  }
  const { Left, Right, Bracket, Unsigned, X, ...rest_arithmexp } = arithmexp;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rBracket = prepboolean(Bracket);
  const rUnsigned = prepboolean(Unsigned);
  const rX = prepArithmExpr(X);
  return [...doArithmExp(rLeft, rRight, rBracket, rUnsigned, rX), comm({ rest_arithmexp }, '{"rest_arithmexp":{}}')];
}
export function prepArithmExpr(arithmexpr: IArithmExpr | null): string[] {
  logg("prepArithmExpr");
  if (!arithmexpr) {
    return [comm({ empty_arithmexpr: arithmexpr }, '{"empty_arithmexpr":null}')];
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
      return [comm({ unknown_arithmexpr: arithmexpr })];
  }
}
export function prepArrayElem(arrayelem: IArrayElem | null): string[] {
  logg("prepArrayElem");
  if (!arrayelem) {
    return [comm({ empty_arrayelem: arrayelem }, '{"empty_arrayelem":null}')];
  }
  const { Index, Value, Comments, ...rest_arrayelem } = arrayelem;
  const rIndex = prepArithmExpr(Index);
  const rValue = prepWord(Value);
  const rComments = prepComments(Comments);
  return [...doArrayElem(rIndex, rValue, rComments), comm({ rest_arrayelem }, '{"rest_arrayelem":{}}')];
}
export function prepArrayExpr(arrayexpr: IArrayExpr | null): string[] {
  logg("prepArrayExpr");
  if (!arrayexpr) {
    return [comm({ empty_arrayexpr: arrayexpr }, '{"empty_arrayexpr":null}')];
  }
  const { Lparen, Rparen, Elems, Last, ...rest_arrayexpr } = arrayexpr;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rElems = prepArrayElems(Elems);
  const rLast = prepComments(Last);
  return [...doArrayExpr(rLparen, rRparen, rElems, rLast), comm({ rest_arrayexpr }, '{"rest_arrayexpr":{}}')];
}
export function prepAssign(assign: IAssign | null): string[] {
  logg("prepAssign");
  if (!assign) {
    return [comm({ empty_assign: assign }, '{"empty_assign":null}')];
  }
  const { Append, Naked, Name, Index, Value, Array, ...rest_assign } = assign;
  const rAppend = prepboolean(Append);
  const rNaked = prepboolean(Naked);
  const rName = prepLit(Name);
  const rIndex = prepArithmExpr(Index);
  const rValue = prepWord(Value);
  const rArray = prepArrayExpr(Array);
  return [...doAssign(rAppend, rNaked, rName, rIndex, rValue, rArray), comm({ rest_assign }, '{"rest_assign":{}}')];
}
export function prepBinaryArithm(binaryarithm: IBinaryArithm | null): string[] {
  logg("prepBinaryArithm");
  if (!binaryarithm) {
    return [comm({ empty_binaryarithm: binaryarithm }, '{"empty_binaryarithm":null}')];
  }
  const { OpPos, Op, X, Y, ...rest_binaryarithm } = binaryarithm;
  const rOpPos = prepPos(OpPos);
  const rOp = prepBinAritOperator(Op);
  const rX = prepArithmExpr(X);
  const rY = prepArithmExpr(Y);
  return [...doBinaryArithm(rOpPos, rOp, rX, rY), comm({ rest_binaryarithm }, '{"rest_binaryarithm":{}}')];
}
export function prepBinaryCmd(binarycmd: IBinaryCmd | null): string[] {
  logg("prepBinaryCmd");
  if (!binarycmd) {
    return [comm({ empty_binarycmd: binarycmd }, '{"empty_binarycmd":null}')];
  }
  const { OpPos, Op, X, Y, ...rest_binarycmd } = binarycmd;
  const rOpPos = prepPos(OpPos);
  const rOp = prepBinCmdOperator(Op);
  const rX = prepStmt(X);
  const rY = prepStmt(Y);
  return [...doBinaryCmd(rOpPos, rOp, rX, rY), comm({ rest_binarycmd }, '{"rest_binarycmd":{}}')];
}
export function prepBinaryTest(binarytest: IBinaryTest | null): string[] {
  logg("prepBinaryTest");
  if (!binarytest) {
    return [comm({ empty_binarytest: binarytest }, '{"empty_binarytest":null}')];
  }
  const { OpPos, Op, X, Y, ...rest_binarytest } = binarytest;
  const rOpPos = prepPos(OpPos);
  const rOp = prepBinTestOperator(Op);
  const rX = prepTestExpr(X);
  const rY = prepTestExpr(Y);
  return [...doBinaryTest(rOpPos, rOp, rX, rY), comm({ rest_binarytest }, '{"rest_binarytest":{}}')];
}
export function prepBlock(block: IBlock | null): string[] {
  logg("prepBlock");
  if (!block) {
    return [comm({ empty_block: block }, '{"empty_block":null}')];
  }
  const { Lbrace, Rbrace, StmtList, Last, ...rest_block } = block;
  const rLbrace = prepPos(Lbrace);
  const rRbrace = prepPos(Rbrace);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  return [...doBlock(rLbrace, rRbrace, rStmtList, rLast), comm({ rest_block }, '{"rest_block":{}}')];
}
export function prepBraceExp(braceexp: IBraceExp | null): string[] {
  logg("prepBraceExp");
  if (!braceexp) {
    return [comm({ empty_braceexp: braceexp }, '{"empty_braceexp":null}')];
  }
  const { Sequence, Chars, Elems, ...rest_braceexp } = braceexp;
  const rSequence = prepboolean(Sequence);
  const rChars = prepboolean(Chars);
  const rElems = prepWords(Elems);
  return [...doBraceExp(rSequence, rChars, rElems), comm({ rest_braceexp }, '{"rest_braceexp":{}}')];
}
export function prepCStyleLoop(cstyleloop: ICStyleLoop | null): string[] {
  logg("prepCStyleLoop");
  if (!cstyleloop) {
    return [comm({ empty_cstyleloop: cstyleloop }, '{"empty_cstyleloop":null}')];
  }
  const { Lparen, Rparen, Init, Cond, Post, ...rest_cstyleloop } = cstyleloop;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rInit = prepArithmExpr(Init);
  const rCond = prepArithmExpr(Cond);
  const rPost = prepArithmExpr(Post);
  // tslint:disable-next-line:max-line-length
  return [...doCStyleLoop(rLparen, rRparen, rInit, rCond, rPost), comm({ rest_cstyleloop }, '{"rest_cstyleloop":{}}')];
}
export function prepCallExpr(callexpr: ICallExpr | null): string[] {
  logg("prepCallExpr");
  if (!callexpr) {
    return [comm({ empty_callexpr: callexpr }, '{"empty_callexpr":null}')];
  }
  const { Assigns, Args, ...rest_callexpr } = callexpr;
  const rAssigns = prepAssigns(Assigns);
  const rArgs = prepWords(Args);
  return [...doCallExpr(rAssigns, rArgs), comm({ rest_callexpr }, '{"rest_callexpr":{}}')];
}
export function prepCaseClause(caseclause: ICaseClause | null): string[] {
  logg("prepCaseClause");
  if (!caseclause) {
    return [comm({ empty_caseclause: caseclause }, '{"empty_caseclause":null}')];
  }
  const { Case, Esac, Word, Items, Last, ...rest_caseclause } = caseclause;
  const rCase = prepPos(Case);
  const rEsac = prepPos(Esac);
  const rWord = prepWord(Word);
  const rItems = prepCaseItems(Items);
  const rLast = prepComments(Last);
  return [...doCaseClause(rCase, rEsac, rWord, rItems, rLast), comm({ rest_caseclause }, '{"rest_caseclause":{}}')];
}
export function prepCaseItem(caseitem: ICaseItem | null): string[] {
  logg("prepCaseItem");
  if (!caseitem) {
    return [comm({ empty_caseitem: caseitem }, '{"empty_caseitem":null}')];
  }
  const { Op, OpPos, Comments, Patterns, StmtList, Last, ...rest_caseitem } = caseitem;
  const rOp = prepCaseOperator(Op);
  const rOpPos = prepPos(OpPos);
  const rComments = prepComments(Comments);
  const rPatterns = prepWords(Patterns);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  // tslint:disable-next-line:max-line-length
  return [...doCaseItem(rOp, rOpPos, rComments, rPatterns, rStmtList, rLast), comm({ rest_caseitem }, '{"rest_caseitem":{}}')];
}
export function prepCmdSubst(cmdsubst: ICmdSubst | null): string[] {
  logg("prepCmdSubst");
  if (!cmdsubst) {
    return [comm({ empty_cmdsubst: cmdsubst }, '{"empty_cmdsubst":null}')];
  }
  const { Left, Right, StmtList, Last, TempFile, ReplyVar, ...rest_cmdsubst } = cmdsubst;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  const rTempFile = prepboolean(TempFile);
  const rReplyVar = prepboolean(ReplyVar);
  // tslint:disable-next-line:max-line-length
  return [...doCmdSubst(rLeft, rRight, rStmtList, rLast, rTempFile, rReplyVar), comm({ rest_cmdsubst }, '{"rest_cmdsubst":{}}')];
}
export function prepCommand(command: ICommand | null): string[] {
  logg("prepCommand");
  if (!command) {
    return [comm({ empty_command: command }, '{"empty_command":null}')];
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
      return [comm({ unknown_command: command })];
  }
}
export function prepComment(comment: IComment | null): string[] {
  logg("prepComment");
  if (!comment) {
    return [comm({ empty_comment: comment }, '{"empty_comment":null}')];
  }
  const { Hash, Text, ...rest_comment } = comment;
  const rHash = prepPos(Hash);
  const rText = prepstring(Text);
  return [...doComment(rHash, rText), comm({ rest_comment }, '{"rest_comment":{}}')];
}
export function prepCoprocClause(coprocclause: ICoprocClause | null): string[] {
  logg("prepCoprocClause");
  if (!coprocclause) {
    return [comm({ empty_coprocclause: coprocclause }, '{"empty_coprocclause":null}')];
  }
  const { Coproc, Name, Stmt, ...rest_coprocclause } = coprocclause;
  const rCoproc = prepPos(Coproc);
  const rName = prepWord(Name);
  const rStmt = prepStmt(Stmt);
  return [...doCoprocClause(rCoproc, rName, rStmt), comm({ rest_coprocclause }, '{"rest_coprocclause":{}}')];
}
export function prepDblQuoted(dblquoted: IDblQuoted | null): string[] {
  logg("prepDblQuoted");
  if (!dblquoted) {
    return [comm({ empty_dblquoted: dblquoted }, '{"empty_dblquoted":null}')];
  }
  const { Position, Dollar, Parts, ...rest_dblquoted } = dblquoted;
  const rPosition = prepPos(Position);
  const rDollar = prepboolean(Dollar);
  const rParts = prepWordParts(Parts);
  return [...doDblQuoted(rPosition, rDollar, rParts), comm({ rest_dblquoted }, '{"rest_dblquoted":{}}')];
}
export function prepDeclClause(declclause: IDeclClause | null): string[] {
  logg("prepDeclClause");
  if (!declclause) {
    return [comm({ empty_declclause: declclause }, '{"empty_declclause":null}')];
  }
  const { Variant, Opts, Assigns, ...rest_declclause } = declclause;
  const rVariant = prepLit(Variant);
  const rOpts = prepWords(Opts);
  const rAssigns = prepAssigns(Assigns);
  return [...doDeclClause(rVariant, rOpts, rAssigns), comm({ rest_declclause }, '{"rest_declclause":{}}')];
}
export function prepExtGlob(extglob: IExtGlob | null): string[] {
  logg("prepExtGlob");
  if (!extglob) {
    return [comm({ empty_extglob: extglob }, '{"empty_extglob":null}')];
  }
  const { OpPos, Op, Pattern, ...rest_extglob } = extglob;
  const rOpPos = prepPos(OpPos);
  const rOp = prepGlobOperator(Op);
  const rPattern = prepLit(Pattern);
  return [...doExtGlob(rOpPos, rOp, rPattern), comm({ rest_extglob }, '{"rest_extglob":{}}')];
}
export function prepFile(file: IFile | null): string[] {
  logg("prepFile");
  if (!file) {
    return [comm({ empty_file: file }, '{"empty_file":null}')];
  }
  const { Name, StmtList, Last, ...rest_file } = file;
  const rName = prepstring(Name);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  return [...doFile(rName, rStmtList, rLast), comm({ rest_file }, '{"rest_file":{}}')];
}
export function prepForClause(forclause: IForClause | null): string[] {
  logg("prepForClause");
  if (!forclause) {
    return [comm({ empty_forclause: forclause }, '{"empty_forclause":null}')];
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
  return [...doForClause(rForPos, rDoPos, rDonePos, rSelect, rLoop, rDo, rDoLast), comm({ rest_forclause }, '{"rest_forclause":{}}')];
}
export function prepFuncDecl(funcdecl: IFuncDecl | null): string[] {
  logg("prepFuncDecl");
  if (!funcdecl) {
    return [comm({ empty_funcdecl: funcdecl }, '{"empty_funcdecl":null}')];
  }
  const { Position, RsrvWord, Name, Body, ...rest_funcdecl } = funcdecl;
  const rPosition = prepPos(Position);
  const rRsrvWord = prepboolean(RsrvWord);
  const rName = prepLit(Name);
  const rBody = prepStmt(Body);
  return [...doFuncDecl(rPosition, rRsrvWord, rName, rBody), comm({ rest_funcdecl }, '{"rest_funcdecl":{}}')];
}
export function prepIfClause(ifclause: IIfClause | null): string[] {
  logg("prepIfClause");
  if (!ifclause) {
    return [comm({ empty_ifclause: ifclause }, '{"empty_ifclause":null}')];
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
  return [...doIfClause(rPosition, rThenPos, rFiPos, rCond, rCondLast, rThen, rThenLast, rElse, rLast), comm({ rest_ifclause }, '{"rest_ifclause":{}}')];
}
export function prepLetClause(letclause: ILetClause | null): string[] {
  logg("prepLetClause");
  if (!letclause) {
    return [comm({ empty_letclause: letclause }, '{"empty_letclause":null}')];
  }
  const { Let, Exprs, ...rest_letclause } = letclause;
  const rLet = prepPos(Let);
  const rExprs = prepArithmExprs(Exprs);
  return [...doLetClause(rLet, rExprs), comm({ rest_letclause }, '{"rest_letclause":{}}')];
}
export function prepLit(lit: ILit | null): string[] {
  logg("prepLit");
  if (!lit) {
    return [comm({ empty_lit: lit }, '{"empty_lit":null}')];
  }
  const { ValuePos, ValueEnd, Value, ...rest_lit } = lit;
  const rValuePos = prepPos(ValuePos);
  const rValueEnd = prepPos(ValueEnd);
  const rValue = prepstring(Value);
  return [...doLit(rValuePos, rValueEnd, rValue), comm({ rest_lit }, '{"rest_lit":{}}')];
}
export function prepLoop(loop: ILoop | null): string[] {
  logg("prepLoop");
  if (!loop) {
    return [comm({ empty_loop: loop }, '{"empty_loop":null}')];
  }
  switch (syntax.NodeType(loop)) {
    case "WordIter":
      return prepWordIter(loop as IWordIter);
    case "CStyleLoop":
      return prepCStyleLoop(loop as ICStyleLoop);
    default:
      return [comm({ unknown_loop: loop })];
  }
}
export function prepParamExp(paramexp: IParamExp | null): string[] {
  logg("prepParamExp");
  if (!paramexp) {
    return [comm({ empty_paramexp: paramexp }, '{"empty_paramexp":null}')];
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
  return [...doParamExp(rDollar, rRbrace, rShort, rExcl, rLength, rWidth, rParam, rIndex, rSlice, rRepl, rNames, rExp), comm({ rest_paramexp }, '{"rest_paramexp":{}}')];
}
export function prepParenArithm(parenarithm: IParenArithm | null): string[] {
  logg("prepParenArithm");
  if (!parenarithm) {
    return [comm({ empty_parenarithm: parenarithm }, '{"empty_parenarithm":null}')];
  }
  const { Lparen, Rparen, X, ...rest_parenarithm } = parenarithm;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rX = prepArithmExpr(X);
  return [...doParenArithm(rLparen, rRparen, rX), comm({ rest_parenarithm }, '{"rest_parenarithm":{}}')];
}
export function prepParenTest(parentest: IParenTest | null): string[] {
  logg("prepParenTest");
  if (!parentest) {
    return [comm({ empty_parentest: parentest }, '{"empty_parentest":null}')];
  }
  const { Lparen, Rparen, X, ...rest_parentest } = parentest;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rX = prepTestExpr(X);
  return [...doParenTest(rLparen, rRparen, rX), comm({ rest_parentest }, '{"rest_parentest":{}}')];
}
export function prepProcSubst(procsubst: IProcSubst | null): string[] {
  logg("prepProcSubst");
  if (!procsubst) {
    return [comm({ empty_procsubst: procsubst }, '{"empty_procsubst":null}')];
  }
  const { OpPos, Rparen, Op, Stmts, Last, ...rest_procsubst } = procsubst;
  const rOpPos = prepPos(OpPos);
  const rRparen = prepPos(Rparen);
  const rOp = prepProcOperator(Op);
  const rStmts = prepStmts(Stmts);
  const rLast = prepComments(Last);
  return [...doProcSubst(rOpPos, rRparen, rOp, rStmts, rLast), comm({ rest_procsubst }, '{"rest_procsubst":{}}')];
}
export function prepRedirect(redirect: IRedirect | null): string[] {
  logg("prepRedirect");
  if (!redirect) {
    return [comm({ empty_redirect: redirect }, '{"empty_redirect":null}')];
  }
  const { OpPos, Op, N, Word, Hdoc, ...rest_redirect } = redirect;
  const rOpPos = prepPos(OpPos);
  const rOp = prepRedirOperator(Op);
  const rN = prepLit(N);
  const rWord = prepWord(Word);
  const rHdoc = prepWord(Hdoc);
  return [...doRedirect(rOpPos, rOp, rN, rWord, rHdoc), comm({ rest_redirect }, '{"rest_redirect":{}}')];
}
export function prepSglQuoted(sglquoted: ISglQuoted | null): string[] {
  logg("prepSglQuoted");
  if (!sglquoted) {
    return [comm({ empty_sglquoted: sglquoted }, '{"empty_sglquoted":null}')];
  }
  const { Left, Right, Dollar, Value, ...rest_sglquoted } = sglquoted;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rDollar = prepboolean(Dollar);
  const rValue = prepstring(Value);
  return [...doSglQuoted(rLeft, rRight, rDollar, rValue), comm({ rest_sglquoted }, '{"rest_sglquoted":{}}')];
}
export function prepStmt(stmt: IStmt | null): string[] {
  logg("prepStmt");
  if (!stmt) {
    return [comm({ empty_stmt: stmt }, '{"empty_stmt":null}')];
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
  return [...doStmt(rComments, rCmd, rPosition, rSemicolon, rNegated, rBackground, rCoprocess, rRedirs), comm({ rest_stmt }, '{"rest_stmt":{}}')];
}
export function prepStmtList(stmtlist: IStmtList | null): string[] {
  logg("prepStmtList");
  if (!stmtlist) {
    return [comm({ empty_stmtlist: stmtlist }, '{"empty_stmtlist":null}')];
  }
  const { Stmts, Last, ...rest_stmtlist } = stmtlist;
  const rStmts = prepStmts(Stmts);
  const rLast = prepComments(Last);
  return [...doStmtList(rStmts, rLast), comm({ rest_stmtlist }, '{"rest_stmtlist":{}}')];
}
export function prepSubshell(subshell: ISubshell | null): string[] {
  logg("prepSubshell");
  if (!subshell) {
    return [comm({ empty_subshell: subshell }, '{"empty_subshell":null}')];
  }
  const { Lparen, Rparen, StmtList, Last, ...rest_subshell } = subshell;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  return [...doSubshell(rLparen, rRparen, rStmtList, rLast), comm({ rest_subshell }, '{"rest_subshell":{}}')];
}
export function prepTestClause(testclause: ITestClause | null): string[] {
  logg("prepTestClause");
  if (!testclause) {
    return [comm({ empty_testclause: testclause }, '{"empty_testclause":null}')];
  }
  const { Left, Right, X, ...rest_testclause } = testclause;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rX = prepTestExpr(X);
  return [...doTestClause(rLeft, rRight, rX), comm({ rest_testclause }, '{"rest_testclause":{}}')];
}
export function prepTestExpr(testexpr: ITestExpr | null): string[] {
  logg("prepTestExpr");
  if (!testexpr) {
    return [comm({ empty_testexpr: testexpr }, '{"empty_testexpr":null}')];
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
      return [comm({ unknown_testexpr: testexpr })];
  }
}
export function prepTimeClause(timeclause: ITimeClause | null): string[] {
  logg("prepTimeClause");
  if (!timeclause) {
    return [comm({ empty_timeclause: timeclause }, '{"empty_timeclause":null}')];
  }
  const { Time, PosixFormat, Stmt, ...rest_timeclause } = timeclause;
  const rTime = prepPos(Time);
  const rPosixFormat = prepboolean(PosixFormat);
  const rStmt = prepStmt(Stmt);
  return [...doTimeClause(rTime, rPosixFormat, rStmt), comm({ rest_timeclause }, '{"rest_timeclause":{}}')];
}
export function prepUnaryArithm(unaryarithm: IUnaryArithm | null): string[] {
  logg("prepUnaryArithm");
  if (!unaryarithm) {
    return [comm({ empty_unaryarithm: unaryarithm }, '{"empty_unaryarithm":null}')];
  }
  const { OpPos, Op, Post, X, ...rest_unaryarithm } = unaryarithm;
  const rOpPos = prepPos(OpPos);
  const rOp = prepUnAritOperator(Op);
  const rPost = prepboolean(Post);
  const rX = prepArithmExpr(X);
  return [...doUnaryArithm(rOpPos, rOp, rPost, rX), comm({ rest_unaryarithm }, '{"rest_unaryarithm":{}}')];
}
export function prepUnaryTest(unarytest: IUnaryTest | null): string[] {
  logg("prepUnaryTest");
  if (!unarytest) {
    return [comm({ empty_unarytest: unarytest }, '{"empty_unarytest":null}')];
  }
  const { OpPos, Op, X, ...rest_unarytest } = unarytest;
  const rOpPos = prepPos(OpPos);
  const rOp = prepUnTestOperator(Op);
  const rX = prepTestExpr(X);
  return [...doUnaryTest(rOpPos, rOp, rX), comm({ rest_unarytest }, '{"rest_unarytest":{}}')];
}
export function prepWhileClause(whileclause: IWhileClause | null): string[] {
  logg("prepWhileClause");
  if (!whileclause) {
    return [comm({ empty_whileclause: whileclause }, '{"empty_whileclause":null}')];
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
  return [...doWhileClause(rWhilePos, rDoPos, rDonePos, rUntil, rCond, rCondLast, rDo, rDoLast), comm({ rest_whileclause }, '{"rest_whileclause":{}}')];
}
export function prepWord(word: IWord | null): string[] {
  logg("prepWord");
  if (!word) {
    return [comm({ empty_word: word }, '{"empty_word":null}')];
  }
  const { Parts, ...rest_word } = word;
  const rParts = prepWordParts(Parts);
  return [...doWord(rParts), comm({ rest_word }, '{"rest_word":{}}')];
}
export function prepWordIter(worditer: IWordIter | null): string[] {
  logg("prepWordIter");
  if (!worditer) {
    return [comm({ empty_worditer: worditer }, '{"empty_worditer":null}')];
  }
  const { Name, InPos, Items, ...rest_worditer } = worditer;
  const rName = prepLit(Name);
  const rInPos = prepPos(InPos);
  const rItems = prepWords(Items);
  return [...doWordIter(rName, rInPos, rItems), comm({ rest_worditer }, '{"rest_worditer":{}}')];
}
export function prepWordPart(wordpart: IWordPart | null): string[] {
  logg("prepWordPart");
  if (!wordpart) {
    return [comm({ empty_wordpart: wordpart }, '{"empty_wordpart":null}')];
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
      return [comm({ unknown_wordpart: wordpart })];
  }
}
export function prepArithmExprs(arithmexprs: IArithmExpr[] | null): string[] {
  logg("prepArithmExprs");
  if (!arithmexprs) {
    return [comm({ empty_arithmexprs: arithmexprs }, '{"empty_arithmexprs":null}')];
  }
  const res: string[] = [];
  arithmexprs.forEach((arithmexpr) => {
    res.push(...prepArithmExpr(arithmexpr));
  });
  return res;
}
export function prepArrayElems(arrayelems: IArrayElem[] | null): string[] {
  logg("prepArrayElems");
  if (!arrayelems) {
    return [comm({ empty_arrayelems: arrayelems }, '{"empty_arrayelems":null}')];
  }
  const res: string[] = [];
  arrayelems.forEach((arrayelem) => {
    res.push(...prepArrayElem(arrayelem));
  });
  return res;
}
export function prepAssigns(assigns: IAssign[] | null): string[] {
  logg("prepAssigns");
  if (!assigns) {
    return [comm({ empty_assigns: assigns }, '{"empty_assigns":null}')];
  }
  const res: string[] = [];
  assigns.forEach((assign) => {
    res.push(...prepAssign(assign));
  });
  return res;
}
export function prepCaseItems(caseitems: ICaseItem[] | null): string[] {
  logg("prepCaseItems");
  if (!caseitems) {
    return [comm({ empty_caseitems: caseitems }, '{"empty_caseitems":null}')];
  }
  const res: string[] = [];
  caseitems.forEach((caseitem) => {
    res.push(...prepCaseItem(caseitem));
  });
  return res;
}
export function prepComments(comments: IComment[] | null): string[] {
  logg("prepComments");
  if (!comments) {
    return [comm({ empty_comments: comments }, "{}")];
  }
  const res: string[] = [];
  comments.forEach((comment) => {
    res.push(...prepComment(comment));
  });
  return res;
}
export function prepRedirects(redirects: IRedirect[] | null): string[] {
  logg("prepRedirects");
  if (!redirects) {
    return [comm({ empty_redirects: redirects }, '{"empty_redirects":null}')];
  }
  const res: string[] = [];
  redirects.forEach((redirect) => {
    res.push(...prepRedirect(redirect));
  });
  return res;
}
export function prepStmts(stmts: IStmt[] | null): string[] {
  logg("prepStmts");
  if (!stmts) {
    return [comm({ empty_stmts: stmts }, '{"empty_stmts":null}')];
  }
  const res: string[] = [];
  stmts.forEach((stmt) => {
    res.push(...prepStmt(stmt));
  });
  return res;
}
export function prepWords(words: IWord[] | null): string[] {
  logg("prepWords");
  if (!words) {
    return [comm({ empty_words: words }, '{"empty_words":null}')];
  }
  const res: string[] = [];
  words.forEach((word) => {
    res.push(...prepWord(word));
  });
  return res;
}
export function prepWordParts(wordparts: IWordPart[] | null): string[] {
  logg("prepWordParts");
  if (!wordparts) {
    return [comm({ empty_wordparts: wordparts }, '{"empty_wordparts":null}')];
  }
  const res: string[] = [];
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
