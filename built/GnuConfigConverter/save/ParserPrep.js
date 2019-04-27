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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyUHJlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvc2F2ZS9QYXJzZXJQcmVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBa0M7QUFHbEMsaUNBQThCO0FBQzlCLDJDQUEyQztBQUMzQyx5Q0FBcWlCO0FBSXJpQixTQUFnQixhQUFhLENBQUMsU0FBNEI7SUFDeEQsV0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDZCxPQUFPLENBQUMsSUFBSSxXQUFXLENBQUMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLEVBQUUsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO0tBQ3RGO0lBQ0QsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLGNBQWMsRUFBRSxHQUFHLFNBQVMsQ0FBQztJQUNsRSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxNQUFNLEVBQUUsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsc0JBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxFQUFFLHVCQUF1QixDQUFDLENBQUMsQ0FBQztBQUN0SCxDQUFDO0FBWEQsc0NBV0M7QUFDRCxTQUFnQixhQUFhLENBQUMsU0FBNEI7SUFDeEQsV0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDZCxPQUFP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