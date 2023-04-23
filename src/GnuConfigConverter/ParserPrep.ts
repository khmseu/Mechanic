import { syntax } from "mvdan-sh";
import { comm, logg } from ".";
// tslint:disable-next-line:max-line-length
import {  do ArithmCmd ,  do ArithmExp ,  do ArrayElem ,  do ArrayExpr ,  do Assign ,  do BinaryArithm ,  do BinaryCmd ,  do BinaryTest ,  do Block ,  do BraceExp ,  do CallExpr ,  do CaseClause ,  do CaseItem ,  do CmdSubst ,  do Comment ,  do CoprocClause ,  do CStyleLoop ,  do DblQuoted ,  do DeclClause ,  do ExtGlob ,  do File ,  do ForClause ,  do FuncDecl ,  do IfClause ,  do LetClause ,  do Lit ,  do ParamExp ,  do ParenArithm ,  do ParenTest ,  do ProcSubst ,  do Redirect ,  do SglQuoted ,  do Stmt ,  do StmtList ,  do Subshell ,  do TestClause ,  do TimeClause ,  do UnaryArithm ,  do UnaryTest ,  do WhileClause ,  do Word ,  do WordIter  } from "./ParserDo";
// tslint:disable-next-line:max-line-length
import { BinAritOperator, BinCmdOperator, BinTestOperator, CaseOperator, GlobOperator, I_Expansion, I_Pos, I_Replace, I_Slice, IArithmCmd, IArithmExp, IArithmExpr, IArrayElem, IArrayExpr, IAssign, IBinaryArithm, IBinaryCmd, IBinaryTest, IBlock, IBraceExp, ICallExpr, ICaseClause, ICaseItem, ICmdSubst, ICommand, IComment, ICoprocClause, ICStyleLoop, IDblQuoted, IDeclClause, IExtGlob, IFile, IForClause, IFuncDecl, IIfClause, ILetClause, ILit, ILoop, IParamExp, IParenArithm, IParenTest, IProcSubst, IRedirect, ISglQuoted, IStmt, IStmtList, ISubshell, ITestClause, ITestExpr, ITimeClause, IUnaryArithm, IUnaryTest, IWhileClause, IWord, IWordIter, IWordPart, ParNamesOperator, ProcOperator, RedirOperator, UnAritOperator, UnTestOperator } from "./ParserTypes";

export function prepArithmCmd(arithmcmd: IArithmCmd | null): string[] {
  logg(" prep ArithmCmd");
  if (!arithmcmd) {
    return [comm({ empty_arithmcmd: arithmcmd }, '{" empty_ arithmcmd":null}')];
  }
  const { Left, Right, Unsigned, X, ...rest_arithmcmd } = arithmcmd;
 const r Left = prep Pos (Left);
     
  const r Right = prep Pos (Right);
     
  const r Unsigned = prep boolean (Unsigned);
     
  const r X = prep ArithmExpr (X);
    
  return [...doArithmCmd(rLeft, rRight, rUnsigned, rX), comm({ rest_arithmcmd }, '{" rest_ arithmcmd":{}}')];
}
export function prepArithmExp(arithmexp: IArithmExp | null): string[] {
  logg(" prep ArithmExp");
  if (!arithmexp) {
    return [comm({ empty_arithmexp: arithmexp }, '{" empty_ arithmexp":null}')];
  }
  const { Left, Right, Bracket, Unsigned, X, ...rest_arithmexp } = arithmexp;
 const r Left = prep Pos (Left);
     
  const r Right = prep Pos (Right);
     
  const r Bracket = prep boolean (Bracket);
     
  const r Unsigned = prep boolean (Unsigned);
     
  const r X = prep ArithmExpr (X);
    
  // tslint:disable-next-line:max-line-length
  return [...doArithmExp(rLeft, rRight, rBracket, rUnsigned, rX), comm({ rest_arithmexp }, '{" rest_ arithmexp":{}}')];
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
  logg(" prep ArrayElem");
  if (!arrayelem) {
    return [comm({ empty_arrayelem: arrayelem }, '{" empty_ arrayelem":null}')];
  }
  const { Index, Value, Comments, ...rest_arrayelem } = arrayelem;
 const r Index = prep ArithmExpr (Index);
     
  const r Value = prep Word (Value);
     
  const r Comments = prep Comments (Comments);
    
  return [...doArrayElem(rIndex, rValue, rComments), comm({ rest_arrayelem }, '{" rest_ arrayelem":{}}')];
}
export function prepArrayExpr(arrayexpr: IArrayExpr | null): string[] {
  logg(" prep ArrayExpr");
  if (!arrayexpr) {
    return [comm({ empty_arrayexpr: arrayexpr }, '{" empty_ arrayexpr":null}')];
  }
  const { Lparen, Rparen, Elems, Last, ...rest_arrayexpr } = arrayexpr;
 const r Lparen = prep Pos (Lparen);
     
  const r Rparen = prep Pos (Rparen);
     
  const r Elems = prep ArrayElems (Elems);
     
  const r Last = prep Comments (Last);
    
  return [...doArrayExpr(rLparen, rRparen, rElems, rLast), comm({ rest_arrayexpr }, '{" rest_ arrayexpr":{}}')];
}
export function prepAssign(assign: IAssign | null): string[] {
  logg(" prep Assign");
  if (!assign) {
    return [comm({ empty_assign: assign }, '{" empty_ assign":null}')];
  }
  const { Append, Naked, Name, Index, Value, Array, ...rest_assign } = assign;
 const r Append = prep boolean (Append);
     
  const r Naked = prep boolean (Naked);
     
  const r Name = prep Lit (Name);
     
  const r Index = prep ArithmExpr (Index);
     
  const r Value = prep Word (Value);
     
  const r Array = prep ArrayExpr (Array);
    
  return [...doAssign(rAppend, rNaked, rName, rIndex, rValue, rArray), comm({ rest_assign }, '{" rest_ assign":{}}')];
}
export function prepBinaryArithm(binaryarithm: IBinaryArithm | null): string[] {
  logg(" prep BinaryArithm");
  if (!binaryarithm) {
    return [comm({ empty_binaryarithm: binaryarithm }, '{" empty_ binaryarithm":null}')];
  }
  const { OpPos, Op, X, Y, ...rest_binaryarithm } = binaryarithm;
 const r OpPos = prep Pos (OpPos);
     
  const r Op = prep BinAritOperator (Op);
     
  const r X = prep ArithmExpr (X);
     
  const r Y = prep ArithmExpr (Y);
    
  return [...doBinaryArithm(rOpPos, rOp, rX, rY), comm({ rest_binaryarithm }, '{" rest_ binaryarithm":{}}')];
}
export function prepBinaryCmd(binarycmd: IBinaryCmd | null): string[] {
  logg(" prep BinaryCmd");
  if (!binarycmd) {
    return [comm({ empty_binarycmd: binarycmd }, '{" empty_ binarycmd":null}')];
  }
  const { OpPos, Op, X, Y, ...rest_binarycmd } = binarycmd;
 const r OpPos = prep Pos (OpPos);
     
  const r Op = prep BinCmdOperator (Op);
     
  const r X = prep Stmt (X);
     
  const r Y = prep Stmt (Y);
    
  return [...doBinaryCmd(rOpPos, rOp, rX, rY), comm({ rest_binarycmd }, '{" rest_ binarycmd":{}}')];
}
export function prepBinaryTest(binarytest: IBinaryTest | null): string[] {
  logg(" prep BinaryTest");
  if (!binarytest) {
    return [comm({ empty_binarytest: binarytest }, '{" empty_ binarytest":null}')];
  }
  const { OpPos, Op, X, Y, ...rest_binarytest } = binarytest;
 const r OpPos = prep Pos (OpPos);
     
  const r Op = prep BinTestOperator (Op);
     
  const r X = prep TestExpr (X);
     
  const r Y = prep TestExpr (Y);
    
  return [...doBinaryTest(rOpPos, rOp, rX, rY), comm({ rest_binarytest }, '{" rest_ binarytest":{}}')];
}
export function prepBlock(block: IBlock | null): string[] {
  logg(" prep Block");
  if (!block) {
    return [comm({ empty_block: block }, '{" empty_ block":null}')];
  }
  const { Lbrace, Rbrace, StmtList, Last, ...rest_block } = block;
 const r Lbrace = prep Pos (Lbrace);
     
  const r Rbrace = prep Pos (Rbrace);
     
  const r StmtList = prep StmtList (StmtList);
     
  const r Last = prep Comments (Last);
    
  return [...doBlock(rLbrace, rRbrace, rStmtList, rLast), comm({ rest_block }, '{" rest_ block":{}}')];
}
export function prepBraceExp(braceexp: IBraceExp | null): string[] {
  logg(" prep BraceExp");
  if (!braceexp) {
    return [comm({ empty_braceexp: braceexp }, '{" empty_ braceexp":null}')];
  }
  const { Sequence, Chars, Elems, ...rest_braceexp } = braceexp;
 const r Sequence = prep boolean (Sequence);
     
  const r Chars = prep boolean (Chars);
     
  const r Elems = prep Words (Elems);
    
  return [...doBraceExp(rSequence, rChars, rElems), comm({ rest_braceexp }, '{" rest_ braceexp":{}}')];
}
export function prepCStyleLoop(cstyleloop: ICStyleLoop | null): string[] {
  logg(" prep CStyleLoop");
  if (!cstyleloop) {
    return [comm({ empty_cstyleloop: cstyleloop }, '{" empty_ cstyleloop":null}')];
  }
  const { Lparen, Rparen, Init, Cond, Post, ...rest_cstyleloop } = cstyleloop;
 const r Lparen = prep Pos (Lparen);
     
  const r Rparen = prep Pos (Rparen);
     
  const r Init = prep ArithmExpr (Init);
     
  const r Cond = prep ArithmExpr (Cond);
     
  const r Post = prep ArithmExpr (Post);
    
  // tslint:disable-next-line:max-line-length
  return [...doCStyleLoop(rLparen, rRparen, rInit, rCond, rPost), comm({ rest_cstyleloop }, '{" rest_ cstyleloop":{}}')];
}
export function prepCallExpr(callexpr: ICallExpr | null): string[] {
  logg(" prep CallExpr");
  if (!callexpr) {
    return [comm({ empty_callexpr: callexpr }, '{" empty_ callexpr":null}')];
  }
  const { Assigns, Args, ...rest_callexpr } = callexpr;
 const r Assigns = prep Assigns (Assigns);
     
  const r Args = prep Words (Args);
    
  return [...doCallExpr(rAssigns, rArgs), comm({ rest_callexpr }, '{" rest_ callexpr":{}}')];
}
export function prepCaseClause(caseclause: ICaseClause | null): string[] {
  logg(" prep CaseClause");
  if (!caseclause) {
    return [comm({ empty_caseclause: caseclause }, '{" empty_ caseclause":null}')];
  }
  const { Case, Esac, Word, Items, Last, ...rest_caseclause } = caseclause;
 const r Case = prep Pos (Case);
     
  const r Esac = prep Pos (Esac);
     
  const r Word = prep Word (Word);
     
  const r Items = prep CaseItems (Items);
     
  const r Last = prep Comments (Last);
    
  return [...doCaseClause(rCase, rEsac, rWord, rItems, rLast), comm({ rest_caseclause }, '{" rest_ caseclause":{}}')];
}
export function prepCaseItem(caseitem: ICaseItem | null): string[] {
  logg(" prep CaseItem");
  if (!caseitem) {
    return [comm({ empty_caseitem: caseitem }, '{" empty_ caseitem":null}')];
  }
  const { Op, OpPos, Comments, Patterns, StmtList, Last, ...rest_caseitem } = caseitem;
 const r Op = prep CaseOperator (Op);
     
  const r OpPos = prep Pos (OpPos);
     
  const r Comments = prep Comments (Comments);
     
  const r Patterns = prep Words (Patterns);
     
  const r StmtList = prep StmtList (StmtList);
     
  const r Last = prep Comments (Last);
    
  // tslint:disable-next-line:max-line-length
  return [...doCaseItem(rOp, rOpPos, rComments, rPatterns, rStmtList, rLast), comm({ rest_caseitem }, '{" rest_ caseitem":{}}')];
}
export function prepCmdSubst(cmdsubst: ICmdSubst | null): string[] {
  logg(" prep CmdSubst");
  if (!cmdsubst) {
    return [comm({ empty_cmdsubst: cmdsubst }, '{" empty_ cmdsubst":null}')];
  }
  const { Left, Right, StmtList, Last, TempFile, ReplyVar, ...rest_cmdsubst } = cmdsubst;
 const r Left = prep Pos (Left);
     
  const r Right = prep Pos (Right);
     
  const r StmtList = prep StmtList (StmtList);
     
  const r Last = prep Comments (Last);
     
  const r TempFile = prep boolean (TempFile);
     
  const r ReplyVar = prep boolean (ReplyVar);
    
  // tslint:disable-next-line:max-line-length
  return [...doCmdSubst(rLeft, rRight, rStmtList, rLast, rTempFile, rReplyVar), comm({ rest_cmdsubst }, '{" rest_ cmdsubst":{}}')];
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
  logg(" prep Comment");
  if (!comment) {
    return [comm({ empty_comment: comment }, '{" empty_ comment":null}')];
  }
  const { Hash, Text, ...rest_comment } = comment;
 const r Hash = prep Pos (Hash);
     
  const r Text = prep string (Text);
    
  return [...doComment(rHash, rText), comm({ rest_comment }, '{" rest_ comment":{}}')];
}
export function prepCoprocClause(coprocclause: ICoprocClause | null): string[] {
  logg(" prep CoprocClause");
  if (!coprocclause) {
    return [comm({ empty_coprocclause: coprocclause }, '{" empty_ coprocclause":null}')];
  }
  const { Coproc, Name, Stmt, ...rest_coprocclause } = coprocclause;
 const r Coproc = prep Pos (Coproc);
     
  const r Name = prep Word (Name);
     
  const r Stmt = prep Stmt (Stmt);
    
  return [...doCoprocClause(rCoproc, rName, rStmt), comm({ rest_coprocclause }, '{" rest_ coprocclause":{}}')];
}
export function prepDblQuoted(dblquoted: IDblQuoted | null): string[] {
  logg(" prep DblQuoted");
  if (!dblquoted) {
    return [comm({ empty_dblquoted: dblquoted }, '{" empty_ dblquoted":null}')];
  }
  const { Position, Dollar, Parts, ...rest_dblquoted } = dblquoted;
 const r Position = prep Pos (Position);
     
  const r Dollar = prep boolean (Dollar);
     
  const r Parts = prep WordParts (Parts);
    
  return [...doDblQuoted(rPosition, rDollar, rParts), comm({ rest_dblquoted }, '{" rest_ dblquoted":{}}')];
}
export function prepDeclClause(declclause: IDeclClause | null): string[] {
  logg(" prep DeclClause");
  if (!declclause) {
    return [comm({ empty_declclause: declclause }, '{" empty_ declclause":null}')];
  }
  const { Variant, Opts, Assigns, ...rest_declclause } = declclause;
 const r Variant = prep Lit (Variant);
     
  const r Opts = prep Words (Opts);
     
  const r Assigns = prep Assigns (Assigns);
    
  return [...doDeclClause(rVariant, rOpts, rAssigns), comm({ rest_declclause }, '{" rest_ declclause":{}}')];
}
export function prepExtGlob(extglob: IExtGlob | null): string[] {
  logg(" prep ExtGlob");
  if (!extglob) {
    return [comm({ empty_extglob: extglob }, '{" empty_ extglob":null}')];
  }
  const { OpPos, Op, Pattern, ...rest_extglob } = extglob;
 const r OpPos = prep Pos (OpPos);
     
  const r Op = prep GlobOperator (Op);
     
  const r Pattern = prep Lit (Pattern);
    
  return [...doExtGlob(rOpPos, rOp, rPattern), comm({ rest_extglob }, '{" rest_ extglob":{}}')];
}
export function prepFile(file: IFile | null): string[] {
  logg(" prep File");
  if (!file) {
    return [comm({ empty_file: file }, '{" empty_ file":null}')];
  }
  const { Name, StmtList, Last, ...rest_file } = file;
 const r Name = prep string (Name);
     
  const r StmtList = prep StmtList (StmtList);
     
  const r Last = prep Comments (Last);
    
  return [...doFile(rName, rStmtList, rLast), comm({ rest_file }, '{" rest_ file":{}}')];
}
export function prepForClause(forclause: IForClause | null): string[] {
  logg(" prep ForClause");
  if (!forclause) {
    return [comm({ empty_forclause: forclause }, '{" empty_ forclause":null}')];
  }
  const { ForPos, DoPos, DonePos, Select, Loop, Do, DoLast, ...rest_forclause } = forclause;
 const r ForPos = prep Pos (ForPos);
     
  const r DoPos = prep Pos (DoPos);
     
  const r DonePos = prep Pos (DonePos);
     
  const r Select = prep boolean (Select);
     
  const r Loop = prep Loop (Loop);
     
  const r Do = prep StmtList (Do);
     
  const r DoLast = prep Comments (DoLast);
    
  // tslint:disable-next-line:max-line-length
  return [...doForClause(rForPos, rDoPos, rDonePos, rSelect, rLoop, rDo, rDoLast), comm({ rest_forclause }, '{" rest_ forclause":{}}')];
}
export function prepFuncDecl(funcdecl: IFuncDecl | null): string[] {
  logg(" prep FuncDecl");
  if (!funcdecl) {
    return [comm({ empty_funcdecl: funcdecl }, '{" empty_ funcdecl":null}')];
  }
  const { Position, RsrvWord, Name, Body, ...rest_funcdecl } = funcdecl;
 const r Position = prep Pos (Position);
     
  const r RsrvWord = prep boolean (RsrvWord);
     
  const r Name = prep Lit (Name);
     
  const r Body = prep Stmt (Body);
    
  return [...doFuncDecl(rPosition, rRsrvWord, rName, rBody), comm({ rest_funcdecl }, '{" rest_ funcdecl":{}}')];
}
export function prepIfClause(ifclause: IIfClause | null): string[] {
  logg(" prep IfClause");
  if (!ifclause) {
    return [comm({ empty_ifclause: ifclause }, '{" empty_ ifclause":null}')];
  }
  const { Position, ThenPos, FiPos, Cond, CondLast, Then, ThenLast, Else, Last, ...rest_ifclause } = ifclause;
 const r Position = prep Pos (Position);
     
  const r ThenPos = prep Pos (ThenPos);
     
  const r FiPos = prep Pos (FiPos);
     
  const r Cond = prep StmtList (Cond);
     
  const r CondLast = prep Comments (CondLast);
     
  const r Then = prep StmtList (Then);
     
  const r ThenLast = prep Comments (ThenLast);
     
  const r Else = prep IfClause (Else);
     
  const r Last = prep Comments (Last);
    
  // tslint:disable-next-line:max-line-length
  return [...doIfClause(rPosition, rThenPos, rFiPos, rCond, rCondLast, rThen, rThenLast, rElse, rLast), comm({ rest_ifclause }, '{" rest_ ifclause":{}}')];
}
export function prepLetClause(letclause: ILetClause | null): string[] {
  logg(" prep LetClause");
  if (!letclause) {
    return [comm({ empty_letclause: letclause }, '{" empty_ letclause":null}')];
  }
  const { Let, Exprs, ...rest_letclause } = letclause;
 const r Let = prep Pos (Let);
     
  const r Exprs = prep ArithmExprs (Exprs);
    
  return [...doLetClause(rLet, rExprs), comm({ rest_letclause }, '{" rest_ letclause":{}}')];
}
export function prepLit(lit: ILit | null): string[] {
  logg(" prep Lit");
  if (!lit) {
    return [comm({ empty_lit: lit }, '{" empty_ lit":null}')];
  }
  const { ValuePos, ValueEnd, Value, ...rest_lit } = lit;
 const r ValuePos = prep Pos (ValuePos);
     
  const r ValueEnd = prep Pos (ValueEnd);
     
  const r Value = prep string (Value);
    
  return [...doLit(rValuePos, rValueEnd, rValue), comm({ rest_lit }, '{" rest_ lit":{}}')];
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
  logg(" prep ParamExp");
  if (!paramexp) {
    return [comm({ empty_paramexp: paramexp }, '{" empty_ paramexp":null}')];
  }
  // tslint:disable-next-line:max-line-length
  const { Dollar, Rbrace, Short, Excl, Length, Width, Param, Index, Slice, Repl, Names, Exp, ...rest_paramexp } = paramexp;
 const r Dollar = prep Pos (Dollar);
     
  const r Rbrace = prep Pos (Rbrace);
     
  const r Short = prep boolean (Short);
     
  const r Excl = prep boolean (Excl);
     
  const r Length = prep boolean (Length);
     
  const r Width = prep boolean (Width);
     
  const r Param = prep Lit (Param);
     
  const r Index = prep ArithmExpr (Index);
     
  const r Slice = prep Slice (Slice);
     
  const r Repl = prep Replace (Repl);
     
  const r Names = prep ParNamesOperator (Names);
     
  const r Exp = prep Expansion (Exp);
    
  // tslint:disable-next-line:max-line-length
  return [...doParamExp(rDollar, rRbrace, rShort, rExcl, rLength, rWidth, rParam, rIndex, rSlice, rRepl, rNames, rExp), comm({ rest_paramexp }, '{" rest_ paramexp":{}}')];
}
export function prepParenArithm(parenarithm: IParenArithm | null): string[] {
  logg(" prep ParenArithm");
  if (!parenarithm) {
    return [comm({ empty_parenarithm: parenarithm }, '{" empty_ parenarithm":null}')];
  }
  const { Lparen, Rparen, X, ...rest_parenarithm } = parenarithm;
 const r Lparen = prep Pos (Lparen);
     
  const r Rparen = prep Pos (Rparen);
     
  const r X = prep ArithmExpr (X);
    
  return [...doParenArithm(rLparen, rRparen, rX), comm({ rest_parenarithm }, '{" rest_ parenarithm":{}}')];
}
export function prepParenTest(parentest: IParenTest | null): string[] {
  logg(" prep ParenTest");
  if (!parentest) {
    return [comm({ empty_parentest: parentest }, '{" empty_ parentest":null}')];
  }
  const { Lparen, Rparen, X, ...rest_parentest } = parentest;
 const r Lparen = prep Pos (Lparen);
     
  const r Rparen = prep Pos (Rparen);
     
  const r X = prep TestExpr (X);
    
  return [...doParenTest(rLparen, rRparen, rX), comm({ rest_parentest }, '{" rest_ parentest":{}}')];
}
export function prepProcSubst(procsubst: IProcSubst | null): string[] {
  logg(" prep ProcSubst");
  if (!procsubst) {
    return [comm({ empty_procsubst: procsubst }, '{" empty_ procsubst":null}')];
  }
  const { OpPos, Rparen, Op, Stmts, Last, ...rest_procsubst } = procsubst;
 const r OpPos = prep Pos (OpPos);
     
  const r Rparen = prep Pos (Rparen);
     
  const r Op = prep ProcOperator (Op);
     
  const r Stmts = prep Stmts (Stmts);
     
  const r Last = prep Comments (Last);
    
  return [...doProcSubst(rOpPos, rRparen, rOp, rStmts, rLast), comm({ rest_procsubst }, '{" rest_ procsubst":{}}')];
}
export function prepRedirect(redirect: IRedirect | null): string[] {
  logg(" prep Redirect");
  if (!redirect) {
    return [comm({ empty_redirect: redirect }, '{" empty_ redirect":null}')];
  }
  const { OpPos, Op, N, Word, Hdoc, ...rest_redirect } = redirect;
 const r OpPos = prep Pos (OpPos);
     
  const r Op = prep RedirOperator (Op);
     
  const r N = prep Lit (N);
     
  const r Word = prep Word (Word);
     
  const r Hdoc = prep Word (Hdoc);
    
  return [...doRedirect(rOpPos, rOp, rN, rWord, rHdoc), comm({ rest_redirect }, '{" rest_ redirect":{}}')];
}
export function prepSglQuoted(sglquoted: ISglQuoted | null): string[] {
  logg(" prep SglQuoted");
  if (!sglquoted) {
    return [comm({ empty_sglquoted: sglquoted }, '{" empty_ sglquoted":null}')];
  }
  const { Left, Right, Dollar, Value, ...rest_sglquoted } = sglquoted;
 const r Left = prep Pos (Left);
     
  const r Right = prep Pos (Right);
     
  const r Dollar = prep boolean (Dollar);
     
  const r Value = prep string (Value);
    
  return [...doSglQuoted(rLeft, rRight, rDollar, rValue), comm({ rest_sglquoted }, '{" rest_ sglquoted":{}}')];
}
export function prepStmt(stmt: IStmt | null): string[] {
  logg(" prep Stmt");
  if (!stmt) {
    return [comm({ empty_stmt: stmt }, '{" empty_ stmt":null}')];
  }
  const { Comments, Cmd, Position, Semicolon, Negated, Background, Coprocess, Redirs, ...rest_stmt } = stmt;
 const r Comments = prep Comments (Comments);
     
  const r Cmd = prep Command (Cmd);
     
  const r Position = prep Pos (Position);
     
  const r Semicolon = prep Pos (Semicolon);
     
  const r Negated = prep boolean (Negated);
     
  const r Background = prep boolean (Background);
     
  const r Coprocess = prep boolean (Coprocess);
     
  const r Redirs = prep Redirects (Redirs);
    
  // tslint:disable-next-line:max-line-length
  return [...doStmt(rComments, rCmd, rPosition, rSemicolon, rNegated, rBackground, rCoprocess, rRedirs), comm({ rest_stmt }, '{" rest_ stmt":{}}')];
}
export function prepStmtList(stmtlist: IStmtList | null): string[] {
  logg(" prep StmtList");
  if (!stmtlist) {
    return [comm({ empty_stmtlist: stmtlist }, '{" empty_ stmtlist":null}')];
  }
  const { Stmts, Last, ...rest_stmtlist } = stmtlist;
 const r Stmts = prep Stmts (Stmts);
     
  const r Last = prep Comments (Last);
    
  return [...doStmtList(rStmts, rLast), comm({ rest_stmtlist }, '{" rest_ stmtlist":{}}')];
}
export function prepSubshell(subshell: ISubshell | null): string[] {
  logg(" prep Subshell");
  if (!subshell) {
    return [comm({ empty_subshell: subshell }, '{" empty_ subshell":null}')];
  }
  const { Lparen, Rparen, StmtList, Last, ...rest_subshell } = subshell;
 const r Lparen = prep Pos (Lparen);
     
  const r Rparen = prep Pos (Rparen);
     
  const r StmtList = prep StmtList (StmtList);
     
  const r Last = prep Comments (Last);
    
  return [...doSubshell(rLparen, rRparen, rStmtList, rLast), comm({ rest_subshell }, '{" rest_ subshell":{}}')];
}
export function prepTestClause(testclause: ITestClause | null): string[] {
  logg(" prep TestClause");
  if (!testclause) {
    return [comm({ empty_testclause: testclause }, '{" empty_ testclause":null}')];
  }
  const { Left, Right, X, ...rest_testclause } = testclause;
 const r Left = prep Pos (Left);
     
  const r Right = prep Pos (Right);
     
  const r X = prep TestExpr (X);
    
  return [...doTestClause(rLeft, rRight, rX), comm({ rest_testclause }, '{" rest_ testclause":{}}')];
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
  logg(" prep TimeClause");
  if (!timeclause) {
    return [comm({ empty_timeclause: timeclause }, '{" empty_ timeclause":null}')];
  }
  const { Time, PosixFormat, Stmt, ...rest_timeclause } = timeclause;
 const r Time = prep Pos (Time);
     
  const r PosixFormat = prep boolean (PosixFormat);
     
  const r Stmt = prep Stmt (Stmt);
    
  return [...doTimeClause(rTime, rPosixFormat, rStmt), comm({ rest_timeclause }, '{" rest_ timeclause":{}}')];
}
export function prepUnaryArithm(unaryarithm: IUnaryArithm | null): string[] {
  logg(" prep UnaryArithm");
  if (!unaryarithm) {
    return [comm({ empty_unaryarithm: unaryarithm }, '{" empty_ unaryarithm":null}')];
  }
  const { OpPos, Op, Post, X, ...rest_unaryarithm } = unaryarithm;
 const r OpPos = prep Pos (OpPos);
     
  const r Op = prep UnAritOperator (Op);
     
  const r Post = prep boolean (Post);
     
  const r X = prep ArithmExpr (X);
    
  return [...doUnaryArithm(rOpPos, rOp, rPost, rX), comm({ rest_unaryarithm }, '{" rest_ unaryarithm":{}}')];
}
export function prepUnaryTest(unarytest: IUnaryTest | null): string[] {
  logg(" prep UnaryTest");
  if (!unarytest) {
    return [comm({ empty_unarytest: unarytest }, '{" empty_ unarytest":null}')];
  }
  const { OpPos, Op, X, ...rest_unarytest } = unarytest;
 const r OpPos = prep Pos (OpPos);
     
  const r Op = prep UnTestOperator (Op);
     
  const r X = prep TestExpr (X);
    
  return [...doUnaryTest(rOpPos, rOp, rX), comm({ rest_unarytest }, '{" rest_ unarytest":{}}')];
}
export function prepWhileClause(whileclause: IWhileClause | null): string[] {
  logg(" prep WhileClause");
  if (!whileclause) {
    return [comm({ empty_whileclause: whileclause }, '{" empty_ whileclause":null}')];
  }
  const { WhilePos, DoPos, DonePos, Until, Cond, CondLast, Do, DoLast, ...rest_whileclause } = whileclause;
 const r WhilePos = prep Pos (WhilePos);
     
  const r DoPos = prep Pos (DoPos);
     
  const r DonePos = prep Pos (DonePos);
     
  const r Until = prep boolean (Until);
     
  const r Cond = prep StmtList (Cond);
     
  const r CondLast = prep Comments (CondLast);
     
  const r Do = prep StmtList (Do);
     
  const r DoLast = prep Comments (DoLast);
    
  // tslint:disable-next-line:max-line-length
  return [...doWhileClause(rWhilePos, rDoPos, rDonePos, rUntil, rCond, rCondLast, rDo, rDoLast), comm({ rest_whileclause }, '{" rest_ whileclause":{}}')];
}
export function prepWord(word: IWord | null): string[] {
  logg(" prep Word");
  if (!word) {
    return [comm({ empty_word: word }, '{" empty_ word":null}')];
  }
  const { Parts, SplitBraces, Lit, ...rest_word } = word;
 const r Parts = prep WordParts (Parts);
     
  const r SplitBraces = prep  (SplitBraces);
     
  const r Lit = prep  (Lit);
    
  return [...doWord(rParts, rSplitBraces, rLit), comm({ rest_word }, '{" rest_ word":{}}')];
}
export function prepWordIter(worditer: IWordIter | null): string[] {
  logg(" prep WordIter");
  if (!worditer) {
    return [comm({ empty_worditer: worditer }, '{" empty_ worditer":null}')];
  }
  const { Name, InPos, Items, ...rest_worditer } = worditer;
 const r Name = prep Lit (Name);
     
  const r InPos = prep Pos (InPos);
     
  const r Items = prep Words (Items);
    
  return [...doWordIter(rName, rInPos, rItems), comm({ rest_worditer }, '{" rest_ worditer":{}}')];
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
    return [comm({ empty_comments: comments }, '{"empty_comments":null}')];
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
export function prep(a:  | null):  | null {
  return a;
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
