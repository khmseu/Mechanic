"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepAssigns = exports.prepArrayElems = exports.prepArithmExprs = exports.prepWordPart = exports.prepWordIter = exports.prepWord = exports.prepWhileClause = exports.prepUnaryTest = exports.prepUnaryArithm = exports.prepTimeClause = exports.prepTestExpr = exports.prepTestClause = exports.prepSubshell = exports.prepStmtList = exports.prepStmt = exports.prepSglQuoted = exports.prepRedirect = exports.prepProcSubst = exports.prepParenTest = exports.prepParenArithm = exports.prepParamExp = exports.prepLoop = exports.prepLit = exports.prepLetClause = exports.prepIfClause = exports.prepFuncDecl = exports.prepForClause = exports.prepFile = exports.prepExtGlob = exports.prepDeclClause = exports.prepDblQuoted = exports.prepCoprocClause = exports.prepComment = exports.prepCommand = exports.prepCmdSubst = exports.prepCaseItem = exports.prepCaseClause = exports.prepCallExpr = exports.prepCStyleLoop = exports.prepBraceExp = exports.prepBlock = exports.prepBinaryTest = exports.prepBinaryCmd = exports.prepBinaryArithm = exports.prepAssign = exports.prepArrayExpr = exports.prepArrayElem = exports.prepArithmExpr = exports.prepArithmExp = exports.prepArithmCmd = void 0;
exports.prepUnTestOperator = exports.prepUnAritOperator = exports.prepstring = exports.prepRedirOperator = exports.prepProcOperator = exports.prepParNamesOperator = exports.prepSlice = exports.prepReplace = exports.prepPos = exports.prepExpansion = exports.prepGlobOperator = exports.prepCaseOperator = exports.prepboolean = exports.prepBinTestOperator = exports.prepBinCmdOperator = exports.prepBinAritOperator = exports.prep = exports.prepWordParts = exports.prepWords = exports.prepStmts = exports.prepRedirects = exports.prepComments = exports.prepCaseItems = void 0;
const mvdan_sh_1 = require("mvdan-sh");
const _1 = require(".");
// tslint:disable-next-line:max-line-length
const ParserDo_1 = require("./ParserDo");
const syntax = mvdan_sh_1.sh.syntax;
function prepArithmCmd(arithmcmd) {
    (0, _1.logg)("prepArithmCmd");
    if (!arithmcmd) {
        return [(0, _1.comm)({ empty_arithmcmd: arithmcmd }, '{"empty_arithmcmd":null}')];
    }
    const { Left, Right, Unsigned, X, ...rest_arithmcmd } = arithmcmd;
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rUnsigned = prepboolean(Unsigned);
    const rX = prepArithmExpr(X);
    return [...(0, ParserDo_1.doArithmCmd)(rLeft, rRight, rUnsigned, rX), (0, _1.comm)({ rest_arithmcmd }, '{"rest_arithmcmd":{}}')];
}
exports.prepArithmCmd = prepArithmCmd;
function prepArithmExp(arithmexp) {
    (0, _1.logg)("prepArithmExp");
    if (!arithmexp) {
        return [(0, _1.comm)({ empty_arithmexp: arithmexp }, '{"empty_arithmexp":null}')];
    }
    const { Left, Right, Bracket, Unsigned, X, ...rest_arithmexp } = arithmexp;
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rBracket = prepboolean(Bracket);
    const rUnsigned = prepboolean(Unsigned);
    const rX = prepArithmExpr(X);
    return [...(0, ParserDo_1.doArithmExp)(rLeft, rRight, rBracket, rUnsigned, rX), (0, _1.comm)({ rest_arithmexp }, '{"rest_arithmexp":{}}')];
}
exports.prepArithmExp = prepArithmExp;
function prepArithmExpr(arithmexpr) {
    (0, _1.logg)("prepArithmExpr");
    if (!arithmexpr) {
        return [(0, _1.comm)({ empty_arithmexpr: arithmexpr }, '{"empty_arithmexpr":null}')];
    }
    switch (syntax.NodeType(arithmexpr)) {
        case "BinaryArithm":
            return prepBinaryArithm(arithmexpr);
        case "UnaryArithm":
            return prepUnaryArithm(arithmexpr);
        case "ParenArithm":
            return prepParenArithm(arithmexpr);
        case "Word":
            return prepWord(arithmexpr);
        default:
            return [(0, _1.comm)({ unknown_arithmexpr: arithmexpr })];
    }
}
exports.prepArithmExpr = prepArithmExpr;
function prepArrayElem(arrayelem) {
    (0, _1.logg)("prepArrayElem");
    if (!arrayelem) {
        return [(0, _1.comm)({ empty_arrayelem: arrayelem }, '{"empty_arrayelem":null}')];
    }
    const { Index, Value, Comments, ...rest_arrayelem } = arrayelem;
    const rIndex = prepArithmExpr(Index);
    const rValue = prepWord(Value);
    const rComments = prepComments(Comments);
    return [...(0, ParserDo_1.doArrayElem)(rIndex, rValue, rComments), (0, _1.comm)({ rest_arrayelem }, '{"rest_arrayelem":{}}')];
}
exports.prepArrayElem = prepArrayElem;
function prepArrayExpr(arrayexpr) {
    (0, _1.logg)("prepArrayExpr");
    if (!arrayexpr) {
        return [(0, _1.comm)({ empty_arrayexpr: arrayexpr }, '{"empty_arrayexpr":null}')];
    }
    const { Lparen, Rparen, Elems, Last, ...rest_arrayexpr } = arrayexpr;
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rElems = prepArrayElems(Elems);
    const rLast = prepComments(Last);
    return [...(0, ParserDo_1.doArrayExpr)(rLparen, rRparen, rElems, rLast), (0, _1.comm)({ rest_arrayexpr }, '{"rest_arrayexpr":{}}')];
}
exports.prepArrayExpr = prepArrayExpr;
function prepAssign(assign) {
    (0, _1.logg)("prepAssign");
    if (!assign) {
        return [(0, _1.comm)({ empty_assign: assign }, '{"empty_assign":null}')];
    }
    const { Append, Naked, Name, Index, Value, Array, ...rest_assign } = assign;
    const rAppend = prepboolean(Append);
    const rNaked = prepboolean(Naked);
    const rName = prepLit(Name);
    const rIndex = prepArithmExpr(Index);
    const rValue = prepWord(Value);
    const rArray = prepArrayExpr(Array);
    return [...(0, ParserDo_1.doAssign)(rAppend, rNaked, rName, rIndex, rValue, rArray), (0, _1.comm)({ rest_assign }, '{"rest_assign":{}}')];
}
exports.prepAssign = prepAssign;
function prepBinaryArithm(binaryarithm) {
    (0, _1.logg)("prepBinaryArithm");
    if (!binaryarithm) {
        return [(0, _1.comm)({ empty_binaryarithm: binaryarithm }, '{"empty_binaryarithm":null}')];
    }
    const { OpPos, Op, X, Y, ...rest_binaryarithm } = binaryarithm;
    const rOpPos = prepPos(OpPos);
    const rOp = prepBinAritOperator(Op);
    const rX = prepArithmExpr(X);
    const rY = prepArithmExpr(Y);
    return [...(0, ParserDo_1.doBinaryArithm)(rOpPos, rOp, rX, rY), (0, _1.comm)({ rest_binaryarithm }, '{"rest_binaryarithm":{}}')];
}
exports.prepBinaryArithm = prepBinaryArithm;
function prepBinaryCmd(binarycmd) {
    (0, _1.logg)("prepBinaryCmd");
    if (!binarycmd) {
        return [(0, _1.comm)({ empty_binarycmd: binarycmd }, '{"empty_binarycmd":null}')];
    }
    const { OpPos, Op, X, Y, ...rest_binarycmd } = binarycmd;
    const rOpPos = prepPos(OpPos);
    const rOp = prepBinCmdOperator(Op);
    const rX = prepStmt(X);
    const rY = prepStmt(Y);
    return [...(0, ParserDo_1.doBinaryCmd)(rOpPos, rOp, rX, rY), (0, _1.comm)({ rest_binarycmd }, '{"rest_binarycmd":{}}')];
}
exports.prepBinaryCmd = prepBinaryCmd;
function prepBinaryTest(binarytest) {
    (0, _1.logg)("prepBinaryTest");
    if (!binarytest) {
        return [(0, _1.comm)({ empty_binarytest: binarytest }, '{"empty_binarytest":null}')];
    }
    const { OpPos, Op, X, Y, ...rest_binarytest } = binarytest;
    const rOpPos = prepPos(OpPos);
    const rOp = prepBinTestOperator(Op);
    const rX = prepTestExpr(X);
    const rY = prepTestExpr(Y);
    return [...(0, ParserDo_1.doBinaryTest)(rOpPos, rOp, rX, rY), (0, _1.comm)({ rest_binarytest }, '{"rest_binarytest":{}}')];
}
exports.prepBinaryTest = prepBinaryTest;
function prepBlock(block) {
    (0, _1.logg)("prepBlock");
    if (!block) {
        return [(0, _1.comm)({ empty_block: block }, '{"empty_block":null}')];
    }
    const { Lbrace, Rbrace, StmtList, Last, ...rest_block } = block;
    const rLbrace = prepPos(Lbrace);
    const rRbrace = prepPos(Rbrace);
    const rStmtList = prepStmtList(StmtList);
    const rLast = prepComments(Last);
    return [...(0, ParserDo_1.doBlock)(rLbrace, rRbrace, rStmtList, rLast), (0, _1.comm)({ rest_block }, '{"rest_block":{}}')];
}
exports.prepBlock = prepBlock;
function prepBraceExp(braceexp) {
    (0, _1.logg)("prepBraceExp");
    if (!braceexp) {
        return [(0, _1.comm)({ empty_braceexp: braceexp }, '{"empty_braceexp":null}')];
    }
    const { Sequence, Chars, Elems, ...rest_braceexp } = braceexp;
    const rSequence = prepboolean(Sequence);
    const rChars = prepboolean(Chars);
    const rElems = prepWords(Elems);
    return [...(0, ParserDo_1.doBraceExp)(rSequence, rChars, rElems), (0, _1.comm)({ rest_braceexp }, '{"rest_braceexp":{}}')];
}
exports.prepBraceExp = prepBraceExp;
function prepCStyleLoop(cstyleloop) {
    (0, _1.logg)("prepCStyleLoop");
    if (!cstyleloop) {
        return [(0, _1.comm)({ empty_cstyleloop: cstyleloop }, '{"empty_cstyleloop":null}')];
    }
    const { Lparen, Rparen, Init, Cond, Post, ...rest_cstyleloop } = cstyleloop;
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rInit = prepArithmExpr(Init);
    const rCond = prepArithmExpr(Cond);
    const rPost = prepArithmExpr(Post);
    // tslint:disable-next-line:max-line-length
    return [...(0, ParserDo_1.doCStyleLoop)(rLparen, rRparen, rInit, rCond, rPost), (0, _1.comm)({ rest_cstyleloop }, '{"rest_cstyleloop":{}}')];
}
exports.prepCStyleLoop = prepCStyleLoop;
function prepCallExpr(callexpr) {
    (0, _1.logg)("prepCallExpr");
    if (!callexpr) {
        return [(0, _1.comm)({ empty_callexpr: callexpr }, '{"empty_callexpr":null}')];
    }
    const { Assigns, Args, ...rest_callexpr } = callexpr;
    const rAssigns = prepAssigns(Assigns);
    const rArgs = prepWords(Args);
    return [...(0, ParserDo_1.doCallExpr)(rAssigns, rArgs), (0, _1.comm)({ rest_callexpr }, '{"rest_callexpr":{}}')];
}
exports.prepCallExpr = prepCallExpr;
function prepCaseClause(caseclause) {
    (0, _1.logg)("prepCaseClause");
    if (!caseclause) {
        return [(0, _1.comm)({ empty_caseclause: caseclause }, '{"empty_caseclause":null}')];
    }
    const { Case, Esac, Word, Items, Last, ...rest_caseclause } = caseclause;
    const rCase = prepPos(Case);
    const rEsac = prepPos(Esac);
    const rWord = prepWord(Word);
    const rItems = prepCaseItems(Items);
    const rLast = prepComments(Last);
    return [...(0, ParserDo_1.doCaseClause)(rCase, rEsac, rWord, rItems, rLast), (0, _1.comm)({ rest_caseclause }, '{"rest_caseclause":{}}')];
}
exports.prepCaseClause = prepCaseClause;
function prepCaseItem(caseitem) {
    (0, _1.logg)("prepCaseItem");
    if (!caseitem) {
        return [(0, _1.comm)({ empty_caseitem: caseitem }, '{"empty_caseitem":null}')];
    }
    const { Op, OpPos, Comments, Patterns, StmtList, Last, ...rest_caseitem } = caseitem;
    const rOp = prepCaseOperator(Op);
    const rOpPos = prepPos(OpPos);
    const rComments = prepComments(Comments);
    const rPatterns = prepWords(Patterns);
    const rStmtList = prepStmtList(StmtList);
    const rLast = prepComments(Last);
    // tslint:disable-next-line:max-line-length
    return [...(0, ParserDo_1.doCaseItem)(rOp, rOpPos, rComments, rPatterns, rStmtList, rLast), (0, _1.comm)({ rest_caseitem }, '{"rest_caseitem":{}}')];
}
exports.prepCaseItem = prepCaseItem;
function prepCmdSubst(cmdsubst) {
    (0, _1.logg)("prepCmdSubst");
    if (!cmdsubst) {
        return [(0, _1.comm)({ empty_cmdsubst: cmdsubst }, '{"empty_cmdsubst":null}')];
    }
    const { Left, Right, StmtList, Last, TempFile, ReplyVar, ...rest_cmdsubst } = cmdsubst;
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rStmtList = prepStmtList(StmtList);
    const rLast = prepComments(Last);
    const rTempFile = prepboolean(TempFile);
    const rReplyVar = prepboolean(ReplyVar);
    // tslint:disable-next-line:max-line-length
    return [...(0, ParserDo_1.doCmdSubst)(rLeft, rRight, rStmtList, rLast, rTempFile, rReplyVar), (0, _1.comm)({ rest_cmdsubst }, '{"rest_cmdsubst":{}}')];
}
exports.prepCmdSubst = prepCmdSubst;
function prepCommand(command) {
    (0, _1.logg)("prepCommand");
    if (!command) {
        return [(0, _1.comm)({ empty_command: command }, '{"empty_command":null}')];
    }
    switch (syntax.NodeType(command)) {
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
            return [(0, _1.comm)({ unknown_command: command })];
    }
}
exports.prepCommand = prepCommand;
function prepComment(comment) {
    (0, _1.logg)("prepComment");
    if (!comment) {
        return [(0, _1.comm)({ empty_comment: comment }, '{"empty_comment":null}')];
    }
    const { Hash, Text, ...rest_comment } = comment;
    const rHash = prepPos(Hash);
    const rText = prepstring(Text);
    return [...(0, ParserDo_1.doComment)(rHash, rText), (0, _1.comm)({ rest_comment }, '{"rest_comment":{}}')];
}
exports.prepComment = prepComment;
function prepCoprocClause(coprocclause) {
    (0, _1.logg)("prepCoprocClause");
    if (!coprocclause) {
        return [(0, _1.comm)({ empty_coprocclause: coprocclause }, '{"empty_coprocclause":null}')];
    }
    const { Coproc, Name, Stmt, ...rest_coprocclause } = coprocclause;
    const rCoproc = prepPos(Coproc);
    const rName = prepWord(Name);
    const rStmt = prepStmt(Stmt);
    return [...(0, ParserDo_1.doCoprocClause)(rCoproc, rName, rStmt), (0, _1.comm)({ rest_coprocclause }, '{"rest_coprocclause":{}}')];
}
exports.prepCoprocClause = prepCoprocClause;
function prepDblQuoted(dblquoted) {
    (0, _1.logg)("prepDblQuoted");
    if (!dblquoted) {
        return [(0, _1.comm)({ empty_dblquoted: dblquoted }, '{"empty_dblquoted":null}')];
    }
    const { Position, Dollar, Parts, ...rest_dblquoted } = dblquoted;
    const rPosition = prepPos(Position);
    const rDollar = prepboolean(Dollar);
    const rParts = prepWordParts(Parts);
    return [...(0, ParserDo_1.doDblQuoted)(rPosition, rDollar, rParts), (0, _1.comm)({ rest_dblquoted }, '{"rest_dblquoted":{}}')];
}
exports.prepDblQuoted = prepDblQuoted;
function prepDeclClause(declclause) {
    (0, _1.logg)("prepDeclClause");
    if (!declclause) {
        return [(0, _1.comm)({ empty_declclause: declclause }, '{"empty_declclause":null}')];
    }
    const { Variant, Opts, Assigns, ...rest_declclause } = declclause;
    const rVariant = prepLit(Variant);
    const rOpts = prepWords(Opts);
    const rAssigns = prepAssigns(Assigns);
    return [...(0, ParserDo_1.doDeclClause)(rVariant, rOpts, rAssigns), (0, _1.comm)({ rest_declclause }, '{"rest_declclause":{}}')];
}
exports.prepDeclClause = prepDeclClause;
function prepExtGlob(extglob) {
    (0, _1.logg)("prepExtGlob");
    if (!extglob) {
        return [(0, _1.comm)({ empty_extglob: extglob }, '{"empty_extglob":null}')];
    }
    const { OpPos, Op, Pattern, ...rest_extglob } = extglob;
    const rOpPos = prepPos(OpPos);
    const rOp = prepGlobOperator(Op);
    const rPattern = prepLit(Pattern);
    return [...(0, ParserDo_1.doExtGlob)(rOpPos, rOp, rPattern), (0, _1.comm)({ rest_extglob }, '{"rest_extglob":{}}')];
}
exports.prepExtGlob = prepExtGlob;
function prepFile(file) {
    (0, _1.logg)("prepFile");
    if (!file) {
        return [(0, _1.comm)({ empty_file: file }, '{"empty_file":null}')];
    }
    const { Name, StmtList, Last, ...rest_file } = file;
    const rName = prepstring(Name);
    const rStmtList = prepStmtList(StmtList);
    const rLast = prepComments(Last);
    return [...(0, ParserDo_1.doFile)(rName, rStmtList, rLast), (0, _1.comm)({ rest_file }, '{"rest_file":{}}')];
}
exports.prepFile = prepFile;
function prepForClause(forclause) {
    (0, _1.logg)("prepForClause");
    if (!forclause) {
        return [(0, _1.comm)({ empty_forclause: forclause }, '{"empty_forclause":null}')];
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
    return [...(0, ParserDo_1.doForClause)(rForPos, rDoPos, rDonePos, rSelect, rLoop, rDo, rDoLast), (0, _1.comm)({ rest_forclause }, '{"rest_forclause":{}}')];
}
exports.prepForClause = prepForClause;
function prepFuncDecl(funcdecl) {
    (0, _1.logg)("prepFuncDecl");
    if (!funcdecl) {
        return [(0, _1.comm)({ empty_funcdecl: funcdecl }, '{"empty_funcdecl":null}')];
    }
    const { Position, RsrvWord, Name, Body, ...rest_funcdecl } = funcdecl;
    const rPosition = prepPos(Position);
    const rRsrvWord = prepboolean(RsrvWord);
    const rName = prepLit(Name);
    const rBody = prepStmt(Body);
    return [...(0, ParserDo_1.doFuncDecl)(rPosition, rRsrvWord, rName, rBody), (0, _1.comm)({ rest_funcdecl }, '{"rest_funcdecl":{}}')];
}
exports.prepFuncDecl = prepFuncDecl;
function prepIfClause(ifclause) {
    (0, _1.logg)("prepIfClause");
    if (!ifclause) {
        return [(0, _1.comm)({ empty_ifclause: ifclause }, '{"empty_ifclause":null}')];
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
    return [...(0, ParserDo_1.doIfClause)(rPosition, rThenPos, rFiPos, rCond, rCondLast, rThen, rThenLast, rElse, rLast), (0, _1.comm)({ rest_ifclause }, '{"rest_ifclause":{}}')];
}
exports.prepIfClause = prepIfClause;
function prepLetClause(letclause) {
    (0, _1.logg)("prepLetClause");
    if (!letclause) {
        return [(0, _1.comm)({ empty_letclause: letclause }, '{"empty_letclause":null}')];
    }
    const { Let, Exprs, ...rest_letclause } = letclause;
    const rLet = prepPos(Let);
    const rExprs = prepArithmExprs(Exprs);
    return [...(0, ParserDo_1.doLetClause)(rLet, rExprs), (0, _1.comm)({ rest_letclause }, '{"rest_letclause":{}}')];
}
exports.prepLetClause = prepLetClause;
function prepLit(lit) {
    (0, _1.logg)("prepLit");
    if (!lit) {
        return [(0, _1.comm)({ empty_lit: lit }, '{"empty_lit":null}')];
    }
    const { ValuePos, ValueEnd, Value, ...rest_lit } = lit;
    const rValuePos = prepPos(ValuePos);
    const rValueEnd = prepPos(ValueEnd);
    const rValue = prepstring(Value);
    return [...(0, ParserDo_1.doLit)(rValuePos, rValueEnd, rValue), (0, _1.comm)({ rest_lit }, '{"rest_lit":{}}')];
}
exports.prepLit = prepLit;
function prepLoop(loop) {
    (0, _1.logg)("prepLoop");
    if (!loop) {
        return [(0, _1.comm)({ empty_loop: loop }, '{"empty_loop":null}')];
    }
    switch (syntax.NodeType(loop)) {
        case "WordIter":
            return prepWordIter(loop);
        case "CStyleLoop":
            return prepCStyleLoop(loop);
        default:
            return [(0, _1.comm)({ unknown_loop: loop })];
    }
}
exports.prepLoop = prepLoop;
function prepParamExp(paramexp) {
    (0, _1.logg)("prepParamExp");
    if (!paramexp) {
        return [(0, _1.comm)({ empty_paramexp: paramexp }, '{"empty_paramexp":null}')];
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
    return [...(0, ParserDo_1.doParamExp)(rDollar, rRbrace, rShort, rExcl, rLength, rWidth, rParam, rIndex, rSlice, rRepl, rNames, rExp), (0, _1.comm)({ rest_paramexp }, '{"rest_paramexp":{}}')];
}
exports.prepParamExp = prepParamExp;
function prepParenArithm(parenarithm) {
    (0, _1.logg)("prepParenArithm");
    if (!parenarithm) {
        return [(0, _1.comm)({ empty_parenarithm: parenarithm }, '{"empty_parenarithm":null}')];
    }
    const { Lparen, Rparen, X, ...rest_parenarithm } = parenarithm;
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rX = prepArithmExpr(X);
    return [...(0, ParserDo_1.doParenArithm)(rLparen, rRparen, rX), (0, _1.comm)({ rest_parenarithm }, '{"rest_parenarithm":{}}')];
}
exports.prepParenArithm = prepParenArithm;
function prepParenTest(parentest) {
    (0, _1.logg)("prepParenTest");
    if (!parentest) {
        return [(0, _1.comm)({ empty_parentest: parentest }, '{"empty_parentest":null}')];
    }
    const { Lparen, Rparen, X, ...rest_parentest } = parentest;
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rX = prepTestExpr(X);
    return [...(0, ParserDo_1.doParenTest)(rLparen, rRparen, rX), (0, _1.comm)({ rest_parentest }, '{"rest_parentest":{}}')];
}
exports.prepParenTest = prepParenTest;
function prepProcSubst(procsubst) {
    (0, _1.logg)("prepProcSubst");
    if (!procsubst) {
        return [(0, _1.comm)({ empty_procsubst: procsubst }, '{"empty_procsubst":null}')];
    }
    const { OpPos, Rparen, Op, Stmts, Last, ...rest_procsubst } = procsubst;
    const rOpPos = prepPos(OpPos);
    const rRparen = prepPos(Rparen);
    const rOp = prepProcOperator(Op);
    const rStmts = prepStmts(Stmts);
    const rLast = prepComments(Last);
    return [...(0, ParserDo_1.doProcSubst)(rOpPos, rRparen, rOp, rStmts, rLast), (0, _1.comm)({ rest_procsubst }, '{"rest_procsubst":{}}')];
}
exports.prepProcSubst = prepProcSubst;
function prepRedirect(redirect) {
    (0, _1.logg)("prepRedirect");
    if (!redirect) {
        return [(0, _1.comm)({ empty_redirect: redirect }, '{"empty_redirect":null}')];
    }
    const { OpPos, Op, N, Word, Hdoc, ...rest_redirect } = redirect;
    const rOpPos = prepPos(OpPos);
    const rOp = prepRedirOperator(Op);
    const rN = prepLit(N);
    const rWord = prepWord(Word);
    const rHdoc = prepWord(Hdoc);
    return [...(0, ParserDo_1.doRedirect)(rOpPos, rOp, rN, rWord, rHdoc), (0, _1.comm)({ rest_redirect }, '{"rest_redirect":{}}')];
}
exports.prepRedirect = prepRedirect;
function prepSglQuoted(sglquoted) {
    (0, _1.logg)("prepSglQuoted");
    if (!sglquoted) {
        return [(0, _1.comm)({ empty_sglquoted: sglquoted }, '{"empty_sglquoted":null}')];
    }
    const { Left, Right, Dollar, Value, ...rest_sglquoted } = sglquoted;
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rDollar = prepboolean(Dollar);
    const rValue = prepstring(Value);
    return [...(0, ParserDo_1.doSglQuoted)(rLeft, rRight, rDollar, rValue), (0, _1.comm)({ rest_sglquoted }, '{"rest_sglquoted":{}}')];
}
exports.prepSglQuoted = prepSglQuoted;
function prepStmt(stmt) {
    (0, _1.logg)("prepStmt");
    if (!stmt) {
        return [(0, _1.comm)({ empty_stmt: stmt }, '{"empty_stmt":null}')];
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
    return [...(0, ParserDo_1.doStmt)(rComments, rCmd, rPosition, rSemicolon, rNegated, rBackground, rCoprocess, rRedirs), (0, _1.comm)({ rest_stmt }, '{"rest_stmt":{}}')];
}
exports.prepStmt = prepStmt;
function prepStmtList(stmtlist) {
    (0, _1.logg)("prepStmtList");
    if (!stmtlist) {
        return [(0, _1.comm)({ empty_stmtlist: stmtlist }, '{"empty_stmtlist":null}')];
    }
    const { Stmts, Last, ...rest_stmtlist } = stmtlist;
    const rStmts = prepStmts(Stmts);
    const rLast = prepComments(Last);
    return [...(0, ParserDo_1.doStmtList)(rStmts, rLast), (0, _1.comm)({ rest_stmtlist }, '{"rest_stmtlist":{}}')];
}
exports.prepStmtList = prepStmtList;
function prepSubshell(subshell) {
    (0, _1.logg)("prepSubshell");
    if (!subshell) {
        return [(0, _1.comm)({ empty_subshell: subshell }, '{"empty_subshell":null}')];
    }
    const { Lparen, Rparen, StmtList, Last, ...rest_subshell } = subshell;
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rStmtList = prepStmtList(StmtList);
    const rLast = prepComments(Last);
    return [...(0, ParserDo_1.doSubshell)(rLparen, rRparen, rStmtList, rLast), (0, _1.comm)({ rest_subshell }, '{"rest_subshell":{}}')];
}
exports.prepSubshell = prepSubshell;
function prepTestClause(testclause) {
    (0, _1.logg)("prepTestClause");
    if (!testclause) {
        return [(0, _1.comm)({ empty_testclause: testclause }, '{"empty_testclause":null}')];
    }
    const { Left, Right, X, ...rest_testclause } = testclause;
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rX = prepTestExpr(X);
    return [...(0, ParserDo_1.doTestClause)(rLeft, rRight, rX), (0, _1.comm)({ rest_testclause }, '{"rest_testclause":{}}')];
}
exports.prepTestClause = prepTestClause;
function prepTestExpr(testexpr) {
    (0, _1.logg)("prepTestExpr");
    if (!testexpr) {
        return [(0, _1.comm)({ empty_testexpr: testexpr }, '{"empty_testexpr":null}')];
    }
    switch (syntax.NodeType(testexpr)) {
        case "BinaryTest":
            return prepBinaryTest(testexpr);
        case "UnaryTest":
            return prepUnaryTest(testexpr);
        case "ParenTest":
            return prepParenTest(testexpr);
        case "Word":
            return prepWord(testexpr);
        default:
            return [(0, _1.comm)({ unknown_testexpr: testexpr })];
    }
}
exports.prepTestExpr = prepTestExpr;
function prepTimeClause(timeclause) {
    (0, _1.logg)("prepTimeClause");
    if (!timeclause) {
        return [(0, _1.comm)({ empty_timeclause: timeclause }, '{"empty_timeclause":null}')];
    }
    const { Time, PosixFormat, Stmt, ...rest_timeclause } = timeclause;
    const rTime = prepPos(Time);
    const rPosixFormat = prepboolean(PosixFormat);
    const rStmt = prepStmt(Stmt);
    return [...(0, ParserDo_1.doTimeClause)(rTime, rPosixFormat, rStmt), (0, _1.comm)({ rest_timeclause }, '{"rest_timeclause":{}}')];
}
exports.prepTimeClause = prepTimeClause;
function prepUnaryArithm(unaryarithm) {
    (0, _1.logg)("prepUnaryArithm");
    if (!unaryarithm) {
        return [(0, _1.comm)({ empty_unaryarithm: unaryarithm }, '{"empty_unaryarithm":null}')];
    }
    const { OpPos, Op, Post, X, ...rest_unaryarithm } = unaryarithm;
    const rOpPos = prepPos(OpPos);
    const rOp = prepUnAritOperator(Op);
    const rPost = prepboolean(Post);
    const rX = prepArithmExpr(X);
    return [...(0, ParserDo_1.doUnaryArithm)(rOpPos, rOp, rPost, rX), (0, _1.comm)({ rest_unaryarithm }, '{"rest_unaryarithm":{}}')];
}
exports.prepUnaryArithm = prepUnaryArithm;
function prepUnaryTest(unarytest) {
    (0, _1.logg)("prepUnaryTest");
    if (!unarytest) {
        return [(0, _1.comm)({ empty_unarytest: unarytest }, '{"empty_unarytest":null}')];
    }
    const { OpPos, Op, X, ...rest_unarytest } = unarytest;
    const rOpPos = prepPos(OpPos);
    const rOp = prepUnTestOperator(Op);
    const rX = prepTestExpr(X);
    return [...(0, ParserDo_1.doUnaryTest)(rOpPos, rOp, rX), (0, _1.comm)({ rest_unarytest }, '{"rest_unarytest":{}}')];
}
exports.prepUnaryTest = prepUnaryTest;
function prepWhileClause(whileclause) {
    (0, _1.logg)("prepWhileClause");
    if (!whileclause) {
        return [(0, _1.comm)({ empty_whileclause: whileclause }, '{"empty_whileclause":null}')];
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
    return [...(0, ParserDo_1.doWhileClause)(rWhilePos, rDoPos, rDonePos, rUntil, rCond, rCondLast, rDo, rDoLast), (0, _1.comm)({ rest_whileclause }, '{"rest_whileclause":{}}')];
}
exports.prepWhileClause = prepWhileClause;
function prepWord(word) {
    (0, _1.logg)("prepWord");
    if (!word) {
        return [(0, _1.comm)({ empty_word: word }, '{"empty_word":null}')];
    }
    const { Parts, SplitBraces, Lit, ...rest_word } = word;
    const rParts = prepWordParts(Parts);
    const rSplitBraces = prep(SplitBraces);
    const rLit = prep(Lit);
    return [...(0, ParserDo_1.doWord)(rParts, rSplitBraces, rLit), (0, _1.comm)({ rest_word }, '{"rest_word":{}}')];
}
exports.prepWord = prepWord;
function prepWordIter(worditer) {
    (0, _1.logg)("prepWordIter");
    if (!worditer) {
        return [(0, _1.comm)({ empty_worditer: worditer }, '{"empty_worditer":null}')];
    }
    const { Name, InPos, Items, ...rest_worditer } = worditer;
    const rName = prepLit(Name);
    const rInPos = prepPos(InPos);
    const rItems = prepWords(Items);
    return [...(0, ParserDo_1.doWordIter)(rName, rInPos, rItems), (0, _1.comm)({ rest_worditer }, '{"rest_worditer":{}}')];
}
exports.prepWordIter = prepWordIter;
function prepWordPart(wordpart) {
    (0, _1.logg)("prepWordPart");
    if (!wordpart) {
        return [(0, _1.comm)({ empty_wordpart: wordpart }, '{"empty_wordpart":null}')];
    }
    switch (syntax.NodeType(wordpart)) {
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
            return [(0, _1.comm)({ unknown_wordpart: wordpart })];
    }
}
exports.prepWordPart = prepWordPart;
function prepArithmExprs(arithmexprs) {
    (0, _1.logg)("prepArithmExprs");
    if (!arithmexprs) {
        return [(0, _1.comm)({ empty_arithmexprs: arithmexprs }, '{"empty_arithmexprs":null}')];
    }
    const res = [];
    arithmexprs.forEach((arithmexpr) => {
        res.push(...prepArithmExpr(arithmexpr));
    });
    return res;
}
exports.prepArithmExprs = prepArithmExprs;
function prepArrayElems(arrayelems) {
    (0, _1.logg)("prepArrayElems");
    if (!arrayelems) {
        return [(0, _1.comm)({ empty_arrayelems: arrayelems }, '{"empty_arrayelems":null}')];
    }
    const res = [];
    arrayelems.forEach((arrayelem) => {
        res.push(...prepArrayElem(arrayelem));
    });
    return res;
}
exports.prepArrayElems = prepArrayElems;
function prepAssigns(assigns) {
    (0, _1.logg)("prepAssigns");
    if (!assigns) {
        return [(0, _1.comm)({ empty_assigns: assigns }, '{"empty_assigns":null}')];
    }
    const res = [];
    assigns.forEach((assign) => {
        res.push(...prepAssign(assign));
    });
    return res;
}
exports.prepAssigns = prepAssigns;
function prepCaseItems(caseitems) {
    (0, _1.logg)("prepCaseItems");
    if (!caseitems) {
        return [(0, _1.comm)({ empty_caseitems: caseitems }, '{"empty_caseitems":null}')];
    }
    const res = [];
    caseitems.forEach((caseitem) => {
        res.push(...prepCaseItem(caseitem));
    });
    return res;
}
exports.prepCaseItems = prepCaseItems;
function prepComments(comments) {
    (0, _1.logg)("prepComments");
    if (!comments) {
        return [(0, _1.comm)({ empty_comments: comments }, '{"empty_comments":null}')];
    }
    const res = [];
    comments.forEach((comment) => {
        res.push(...prepComment(comment));
    });
    return res;
}
exports.prepComments = prepComments;
function prepRedirects(redirects) {
    (0, _1.logg)("prepRedirects");
    if (!redirects) {
        return [(0, _1.comm)({ empty_redirects: redirects }, '{"empty_redirects":null}')];
    }
    const res = [];
    redirects.forEach((redirect) => {
        res.push(...prepRedirect(redirect));
    });
    return res;
}
exports.prepRedirects = prepRedirects;
function prepStmts(stmts) {
    (0, _1.logg)("prepStmts");
    if (!stmts) {
        return [(0, _1.comm)({ empty_stmts: stmts }, '{"empty_stmts":null}')];
    }
    const res = [];
    stmts.forEach((stmt) => {
        res.push(...prepStmt(stmt));
    });
    return res;
}
exports.prepStmts = prepStmts;
function prepWords(words) {
    (0, _1.logg)("prepWords");
    if (!words) {
        return [(0, _1.comm)({ empty_words: words }, '{"empty_words":null}')];
    }
    const res = [];
    words.forEach((word) => {
        res.push(...prepWord(word));
    });
    return res;
}
exports.prepWords = prepWords;
function prepWordParts(wordparts) {
    (0, _1.logg)("prepWordParts");
    if (!wordparts) {
        return [(0, _1.comm)({ empty_wordparts: wordparts }, '{"empty_wordparts":null}')];
    }
    const res = [];
    wordparts.forEach((wordpart) => {
        res.push(...prepWordPart(wordpart));
    });
    return res;
}
exports.prepWordParts = prepWordParts;
function prep(a) {
    return a;
}
exports.prep = prep;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyUHJlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvUGFyc2VyUHJlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsdUNBQThCO0FBQzlCLHdCQUErQjtBQUMvQiwyQ0FBMkM7QUFDM0MseUNBQXFpQjtBQUdyaUIsTUFBTSxNQUFNLEdBQUcsYUFBRSxDQUFDLE1BQU0sQ0FBQztBQUV6QixTQUFnQixhQUFhLENBQUMsU0FBNEI7SUFDeEQsSUFBQSxPQUFJLEVBQUMsZUFBZSxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE9BQU8sQ0FBQyxJQUFBLE9BQUksRUFBQyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDLENBQUM7S0FDM0U7SUFDRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsY0FBYyxFQUFFLEdBQUcsU0FBUyxDQUFDO0lBQ25FLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBRSxJQUFJLENBQUMsQ0FBQztJQUU1QixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUUsS0FBSyxDQUFDLENBQUM7SUFFL0IsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRXpDLE1BQU0sRUFBRSxHQUFHLGNBQWMsQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUU5QixPQUFPLENBQUMsR0FBRyxJQUFBLHNCQUFXLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBQSxPQUFJLEVBQUMsRUFBRSxjQUFjLEVBQUUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7QUFDM0csQ0FBQztBQWZELHNDQWVDO0FBQ0QsU0FBZ0IsYUFBYSxDQUFDLFNBQTRCO0lBQ3hELElBQUEsT0FBSSxFQUFDLGVBQWUsQ0FBQyxDQUFD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