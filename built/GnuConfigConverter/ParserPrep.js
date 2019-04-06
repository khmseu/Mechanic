"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mvdan_sh_1 = require("mvdan-sh");
const logg_1 = require("./logg");
// tslint:disable-next-line:max-line-length
const ParserDo_1 = require("./ParserDo");
function prepArithmCmd(arithmcmd) {
    logg_1.logg("prepArithmCmd");
    if (!arithmcmd) {
        return [new RestComment({ empty_arithmcmd: arithmcmd }, '{"empty_arithmcmd":null}')];
    }
    const { Left, Right, Unsigned, X, ...rest_arithmcmd } = arithmcmd;
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rUnsigned = prepboolean(Unsigned);
    const rX = prepArithmExpr(X);
    return [...ParserDo_1.doArithmCmd(rLeft, rRight, rUnsigned, rX), new RestComment({ rest_arithmcmd }, '{"rest_arithmcmd":{}}')];
}
exports.prepArithmCmd = prepArithmCmd;
function prepArithmExp(arithmexp) {
    logg_1.logg("prepArithmExp");
    if (!arithmexp) {
        return [new RestComment({ empty_arithmexp: arithmexp }, '{"empty_arithmexp":null}')];
    }
    const { Left, Right, Bracket, Unsigned, X, ...rest_arithmexp } = arithmexp;
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rBracket = prepboolean(Bracket);
    const rUnsigned = prepboolean(Unsigned);
    const rX = prepArithmExpr(X);
    return [...ParserDo_1.doArithmExp(rLeft, rRight, rBracket, rUnsigned, rX), new RestComment({ rest_arithmexp }, '{"rest_arithmexp":{}}')];
}
exports.prepArithmExp = prepArithmExp;
function prepArithmExpr(arithmexpr) {
    logg_1.logg("prepArithmExpr");
    if (!arithmexpr) {
        return [new RestComment({ empty_arithmexpr: arithmexpr }, '{"empty_arithmexpr":null}')];
    }
    switch (mvdan_sh_1.syntax.NodeType(arithmexpr)) {
        case "BinaryArithm":
            return prepBinaryArithm(arithmexpr);
        case "UnaryArithm":
            return prepUnaryArithm(arithmexpr);
        case "ParenArithm":
            return prepParenArithm(arithmexpr);
        case "Word":
            return prepWord(arithmexpr);
        default:
            return [new RestComment({ unknown_arithmexpr: arithmexpr })];
    }
}
exports.prepArithmExpr = prepArithmExpr;
function prepArrayElem(arrayelem) {
    logg_1.logg("prepArrayElem");
    if (!arrayelem) {
        return [new RestComment({ empty_arrayelem: arrayelem }, '{"empty_arrayelem":null}')];
    }
    const { Index, Value, Comments, ...rest_arrayelem } = arrayelem;
    const rIndex = prepArithmExpr(Index);
    const rValue = prepWord(Value);
    const rComments = prepComments(Comments);
    return [...ParserDo_1.doArrayElem(rIndex, rValue, rComments), new RestComment({ rest_arrayelem }, '{"rest_arrayelem":{}}')];
}
exports.prepArrayElem = prepArrayElem;
function prepArrayExpr(arrayexpr) {
    logg_1.logg("prepArrayExpr");
    if (!arrayexpr) {
        return [new RestComment({ empty_arrayexpr: arrayexpr }, '{"empty_arrayexpr":null}')];
    }
    const { Lparen, Rparen, Elems, Last, ...rest_arrayexpr } = arrayexpr;
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rElems = prepArrayElems(Elems);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doArrayExpr(rLparen, rRparen, rElems, rLast), new RestComment({ rest_arrayexpr }, '{"rest_arrayexpr":{}}')];
}
exports.prepArrayExpr = prepArrayExpr;
function prepAssign(assign) {
    logg_1.logg("prepAssign");
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
    return [...ParserDo_1.doAssign(rAppend, rNaked, rName, rIndex, rValue, rArray), new RestComment({ rest_assign }, '{"rest_assign":{}}')];
}
exports.prepAssign = prepAssign;
function prepBinaryArithm(binaryarithm) {
    logg_1.logg("prepBinaryArithm");
    if (!binaryarithm) {
        return [new RestComment({ empty_binaryarithm: binaryarithm }, '{"empty_binaryarithm":null}')];
    }
    const { OpPos, Op, X, Y, ...rest_binaryarithm } = binaryarithm;
    const rOpPos = prepPos(OpPos);
    const rOp = prepBinAritOperator(Op);
    const rX = prepArithmExpr(X);
    const rY = prepArithmExpr(Y);
    return [...ParserDo_1.doBinaryArithm(rOpPos, rOp, rX, rY), new RestComment({ rest_binaryarithm }, '{"rest_binaryarithm":{}}')];
}
exports.prepBinaryArithm = prepBinaryArithm;
function prepBinaryCmd(binarycmd) {
    logg_1.logg("prepBinaryCmd");
    if (!binarycmd) {
        return [new RestComment({ empty_binarycmd: binarycmd }, '{"empty_binarycmd":null}')];
    }
    const { OpPos, Op, X, Y, ...rest_binarycmd } = binarycmd;
    const rOpPos = prepPos(OpPos);
    const rOp = prepBinCmdOperator(Op);
    const rX = prepStmt(X);
    const rY = prepStmt(Y);
    return [...ParserDo_1.doBinaryCmd(rOpPos, rOp, rX, rY), new RestComment({ rest_binarycmd }, '{"rest_binarycmd":{}}')];
}
exports.prepBinaryCmd = prepBinaryCmd;
function prepBinaryTest(binarytest) {
    logg_1.logg("prepBinaryTest");
    if (!binarytest) {
        return [new RestComment({ empty_binarytest: binarytest }, '{"empty_binarytest":null}')];
    }
    const { OpPos, Op, X, Y, ...rest_binarytest } = binarytest;
    const rOpPos = prepPos(OpPos);
    const rOp = prepBinTestOperator(Op);
    const rX = prepTestExpr(X);
    const rY = prepTestExpr(Y);
    return [...ParserDo_1.doBinaryTest(rOpPos, rOp, rX, rY), new RestComment({ rest_binarytest }, '{"rest_binarytest":{}}')];
}
exports.prepBinaryTest = prepBinaryTest;
function prepBlock(block) {
    logg_1.logg("prepBlock");
    if (!block) {
        return [new RestComment({ empty_block: block }, '{"empty_block":null}')];
    }
    const { Lbrace, Rbrace, StmtList, Last, ...rest_block } = block;
    const rLbrace = prepPos(Lbrace);
    const rRbrace = prepPos(Rbrace);
    const rStmtList = prepStmtList(StmtList);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doBlock(rLbrace, rRbrace, rStmtList, rLast), new RestComment({ rest_block }, '{"rest_block":{}}')];
}
exports.prepBlock = prepBlock;
function prepBraceExp(braceexp) {
    logg_1.logg("prepBraceExp");
    if (!braceexp) {
        return [new RestComment({ empty_braceexp: braceexp }, '{"empty_braceexp":null}')];
    }
    const { Sequence, Chars, Elems, ...rest_braceexp } = braceexp;
    const rSequence = prepboolean(Sequence);
    const rChars = prepboolean(Chars);
    const rElems = prepWords(Elems);
    return [...ParserDo_1.doBraceExp(rSequence, rChars, rElems), new RestComment({ rest_braceexp }, '{"rest_braceexp":{}}')];
}
exports.prepBraceExp = prepBraceExp;
function prepCStyleLoop(cstyleloop) {
    logg_1.logg("prepCStyleLoop");
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
    return [...ParserDo_1.doCStyleLoop(rLparen, rRparen, rInit, rCond, rPost), new RestComment({ rest_cstyleloop }, '{"rest_cstyleloop":{}}')];
}
exports.prepCStyleLoop = prepCStyleLoop;
function prepCallExpr(callexpr) {
    logg_1.logg("prepCallExpr");
    if (!callexpr) {
        return [new RestComment({ empty_callexpr: callexpr }, '{"empty_callexpr":null}')];
    }
    const { Assigns, Args, ...rest_callexpr } = callexpr;
    const rAssigns = prepAssigns(Assigns);
    const rArgs = prepWords(Args);
    return [...ParserDo_1.doCallExpr(rAssigns, rArgs), new RestComment({ rest_callexpr }, '{"rest_callexpr":{}}')];
}
exports.prepCallExpr = prepCallExpr;
function prepCaseClause(caseclause) {
    logg_1.logg("prepCaseClause");
    if (!caseclause) {
        return [new RestComment({ empty_caseclause: caseclause }, '{"empty_caseclause":null}')];
    }
    const { Case, Esac, Word, Items, Last, ...rest_caseclause } = caseclause;
    const rCase = prepPos(Case);
    const rEsac = prepPos(Esac);
    const rWord = prepWord(Word);
    const rItems = prepCaseItems(Items);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doCaseClause(rCase, rEsac, rWord, rItems, rLast), new RestComment({ rest_caseclause }, '{"rest_caseclause":{}}')];
}
exports.prepCaseClause = prepCaseClause;
function prepCaseItem(caseitem) {
    logg_1.logg("prepCaseItem");
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
    return [...ParserDo_1.doCaseItem(rOp, rOpPos, rComments, rPatterns, rStmtList, rLast), new RestComment({ rest_caseitem }, '{"rest_caseitem":{}}')];
}
exports.prepCaseItem = prepCaseItem;
function prepCmdSubst(cmdsubst) {
    logg_1.logg("prepCmdSubst");
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
    return [...ParserDo_1.doCmdSubst(rLeft, rRight, rStmtList, rLast, rTempFile, rReplyVar), new RestComment({ rest_cmdsubst }, '{"rest_cmdsubst":{}}')];
}
exports.prepCmdSubst = prepCmdSubst;
function prepCommand(command) {
    logg_1.logg("prepCommand");
    if (!command) {
        return [new RestComment({ empty_command: command }, '{"empty_command":null}')];
    }
    switch (mvdan_sh_1.syntax.NodeType(command)) {
        case "CallExpr":
            return prepCallExpr(command);
        case "IfClause":
            return prepIfClause(command);
        case "WhileClause":
            return prepWhileClause(command);
        case "ForClause":
            return prepForClause(command);
        case "CaseClause":
            return prepCaseClause(command);
        case "Block":
            return prepBlock(command);
        case "Subshell":
            return prepSubshell(command);
        case "BinaryCmd":
            return prepBinaryCmd(command);
        case "FuncDecl":
            return prepFuncDecl(command);
        case "ArithmCmd":
            return prepArithmCmd(command);
        case "TestClause":
            return prepTestClause(command);
        case "DeclClause":
            return prepDeclClause(command);
        case "LetClause":
            return prepLetClause(command);
        case "TimeClause":
            return prepTimeClause(command);
        case "CoprocClause":
            return prepCoprocClause(command);
        default:
            return [new RestComment({ unknown_command: command })];
    }
}
exports.prepCommand = prepCommand;
function prepComment(comment) {
    logg_1.logg("prepComment");
    if (!comment) {
        return [new RestComment({ empty_comment: comment }, '{"empty_comment":null}')];
    }
    const { Hash, Text, ...rest_comment } = comment;
    const rHash = prepPos(Hash);
    const rText = prepstring(Text);
    return [...ParserDo_1.doComment(rHash, rText), new RestComment({ rest_comment }, '{"rest_comment":{}}')];
}
exports.prepComment = prepComment;
function prepCoprocClause(coprocclause) {
    logg_1.logg("prepCoprocClause");
    if (!coprocclause) {
        return [new RestComment({ empty_coprocclause: coprocclause }, '{"empty_coprocclause":null}')];
    }
    const { Coproc, Name, Stmt, ...rest_coprocclause } = coprocclause;
    const rCoproc = prepPos(Coproc);
    const rName = prepWord(Name);
    const rStmt = prepStmt(Stmt);
    return [...ParserDo_1.doCoprocClause(rCoproc, rName, rStmt), new RestComment({ rest_coprocclause }, '{"rest_coprocclause":{}}')];
}
exports.prepCoprocClause = prepCoprocClause;
function prepDblQuoted(dblquoted) {
    logg_1.logg("prepDblQuoted");
    if (!dblquoted) {
        return [new RestComment({ empty_dblquoted: dblquoted }, '{"empty_dblquoted":null}')];
    }
    const { Position, Dollar, Parts, ...rest_dblquoted } = dblquoted;
    const rPosition = prepPos(Position);
    const rDollar = prepboolean(Dollar);
    const rParts = prepWordParts(Parts);
    return [...ParserDo_1.doDblQuoted(rPosition, rDollar, rParts), new RestComment({ rest_dblquoted }, '{"rest_dblquoted":{}}')];
}
exports.prepDblQuoted = prepDblQuoted;
function prepDeclClause(declclause) {
    logg_1.logg("prepDeclClause");
    if (!declclause) {
        return [new RestComment({ empty_declclause: declclause }, '{"empty_declclause":null}')];
    }
    const { Variant, Opts, Assigns, ...rest_declclause } = declclause;
    const rVariant = prepLit(Variant);
    const rOpts = prepWords(Opts);
    const rAssigns = prepAssigns(Assigns);
    return [...ParserDo_1.doDeclClause(rVariant, rOpts, rAssigns), new RestComment({ rest_declclause }, '{"rest_declclause":{}}')];
}
exports.prepDeclClause = prepDeclClause;
function prepExtGlob(extglob) {
    logg_1.logg("prepExtGlob");
    if (!extglob) {
        return [new RestComment({ empty_extglob: extglob }, '{"empty_extglob":null}')];
    }
    const { OpPos, Op, Pattern, ...rest_extglob } = extglob;
    const rOpPos = prepPos(OpPos);
    const rOp = prepGlobOperator(Op);
    const rPattern = prepLit(Pattern);
    return [...ParserDo_1.doExtGlob(rOpPos, rOp, rPattern), new RestComment({ rest_extglob }, '{"rest_extglob":{}}')];
}
exports.prepExtGlob = prepExtGlob;
function prepFile(file) {
    logg_1.logg("prepFile");
    if (!file) {
        return [new RestComment({ empty_file: file }, '{"empty_file":null}')];
    }
    const { Name, StmtList, Last, ...rest_file } = file;
    const rName = prepstring(Name);
    const rStmtList = prepStmtList(StmtList);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doFile(rName, rStmtList, rLast), new RestComment({ rest_file }, '{"rest_file":{}}')];
}
exports.prepFile = prepFile;
function prepForClause(forclause) {
    logg_1.logg("prepForClause");
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
    return [...ParserDo_1.doForClause(rForPos, rDoPos, rDonePos, rSelect, rLoop, rDo, rDoLast), new RestComment({ rest_forclause }, '{"rest_forclause":{}}')];
}
exports.prepForClause = prepForClause;
function prepFuncDecl(funcdecl) {
    logg_1.logg("prepFuncDecl");
    if (!funcdecl) {
        return [new RestComment({ empty_funcdecl: funcdecl }, '{"empty_funcdecl":null}')];
    }
    const { Position, RsrvWord, Name, Body, ...rest_funcdecl } = funcdecl;
    const rPosition = prepPos(Position);
    const rRsrvWord = prepboolean(RsrvWord);
    const rName = prepLit(Name);
    const rBody = prepStmt(Body);
    return [...ParserDo_1.doFuncDecl(rPosition, rRsrvWord, rName, rBody), new RestComment({ rest_funcdecl }, '{"rest_funcdecl":{}}')];
}
exports.prepFuncDecl = prepFuncDecl;
function prepIfClause(ifclause) {
    logg_1.logg("prepIfClause");
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
    return [...ParserDo_1.doIfClause(rPosition, rThenPos, rFiPos, rCond, rCondLast, rThen, rThenLast, rElse, rLast), new RestComment({ rest_ifclause }, '{"rest_ifclause":{}}')];
}
exports.prepIfClause = prepIfClause;
function prepLetClause(letclause) {
    logg_1.logg("prepLetClause");
    if (!letclause) {
        return [new RestComment({ empty_letclause: letclause }, '{"empty_letclause":null}')];
    }
    const { Let, Exprs, ...rest_letclause } = letclause;
    const rLet = prepPos(Let);
    const rExprs = prepArithmExprs(Exprs);
    return [...ParserDo_1.doLetClause(rLet, rExprs), new RestComment({ rest_letclause }, '{"rest_letclause":{}}')];
}
exports.prepLetClause = prepLetClause;
function prepLit(lit) {
    logg_1.logg("prepLit");
    if (!lit) {
        return [new RestComment({ empty_lit: lit }, '{"empty_lit":null}')];
    }
    const { ValuePos, ValueEnd, Value, ...rest_lit } = lit;
    const rValuePos = prepPos(ValuePos);
    const rValueEnd = prepPos(ValueEnd);
    const rValue = prepstring(Value);
    return [...ParserDo_1.doLit(rValuePos, rValueEnd, rValue), new RestComment({ rest_lit }, '{"rest_lit":{}}')];
}
exports.prepLit = prepLit;
function prepLoop(loop) {
    logg_1.logg("prepLoop");
    if (!loop) {
        return [new RestComment({ empty_loop: loop }, '{"empty_loop":null}')];
    }
    switch (mvdan_sh_1.syntax.NodeType(loop)) {
        case "WordIter":
            return prepWordIter(loop);
        case "CStyleLoop":
            return prepCStyleLoop(loop);
        default:
            return [new RestComment({ unknown_loop: loop })];
    }
}
exports.prepLoop = prepLoop;
function prepParamExp(paramexp) {
    logg_1.logg("prepParamExp");
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
    return [...ParserDo_1.doParamExp(rDollar, rRbrace, rShort, rExcl, rLength, rWidth, rParam, rIndex, rSlice, rRepl, rNames, rExp), new RestComment({ rest_paramexp }, '{"rest_paramexp":{}}')];
}
exports.prepParamExp = prepParamExp;
function prepParenArithm(parenarithm) {
    logg_1.logg("prepParenArithm");
    if (!parenarithm) {
        return [new RestComment({ empty_parenarithm: parenarithm }, '{"empty_parenarithm":null}')];
    }
    const { Lparen, Rparen, X, ...rest_parenarithm } = parenarithm;
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rX = prepArithmExpr(X);
    return [...ParserDo_1.doParenArithm(rLparen, rRparen, rX), new RestComment({ rest_parenarithm }, '{"rest_parenarithm":{}}')];
}
exports.prepParenArithm = prepParenArithm;
function prepParenTest(parentest) {
    logg_1.logg("prepParenTest");
    if (!parentest) {
        return [new RestComment({ empty_parentest: parentest }, '{"empty_parentest":null}')];
    }
    const { Lparen, Rparen, X, ...rest_parentest } = parentest;
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rX = prepTestExpr(X);
    return [...ParserDo_1.doParenTest(rLparen, rRparen, rX), new RestComment({ rest_parentest }, '{"rest_parentest":{}}')];
}
exports.prepParenTest = prepParenTest;
function prepProcSubst(procsubst) {
    logg_1.logg("prepProcSubst");
    if (!procsubst) {
        return [new RestComment({ empty_procsubst: procsubst }, '{"empty_procsubst":null}')];
    }
    const { OpPos, Rparen, Op, Stmts, Last, ...rest_procsubst } = procsubst;
    const rOpPos = prepPos(OpPos);
    const rRparen = prepPos(Rparen);
    const rOp = prepProcOperator(Op);
    const rStmts = prepStmts(Stmts);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doProcSubst(rOpPos, rRparen, rOp, rStmts, rLast), new RestComment({ rest_procsubst }, '{"rest_procsubst":{}}')];
}
exports.prepProcSubst = prepProcSubst;
function prepRedirect(redirect) {
    logg_1.logg("prepRedirect");
    if (!redirect) {
        return [new RestComment({ empty_redirect: redirect }, '{"empty_redirect":null}')];
    }
    const { OpPos, Op, N, Word, Hdoc, ...rest_redirect } = redirect;
    const rOpPos = prepPos(OpPos);
    const rOp = prepRedirOperator(Op);
    const rN = prepLit(N);
    const rWord = prepWord(Word);
    const rHdoc = prepWord(Hdoc);
    return [...ParserDo_1.doRedirect(rOpPos, rOp, rN, rWord, rHdoc), new RestComment({ rest_redirect }, '{"rest_redirect":{}}')];
}
exports.prepRedirect = prepRedirect;
function prepSglQuoted(sglquoted) {
    logg_1.logg("prepSglQuoted");
    if (!sglquoted) {
        return [new RestComment({ empty_sglquoted: sglquoted }, '{"empty_sglquoted":null}')];
    }
    const { Left, Right, Dollar, Value, ...rest_sglquoted } = sglquoted;
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rDollar = prepboolean(Dollar);
    const rValue = prepstring(Value);
    return [...ParserDo_1.doSglQuoted(rLeft, rRight, rDollar, rValue), new RestComment({ rest_sglquoted }, '{"rest_sglquoted":{}}')];
}
exports.prepSglQuoted = prepSglQuoted;
function prepStmt(stmt) {
    logg_1.logg("prepStmt");
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
    return [...ParserDo_1.doStmt(rComments, rCmd, rPosition, rSemicolon, rNegated, rBackground, rCoprocess, rRedirs), new RestComment({ rest_stmt }, '{"rest_stmt":{}}')];
}
exports.prepStmt = prepStmt;
function prepStmtList(stmtlist) {
    logg_1.logg("prepStmtList");
    if (!stmtlist) {
        return [new RestComment({ empty_stmtlist: stmtlist }, '{"empty_stmtlist":null}')];
    }
    const { Stmts, Last, ...rest_stmtlist } = stmtlist;
    const rStmts = prepStmts(Stmts);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doStmtList(rStmts, rLast), new RestComment({ rest_stmtlist }, '{"rest_stmtlist":{}}')];
}
exports.prepStmtList = prepStmtList;
function prepSubshell(subshell) {
    logg_1.logg("prepSubshell");
    if (!subshell) {
        return [new RestComment({ empty_subshell: subshell }, '{"empty_subshell":null}')];
    }
    const { Lparen, Rparen, StmtList, Last, ...rest_subshell } = subshell;
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rStmtList = prepStmtList(StmtList);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doSubshell(rLparen, rRparen, rStmtList, rLast), new RestComment({ rest_subshell }, '{"rest_subshell":{}}')];
}
exports.prepSubshell = prepSubshell;
function prepTestClause(testclause) {
    logg_1.logg("prepTestClause");
    if (!testclause) {
        return [new RestComment({ empty_testclause: testclause }, '{"empty_testclause":null}')];
    }
    const { Left, Right, X, ...rest_testclause } = testclause;
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rX = prepTestExpr(X);
    return [...ParserDo_1.doTestClause(rLeft, rRight, rX), new RestComment({ rest_testclause }, '{"rest_testclause":{}}')];
}
exports.prepTestClause = prepTestClause;
function prepTestExpr(testexpr) {
    logg_1.logg("prepTestExpr");
    if (!testexpr) {
        return [new RestComment({ empty_testexpr: testexpr }, '{"empty_testexpr":null}')];
    }
    switch (mvdan_sh_1.syntax.NodeType(testexpr)) {
        case "BinaryTest":
            return prepBinaryTest(testexpr);
        case "UnaryTest":
            return prepUnaryTest(testexpr);
        case "ParenTest":
            return prepParenTest(testexpr);
        case "Word":
            return prepWord(testexpr);
        default:
            return [new RestComment({ unknown_testexpr: testexpr })];
    }
}
exports.prepTestExpr = prepTestExpr;
function prepTimeClause(timeclause) {
    logg_1.logg("prepTimeClause");
    if (!timeclause) {
        return [new RestComment({ empty_timeclause: timeclause }, '{"empty_timeclause":null}')];
    }
    const { Time, PosixFormat, Stmt, ...rest_timeclause } = timeclause;
    const rTime = prepPos(Time);
    const rPosixFormat = prepboolean(PosixFormat);
    const rStmt = prepStmt(Stmt);
    return [...ParserDo_1.doTimeClause(rTime, rPosixFormat, rStmt), new RestComment({ rest_timeclause }, '{"rest_timeclause":{}}')];
}
exports.prepTimeClause = prepTimeClause;
function prepUnaryArithm(unaryarithm) {
    logg_1.logg("prepUnaryArithm");
    if (!unaryarithm) {
        return [new RestComment({ empty_unaryarithm: unaryarithm }, '{"empty_unaryarithm":null}')];
    }
    const { OpPos, Op, Post, X, ...rest_unaryarithm } = unaryarithm;
    const rOpPos = prepPos(OpPos);
    const rOp = prepUnAritOperator(Op);
    const rPost = prepboolean(Post);
    const rX = prepArithmExpr(X);
    return [...ParserDo_1.doUnaryArithm(rOpPos, rOp, rPost, rX), new RestComment({ rest_unaryarithm }, '{"rest_unaryarithm":{}}')];
}
exports.prepUnaryArithm = prepUnaryArithm;
function prepUnaryTest(unarytest) {
    logg_1.logg("prepUnaryTest");
    if (!unarytest) {
        return [new RestComment({ empty_unarytest: unarytest }, '{"empty_unarytest":null}')];
    }
    const { OpPos, Op, X, ...rest_unarytest } = unarytest;
    const rOpPos = prepPos(OpPos);
    const rOp = prepUnTestOperator(Op);
    const rX = prepTestExpr(X);
    return [...ParserDo_1.doUnaryTest(rOpPos, rOp, rX), new RestComment({ rest_unarytest }, '{"rest_unarytest":{}}')];
}
exports.prepUnaryTest = prepUnaryTest;
function prepWhileClause(whileclause) {
    logg_1.logg("prepWhileClause");
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
    return [...ParserDo_1.doWhileClause(rWhilePos, rDoPos, rDonePos, rUntil, rCond, rCondLast, rDo, rDoLast), new RestComment({ rest_whileclause }, '{"rest_whileclause":{}}')];
}
exports.prepWhileClause = prepWhileClause;
function prepWord(word) {
    logg_1.logg("prepWord");
    if (!word) {
        return [new RestComment({ empty_word: word }, '{"empty_word":null}')];
    }
    const { Parts, ...rest_word } = word;
    const rParts = prepWordParts(Parts);
    return [...ParserDo_1.doWord(rParts), new RestComment({ rest_word }, '{"rest_word":{}}')];
}
exports.prepWord = prepWord;
function prepWordIter(worditer) {
    logg_1.logg("prepWordIter");
    if (!worditer) {
        return [new RestComment({ empty_worditer: worditer }, '{"empty_worditer":null}')];
    }
    const { Name, InPos, Items, ...rest_worditer } = worditer;
    const rName = prepLit(Name);
    const rInPos = prepPos(InPos);
    const rItems = prepWords(Items);
    return [...ParserDo_1.doWordIter(rName, rInPos, rItems), new RestComment({ rest_worditer }, '{"rest_worditer":{}}')];
}
exports.prepWordIter = prepWordIter;
function prepWordPart(wordpart) {
    logg_1.logg("prepWordPart");
    if (!wordpart) {
        return [new RestComment({ empty_wordpart: wordpart }, '{"empty_wordpart":null}')];
    }
    switch (mvdan_sh_1.syntax.NodeType(wordpart)) {
        case "Lit":
            return prepLit(wordpart);
        case "SglQuoted":
            return prepSglQuoted(wordpart);
        case "DblQuoted":
            return prepDblQuoted(wordpart);
        case "ParamExp":
            return prepParamExp(wordpart);
        case "CmdSubst":
            return prepCmdSubst(wordpart);
        case "ArithmExp":
            return prepArithmExp(wordpart);
        case "ProcSubst":
            return prepProcSubst(wordpart);
        case "ExtGlob":
            return prepExtGlob(wordpart);
        case "BraceExp":
            return prepBraceExp(wordpart);
        default:
            return [new RestComment({ unknown_wordpart: wordpart })];
    }
}
exports.prepWordPart = prepWordPart;
function prepArithmExprs(arithmexprs) {
    logg_1.logg("prepArithmExprs");
    if (!arithmexprs) {
        return [new RestComment({ empty_arithmexprs: arithmexprs }, '{"empty_arithmexprs":null}')];
    }
    const res = [];
    arithmexprs.forEach((arithmexpr) => {
        res.push(...prepArithmExpr(arithmexpr));
    });
    return res;
}
exports.prepArithmExprs = prepArithmExprs;
function prepArrayElems(arrayelems) {
    logg_1.logg("prepArrayElems");
    if (!arrayelems) {
        return [new RestComment({ empty_arrayelems: arrayelems }, '{"empty_arrayelems":null}')];
    }
    const res = [];
    arrayelems.forEach((arrayelem) => {
        res.push(...prepArrayElem(arrayelem));
    });
    return res;
}
exports.prepArrayElems = prepArrayElems;
function prepAssigns(assigns) {
    logg_1.logg("prepAssigns");
    if (!assigns) {
        return [new RestComment({ empty_assigns: assigns }, '{"empty_assigns":null}')];
    }
    const res = [];
    assigns.forEach((assign) => {
        res.push(...prepAssign(assign));
    });
    return res;
}
exports.prepAssigns = prepAssigns;
function prepCaseItems(caseitems) {
    logg_1.logg("prepCaseItems");
    if (!caseitems) {
        return [new RestComment({ empty_caseitems: caseitems }, '{"empty_caseitems":null}')];
    }
    const res = [];
    caseitems.forEach((caseitem) => {
        res.push(...prepCaseItem(caseitem));
    });
    return res;
}
exports.prepCaseItems = prepCaseItems;
function prepComments(comments) {
    logg_1.logg("prepComments");
    if (!comments) {
        return [new RestComment({ empty_comments: comments }, "{}")];
    }
    const res = [];
    comments.forEach((comment) => {
        res.push(...prepComment(comment));
    });
    return res;
}
exports.prepComments = prepComments;
function prepRedirects(redirects) {
    logg_1.logg("prepRedirects");
    if (!redirects) {
        return [new RestComment({ empty_redirects: redirects }, '{"empty_redirects":null}')];
    }
    const res = [];
    redirects.forEach((redirect) => {
        res.push(...prepRedirect(redirect));
    });
    return res;
}
exports.prepRedirects = prepRedirects;
function prepStmts(stmts) {
    logg_1.logg("prepStmts");
    if (!stmts) {
        return [new RestComment({ empty_stmts: stmts }, '{"empty_stmts":null}')];
    }
    const res = [];
    stmts.forEach((stmt) => {
        res.push(...prepStmt(stmt));
    });
    return res;
}
exports.prepStmts = prepStmts;
function prepWords(words) {
    logg_1.logg("prepWords");
    if (!words) {
        return [new RestComment({ empty_words: words }, '{"empty_words":null}')];
    }
    const res = [];
    words.forEach((word) => {
        res.push(...prepWord(word));
    });
    return res;
}
exports.prepWords = prepWords;
function prepWordParts(wordparts) {
    logg_1.logg("prepWordParts");
    if (!wordparts) {
        return [new RestComment({ empty_wordparts: wordparts }, '{"empty_wordparts":null}')];
    }
    const res = [];
    wordparts.forEach((wordpart) => {
        res.push(...prepWordPart(wordpart));
    });
    return res;
}
exports.prepWordParts = prepWordParts;
function prepBinAritOperator(aBinaritoperator) {
    return aBinaritoperator;
}
exports.prepBinAritOperator = prepBinAritOperator;
function prepBinCmdOperator(aBincmdoperator) {
    return aBincmdoperator;
}
exports.prepBinCmdOperator = prepBinCmdOperator;
function prepBinTestOperator(aBintestoperator) {
    return aBintestoperator;
}
exports.prepBinTestOperator = prepBinTestOperator;
function prepboolean(aBoolean) {
    return aBoolean;
}
exports.prepboolean = prepboolean;
function prepCaseOperator(aCaseoperator) {
    return aCaseoperator;
}
exports.prepCaseOperator = prepCaseOperator;
function prepGlobOperator(aGloboperator) {
    return aGloboperator;
}
exports.prepGlobOperator = prepGlobOperator;
function prepExpansion(aExpansion) {
    return aExpansion;
}
exports.prepExpansion = prepExpansion;
function prepPos(aPos) {
    return aPos;
}
exports.prepPos = prepPos;
function prepReplace(aReplace) {
    return aReplace;
}
exports.prepReplace = prepReplace;
function prepSlice(aSlice) {
    return aSlice;
}
exports.prepSlice = prepSlice;
function prepParNamesOperator(aParnamesoperator) {
    return aParnamesoperator;
}
exports.prepParNamesOperator = prepParNamesOperator;
function prepProcOperator(aProcoperator) {
    return aProcoperator;
}
exports.prepProcOperator = prepProcOperator;
function prepRedirOperator(aRediroperator) {
    return aRediroperator;
}
exports.prepRedirOperator = prepRedirOperator;
function prepstring(aString) {
    return aString;
}
exports.prepstring = prepstring;
function prepUnAritOperator(aUnaritoperator) {
    return aUnaritoperator;
}
exports.prepUnAritOperator = prepUnAritOperator;
function prepUnTestOperator(aUntestoperator) {
    return aUntestoperator;
}
exports.prepUnTestOperator = prepUnTestOperator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyUHJlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvUGFyc2VyUHJlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQWtDO0FBR2xDLGlDQUE4QjtBQUM5QiwyQ0FBMkM7QUFDM0MseUNBQXFpQjtBQUlyaUIsU0FBZ0IsYUFBYSxDQUFDLFNBQTRCO0lBQ3hELFdBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsT0FBTyxDQUFDLElBQUksV0FBVyxDQUFDLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxFQUFFLDBCQUEwQixDQUFDLENBQUMsQ0FBQztLQUN0RjtJQUNELE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxjQUFjLEVBQUUsR0FBRyxTQUFTLENBQUM7SUFDbEUsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsTUFBTSxFQUFFLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLHNCQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7QUFDdEgsQ0FBQztBQVhELHNDQVdDO0FBQ0QsU0FBZ0IsYUFBYSxDQUFDLFNBQTRCO0lBQ3hELFdBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsT0FBTyxDQUFDLElB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