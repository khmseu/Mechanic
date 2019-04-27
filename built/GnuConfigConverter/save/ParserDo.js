"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const logg_1 = require("./logg");
const ParserPrep_1 = require("./ParserPrep");
const RestComment_1 = require("./RestComment");
const Token_1 = require("./Token");
const Assignment_1 = require("./Assignment");
const toJS_1 = require("./toJS");
// tslint:disable-next-line:max-line-length
function doArithmCmd(Left, Right, Unsigned, X) {
    logg_1.logg("doArithmCmd");
    return [new RestComment_1.RestComment({ Left, Right, Unsigned, X })];
}
exports.doArithmCmd = doArithmCmd;
// tslint:disable-next-line:max-line-length
function doArithmExp(Left, Right, Bracket, Unsigned, X) {
    logg_1.logg("doArithmExp");
    return [new RestComment_1.RestComment({ Left, Right, Bracket, Unsigned, X })];
}
exports.doArithmExp = doArithmExp;
function doArrayElem(Index, Value, Comments) {
    logg_1.logg("doArrayElem");
    return [...Index, ...Value, ...Comments];
}
exports.doArrayElem = doArrayElem;
// tslint:disable-next-line:max-line-length
function doArrayExpr(Lparen, Rparen, Elems, Last) {
    logg_1.logg("doArrayExpr");
    return [...Elems, ...Last, new RestComment_1.RestComment({ Lparen, Rparen })];
}
exports.doArrayExpr = doArrayExpr;
// tslint:disable-next-line:max-line-length
function doAssign(Append, Naked, Name, Index, Value, Array) {
    logg_1.logg("doAssign");
    // tslint:disable-next-line:max-line-length
    return [new Assignment_1.Assignment(toJS_1.toJS(Name), toJS_1.toJS(Value)), new RestComment_1.RestComment({ Append, Naked, Index, Array }, '{"Append":false,"Naked":false,"Index":[""],"Array":[""]}')];
}
exports.doAssign = doAssign;
// tslint:disable-next-line:max-line-length
function doBinaryArithm(OpPos, Op, X, Y) {
    logg_1.logg("doBinaryArithm");
    return [...X, Token_1.op(Op), ...Y, new RestComment_1.RestComment({ OpPos })];
}
exports.doBinaryArithm = doBinaryArithm;
// tslint:disable-next-line:max-line-length
function doBinaryCmd(OpPos, Op, X, Y) {
    logg_1.logg("doBinaryCmd");
    return ["{\n", ...X, Token_1.op(Op), ...Y, new RestComment_1.RestComment({ OpPos }, '{"OpPos":{}}'), "\n}"];
}
exports.doBinaryCmd = doBinaryCmd;
// tslint:disable-next-line:max-line-length
function doBinaryTest(OpPos, Op, X, Y) {
    logg_1.logg("doBinaryTest");
    return [...X, Token_1.op(Op), ...Y, new RestComment_1.RestComment({ OpPos })];
}
exports.doBinaryTest = doBinaryTest;
// tslint:disable-next-line:max-line-length
function doBlock(Lbrace, Rbrace, StmtList, Last) {
    logg_1.logg("doBlock");
    return [...StmtList, ...Last, new RestComment_1.RestComment({ Lbrace, Rbrace }, '{"Lbrace":{},"Rbrace":{}}'), " ;//3\n"];
}
exports.doBlock = doBlock;
function doBraceExp(Sequence, Chars, Elems) {
    logg_1.logg("doBraceExp");
    return [...Elems, new RestComment_1.RestComment({ Sequence, Chars })];
}
exports.doBraceExp = doBraceExp;
function doCallExpr(Assigns, Args) {
    logg_1.logg("doCallExpr");
    return [...Assigns, ...Args];
}
exports.doCallExpr = doCallExpr;
// tslint:disable-next-line:max-line-length
function doCaseClause(Case, Esac, Word, Items, Last) {
    logg_1.logg("doCaseClause");
    // tslint:disable-next-line:max-line-length
    return ["switch ( ", ...Word, " + /*5*/", " ) {\n", ...Items, "\n}", ...Last, new RestComment_1.RestComment({ Case, Esac }, '{"Case":{},"Esac":{}}')];
}
exports.doCaseClause = doCaseClause;
// tslint:disable-next-line:max-line-length
function doCaseItem(Op, OpPos, Comments, Patterns, StmtList, Last) {
    logg_1.logg("doCaseItem");
    // tslint:disable-next-line:max-line-length
    return [...Comments, ...Patterns, ...StmtList, Token_1.op(Op), ...Last, new RestComment_1.RestComment({ OpPos }, '{"OpPos":{}}')];
}
exports.doCaseItem = doCaseItem;
// tslint:disable-next-line:max-line-length
function doCmdSubst(Left, Right, StmtList, Last, TempFile, ReplyVar) {
    logg_1.logg("doCmdSubst");
    // tslint:disable-next-line:max-line-length
    return ["$( " + _1.joiner([...StmtList, ...Last, new RestComment_1.RestComment({ Left, Right, TempFile, ReplyVar }, '{"Left":{},"Right":{},"TempFile":false,"ReplyVar":false}')], " + /*2*/") + " )"];
}
exports.doCmdSubst = doCmdSubst;
function doComment(Hash, Text) {
    logg_1.logg("doComment");
    if (Hash && Hash.Offset() === 0 && Text && Text[0] === "!") {
        return [];
    }
    return ["// " + Text];
}
exports.doComment = doComment;
function doCoprocClause(Coproc, Name, Stmt) {
    logg_1.logg("doCoprocClause");
    return [...Name, ...Stmt, new RestComment_1.RestComment({ Coproc })];
}
exports.doCoprocClause = doCoprocClause;
// tslint:disable-next-line:max-line-length
function doCStyleLoop(Lparen, Rparen, Init, Cond, Post) {
    logg_1.logg("doCStyleLoop");
    return [...Init, ...Cond, ...Post, new RestComment_1.RestComment({ Lparen, Rparen })];
}
exports.doCStyleLoop = doCStyleLoop;
function doDblQuoted(Position, Dollar, Parts) {
    logg_1.logg("doDblQuoted");
    return [...Parts, new RestComment_1.RestComment({ Position, Dollar }, '{"Position":{},"Dollar":false}')];
}
exports.doDblQuoted = doDblQuoted;
function doDeclClause(Variant, Opts, Assigns) {
    logg_1.logg("doDeclClause");
    return [...Variant, ...Opts, ...Assigns];
}
exports.doDeclClause = doDeclClause;
function doExtGlob(OpPos, Op, Pattern) {
    logg_1.logg("doExtGlob");
    return [...Pattern, Token_1.op(Op), new RestComment_1.RestComment({ OpPos })];
}
exports.doExtGlob = doExtGlob;
function doFile(Name, StmtList, Last) {
    logg_1.logg("doFile");
    return [new RestComment_1.RestComment({ Name }), ...StmtList, ...Last];
}
exports.doFile = doFile;
// tslint:disable-next-line:max-line-length
function doForClause(ForPos, DoPos, DonePos, Select, Loop, Do, DoLast) {
    logg_1.logg("doForClause");
    // tslint:disable-next-line:max-line-length
    return ["for", ...Loop, "{\n", ...Do, ...DoLast, "\n}", new RestComment_1.RestComment({ ForPos, DoPos, DonePos, Select }, '{"ForPos":{},"DoPos":{},"DonePos":{},"Select":false}')];
}
exports.doForClause = doForClause;
// tslint:disable-next-line:max-line-length
function doFuncDecl(Position, RsrvWord, Name, Body) {
    logg_1.logg("doFuncDecl");
    // tslint:disable-next-line:max-line-length
    return ["function ", ...Name, " () {\n", ...Body, "\n}", new RestComment_1.RestComment({ Position, RsrvWord }, '{"Position":{},"RsrvWord":false}')];
}
exports.doFuncDecl = doFuncDecl;
// tslint:disable-next-line:max-line-length
function doIfClause(Position, ThenPos, FiPos, Cond, CondLast, Then, ThenLast, Else, Last) {
    logg_1.logg("doIfClause");
    // tslint:disable-next-line:max-line-length
    return ["if ( ", ...Cond, ...CondLast, " ) ", "{\n", ...Then, ...ThenLast, "\n} ", " else {\n", ...Else, "\n} ", ...Last, new RestComment_1.RestComment({ Position, ThenPos, FiPos }, '{"Position":{},"ThenPos":{},"FiPos":{}}')];
}
exports.doIfClause = doIfClause;
function doLetClause(Let, Exprs) {
    logg_1.logg("doLetClause");
    return [...Exprs, new RestComment_1.RestComment({ Let })];
}
exports.doLetClause = doLetClause;
function doLit(ValuePos, ValueEnd, Value) {
    logg_1.logg("doLit");
    return [JSON.stringify(Value), new RestComment_1.RestComment({ ValuePos, ValueEnd }, '{"ValuePos":{},"ValueEnd":{}}')];
}
exports.doLit = doLit;
function exp(e) {
    logg_1.logg("exp");
    if (!e) {
        return new RestComment_1.RestComment({ e }, '{"e":null}');
    }
    const { Op, Word, ...rest_exp } = e;
    return _1.joiner([Token_1.op(Op), ...ParserPrep_1.prepWord(Word), new RestComment_1.RestComment({ rest_exp }, '{"rest_exp":{}}')], " ");
}
function param(prm) {
    logg_1.logg("param");
    if (!prm) {
        return [new RestComment_1.RestComment({ prm }, '{"e":null}')];
    }
    const prmr = JSON.parse(prm);
    return [
        /^[a-zA-Z_]\w*$/.test(prmr)
            ? prmr //
            : prmr === "0"
                ? "process.argv0"
                : /^\d+$/.test(prmr)
                    ? "process.argv[" + prmr + "-1]"
                    : prmr === "#"
                        ? "process.argv.length"
                        : prmr === "$"
                            ? "process.pid"
                            : prmr === "?"
                                ? "process.exitCode"
                                : new RestComment_1.RestComment({ prmr }),
    ];
}
// tslint:disable-next-line:max-line-length
function doParamExp(Dollar, Rbrace, Short, Excl, Length, Width, Param, Index, Slice, Repl, Names, Exp) {
    logg_1.logg("doParamExp");
    const parm = param(_1.joiner(Param, ""));
    if (Short) {
        // tslint:disable-next-line:max-line-length
        return [...parm, exp(Exp), new RestComment_1.RestComment({ Dollar, Rbrace, Excl, Length, Width, Index, Slice, Repl, Names }, '{"Dollar":{},"Rbrace":{},"Excl":false,"Length":false,"Width":false,"Index":[""],"Slice":null,"Repl":null,"Names":0}'), " "];
    }
    else {
        // tslint:disable-next-line:max-line-length
        return ["(", ...parm, exp(Exp), new RestComment_1.RestComment({ Dollar, Rbrace, Excl, Length, Width, Index, Slice, Repl, Names }, '{"Dollar":{},"Rbrace":{},"Excl":false,"Length":false,"Width":false,"Index":[""],"Slice":null,"Repl":null,"Names":0}'), ")", " "];
    }
}
exports.doParamExp = doParamExp;
function doParenArithm(Lparen, Rparen, X) {
    logg_1.logg("doParenArithm");
    return [...X, new RestComment_1.RestComment({ Lparen, Rparen })];
}
exports.doParenArithm = doParenArithm;
function doParenTest(Lparen, Rparen, X) {
    logg_1.logg("doParenTest");
    return [...X, new RestComment_1.RestComment({ Lparen, Rparen })];
}
exports.doParenTest = doParenTest;
// tslint:disable-next-line:max-line-length
function doProcSubst(OpPos, Rparen, Op, Stmts, Last) {
    logg_1.logg("doProcSubst");
    return [Token_1.op(Op), ...Stmts, ...Last, new RestComment_1.RestComment({ OpPos, Rparen })];
}
exports.doProcSubst = doProcSubst;
// tslint:disable-next-line:max-line-length
function doRedirect(OpPos, Op, N, Word, Hdoc) {
    logg_1.logg("doRedirect");
    const res = [];
    if (N) {
        res.push(...N);
    }
    res.push(Token_1.op(Op), ...Word);
    res.push(...Hdoc);
    res.push(new RestComment_1.RestComment({ OpPos }, '{"OpPos":{}}'));
    return res;
}
exports.doRedirect = doRedirect;
// tslint:disable-next-line:max-line-length
function doSglQuoted(Left, Right, Dollar, Value) {
    logg_1.logg("doSglQuoted");
    return [JSON.stringify(Value), new RestComment_1.RestComment({ Left, Right, Dollar }, '{"Left":{},"Right":{},"Dollar":false}')];
}
exports.doSglQuoted = doSglQuoted;
// tslint:disable-next-line:max-line-length
function doStmt(Comments, Cmd, Position, Semicolon, Negated, Background, Coprocess, Redirs) {
    logg_1.logg("doStmt");
    // tslint:disable-next-line:max-line-length
    return [...Comments, ...Cmd, ...Redirs, new RestComment_1.RestComment({ Position, Semicolon, Negated, Background, Coprocess }, '{"Position":{},"Semicolon":{},"Negated":false,"Background":false,"Coprocess":false}')];
}
exports.doStmt = doStmt;
function doStmtList(Stmts, Last) {
    logg_1.logg("doStmtList");
    return [...Stmts, ...Last];
}
exports.doStmtList = doStmtList;
// tslint:disable-next-line:max-line-length
function doSubshell(Lparen, Rparen, StmtList, Last) {
    logg_1.logg("doSubshell");
    return [" ( ", ...StmtList, ...Last, new RestComment_1.RestComment({ Lparen, Rparen }, '{"Lparen":{},"Rparen":{}}'), " ", " ) "];
}
exports.doSubshell = doSubshell;
function doTestClause(Left, Right, X) {
    logg_1.logg("doTestClause");
    return [...X, new RestComment_1.RestComment({ Left, Right })];
}
exports.doTestClause = doTestClause;
function doTimeClause(Time, PosixFormat, Stmt) {
    logg_1.logg("doTimeClause");
    return [...Stmt, new RestComment_1.RestComment({ Time, PosixFormat })];
}
exports.doTimeClause = doTimeClause;
// tslint:disable-next-line:max-line-length
function doUnaryArithm(OpPos, Op, Post, X) {
    logg_1.logg("doUnaryArithm");
    return [...X, Token_1.op(Op), new RestComment_1.RestComment({ OpPos, Post })];
}
exports.doUnaryArithm = doUnaryArithm;
function doUnaryTest(OpPos, Op, X) {
    logg_1.logg("doUnaryTest");
    return [...X, Token_1.op(Op), new RestComment_1.RestComment({ OpPos })];
}
exports.doUnaryTest = doUnaryTest;
// tslint:disable-next-line:max-line-length
function doWhileClause(WhilePos, DoPos, DonePos, Until, Cond, CondLast, Do, DoLast) {
    logg_1.logg("doWhileClause");
    // tslint:disable-next-line:max-line-length
    return ["while (", ...Cond, ") {\n", ...Do, ...DoLast, "\n}", ...CondLast, new RestComment_1.RestComment({ WhilePos, DoPos, DonePos, Until }, '{"WhilePos":{},"DoPos":{},"DonePos":{},"Until":false}')];
}
exports.doWhileClause = doWhileClause;
function doWord(Parts) {
    logg_1.logg("doWord");
    return [...Parts];
}
exports.doWord = doWord;
function doWordIter(Name, InPos, Items) {
    logg_1.logg("doWordIter");
    return ["(const ", ...Name, " of [ ", ...Items, " , ", " ])", new RestComment_1.RestComment({ InPos }, '{"InPos":{}}')];
}
exports.doWordIter = doWordIter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyRG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL3NhdmUvUGFyc2VyRG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHdCQUEyQjtBQUczQixpQ0FBOEI7QUFDOUIsNkNBQXdDO0FBR3hDLCtDQUE0QztBQUM1QyxtQ0FBb0M7QUFDcEMsNkNBQTBDO0FBQzFDLGlDQUE4QjtBQUU5QiwyQ0FBMkM7QUFDM0MsU0FBZ0IsV0FBVyxDQUFDLElBQWtCLEVBQUUsS0FBbUIsRUFBRSxRQUF3QixFQUFFLENBQWtCO0lBQy9HLFdBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQixPQUFPLENBQUMsSUFBSSx5QkFBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUFIRCxrQ0FHQztBQUNELDJDQUEyQztBQUMzQyxTQUFnQixXQUFXLENBQUMsSUFBa0IsRUFBRSxLQUFtQixFQUFFLE9BQXVCLEVBQUUsUUFBd0IsRUFBRSxDQUFrQjtJQUN4SSxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEIsT0FBTyxDQUFDLElBQUkseUJBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUhELGtDQUdDO0FBQ0QsU0FBZ0IsV0FBVyxDQUFDLEtBQXNCLEVBQUUsS0FBc0IsRUFBRSxRQUF5QjtJQUNuRyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEIsT0FBTyxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsS0FBSyxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELGtDQUdDO0FBQ0QsMkNBQTJDO0FBQzNDLFNBQWdCLFdBQVcsQ0FB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