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
const _1 = require(".");
const comm_1 = require("./comm");
const logg_1 = require("./logg");
const ParserPrep_1 = require("./ParserPrep");
const Token_1 = require("./Token");
// tslint:disable-next-line:max-line-length
function doArithmCmd(Left, Right, Unsigned, X) {
    logg_1.logg("doArithmCmd");
    return [comm_1.comm({ Left, Right, Unsigned, X })];
}
exports.doArithmCmd = doArithmCmd;
// tslint:disable-next-line:max-line-length
function doArithmExp(Left, Right, Bracket, Unsigned, X) {
    logg_1.logg("doArithmExp");
    return [comm_1.comm({ Left, Right, Bracket, Unsigned, X })];
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
    return [...Elems, ...Last, comm_1.comm({ Lparen, Rparen })];
}
exports.doArrayExpr = doArrayExpr;
// tslint:disable-next-line:max-line-length
function doAssign(Append, Naked, Name, Index, Value, Array) {
    logg_1.logg("doAssign");
    // tslint:disable-next-line:max-line-length
    return ["let ", ...Name, " = ", ...Value, " ; /*4*/", comm_1.comm({ Append, Naked, Index, Array }, '{"Append":false,"Naked":false,"Index":[""],"Array":[""]}')];
}
exports.doAssign = doAssign;
// tslint:disable-next-line:max-line-length
function doBinaryArithm(OpPos, Op, X, Y) {
    logg_1.logg("doBinaryArithm");
    return [...X, Token_1.op(Op), ...Y, comm_1.comm({ OpPos })];
}
exports.doBinaryArithm = doBinaryArithm;
// tslint:disable-next-line:max-line-length
function doBinaryCmd(OpPos, Op, X, Y) {
    logg_1.logg("doBinaryCmd");
    return ["{\n", ...X, Token_1.op(Op), ...Y, comm_1.comm({ OpPos }, '{"OpPos":{}}'), "\n}"];
}
exports.doBinaryCmd = doBinaryCmd;
// tslint:disable-next-line:max-line-length
function doBinaryTest(OpPos, Op, X, Y) {
    logg_1.logg("doBinaryTest");
    return [...X, Token_1.op(Op), ...Y, comm_1.comm({ OpPos })];
}
exports.doBinaryTest = doBinaryTest;
// tslint:disable-next-line:max-line-length
function doBlock(Lbrace, Rbrace, StmtList, Last) {
    logg_1.logg("doBlock");
    return [...StmtList, ...Last, comm_1.comm({ Lbrace, Rbrace }, '{"Lbrace":{},"Rbrace":{}}'), " ;//3\n"];
}
exports.doBlock = doBlock;
function doBraceExp(Sequence, Chars, Elems) {
    logg_1.logg("doBraceExp");
    return [...Elems, comm_1.comm({ Sequence, Chars })];
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
    return ["switch ( ", ...Word, " + /*5*/", " ) {\n", ...Items, "\n}", ...Last, comm_1.comm({ Case, Esac }, '{"Case":{},"Esac":{}}')];
}
exports.doCaseClause = doCaseClause;
// tslint:disable-next-line:max-line-length
function doCaseItem(Op, OpPos, Comments, Patterns, StmtList, Last) {
    logg_1.logg("doCaseItem");
    // tslint:disable-next-line:max-line-length
    return [...Comments, ...Patterns, ...StmtList, Token_1.op(Op), ...Last, comm_1.comm({ OpPos }, '{"OpPos":{}}')];
}
exports.doCaseItem = doCaseItem;
// tslint:disable-next-line:max-line-length
function doCmdSubst(Left, Right, StmtList, Last, TempFile, ReplyVar) {
    logg_1.logg("doCmdSubst");
    // tslint:disable-next-line:max-line-length
    return ["$( " + _1.joiner([...StmtList, ...Last, comm_1.comm({ Left, Right, TempFile, ReplyVar }, '{"Left":{},"Right":{},"TempFile":false,"ReplyVar":false}')], " + /*2*/") + " )"];
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
    return [...Name, ...Stmt, comm_1.comm({ Coproc })];
}
exports.doCoprocClause = doCoprocClause;
// tslint:disable-next-line:max-line-length
function doCStyleLoop(Lparen, Rparen, Init, Cond, Post) {
    logg_1.logg("doCStyleLoop");
    return [...Init, ...Cond, ...Post, comm_1.comm({ Lparen, Rparen })];
}
exports.doCStyleLoop = doCStyleLoop;
function doDblQuoted(Position, Dollar, Parts) {
    logg_1.logg("doDblQuoted");
    return [...Parts, comm_1.comm({ Position, Dollar }, '{"Position":{},"Dollar":false}')];
}
exports.doDblQuoted = doDblQuoted;
function doDeclClause(Variant, Opts, Assigns) {
    logg_1.logg("doDeclClause");
    return [...Variant, ...Opts, ...Assigns];
}
exports.doDeclClause = doDeclClause;
function doExtGlob(OpPos, Op, Pattern) {
    logg_1.logg("doExtGlob");
    return [...Pattern, Token_1.op(Op), comm_1.comm({ OpPos })];
}
exports.doExtGlob = doExtGlob;
function doFile(Name, StmtList, Last) {
    logg_1.logg("doFile");
    return [comm_1.comm({ Name }), ...StmtList, ...Last];
}
exports.doFile = doFile;
// tslint:disable-next-line:max-line-length
function doForClause(ForPos, DoPos, DonePos, Select, Loop, Do, DoLast) {
    logg_1.logg("doForClause");
    // tslint:disable-next-line:max-line-length
    return ["for", ...Loop, "{\n", ...Do, ...DoLast, "\n}", comm_1.comm({ ForPos, DoPos, DonePos, Select }, '{"ForPos":{},"DoPos":{},"DonePos":{},"Select":false}')];
}
exports.doForClause = doForClause;
// tslint:disable-next-line:max-line-length
function doFuncDecl(Position, RsrvWord, Name, Body) {
    logg_1.logg("doFuncDecl");
    // tslint:disable-next-line:max-line-length
    return ["function ", ...Name, " () {\n", ...Body, "\n}", comm_1.comm({ Position, RsrvWord }, '{"Position":{},"RsrvWord":false}')];
}
exports.doFuncDecl = doFuncDecl;
// tslint:disable-next-line:max-line-length
function doIfClause(Position, ThenPos, FiPos, Cond, CondLast, Then, ThenLast, Else, Last) {
    logg_1.logg("doIfClause");
    // tslint:disable-next-line:max-line-length
    return ["if ( ", ...Cond, ...CondLast, " ) ", "{\n", ...Then, ...ThenLast, "\n} ", " else {\n", ...Else, "\n} ", ...Last, comm_1.comm({ Position, ThenPos, FiPos }, '{"Position":{},"ThenPos":{},"FiPos":{}}')];
}
exports.doIfClause = doIfClause;
function doLetClause(Let, Exprs) {
    logg_1.logg("doLetClause");
    return [...Exprs, comm_1.comm({ Let })];
}
exports.doLetClause = doLetClause;
function doLit(ValuePos, ValueEnd, Value) {
    logg_1.logg("doLit");
    return [JSON.stringify(Value), comm_1.comm({ ValuePos, ValueEnd }, '{"ValuePos":{},"ValueEnd":{}}')];
}
exports.doLit = doLit;
function exp(e) {
    logg_1.logg("exp");
    if (!e) {
        return comm_1.comm({ e }, '{"e":null}');
    }
    const { Op, Word } = e, rest_exp = __rest(e, ["Op", "Word"]);
    return _1.joiner([Token_1.op(Op), ...ParserPrep_1.prepWord(Word), comm_1.comm({ rest_exp }, '{"rest_exp":{}}')], " ");
}
function param(prm) {
    logg_1.logg("param");
    if (!prm) {
        return [comm_1.comm({ prm }, '{"e":null}')];
    }
    const prmr = JSON.parse(prm);
    return [
        /^[a-zA-Z_]\w*$/.test(prmr)
            ? prmr //
            : prmr === "0"
                ? "process.argv0"
                : /^\d+$/.test(prmr)
                    ? "process.argv[" + prmr + "]"
                    : prmr === "#"
                        ? "process.argv.length"
                        : prmr === "$"
                            ? "process.pid"
                            : prmr === "?"
                                ? "process.exitCode"
                                : comm_1.comm({ prmr }),
    ];
}
// tslint:disable-next-line:max-line-length
function doParamExp(Dollar, Rbrace, Short, Excl, Length, Width, Param, Index, Slice, Repl, Names, Exp) {
    logg_1.logg("doParamExp");
    const parm = param(_1.joiner(Param, ""));
    if (Short) {
        // tslint:disable-next-line:max-line-length
        return [...parm, exp(Exp), comm_1.comm({ Dollar, Rbrace, Excl, Length, Width, Index, Slice, Repl, Names }, '{"Dollar":{},"Rbrace":{},"Excl":false,"Length":false,"Width":false,"Index":[""],"Slice":null,"Repl":null,"Names":0}'), " "];
    }
    else {
        // tslint:disable-next-line:max-line-length
        return ["(", ...parm, exp(Exp), comm_1.comm({ Dollar, Rbrace, Excl, Length, Width, Index, Slice, Repl, Names }, '{"Dollar":{},"Rbrace":{},"Excl":false,"Length":false,"Width":false,"Index":[""],"Slice":null,"Repl":null,"Names":0}'), ")", " "];
    }
}
exports.doParamExp = doParamExp;
function doParenArithm(Lparen, Rparen, X) {
    logg_1.logg("doParenArithm");
    return [...X, comm_1.comm({ Lparen, Rparen })];
}
exports.doParenArithm = doParenArithm;
function doParenTest(Lparen, Rparen, X) {
    logg_1.logg("doParenTest");
    return [...X, comm_1.comm({ Lparen, Rparen })];
}
exports.doParenTest = doParenTest;
// tslint:disable-next-line:max-line-length
function doProcSubst(OpPos, Rparen, Op, Stmts, Last) {
    logg_1.logg("doProcSubst");
    return [Token_1.op(Op), ...Stmts, ...Last, comm_1.comm({ OpPos, Rparen })];
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
    res.push(comm_1.comm({ OpPos }, '{"OpPos":{}}'));
    return res;
}
exports.doRedirect = doRedirect;
// tslint:disable-next-line:max-line-length
function doSglQuoted(Left, Right, Dollar, Value) {
    logg_1.logg("doSglQuoted");
    return [JSON.stringify(Value), comm_1.comm({ Left, Right, Dollar }, '{"Left":{},"Right":{},"Dollar":false}')];
}
exports.doSglQuoted = doSglQuoted;
// tslint:disable-next-line:max-line-length
function doStmt(Comments, Cmd, Position, Semicolon, Negated, Background, Coprocess, Redirs) {
    logg_1.logg("doStmt");
    // tslint:disable-next-line:max-line-length
    return [...Comments, ...Cmd, ...Redirs, comm_1.comm({ Position, Semicolon, Negated, Background, Coprocess }, '{"Position":{},"Semicolon":{},"Negated":false,"Background":false,"Coprocess":false}')];
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
    return [" ( ", ...StmtList, ...Last, comm_1.comm({ Lparen, Rparen }, '{"Lparen":{},"Rparen":{}}'), " ", " ) "];
}
exports.doSubshell = doSubshell;
function doTestClause(Left, Right, X) {
    logg_1.logg("doTestClause");
    return [...X, comm_1.comm({ Left, Right })];
}
exports.doTestClause = doTestClause;
function doTimeClause(Time, PosixFormat, Stmt) {
    logg_1.logg("doTimeClause");
    return [...Stmt, comm_1.comm({ Time, PosixFormat })];
}
exports.doTimeClause = doTimeClause;
// tslint:disable-next-line:max-line-length
function doUnaryArithm(OpPos, Op, Post, X) {
    logg_1.logg("doUnaryArithm");
    return [...X, Token_1.op(Op), comm_1.comm({ OpPos, Post })];
}
exports.doUnaryArithm = doUnaryArithm;
function doUnaryTest(OpPos, Op, X) {
    logg_1.logg("doUnaryTest");
    return [...X, Token_1.op(Op), comm_1.comm({ OpPos })];
}
exports.doUnaryTest = doUnaryTest;
// tslint:disable-next-line:max-line-length
function doWhileClause(WhilePos, DoPos, DonePos, Until, Cond, CondLast, Do, DoLast) {
    logg_1.logg("doWhileClause");
    // tslint:disable-next-line:max-line-length
    return ["while (", ...Cond, ") {\n", ...Do, ...DoLast, "\n}", ...CondLast, comm_1.comm({ WhilePos, DoPos, DonePos, Until }, '{"WhilePos":{},"DoPos":{},"DonePos":{},"Until":false}')];
}
exports.doWhileClause = doWhileClause;
function doWord(Parts) {
    logg_1.logg("doWord");
    return [...Parts];
}
exports.doWord = doWord;
function doWordIter(Name, InPos, Items) {
    logg_1.logg("doWordIter");
    return ["(const ", ...Name, " of [ ", ...Items, " , ", " ])", comm_1.comm({ InPos }, '{"InPos":{}}')];
}
exports.doWordIter = doWordIter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyRG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL1BhcnNlckRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7Ozs7Ozs7Ozs7QUFFSCx3QkFBMkI7QUFDM0IsaUNBQThCO0FBQzlCLGlDQUE4QjtBQUM5Qiw2Q0FBd0M7QUFHeEMsbUNBQW9DO0FBRXBDLDJDQUEyQztBQUMzQyxTQUFnQixXQUFXLENBQUMsSUFBa0IsRUFBRSxLQUFtQixFQUFFLFFBQXdCLEVBQUUsQ0FBVztJQUN4RyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEIsT0FBTyxDQUFDLFdBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBSEQsa0NBR0M7QUFDRCwyQ0FBMkM7QUFDM0MsU0FBZ0IsV0FBVyxDQUFDLElBQWtCLEVBQUUsS0FBbUIsRUFBRSxPQUF1QixFQUFFLFFBQXdCLEVBQUUsQ0FBVztJQUNqSSxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEIsT0FBTyxDQUFDLFdBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUhELGtDQUdDO0FBQ0QsU0FBZ0IsV0FBVyxDQUFDLEtBQWUsRUFBRSxLQUFlLEVBQUUsUUFBa0I7SUFDOUUsV0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLEtBQUssRUFBRSxHQUFHLEtBQUssRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCxrQ0FHQztBQUNELDJDQUEyQztBQUMzQyxTQUFnQixXQUFXLENBQUMsTUFBb0IsRUFBRSxNQUFvQixFQUFFLEtBQWUsRUFBRSxJQUFjO0lB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