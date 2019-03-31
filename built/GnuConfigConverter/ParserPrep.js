"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mvdan_sh_1 = require("mvdan-sh");
const comm_1 = require("./comm");
const logg_1 = require("./logg");
// tslint:disable-next-line:max-line-length
const ParserDo_1 = require("./ParserDo");
function prepArithmCmd(arithmcmd) {
    logg_1.logg("prepArithmCmd");
    if (!arithmcmd) {
        return [comm_1.comm({ empty_arithmcmd: arithmcmd }, '{"empty_arithmcmd":null}')];
    }
    const { Left, Right, Unsigned, X } = arithmcmd, rest_arithmcmd = __rest(arithmcmd, ["Left", "Right", "Unsigned", "X"]);
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rUnsigned = prepboolean(Unsigned);
    const rX = prepArithmExpr(X);
    return [...ParserDo_1.doArithmCmd(rLeft, rRight, rUnsigned, rX), comm_1.comm({ rest_arithmcmd }, '{"rest_arithmcmd":{}}')];
}
exports.prepArithmCmd = prepArithmCmd;
function prepArithmExp(arithmexp) {
    logg_1.logg("prepArithmExp");
    if (!arithmexp) {
        return [comm_1.comm({ empty_arithmexp: arithmexp }, '{"empty_arithmexp":null}')];
    }
    const { Left, Right, Bracket, Unsigned, X } = arithmexp, rest_arithmexp = __rest(arithmexp, ["Left", "Right", "Bracket", "Unsigned", "X"]);
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rBracket = prepboolean(Bracket);
    const rUnsigned = prepboolean(Unsigned);
    const rX = prepArithmExpr(X);
    return [...ParserDo_1.doArithmExp(rLeft, rRight, rBracket, rUnsigned, rX), comm_1.comm({ rest_arithmexp }, '{"rest_arithmexp":{}}')];
}
exports.prepArithmExp = prepArithmExp;
function prepArithmExpr(arithmexpr) {
    logg_1.logg("prepArithmExpr");
    if (!arithmexpr) {
        return [comm_1.comm({ empty_arithmexpr: arithmexpr }, '{"empty_arithmexpr":null}')];
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
            return [comm_1.comm({ unknown_arithmexpr: arithmexpr })];
    }
}
exports.prepArithmExpr = prepArithmExpr;
function prepArrayElem(arrayelem) {
    logg_1.logg("prepArrayElem");
    if (!arrayelem) {
        return [comm_1.comm({ empty_arrayelem: arrayelem }, '{"empty_arrayelem":null}')];
    }
    const { Index, Value, Comments } = arrayelem, rest_arrayelem = __rest(arrayelem, ["Index", "Value", "Comments"]);
    const rIndex = prepArithmExpr(Index);
    const rValue = prepWord(Value);
    const rComments = prepComments(Comments);
    return [...ParserDo_1.doArrayElem(rIndex, rValue, rComments), comm_1.comm({ rest_arrayelem }, '{"rest_arrayelem":{}}')];
}
exports.prepArrayElem = prepArrayElem;
function prepArrayExpr(arrayexpr) {
    logg_1.logg("prepArrayExpr");
    if (!arrayexpr) {
        return [comm_1.comm({ empty_arrayexpr: arrayexpr }, '{"empty_arrayexpr":null}')];
    }
    const { Lparen, Rparen, Elems, Last } = arrayexpr, rest_arrayexpr = __rest(arrayexpr, ["Lparen", "Rparen", "Elems", "Last"]);
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rElems = prepArrayElems(Elems);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doArrayExpr(rLparen, rRparen, rElems, rLast), comm_1.comm({ rest_arrayexpr }, '{"rest_arrayexpr":{}}')];
}
exports.prepArrayExpr = prepArrayExpr;
function prepAssign(assign) {
    logg_1.logg("prepAssign");
    if (!assign) {
        return [comm_1.comm({ empty_assign: assign }, '{"empty_assign":null}')];
    }
    const { Append, Naked, Name, Index, Value, Array } = assign, rest_assign = __rest(assign, ["Append", "Naked", "Name", "Index", "Value", "Array"]);
    const rAppend = prepboolean(Append);
    const rNaked = prepboolean(Naked);
    const rName = prepLit(Name);
    const rIndex = prepArithmExpr(Index);
    const rValue = prepWord(Value);
    const rArray = prepArrayExpr(Array);
    return [...ParserDo_1.doAssign(rAppend, rNaked, rName, rIndex, rValue, rArray), comm_1.comm({ rest_assign }, '{"rest_assign":{}}')];
}
exports.prepAssign = prepAssign;
function prepBinaryArithm(binaryarithm) {
    logg_1.logg("prepBinaryArithm");
    if (!binaryarithm) {
        return [comm_1.comm({ empty_binaryarithm: binaryarithm }, '{"empty_binaryarithm":null}')];
    }
    const { OpPos, Op, X, Y } = binaryarithm, rest_binaryarithm = __rest(binaryarithm, ["OpPos", "Op", "X", "Y"]);
    const rOpPos = prepPos(OpPos);
    const rOp = prepBinAritOperator(Op);
    const rX = prepArithmExpr(X);
    const rY = prepArithmExpr(Y);
    return [...ParserDo_1.doBinaryArithm(rOpPos, rOp, rX, rY), comm_1.comm({ rest_binaryarithm }, '{"rest_binaryarithm":{}}')];
}
exports.prepBinaryArithm = prepBinaryArithm;
function prepBinaryCmd(binarycmd) {
    logg_1.logg("prepBinaryCmd");
    if (!binarycmd) {
        return [comm_1.comm({ empty_binarycmd: binarycmd }, '{"empty_binarycmd":null}')];
    }
    const { OpPos, Op, X, Y } = binarycmd, rest_binarycmd = __rest(binarycmd, ["OpPos", "Op", "X", "Y"]);
    const rOpPos = prepPos(OpPos);
    const rOp = prepBinCmdOperator(Op);
    const rX = prepStmt(X);
    const rY = prepStmt(Y);
    return [...ParserDo_1.doBinaryCmd(rOpPos, rOp, rX, rY), comm_1.comm({ rest_binarycmd }, '{"rest_binarycmd":{}}')];
}
exports.prepBinaryCmd = prepBinaryCmd;
function prepBinaryTest(binarytest) {
    logg_1.logg("prepBinaryTest");
    if (!binarytest) {
        return [comm_1.comm({ empty_binarytest: binarytest }, '{"empty_binarytest":null}')];
    }
    const { OpPos, Op, X, Y } = binarytest, rest_binarytest = __rest(binarytest, ["OpPos", "Op", "X", "Y"]);
    const rOpPos = prepPos(OpPos);
    const rOp = prepBinTestOperator(Op);
    const rX = prepTestExpr(X);
    const rY = prepTestExpr(Y);
    return [...ParserDo_1.doBinaryTest(rOpPos, rOp, rX, rY), comm_1.comm({ rest_binarytest }, '{"rest_binarytest":{}}')];
}
exports.prepBinaryTest = prepBinaryTest;
function prepBlock(block) {
    logg_1.logg("prepBlock");
    if (!block) {
        return [comm_1.comm({ empty_block: block }, '{"empty_block":null}')];
    }
    const { Lbrace, Rbrace, StmtList, Last } = block, rest_block = __rest(block, ["Lbrace", "Rbrace", "StmtList", "Last"]);
    const rLbrace = prepPos(Lbrace);
    const rRbrace = prepPos(Rbrace);
    const rStmtList = prepStmtList(StmtList);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doBlock(rLbrace, rRbrace, rStmtList, rLast), comm_1.comm({ rest_block }, '{"rest_block":{}}')];
}
exports.prepBlock = prepBlock;
function prepBraceExp(braceexp) {
    logg_1.logg("prepBraceExp");
    if (!braceexp) {
        return [comm_1.comm({ empty_braceexp: braceexp }, '{"empty_braceexp":null}')];
    }
    const { Sequence, Chars, Elems } = braceexp, rest_braceexp = __rest(braceexp, ["Sequence", "Chars", "Elems"]);
    const rSequence = prepboolean(Sequence);
    const rChars = prepboolean(Chars);
    const rElems = prepWords(Elems);
    return [...ParserDo_1.doBraceExp(rSequence, rChars, rElems), comm_1.comm({ rest_braceexp }, '{"rest_braceexp":{}}')];
}
exports.prepBraceExp = prepBraceExp;
function prepCStyleLoop(cstyleloop) {
    logg_1.logg("prepCStyleLoop");
    if (!cstyleloop) {
        return [comm_1.comm({ empty_cstyleloop: cstyleloop }, '{"empty_cstyleloop":null}')];
    }
    const { Lparen, Rparen, Init, Cond, Post } = cstyleloop, rest_cstyleloop = __rest(cstyleloop, ["Lparen", "Rparen", "Init", "Cond", "Post"]);
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rInit = prepArithmExpr(Init);
    const rCond = prepArithmExpr(Cond);
    const rPost = prepArithmExpr(Post);
    // tslint:disable-next-line:max-line-length
    return [...ParserDo_1.doCStyleLoop(rLparen, rRparen, rInit, rCond, rPost), comm_1.comm({ rest_cstyleloop }, '{"rest_cstyleloop":{}}')];
}
exports.prepCStyleLoop = prepCStyleLoop;
function prepCallExpr(callexpr) {
    logg_1.logg("prepCallExpr");
    if (!callexpr) {
        return [comm_1.comm({ empty_callexpr: callexpr }, '{"empty_callexpr":null}')];
    }
    const { Assigns, Args } = callexpr, rest_callexpr = __rest(callexpr, ["Assigns", "Args"]);
    const rAssigns = prepAssigns(Assigns);
    const rArgs = prepWords(Args);
    return [...ParserDo_1.doCallExpr(rAssigns, rArgs), comm_1.comm({ rest_callexpr }, '{"rest_callexpr":{}}')];
}
exports.prepCallExpr = prepCallExpr;
function prepCaseClause(caseclause) {
    logg_1.logg("prepCaseClause");
    if (!caseclause) {
        return [comm_1.comm({ empty_caseclause: caseclause }, '{"empty_caseclause":null}')];
    }
    const { Case, Esac, Word, Items, Last } = caseclause, rest_caseclause = __rest(caseclause, ["Case", "Esac", "Word", "Items", "Last"]);
    const rCase = prepPos(Case);
    const rEsac = prepPos(Esac);
    const rWord = prepWord(Word);
    const rItems = prepCaseItems(Items);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doCaseClause(rCase, rEsac, rWord, rItems, rLast), comm_1.comm({ rest_caseclause }, '{"rest_caseclause":{}}')];
}
exports.prepCaseClause = prepCaseClause;
function prepCaseItem(caseitem) {
    logg_1.logg("prepCaseItem");
    if (!caseitem) {
        return [comm_1.comm({ empty_caseitem: caseitem }, '{"empty_caseitem":null}')];
    }
    const { Op, OpPos, Comments, Patterns, StmtList, Last } = caseitem, rest_caseitem = __rest(caseitem, ["Op", "OpPos", "Comments", "Patterns", "StmtList", "Last"]);
    const rOp = prepCaseOperator(Op);
    const rOpPos = prepPos(OpPos);
    const rComments = prepComments(Comments);
    const rPatterns = prepWords(Patterns);
    const rStmtList = prepStmtList(StmtList);
    const rLast = prepComments(Last);
    // tslint:disable-next-line:max-line-length
    return [...ParserDo_1.doCaseItem(rOp, rOpPos, rComments, rPatterns, rStmtList, rLast), comm_1.comm({ rest_caseitem }, '{"rest_caseitem":{}}')];
}
exports.prepCaseItem = prepCaseItem;
function prepCmdSubst(cmdsubst) {
    logg_1.logg("prepCmdSubst");
    if (!cmdsubst) {
        return [comm_1.comm({ empty_cmdsubst: cmdsubst }, '{"empty_cmdsubst":null}')];
    }
    const { Left, Right, StmtList, Last, TempFile, ReplyVar } = cmdsubst, rest_cmdsubst = __rest(cmdsubst, ["Left", "Right", "StmtList", "Last", "TempFile", "ReplyVar"]);
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rStmtList = prepStmtList(StmtList);
    const rLast = prepComments(Last);
    const rTempFile = prepboolean(TempFile);
    const rReplyVar = prepboolean(ReplyVar);
    // tslint:disable-next-line:max-line-length
    return [...ParserDo_1.doCmdSubst(rLeft, rRight, rStmtList, rLast, rTempFile, rReplyVar), comm_1.comm({ rest_cmdsubst }, '{"rest_cmdsubst":{}}')];
}
exports.prepCmdSubst = prepCmdSubst;
function prepCommand(command) {
    logg_1.logg("prepCommand");
    if (!command) {
        return [comm_1.comm({ empty_command: command }, '{"empty_command":null}')];
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
            return [comm_1.comm({ unknown_command: command })];
    }
}
exports.prepCommand = prepCommand;
function prepComment(comment) {
    logg_1.logg("prepComment");
    if (!comment) {
        return [comm_1.comm({ empty_comment: comment }, '{"empty_comment":null}')];
    }
    const { Hash, Text } = comment, rest_comment = __rest(comment, ["Hash", "Text"]);
    const rHash = prepPos(Hash);
    const rText = prepstring(Text);
    return [...ParserDo_1.doComment(rHash, rText), comm_1.comm({ rest_comment }, '{"rest_comment":{}}')];
}
exports.prepComment = prepComment;
function prepCoprocClause(coprocclause) {
    logg_1.logg("prepCoprocClause");
    if (!coprocclause) {
        return [comm_1.comm({ empty_coprocclause: coprocclause }, '{"empty_coprocclause":null}')];
    }
    const { Coproc, Name, Stmt } = coprocclause, rest_coprocclause = __rest(coprocclause, ["Coproc", "Name", "Stmt"]);
    const rCoproc = prepPos(Coproc);
    const rName = prepWord(Name);
    const rStmt = prepStmt(Stmt);
    return [...ParserDo_1.doCoprocClause(rCoproc, rName, rStmt), comm_1.comm({ rest_coprocclause }, '{"rest_coprocclause":{}}')];
}
exports.prepCoprocClause = prepCoprocClause;
function prepDblQuoted(dblquoted) {
    logg_1.logg("prepDblQuoted");
    if (!dblquoted) {
        return [comm_1.comm({ empty_dblquoted: dblquoted }, '{"empty_dblquoted":null}')];
    }
    const { Position, Dollar, Parts } = dblquoted, rest_dblquoted = __rest(dblquoted, ["Position", "Dollar", "Parts"]);
    const rPosition = prepPos(Position);
    const rDollar = prepboolean(Dollar);
    const rParts = prepWordParts(Parts);
    return [...ParserDo_1.doDblQuoted(rPosition, rDollar, rParts), comm_1.comm({ rest_dblquoted }, '{"rest_dblquoted":{}}')];
}
exports.prepDblQuoted = prepDblQuoted;
function prepDeclClause(declclause) {
    logg_1.logg("prepDeclClause");
    if (!declclause) {
        return [comm_1.comm({ empty_declclause: declclause }, '{"empty_declclause":null}')];
    }
    const { Variant, Opts, Assigns } = declclause, rest_declclause = __rest(declclause, ["Variant", "Opts", "Assigns"]);
    const rVariant = prepLit(Variant);
    const rOpts = prepWords(Opts);
    const rAssigns = prepAssigns(Assigns);
    return [...ParserDo_1.doDeclClause(rVariant, rOpts, rAssigns), comm_1.comm({ rest_declclause }, '{"rest_declclause":{}}')];
}
exports.prepDeclClause = prepDeclClause;
function prepExtGlob(extglob) {
    logg_1.logg("prepExtGlob");
    if (!extglob) {
        return [comm_1.comm({ empty_extglob: extglob }, '{"empty_extglob":null}')];
    }
    const { OpPos, Op, Pattern } = extglob, rest_extglob = __rest(extglob, ["OpPos", "Op", "Pattern"]);
    const rOpPos = prepPos(OpPos);
    const rOp = prepGlobOperator(Op);
    const rPattern = prepLit(Pattern);
    return [...ParserDo_1.doExtGlob(rOpPos, rOp, rPattern), comm_1.comm({ rest_extglob }, '{"rest_extglob":{}}')];
}
exports.prepExtGlob = prepExtGlob;
function prepFile(file) {
    logg_1.logg("prepFile");
    if (!file) {
        return [comm_1.comm({ empty_file: file }, '{"empty_file":null}')];
    }
    const { Name, StmtList, Last } = file, rest_file = __rest(file, ["Name", "StmtList", "Last"]);
    const rName = prepstring(Name);
    const rStmtList = prepStmtList(StmtList);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doFile(rName, rStmtList, rLast), comm_1.comm({ rest_file }, '{"rest_file":{}}')];
}
exports.prepFile = prepFile;
function prepForClause(forclause) {
    logg_1.logg("prepForClause");
    if (!forclause) {
        return [comm_1.comm({ empty_forclause: forclause }, '{"empty_forclause":null}')];
    }
    const { ForPos, DoPos, DonePos, Select, Loop, Do, DoLast } = forclause, rest_forclause = __rest(forclause, ["ForPos", "DoPos", "DonePos", "Select", "Loop", "Do", "DoLast"]);
    const rForPos = prepPos(ForPos);
    const rDoPos = prepPos(DoPos);
    const rDonePos = prepPos(DonePos);
    const rSelect = prepboolean(Select);
    const rLoop = prepLoop(Loop);
    const rDo = prepStmtList(Do);
    const rDoLast = prepComments(DoLast);
    // tslint:disable-next-line:max-line-length
    return [...ParserDo_1.doForClause(rForPos, rDoPos, rDonePos, rSelect, rLoop, rDo, rDoLast), comm_1.comm({ rest_forclause }, '{"rest_forclause":{}}')];
}
exports.prepForClause = prepForClause;
function prepFuncDecl(funcdecl) {
    logg_1.logg("prepFuncDecl");
    if (!funcdecl) {
        return [comm_1.comm({ empty_funcdecl: funcdecl }, '{"empty_funcdecl":null}')];
    }
    const { Position, RsrvWord, Name, Body } = funcdecl, rest_funcdecl = __rest(funcdecl, ["Position", "RsrvWord", "Name", "Body"]);
    const rPosition = prepPos(Position);
    const rRsrvWord = prepboolean(RsrvWord);
    const rName = prepLit(Name);
    const rBody = prepStmt(Body);
    return [...ParserDo_1.doFuncDecl(rPosition, rRsrvWord, rName, rBody), comm_1.comm({ rest_funcdecl }, '{"rest_funcdecl":{}}')];
}
exports.prepFuncDecl = prepFuncDecl;
function prepIfClause(ifclause) {
    logg_1.logg("prepIfClause");
    if (!ifclause) {
        return [comm_1.comm({ empty_ifclause: ifclause }, '{"empty_ifclause":null}')];
    }
    const { Position, ThenPos, FiPos, Cond, CondLast, Then, ThenLast, Else, Last } = ifclause, rest_ifclause = __rest(ifclause, ["Position", "ThenPos", "FiPos", "Cond", "CondLast", "Then", "ThenLast", "Else", "Last"]);
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
    return [...ParserDo_1.doIfClause(rPosition, rThenPos, rFiPos, rCond, rCondLast, rThen, rThenLast, rElse, rLast), comm_1.comm({ rest_ifclause }, '{"rest_ifclause":{}}')];
}
exports.prepIfClause = prepIfClause;
function prepLetClause(letclause) {
    logg_1.logg("prepLetClause");
    if (!letclause) {
        return [comm_1.comm({ empty_letclause: letclause }, '{"empty_letclause":null}')];
    }
    const { Let, Exprs } = letclause, rest_letclause = __rest(letclause, ["Let", "Exprs"]);
    const rLet = prepPos(Let);
    const rExprs = prepArithmExprs(Exprs);
    return [...ParserDo_1.doLetClause(rLet, rExprs), comm_1.comm({ rest_letclause }, '{"rest_letclause":{}}')];
}
exports.prepLetClause = prepLetClause;
function prepLit(lit) {
    logg_1.logg("prepLit");
    if (!lit) {
        return [comm_1.comm({ empty_lit: lit }, '{"empty_lit":null}')];
    }
    const { ValuePos, ValueEnd, Value } = lit, rest_lit = __rest(lit, ["ValuePos", "ValueEnd", "Value"]);
    const rValuePos = prepPos(ValuePos);
    const rValueEnd = prepPos(ValueEnd);
    const rValue = prepstring(Value);
    return [...ParserDo_1.doLit(rValuePos, rValueEnd, rValue), comm_1.comm({ rest_lit }, '{"rest_lit":{}}')];
}
exports.prepLit = prepLit;
function prepLoop(loop) {
    logg_1.logg("prepLoop");
    if (!loop) {
        return [comm_1.comm({ empty_loop: loop }, '{"empty_loop":null}')];
    }
    switch (mvdan_sh_1.syntax.NodeType(loop)) {
        case "WordIter":
            return prepWordIter(loop);
        case "CStyleLoop":
            return prepCStyleLoop(loop);
        default:
            return [comm_1.comm({ unknown_loop: loop })];
    }
}
exports.prepLoop = prepLoop;
function prepParamExp(paramexp) {
    logg_1.logg("prepParamExp");
    if (!paramexp) {
        return [comm_1.comm({ empty_paramexp: paramexp }, '{"empty_paramexp":null}')];
    }
    // tslint:disable-next-line:max-line-length
    const { Dollar, Rbrace, Short, Excl, Length, Width, Param, Index, Slice, Repl, Names, Exp } = paramexp, rest_paramexp = __rest(paramexp, ["Dollar", "Rbrace", "Short", "Excl", "Length", "Width", "Param", "Index", "Slice", "Repl", "Names", "Exp"]);
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
    return [...ParserDo_1.doParamExp(rDollar, rRbrace, rShort, rExcl, rLength, rWidth, rParam, rIndex, rSlice, rRepl, rNames, rExp), comm_1.comm({ rest_paramexp }, '{"rest_paramexp":{}}')];
}
exports.prepParamExp = prepParamExp;
function prepParenArithm(parenarithm) {
    logg_1.logg("prepParenArithm");
    if (!parenarithm) {
        return [comm_1.comm({ empty_parenarithm: parenarithm }, '{"empty_parenarithm":null}')];
    }
    const { Lparen, Rparen, X } = parenarithm, rest_parenarithm = __rest(parenarithm, ["Lparen", "Rparen", "X"]);
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rX = prepArithmExpr(X);
    return [...ParserDo_1.doParenArithm(rLparen, rRparen, rX), comm_1.comm({ rest_parenarithm }, '{"rest_parenarithm":{}}')];
}
exports.prepParenArithm = prepParenArithm;
function prepParenTest(parentest) {
    logg_1.logg("prepParenTest");
    if (!parentest) {
        return [comm_1.comm({ empty_parentest: parentest }, '{"empty_parentest":null}')];
    }
    const { Lparen, Rparen, X } = parentest, rest_parentest = __rest(parentest, ["Lparen", "Rparen", "X"]);
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rX = prepTestExpr(X);
    return [...ParserDo_1.doParenTest(rLparen, rRparen, rX), comm_1.comm({ rest_parentest }, '{"rest_parentest":{}}')];
}
exports.prepParenTest = prepParenTest;
function prepProcSubst(procsubst) {
    logg_1.logg("prepProcSubst");
    if (!procsubst) {
        return [comm_1.comm({ empty_procsubst: procsubst }, '{"empty_procsubst":null}')];
    }
    const { OpPos, Rparen, Op, Stmts, Last } = procsubst, rest_procsubst = __rest(procsubst, ["OpPos", "Rparen", "Op", "Stmts", "Last"]);
    const rOpPos = prepPos(OpPos);
    const rRparen = prepPos(Rparen);
    const rOp = prepProcOperator(Op);
    const rStmts = prepStmts(Stmts);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doProcSubst(rOpPos, rRparen, rOp, rStmts, rLast), comm_1.comm({ rest_procsubst }, '{"rest_procsubst":{}}')];
}
exports.prepProcSubst = prepProcSubst;
function prepRedirect(redirect) {
    logg_1.logg("prepRedirect");
    if (!redirect) {
        return [comm_1.comm({ empty_redirect: redirect }, '{"empty_redirect":null}')];
    }
    const { OpPos, Op, N, Word, Hdoc } = redirect, rest_redirect = __rest(redirect, ["OpPos", "Op", "N", "Word", "Hdoc"]);
    const rOpPos = prepPos(OpPos);
    const rOp = prepRedirOperator(Op);
    const rN = prepLit(N);
    const rWord = prepWord(Word);
    const rHdoc = prepWord(Hdoc);
    return [...ParserDo_1.doRedirect(rOpPos, rOp, rN, rWord, rHdoc), comm_1.comm({ rest_redirect }, '{"rest_redirect":{}}')];
}
exports.prepRedirect = prepRedirect;
function prepSglQuoted(sglquoted) {
    logg_1.logg("prepSglQuoted");
    if (!sglquoted) {
        return [comm_1.comm({ empty_sglquoted: sglquoted }, '{"empty_sglquoted":null}')];
    }
    const { Left, Right, Dollar, Value } = sglquoted, rest_sglquoted = __rest(sglquoted, ["Left", "Right", "Dollar", "Value"]);
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rDollar = prepboolean(Dollar);
    const rValue = prepstring(Value);
    return [...ParserDo_1.doSglQuoted(rLeft, rRight, rDollar, rValue), comm_1.comm({ rest_sglquoted }, '{"rest_sglquoted":{}}')];
}
exports.prepSglQuoted = prepSglQuoted;
function prepStmt(stmt) {
    logg_1.logg("prepStmt");
    if (!stmt) {
        return [comm_1.comm({ empty_stmt: stmt }, '{"empty_stmt":null}')];
    }
    const { Comments, Cmd, Position, Semicolon, Negated, Background, Coprocess, Redirs } = stmt, rest_stmt = __rest(stmt, ["Comments", "Cmd", "Position", "Semicolon", "Negated", "Background", "Coprocess", "Redirs"]);
    const rComments = prepComments(Comments);
    const rCmd = prepCommand(Cmd);
    const rPosition = prepPos(Position);
    const rSemicolon = prepPos(Semicolon);
    const rNegated = prepboolean(Negated);
    const rBackground = prepboolean(Background);
    const rCoprocess = prepboolean(Coprocess);
    const rRedirs = prepRedirects(Redirs);
    // tslint:disable-next-line:max-line-length
    return [...ParserDo_1.doStmt(rComments, rCmd, rPosition, rSemicolon, rNegated, rBackground, rCoprocess, rRedirs), comm_1.comm({ rest_stmt }, '{"rest_stmt":{}}')];
}
exports.prepStmt = prepStmt;
function prepStmtList(stmtlist) {
    logg_1.logg("prepStmtList");
    if (!stmtlist) {
        return [comm_1.comm({ empty_stmtlist: stmtlist }, '{"empty_stmtlist":null}')];
    }
    const { Stmts, Last } = stmtlist, rest_stmtlist = __rest(stmtlist, ["Stmts", "Last"]);
    const rStmts = prepStmts(Stmts);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doStmtList(rStmts, rLast), comm_1.comm({ rest_stmtlist }, '{"rest_stmtlist":{}}')];
}
exports.prepStmtList = prepStmtList;
function prepSubshell(subshell) {
    logg_1.logg("prepSubshell");
    if (!subshell) {
        return [comm_1.comm({ empty_subshell: subshell }, '{"empty_subshell":null}')];
    }
    const { Lparen, Rparen, StmtList, Last } = subshell, rest_subshell = __rest(subshell, ["Lparen", "Rparen", "StmtList", "Last"]);
    const rLparen = prepPos(Lparen);
    const rRparen = prepPos(Rparen);
    const rStmtList = prepStmtList(StmtList);
    const rLast = prepComments(Last);
    return [...ParserDo_1.doSubshell(rLparen, rRparen, rStmtList, rLast), comm_1.comm({ rest_subshell }, '{"rest_subshell":{}}')];
}
exports.prepSubshell = prepSubshell;
function prepTestClause(testclause) {
    logg_1.logg("prepTestClause");
    if (!testclause) {
        return [comm_1.comm({ empty_testclause: testclause }, '{"empty_testclause":null}')];
    }
    const { Left, Right, X } = testclause, rest_testclause = __rest(testclause, ["Left", "Right", "X"]);
    const rLeft = prepPos(Left);
    const rRight = prepPos(Right);
    const rX = prepTestExpr(X);
    return [...ParserDo_1.doTestClause(rLeft, rRight, rX), comm_1.comm({ rest_testclause }, '{"rest_testclause":{}}')];
}
exports.prepTestClause = prepTestClause;
function prepTestExpr(testexpr) {
    logg_1.logg("prepTestExpr");
    if (!testexpr) {
        return [comm_1.comm({ empty_testexpr: testexpr }, '{"empty_testexpr":null}')];
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
            return [comm_1.comm({ unknown_testexpr: testexpr })];
    }
}
exports.prepTestExpr = prepTestExpr;
function prepTimeClause(timeclause) {
    logg_1.logg("prepTimeClause");
    if (!timeclause) {
        return [comm_1.comm({ empty_timeclause: timeclause }, '{"empty_timeclause":null}')];
    }
    const { Time, PosixFormat, Stmt } = timeclause, rest_timeclause = __rest(timeclause, ["Time", "PosixFormat", "Stmt"]);
    const rTime = prepPos(Time);
    const rPosixFormat = prepboolean(PosixFormat);
    const rStmt = prepStmt(Stmt);
    return [...ParserDo_1.doTimeClause(rTime, rPosixFormat, rStmt), comm_1.comm({ rest_timeclause }, '{"rest_timeclause":{}}')];
}
exports.prepTimeClause = prepTimeClause;
function prepUnaryArithm(unaryarithm) {
    logg_1.logg("prepUnaryArithm");
    if (!unaryarithm) {
        return [comm_1.comm({ empty_unaryarithm: unaryarithm }, '{"empty_unaryarithm":null}')];
    }
    const { OpPos, Op, Post, X } = unaryarithm, rest_unaryarithm = __rest(unaryarithm, ["OpPos", "Op", "Post", "X"]);
    const rOpPos = prepPos(OpPos);
    const rOp = prepUnAritOperator(Op);
    const rPost = prepboolean(Post);
    const rX = prepArithmExpr(X);
    return [...ParserDo_1.doUnaryArithm(rOpPos, rOp, rPost, rX), comm_1.comm({ rest_unaryarithm }, '{"rest_unaryarithm":{}}')];
}
exports.prepUnaryArithm = prepUnaryArithm;
function prepUnaryTest(unarytest) {
    logg_1.logg("prepUnaryTest");
    if (!unarytest) {
        return [comm_1.comm({ empty_unarytest: unarytest }, '{"empty_unarytest":null}')];
    }
    const { OpPos, Op, X } = unarytest, rest_unarytest = __rest(unarytest, ["OpPos", "Op", "X"]);
    const rOpPos = prepPos(OpPos);
    const rOp = prepUnTestOperator(Op);
    const rX = prepTestExpr(X);
    return [...ParserDo_1.doUnaryTest(rOpPos, rOp, rX), comm_1.comm({ rest_unarytest }, '{"rest_unarytest":{}}')];
}
exports.prepUnaryTest = prepUnaryTest;
function prepWhileClause(whileclause) {
    logg_1.logg("prepWhileClause");
    if (!whileclause) {
        return [comm_1.comm({ empty_whileclause: whileclause }, '{"empty_whileclause":null}')];
    }
    const { WhilePos, DoPos, DonePos, Until, Cond, CondLast, Do, DoLast } = whileclause, rest_whileclause = __rest(whileclause, ["WhilePos", "DoPos", "DonePos", "Until", "Cond", "CondLast", "Do", "DoLast"]);
    const rWhilePos = prepPos(WhilePos);
    const rDoPos = prepPos(DoPos);
    const rDonePos = prepPos(DonePos);
    const rUntil = prepboolean(Until);
    const rCond = prepStmtList(Cond);
    const rCondLast = prepComments(CondLast);
    const rDo = prepStmtList(Do);
    const rDoLast = prepComments(DoLast);
    // tslint:disable-next-line:max-line-length
    return [...ParserDo_1.doWhileClause(rWhilePos, rDoPos, rDonePos, rUntil, rCond, rCondLast, rDo, rDoLast), comm_1.comm({ rest_whileclause }, '{"rest_whileclause":{}}')];
}
exports.prepWhileClause = prepWhileClause;
function prepWord(word) {
    logg_1.logg("prepWord");
    if (!word) {
        return [comm_1.comm({ empty_word: word }, '{"empty_word":null}')];
    }
    const { Parts } = word, rest_word = __rest(word, ["Parts"]);
    const rParts = prepWordParts(Parts);
    return [...ParserDo_1.doWord(rParts), comm_1.comm({ rest_word }, '{"rest_word":{}}')];
}
exports.prepWord = prepWord;
function prepWordIter(worditer) {
    logg_1.logg("prepWordIter");
    if (!worditer) {
        return [comm_1.comm({ empty_worditer: worditer }, '{"empty_worditer":null}')];
    }
    const { Name, InPos, Items } = worditer, rest_worditer = __rest(worditer, ["Name", "InPos", "Items"]);
    const rName = prepLit(Name);
    const rInPos = prepPos(InPos);
    const rItems = prepWords(Items);
    return [...ParserDo_1.doWordIter(rName, rInPos, rItems), comm_1.comm({ rest_worditer }, '{"rest_worditer":{}}')];
}
exports.prepWordIter = prepWordIter;
function prepWordPart(wordpart) {
    logg_1.logg("prepWordPart");
    if (!wordpart) {
        return [comm_1.comm({ empty_wordpart: wordpart }, '{"empty_wordpart":null}')];
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
            return [comm_1.comm({ unknown_wordpart: wordpart })];
    }
}
exports.prepWordPart = prepWordPart;
function prepArithmExprs(arithmexprs) {
    logg_1.logg("prepArithmExprs");
    if (!arithmexprs) {
        return [comm_1.comm({ empty_arithmexprs: arithmexprs }, '{"empty_arithmexprs":null}')];
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
        return [comm_1.comm({ empty_arrayelems: arrayelems }, '{"empty_arrayelems":null}')];
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
        return [comm_1.comm({ empty_assigns: assigns }, '{"empty_assigns":null}')];
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
        return [comm_1.comm({ empty_caseitems: caseitems }, '{"empty_caseitems":null}')];
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
        return [comm_1.comm({ empty_comments: comments }, "{}")];
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
        return [comm_1.comm({ empty_redirects: redirects }, '{"empty_redirects":null}')];
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
        return [comm_1.comm({ empty_stmts: stmts }, '{"empty_stmts":null}')];
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
        return [comm_1.comm({ empty_words: words }, '{"empty_words":null}')];
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
        return [comm_1.comm({ empty_wordparts: wordparts }, '{"empty_wordparts":null}')];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyUHJlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvUGFyc2VyUHJlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7Ozs7Ozs7Ozs7O0FBRUgsdUNBQWtDO0FBQ2xDLGlDQUE4QjtBQUM5QixpQ0FBOEI7QUFDOUIsMkNBQTJDO0FBQzNDLHlDQUFxaUI7QUFJcmlCLFNBQWdCLGFBQWEsQ0FBQyxTQUE0QjtJQUN4RCxXQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE9BQU8sQ0FBQyxXQUFJLENBQUMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLEVBQUUsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO0tBQzNFO0lBQ0QsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsS0FBd0IsU0FBUyxFQUEvQixzRUFBK0IsQ0FBQztJQUNsRSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxNQUFNLEVBQUUsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsc0JBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7QUFDM0csQ0FBQztBQVhELHNDQVdDO0FBQ0QsU0FBZ0IsYUFBYSxDQUFDLFNBQTRCO0lBQ3hELFdBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsT0FBTyxD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