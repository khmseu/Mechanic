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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyRG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL1BhcnNlckRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx3QkFBMkI7QUFHM0IsaUNBQThCO0FBQzlCLDZDQUF3QztBQUd4QywrQ0FBNEM7QUFDNUMsbUNBQW9DO0FBQ3BDLDZDQUEwQztBQUMxQyxpQ0FBOEI7QUFFOUIsMkNBQTJDO0FBQzNDLFNBQWdCLFdBQVcsQ0FBQyxJQUFrQixFQUFFLEtBQW1CLEVBQUUsUUFBd0IsRUFBRSxDQUFrQjtJQUMvRyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEIsT0FBTyxDQUFDLElBQUkseUJBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBSEQsa0NBR0M7QUFDRCwyQ0FBMkM7QUFDM0MsU0FBZ0IsV0FBVyxDQUFDLElBQWtCLEVBQUUsS0FBbUIsRUFBRSxPQUF1QixFQUFFLFFBQXdCLEVBQUUsQ0FBa0I7SUFDeEksV0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxJQUFJLHlCQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFIRCxrQ0FHQztBQUNELFNBQWdCLFdBQVcsQ0FBQyxLQUFzQixFQUFFLEtBQXNCLEVBQUUsUUFBeUI7SUFDbkcsV0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLEtBQUssRUFBRSxHQUFHLEtBQUssRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCxrQ0FHQztBQUNELDJDQUEyQztBQUMzQyxTQUFnQixXQUFXLENBQUMsTUFBb0Is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