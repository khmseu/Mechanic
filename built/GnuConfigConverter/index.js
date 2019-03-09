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
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path_1 = require("path");
const util_1 = require("util");
function __stack() {
    const origPrep = Error.prepareStackTrace;
    const origLim = Error.stackTraceLimit;
    Error.prepareStackTrace = (_, stk) => {
        return stk;
    };
    Error.stackTraceLimit = Infinity;
    const err = new Error();
    Error.captureStackTrace(err /*arguments.callee*/);
    const { stack } = err;
    Error.prepareStackTrace = origPrep;
    Error.stackTraceLimit = origLim;
    return stack;
}
function logg(thing) {
    // tslint:disable-next-line:no-console
    console.log(util_1.inspect(thing, {
        depth: 2,
        compact: false,
        sorted: true,
    }));
}
function comm(thing, dflt = null) {
    const stk = __stack();
    //  logg(stk[2].getFunctionName());
    let js = JSON.stringify(thing);
    if (js === dflt || (!dflt && js === "{}")) {
        return "";
    }
    else {
        // logg({ thing: js, dflt });
    }
    if (js.length > 200) {
        js = util_1.inspect(thing, {
            depth: 2,
            breakLength: 999999,
        });
    }
    return "/*" + stk[2].getFunctionName() + " -> " + js + "*/\n";
}
const known = {};
function typelist(thing, dscr) {
    const hull = {};
    for (const key in thing) {
        if (thing.hasOwnProperty(key)) {
            hull[key] = typeof thing[key];
        }
    }
    const kt = thing && thing.hasOwnProperty("Type") ? thing.Type : "";
    const stack = __stack();
    const stk = [];
    for (let n = 2; n < stack.length; n++) {
        const fn = stack[n].getFunctionName();
        stk.unshift(fn);
        if (n > 2 && /^(bt|perFile)/.test(fn)) {
            break;
        }
    }
    const dor = {
        aatypeclaimed: kt,
        afield: dscr[2],
        // tslint:disable-next-line:max-line-length
        afrom: stk.join("->"),
        aname: dscr[0],
        atype: dscr[1],
        parms: hull,
    };
    const dorj = JSON.stringify(dor);
    const dorkj = JSON.stringify({ [kt]: dor.parms });
    if (!known[dorkj]) {
        known[dorkj] = {};
    }
    if (!known[dorkj][dorj]) {
        known[dorkj][dorj] = 0;
    }
    known[dorkj][dorj]++;
}
function joiner(list, dlm) {
    return list.filter((s) => !!s).join(dlm);
}
// from https://github.com/mvdan/sh/blob/master/syntax/tokens.go
// The list of all possible tokens.
var Token;
(function (Token) {
    Token[Token["illegalTok"] = 0] = "illegalTok";
    Token[Token["_EOF"] = 1] = "_EOF";
    Token[Token["_Newl"] = 2] = "_Newl";
    Token[Token["_Lit"] = 3] = "_Lit";
    Token[Token["_LitWord"] = 4] = "_LitWord";
    Token[Token["_LitRedir"] = 5] = "_LitRedir";
    Token[Token["sglQuote"] = 6] = "sglQuote";
    Token[Token["dblQuote"] = 7] = "dblQuote";
    Token[Token["bckQuote"] = 8] = "bckQuote";
    Token[Token["and"] = 9] = "and";
    Token[Token["andAnd"] = 10] = "andAnd";
    Token[Token["orOr"] = 11] = "orOr";
    Token[Token["or"] = 12] = "or";
    Token[Token["orAnd"] = 13] = "orAnd";
    Token[Token["dollar"] = 14] = "dollar";
    Token[Token["dollSglQuote"] = 15] = "dollSglQuote";
    Token[Token["dollDblQuote"] = 16] = "dollDblQuote";
    Token[Token["dollBrace"] = 17] = "dollBrace";
    Token[Token["dollBrack"] = 18] = "dollBrack";
    Token[Token["dollParen"] = 19] = "dollParen";
    Token[Token["dollDblParen"] = 20] = "dollDblParen";
    Token[Token["leftBrack"] = 21] = "leftBrack";
    Token[Token["dblLeftBrack"] = 22] = "dblLeftBrack";
    Token[Token["leftParen"] = 23] = "leftParen";
    Token[Token["dblLeftParen"] = 24] = "dblLeftParen";
    Token[Token["rightBrace"] = 25] = "rightBrace";
    Token[Token["rightBrack"] = 26] = "rightBrack";
    Token[Token["rightParen"] = 27] = "rightParen";
    Token[Token["dblRightParen"] = 28] = "dblRightParen";
    Token[Token["semicolon"] = 29] = "semicolon";
    Token[Token["dblSemicolon"] = 30] = "dblSemicolon";
    Token[Token["semiAnd"] = 31] = "semiAnd";
    Token[Token["dblSemiAnd"] = 32] = "dblSemiAnd";
    Token[Token["semiOr"] = 33] = "semiOr";
    Token[Token["exclMark"] = 34] = "exclMark";
    Token[Token["addAdd"] = 35] = "addAdd";
    Token[Token["subSub"] = 36] = "subSub";
    Token[Token["star"] = 37] = "star";
    Token[Token["power"] = 38] = "power";
    Token[Token["equal"] = 39] = "equal";
    Token[Token["nequal"] = 40] = "nequal";
    Token[Token["lequal"] = 41] = "lequal";
    Token[Token["gequal"] = 42] = "gequal";
    Token[Token["addAssgn"] = 43] = "addAssgn";
    Token[Token["subAssgn"] = 44] = "subAssgn";
    Token[Token["mulAssgn"] = 45] = "mulAssgn";
    Token[Token["quoAssgn"] = 46] = "quoAssgn";
    Token[Token["remAssgn"] = 47] = "remAssgn";
    Token[Token["andAssgn"] = 48] = "andAssgn";
    Token[Token["orAssgn"] = 49] = "orAssgn";
    Token[Token["xorAssgn"] = 50] = "xorAssgn";
    Token[Token["shlAssgn"] = 51] = "shlAssgn";
    Token[Token["shrAssgn"] = 52] = "shrAssgn";
    Token[Token["rdrOut"] = 53] = "rdrOut";
    Token[Token["appOut"] = 54] = "appOut";
    Token[Token["rdrIn"] = 55] = "rdrIn";
    Token[Token["rdrInOut"] = 56] = "rdrInOut";
    Token[Token["dplIn"] = 57] = "dplIn";
    Token[Token["dplOut"] = 58] = "dplOut";
    Token[Token["clbOut"] = 59] = "clbOut";
    Token[Token["hdoc"] = 60] = "hdoc";
    Token[Token["dashHdoc"] = 61] = "dashHdoc";
    Token[Token["wordHdoc"] = 62] = "wordHdoc";
    Token[Token["rdrAll"] = 63] = "rdrAll";
    Token[Token["appAll"] = 64] = "appAll";
    Token[Token["cmdIn"] = 65] = "cmdIn";
    Token[Token["cmdOut"] = 66] = "cmdOut";
    Token[Token["plus"] = 67] = "plus";
    Token[Token["colPlus"] = 68] = "colPlus";
    Token[Token["minus"] = 69] = "minus";
    Token[Token["colMinus"] = 70] = "colMinus";
    Token[Token["quest"] = 71] = "quest";
    Token[Token["colQuest"] = 72] = "colQuest";
    Token[Token["assgn"] = 73] = "assgn";
    Token[Token["colAssgn"] = 74] = "colAssgn";
    Token[Token["perc"] = 75] = "perc";
    Token[Token["dblPerc"] = 76] = "dblPerc";
    Token[Token["hash"] = 77] = "hash";
    Token[Token["dblHash"] = 78] = "dblHash";
    Token[Token["caret"] = 79] = "caret";
    Token[Token["dblCaret"] = 80] = "dblCaret";
    Token[Token["comma"] = 81] = "comma";
    Token[Token["dblComma"] = 82] = "dblComma";
    Token[Token["at"] = 83] = "at";
    Token[Token["slash"] = 84] = "slash";
    Token[Token["dblSlash"] = 85] = "dblSlash";
    Token[Token["colon"] = 86] = "colon";
    Token[Token["tsExists"] = 87] = "tsExists";
    Token[Token["tsRegFile"] = 88] = "tsRegFile";
    Token[Token["tsDirect"] = 89] = "tsDirect";
    Token[Token["tsCharSp"] = 90] = "tsCharSp";
    Token[Token["tsBlckSp"] = 91] = "tsBlckSp";
    Token[Token["tsNmPipe"] = 92] = "tsNmPipe";
    Token[Token["tsSocket"] = 93] = "tsSocket";
    Token[Token["tsSmbLink"] = 94] = "tsSmbLink";
    Token[Token["tsSticky"] = 95] = "tsSticky";
    Token[Token["tsGIDSet"] = 96] = "tsGIDSet";
    Token[Token["tsUIDSet"] = 97] = "tsUIDSet";
    Token[Token["tsGrpOwn"] = 98] = "tsGrpOwn";
    Token[Token["tsUsrOwn"] = 99] = "tsUsrOwn";
    Token[Token["tsModif"] = 100] = "tsModif";
    Token[Token["tsRead"] = 101] = "tsRead";
    Token[Token["tsWrite"] = 102] = "tsWrite";
    Token[Token["tsExec"] = 103] = "tsExec";
    Token[Token["tsNoEmpty"] = 104] = "tsNoEmpty";
    Token[Token["tsFdTerm"] = 105] = "tsFdTerm";
    Token[Token["tsEmpStr"] = 106] = "tsEmpStr";
    Token[Token["tsNempStr"] = 107] = "tsNempStr";
    Token[Token["tsOptSet"] = 108] = "tsOptSet";
    Token[Token["tsVarSet"] = 109] = "tsVarSet";
    Token[Token["tsRefVar"] = 110] = "tsRefVar";
    Token[Token["tsReMatch"] = 111] = "tsReMatch";
    Token[Token["tsNewer"] = 112] = "tsNewer";
    Token[Token["tsOlder"] = 113] = "tsOlder";
    Token[Token["tsDevIno"] = 114] = "tsDevIno";
    Token[Token["tsEql"] = 115] = "tsEql";
    Token[Token["tsNeq"] = 116] = "tsNeq";
    Token[Token["tsLeq"] = 117] = "tsLeq";
    Token[Token["tsGeq"] = 118] = "tsGeq";
    Token[Token["tsLss"] = 119] = "tsLss";
    Token[Token["tsGtr"] = 120] = "tsGtr";
    Token[Token["globQuest"] = 121] = "globQuest";
    Token[Token["globStar"] = 122] = "globStar";
    Token[Token["globPlus"] = 123] = "globPlus";
    Token[Token["globAt"] = 124] = "globAt";
    Token[Token["globExcl"] = 125] = "globExcl";
})(Token || (Token = {}));
const opcode = [];
opcode[Token.illegalTok] = " :illegalTok: ";
opcode[Token._EOF] = " :_EOF: ";
opcode[Token._Newl] = " :_Newl: ";
opcode[Token._Lit] = " :_Lit: ";
opcode[Token._LitWord] = " :_LitWord: ";
opcode[Token._LitRedir] = " :_LitRedir: ";
opcode[Token.sglQuote] = " ' ";
opcode[Token.dblQuote] = ' " ';
opcode[Token.bckQuote] = " ` ";
opcode[Token.and] = " & ";
opcode[Token.andAnd] = " && ";
opcode[Token.orOr] = " || ";
opcode[Token.or] = " | ";
opcode[Token.orAnd] = " |& ";
opcode[Token.dollar] = " $ ";
opcode[Token.dollSglQuote] = " $' ";
opcode[Token.dollDblQuote] = ' $" ';
opcode[Token.dollBrace] = " ${ ";
opcode[Token.dollBrack] = " $[ ";
opcode[Token.dollParen] = " $( ";
opcode[Token.dollDblParen] = " $(( ";
opcode[Token.leftBrack] = " [ ";
opcode[Token.dblLeftBrack] = " [[ ";
opcode[Token.leftParen] = " ( ";
opcode[Token.dblLeftParen] = " (( ";
opcode[Token.rightBrace] = " } ";
opcode[Token.rightBrack] = " ] ";
opcode[Token.rightParen] = " ) ";
opcode[Token.dblRightParen] = " )) ";
opcode[Token.semicolon] = " ;\n";
opcode[Token.dblSemicolon] = " ;;\n";
opcode[Token.semiAnd] = " ;& ";
opcode[Token.dblSemiAnd] = " ;;& ";
opcode[Token.semiOr] = " ;| ";
opcode[Token.exclMark] = " ! ";
opcode[Token.addAdd] = " ++ ";
opcode[Token.subSub] = " -- ";
opcode[Token.star] = " * ";
opcode[Token.power] = " ** ";
opcode[Token.equal] = " == ";
opcode[Token.nequal] = " != ";
opcode[Token.lequal] = " <= ";
opcode[Token.gequal] = " >= ";
opcode[Token.addAssgn] = " += ";
opcode[Token.subAssgn] = " -= ";
opcode[Token.mulAssgn] = " *= ";
opcode[Token.quoAssgn] = " /= ";
opcode[Token.remAssgn] = " %= ";
opcode[Token.andAssgn] = " &= ";
opcode[Token.orAssgn] = " |= ";
opcode[Token.xorAssgn] = " ^= ";
opcode[Token.shlAssgn] = " <<= ";
opcode[Token.shrAssgn] = " >>= ";
opcode[Token.rdrOut] = " > ";
opcode[Token.appOut] = " >> ";
opcode[Token.rdrIn] = " < ";
opcode[Token.rdrInOut] = " <> ";
opcode[Token.dplIn] = " <& ";
opcode[Token.dplOut] = " >& ";
opcode[Token.clbOut] = " >| ";
opcode[Token.hdoc] = " << ";
opcode[Token.dashHdoc] = " <<- ";
opcode[Token.wordHdoc] = " <<< ";
opcode[Token.rdrAll] = " &> ";
opcode[Token.appAll] = " &>> ";
opcode[Token.cmdIn] = " <( ";
opcode[Token.cmdOut] = " >( ";
opcode[Token.plus] = " + /*1*/";
opcode[Token.colPlus] = " :+ ";
opcode[Token.minus] = " - ";
opcode[Token.colMinus] = " :- ";
opcode[Token.quest] = " ? ";
opcode[Token.colQuest] = " :? ";
opcode[Token.assgn] = " = ";
opcode[Token.colAssgn] = " := ";
opcode[Token.perc] = " % ";
opcode[Token.dblPerc] = " %% ";
opcode[Token.hash] = " # ";
opcode[Token.dblHash] = " ## ";
opcode[Token.caret] = " ^ ";
opcode[Token.dblCaret] = " ^^ ";
opcode[Token.comma] = " , ";
opcode[Token.dblComma] = " ,, ";
opcode[Token.at] = " @ ";
opcode[Token.slash] = " / ";
opcode[Token.dblSlash] = " // ";
opcode[Token.colon] = " : ";
opcode[Token.tsExists] = " -e ";
opcode[Token.tsRegFile] = " -f ";
opcode[Token.tsDirect] = " -d ";
opcode[Token.tsCharSp] = " -c ";
opcode[Token.tsBlckSp] = " -b ";
opcode[Token.tsNmPipe] = " -p ";
opcode[Token.tsSocket] = " -S ";
opcode[Token.tsSmbLink] = " -L ";
opcode[Token.tsSticky] = " -k ";
opcode[Token.tsGIDSet] = " -g ";
opcode[Token.tsUIDSet] = " -u ";
opcode[Token.tsGrpOwn] = " -G ";
opcode[Token.tsUsrOwn] = " -O ";
opcode[Token.tsModif] = " -N ";
opcode[Token.tsRead] = " -r ";
opcode[Token.tsWrite] = " -w ";
opcode[Token.tsExec] = " -x ";
opcode[Token.tsNoEmpty] = " -s ";
opcode[Token.tsFdTerm] = " -t ";
opcode[Token.tsEmpStr] = " -z ";
opcode[Token.tsNempStr] = " -n ";
opcode[Token.tsOptSet] = " -o ";
opcode[Token.tsVarSet] = " -v ";
opcode[Token.tsRefVar] = " -R ";
opcode[Token.tsReMatch] = " =~ ";
opcode[Token.tsNewer] = " -nt ";
opcode[Token.tsOlder] = " -ot ";
opcode[Token.tsDevIno] = " -ef ";
opcode[Token.tsEql] = " -eq ";
opcode[Token.tsNeq] = " -ne ";
opcode[Token.tsLeq] = " -le ";
opcode[Token.tsGeq] = " -ge ";
opcode[Token.tsLss] = " -lt ";
opcode[Token.tsGtr] = " -gt ";
opcode[Token.globQuest] = " ?( ";
opcode[Token.globStar] = " *( ";
opcode[Token.globPlus] = " +( ";
opcode[Token.globAt] = " @( ";
opcode[Token.globExcl] = " !( ";
function op(o) {
    return opcode[o] || "Op=" + o;
}
function comments(lines, fromField) {
    if (!lines) {
        return comm({ empty_lines: lines });
    }
    let res = joiner(lines.map((l) => {
        typelist(l, ["l", "IMyComment", fromField + "[]"]);
        if (l.Pos.Offset === 0 && l.Text[0] === "!") {
            return "";
        }
        return "// " + l.Text;
    }), "\n");
    if (res) {
        res += "\n";
    }
    return res;
}
function btSglQuoted(prt, fromField) {
    typelist(prt, ["prt", "ISglQuoted", fromField]);
    const { Pos, End, Type, Value } = prt, rest_psq = __rest(prt, ["Pos", "End", "Type", "Value"]);
    return [JSON.stringify(Value), comm({ rest_psq }, '{"rest_psq":{"Dollar":false}}')];
}
function btCmdSubst(prt, fromField) {
    typelist(prt, ["prt", "ICmdSubst", fromField]);
    const { Pos, End, Type, Stmts } = prt, rest_pcs = __rest(prt, ["Pos", "End", "Type", "Stmts"]);
    // tslint:disable-next-line:max-line-length
    return ["$( " + joiner([statements(Stmts, "Stmts"), comm({ rest_pcs }, '{"rest_pcs":{"Last":[],"ReplyVar":false,"TempFile":false}}')], " + /*2*/") + " )"];
}
function btLit(prt, fromField) {
    typelist(prt, ["prt", "ILit", fromField]);
    const { Pos, End, Type, Value } = prt, rest_pl = __rest(prt, ["Pos", "End", "Type", "Value"]);
    return [JSON.stringify(Value), comm({ rest_pl }, '{"rest_pl":{}}')];
}
function btDblQuoted(prt, fromField) {
    typelist(prt, ["prt", "IDblQuoted", fromField]);
    const { Pos, End, Type, Parts } = prt, rest_pdq = __rest(prt, ["Pos", "End", "Type", "Parts"]);
    return [...parts(Parts, "Parts"), comm({ rest_pdq }, '{"rest_pdq":{"Dollar":false}}')];
}
function param(prm, fromField) {
    typelist(prm, ["prm", "IMyParam", fromField]);
    const { Pos, End, Value } = prm, rest_prm = __rest(prm, ["Pos", "End", "Value"]);
    // tslint:disable-next-line:max-line-length
    return [
        /^[a-zA-Z_]\w*$/.test(Value)
            ? Value //
            : Value === "0"
                ? "process.argv0"
                : /^\d+$/.test(Value)
                    ? "process.argv[" + Value + "]"
                    : Value === "#"
                        ? "process.argv.length"
                        : Value === "$"
                            ? "process.pid"
                            : Value == "?"
                                ? "process.exitCode"
                                : comm({ Value }),
        comm({ rest_prm }, '{"rest_prm":{}}'),
    ];
}
function exp(e, fromField) {
    typelist(e, ["e", "IMyExp", fromField]);
    if (!e) {
        return comm({ e }, '{"e":null}');
    }
    const { Op, Word } = e, rest_exp = __rest(e, ["Op", "Word"]);
    return joiner([op(Op), ...word(Word, "Word"), comm({ rest_exp }, '{"rest_exp":{}}')], " ");
}
function btParamExp(prt, fromField) {
    typelist(prt, ["prt", "IParamExp", fromField]);
    const { Pos, End, Type, Param, Exp, Short } = prt, rest_ppe = __rest(prt, ["Pos", "End", "Type", "Param", "Exp", "Short"]);
    if (Short) {
        // tslint:disable-next-line:max-line-length
        return [joiner([...param(Param, "Param"), exp(Exp, "Exp"), comm({ rest_ppe }, '{"rest_ppe":{"Excl":false,"Index":null,"Length":false,"Names":0,"Repl":null,"Slice":null,"Width":false}}')], " ")];
    }
    else {
        // tslint:disable-next-line:max-line-length
        return [joiner(["(", ...param(Param, "Param"), exp(Exp, "Exp"), comm({ rest_ppe }, '{"rest_ppe":{"Excl":false,"Index":null,"Length":false,"Names":0,"Repl":null,"Slice":null,"Width":false}}'), ")"], " ")];
    }
}
function byType(rec, fromField) {
    if (!rec || !rec.Type) {
        return [comm({ empty_rec: rec })];
    }
    switch (rec.Type) {
        case "BinaryCmd":
            return btBinaryCmd(rec, fromField);
        case "Block":
            return btBlock(rec, fromField);
        case "CallExpr":
            return btCallExpr(rec, fromField);
        case "CaseClause":
            return btCaseClause(rec, fromField);
        case "CmdSubst":
            return btCmdSubst(rec, fromField);
        case "DblQuoted":
            return btDblQuoted(rec, fromField);
        case "ForClause":
            return btForClause(rec, fromField);
        case "FuncDecl":
            return btFuncDecl(rec, fromField);
        case "IfClause":
            return btIfClause(rec, fromField);
        case "Lit":
            return btLit(rec, fromField);
        case "ParamExp":
            return btParamExp(rec, fromField);
        case "SglQuoted":
            return btSglQuoted(rec, fromField);
        case "Subshell":
            return btSubshell(rec, fromField);
        case "WhileClause":
            return btWhileClause(rec, fromField);
        case "WordIter":
            return btWordIter(rec, fromField);
        default:
            return [comm({ unknown_rec: rec })];
    }
}
function parts(prts, fromField) {
    if (!prts) {
        return [comm({ prts })];
    }
    const res = [];
    prts.forEach((part) => {
        // typelist(part, ["part", "IByType", fromField + "[]"]);
        res.push(...byType(part, fromField + "[]"));
    });
    return [joiner(res, " + /*3*/")];
}
function value(val, fromField) {
    typelist(val, ["val", "IXValue", fromField]);
    if (!val) {
        return ['""', comm({ empty_val: val }, '{"empty_val":null}')];
    }
    const { Pos, End, Parts } = val, rest_val = __rest(val, ["Pos", "End", "Parts"]);
    return [...parts(Parts, "Parts"), comm({ rest_val }, '{"rest_val":{}}')];
}
function assigns(ass, fromField) {
    const res = [];
    ass.forEach((a) => {
        typelist(a, ["a", "IMyAssign", fromField + "[]"]);
        const { Pos, End, Name, Value } = a, rest_ass = __rest(a, ["Pos", "End", "Name", "Value"]);
        // tslint:disable-next-line:max-line-length
        res.push("let " + a.Name.Value + " = " + joiner(value(Value, "Value"), " + /*4*/") + comm({ rest_ass }, '{"rest_ass":{"Append":false,"Array":null,"Index":null,"Naked":false}}'));
    });
    return joiner(res, " ;//1\n");
}
function arglist(args, fromField) {
    const res = [];
    args.forEach((a) => {
        typelist(a, ["a", "IXArg", fromField + "[]"]);
        const { Pos, End, Parts } = a, rest_args = __rest(a, ["Pos", "End", "Parts"]);
        res.push(...parts(Parts, "Parts"));
        res.push(comm({ rest_args }, '{"rest_args":{}}'));
    });
    return res;
}
function btCallExpr(cmd, fromField) {
    typelist(cmd, ["cmd", "ICallExpr", fromField]);
    const { Pos, End, Type, Assigns, Args } = cmd, rest_cce = __rest(cmd, ["Pos", "End", "Type", "Assigns", "Args"]);
    return [assigns(Assigns, "Assigns"), ...arglist(Args, "Args"), comm({ rest_cce }, '{"rest_cce":{}}')];
}
function btBinaryCmd(cmd, fromField) {
    typelist(cmd, ["cmd", "IBinaryCmd", fromField]);
    const { Pos, End, Type, Op, X, Y } = cmd, rest_cbc = __rest(cmd, ["Pos", "End", "Type", "Op", "X", "Y"]);
    return ["{\n", statements([X], "[X]"), op(Op), statements([Y], "[Y]"), comm({ rest_cbc }, '{"rest_cbc":{}}'), "\n}"];
}
function btWhileClause(cmd, fromField) {
    typelist(cmd, ["cmd", "IWhileClause", fromField]);
    const { Pos, End, Type, Cond, Do } = cmd, rest_cwc = __rest(cmd, ["Pos", "End", "Type", "Cond", "Do"]);
    // tslint:disable-next-line:max-line-length
    return ["while (" + block(Cond, "Cond") + ") {\n" + block(Do, "Do") + "\n}", comm({ rest_cwc }, '{"rest_cwc":{"Until":false}}')];
}
function word(wrd, fromField) {
    typelist(wrd, ["wrd", "IXWord", fromField]);
    if (!wrd) {
        return ['""', comm({ empty_wrd: wrd }, '{"empty_wrd":null}')];
    }
    const { Pos, End, Parts } = wrd, rest_wrd = __rest(wrd, ["Pos", "End", "Parts"]);
    return [...parts(Parts, "Parts"), comm({ rest_wrd }, '{"rest_wrd":{}}')];
}
function patterns(pts, fromField) {
    const res = [];
    pts.forEach((pat) => {
        typelist(pat, ["pat", "IXPattern", fromField + "[]"]);
        const { Pos, End, Parts } = pat, rest_pts = __rest(pat, ["Pos", "End", "Parts"]);
        res.push(...parts(Parts, "Parts").map((p) => "case " + p + " :\n"), comm({ rest_pts }, '{"rest_pts":{}}'));
    });
    return res;
}
function item(itm, fromField) {
    const res = [];
    itm.forEach((i) => {
        typelist(i, ["i", "IMyItem", fromField + "[]"]);
        const { Pos, End, Comments, Patterns, Stmts, Op, Last } = i, rest_itm = __rest(i, ["Pos", "End", "Comments", "Patterns", "Stmts", "Op", "Last"]);
        // tslint:disable-next-line:max-line-length
        res.push(comments(Comments, "Comments"), ...patterns(Patterns, "Patterns"), statements(Stmts, "Stmts"), op(Op), comments(Last, "Last"), comm({ rest_itm }, '{"rest_itm":{}}'));
    });
    return res;
}
function btCaseClause(cmd, fromField) {
    typelist(cmd, ["cmd", "ICaseClause", fromField]);
    const { Pos, End, Type, Items, Word } = cmd, rest_ccc = __rest(cmd, ["Pos", "End", "Type", "Items", "Word"]);
    // tslint:disable-next-line:max-line-length
    return ["switch ( " + joiner(word(Word, "Word"), " + /*5*/") + " ) {\n", ...item(Items, "Items"), "\n}", comm({ rest_ccc }, '{"rest_ccc":{"Last":[]}}')];
}
function btIfClause(cmd, fromField) {
    typelist(cmd, ["cmd", "IIfClause", fromField]);
    const { Pos, End, Type, Cond, Then, Else, Elif, ElseComments, FiComments } = cmd, rest_cic = __rest(cmd, ["Pos", "End", "Type", "Cond", "Then", "Else", "Elif", "ElseComments", "FiComments"]);
    return [
        (Elif ? " else " : "") + //
            "if ( " +
            block(Cond, "Cond") +
            " ) {\n" +
            block(Then, "Then") +
            "\n} " +
            comments(ElseComments, "ElseComments") +
            " else {\n" +
            block(Else, "Else") +
            "\n} " +
            comments(FiComments, "FiComments"),
        comm({ rest_cic }, '{"rest_cic":{}}'),
    ];
}
function btFuncDecl(cmd, fromField) {
    typelist(cmd, ["cmd", "IFuncDecl", fromField]);
    const { Pos, End, Type, Name, Body } = cmd, rest_cfd = __rest(cmd, ["Pos", "End", "Type", "Name", "Body"]);
    // tslint:disable-next-line:max-line-length
    return ["function " + Name.Value + " () {\n" + statements([Body], "[Body]") + "\n}", comm({ rest_cfd }, '{"rest_cfd":{"RsrvWord":false}}')];
}
function block(cmd, fromField) {
    typelist(cmd, ["cmd", "IMyBlock", fromField]);
    const { Stmts } = cmd, rest_cb = __rest(cmd, ["Stmts"]);
    // tslint:disable-next-line:max-line-length
    return [joiner([statements(Stmts, "Stmts"), comm({ rest_cb }, '{"rest_cb":{"Last":[]}}')], " ;//3\n")];
}
function btBlock(cmd, fromField) {
    typelist(cmd, ["cmd", "IBlock", fromField]);
    const { Pos, End, Type, Stmts } = cmd, rest_cb = __rest(cmd, ["Pos", "End", "Type", "Stmts"]);
    // tslint:disable-next-line:max-line-length
    return [joiner([statements(Stmts, "Stmts"), comm({ rest_cb }, '{"rest_cb":{"Last":[]}}')], " ;//3\n")];
}
function btSubshell(cmd, fromField) {
    typelist(cmd, ["cmd", "ISubshell", fromField]);
    const { Pos, End, Type, Stmts } = cmd, rest_css = __rest(cmd, ["Pos", "End", "Type", "Stmts"]);
    return [" ( " + joiner([statements(Stmts, "Stmts"), comm({ rest_css }, '{"rest_css":{"Last":[]}}')], " ") + " ) "];
}
function btForClause(cmd, fromField) {
    typelist(cmd, ["cmd", "IForClause", fromField]);
    const { Pos, End, Type, Do, Loop } = cmd, rest_cfc = __rest(cmd, ["Pos", "End", "Type", "Do", "Loop"]);
    // tslint:disable-next-line:max-line-length
    return ["for", ...command(Loop, "Loop"), "{\n", ...block(Do, "Do"), "\n}", comm({ rest_cfc }, '{"rest_cfc":{"Select":false}}')];
}
function btWordIter(cmd, fromField) {
    typelist(cmd, ["cmd", "IWordIter", fromField]);
    const { Pos, End, Type, Items, Name } = cmd, rest_cwi = __rest(cmd, ["Pos", "End", "Type", "Items", "Name"]);
    const items = [];
    Items.forEach((i) => {
        items.push(...word(i, "Items[]"));
    });
    return ["(const " + Name.Value + " of [ " + joiner(items, " , ") + " ])", comm({ rest_cwi }, '{"rest_cwi":{}}')];
}
function command(cmd, fromField) {
    // typelist(cmd, ["cmd", "IByType", fromField]);
    return byType(cmd, fromField);
}
function hdoc(doc, fromField) {
    typelist(doc, ["doc", "IMyHdoc", fromField]);
    if (!doc) {
        return comm({ empty_doc: doc }, '{"empty_doc":null}');
    }
    const { Pos, End, Parts } = doc, rest_doc = __rest(doc, ["Pos", "End", "Parts"]);
    return joiner([...parts(Parts, "Parts"), comm({ rest_doc }, '{"rest_doc":{}}')], " ");
}
function redirs(red, fromField) {
    if (!red) {
        return comm({ empty_red: red });
    }
    const res = [];
    red.forEach((r) => {
        typelist(r, ["r", "IMyRedir", fromField + "[]"]);
        const { Pos, End, Op, Word, N, Hdoc } = r, rest_red = __rest(r, ["Pos", "End", "Op", "Word", "N", "Hdoc"]);
        if (N) {
            res.push(N.Value);
        }
        res.push(op(Op), ...word(Word, "Word"));
        res.push(hdoc(Hdoc, "Hdoc"));
        res.push(comm({ rest_red }, '{"rest_red":{}}'));
    });
    return joiner(res, " ");
}
function statements(stmts, fromField) {
    if (!stmts) {
        return comm({ empty_stmts: stmts });
    }
    const res = [];
    stmts.forEach((stmt) => {
        typelist(stmt, ["stmts", "IMyStmt", fromField + "[]"]);
        const { Pos, End, Comments, Cmd, Redirs } = stmt, rest_stmt = __rest(stmt, ["Pos", "End", "Comments", "Cmd", "Redirs"]);
        res.push(comments(Comments, "Comments") + joiner([...command(Cmd, "Cmd"), redirs(Redirs, "Redirs")], " "));
        // tslint:disable-next-line:max-line-length
        res.push(comm({ rest_stmt }, '{"rest_stmt":{"Background":false,"Coprocess":false,"Negated":false}}'));
    });
    return joiner(res, " ;//2\n");
}
// ---------------------------------------------------------------------------------------------------------------------
function perFile(f) {
    logg({ f });
    const t = fs_1.readFileSync(path_1.resolve("gnu-config", f), { encoding: "ascii" });
    // FIXME: replace with mvdan-sh!
    const res = child_process_1.spawnSync("shfmt", ["-p", "-tojson"], {
        encoding: "utf8",
        input: t,
        maxBuffer: 10 * 1024 * 1024,
    });
    if (res.error) {
        logg({ res });
        throw res.error;
    }
    const j = JSON.parse(res.stdout);
    typelist(j, ["j", "IMyShellFile", "res.stdout"]);
    // logg({ j });
    const js = statements(j.Stmts, "Stmts") + "\n" + comments(j.Last, "Last");
    // tslint:disable-next-line:no-console
    console.log(js);
}
["config.guess", "config.sub"].forEach(perFile);
// tslint:disable-next-line:no-console
console.log(Object.keys(known)
    .map((k) => k +
    "\n\t" +
    Object.keys(known[k])
        .map((v) => known[k][v] + " " + v)
        .sort()
        .join("\n\t"))
    .sort()
    .join("\n"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7Ozs7Ozs7Ozs7QUFFSCxpREFBMEM7QUFDMUMsMkJBQWtDO0FBQ2xDLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFFL0IsU0FBUyxPQUFPO0lBQ2QsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO0lBQ3pDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDdEMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ25DLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0lBQ0YsS0FBSyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7SUFDakMsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUN4QixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEQsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUN0QixLQUFLLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO0lBQ25DLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO0lBQ2hDLE9BQU8sS0FBWSxDQUFDO0FBQ3RCLENBQUM7QUFFRCxTQUFTLElBQUksQ0FBQyxLQUFhO0lBQ3pCLHNDQUFzQztJQUN0QyxPQUFPLENBQUMsR0FBRyxDQUNULGNBQU8sQ0FBQyxLQUFLLEVBQUU7UUFDYixLQUFLLEVBQUUsQ0FBQztRQUNSLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLElBQUk7S0FFYixDQUFDLENBQ0gsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLElBQUksQ0FBQyxLQUFhLEVBQUUsT0FBc0IsSUFBSTtJQUNyRCxNQUFNLEdBQUcs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R0FBRyxLQUFLLENBQUM7QUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7QUFFL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7QUFFN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDckMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNLENBQUM7QUFFcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDckMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFFakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDckMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFFOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFFOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7QUFFakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7QUFFL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFFOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFFNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFFaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFP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