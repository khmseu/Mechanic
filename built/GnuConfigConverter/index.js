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
function logg(thing) {
    // tslint:disable-next-line:no-console
    console.log(util_1.inspect(thing, {
        depth: 2,
        compact: false,
        sorted: true,
    }));
}
function comm(thing, dflt = "#") {
    if (JSON.stringify(thing) === dflt) {
        return "";
    }
    else {
        // logg({ thing: JSON.stringify(thing), dflt });
    }
    return ("/*" +
        util_1.inspect(thing, {
            depth: 2,
            breakLength: 999999,
        }) +
        "*/\n");
}
function joiner(list, dlm) {
    return list.filter((s) => !!s).join(dlm);
}
// from parser/tokens.go
// The list of all possible tokens.
var OpType;
(function (OpType) {
    OpType[OpType["illegalTok"] = 0] = "illegalTok";
    OpType[OpType["_EOF"] = 1] = "_EOF";
    OpType[OpType["_Newl"] = 2] = "_Newl";
    OpType[OpType["_Lit"] = 3] = "_Lit";
    OpType[OpType["_LitWord"] = 4] = "_LitWord";
    OpType[OpType["_LitRedir"] = 5] = "_LitRedir";
    OpType[OpType["sglQuote"] = 6] = "sglQuote";
    OpType[OpType["dblQuote"] = 7] = "dblQuote";
    OpType[OpType["bckQuote"] = 8] = "bckQuote";
    OpType[OpType["and"] = 9] = "and";
    OpType[OpType["andAnd"] = 10] = "andAnd";
    OpType[OpType["orOr"] = 11] = "orOr";
    OpType[OpType["or"] = 12] = "or";
    OpType[OpType["orAnd"] = 13] = "orAnd";
    OpType[OpType["dollar"] = 14] = "dollar";
    OpType[OpType["dollSglQuote"] = 15] = "dollSglQuote";
    OpType[OpType["dollDblQuote"] = 16] = "dollDblQuote";
    OpType[OpType["dollBrace"] = 17] = "dollBrace";
    OpType[OpType["dollBrack"] = 18] = "dollBrack";
    OpType[OpType["dollParen"] = 19] = "dollParen";
    OpType[OpType["dollDblParen"] = 20] = "dollDblParen";
    OpType[OpType["leftBrack"] = 21] = "leftBrack";
    OpType[OpType["dblLeftBrack"] = 22] = "dblLeftBrack";
    OpType[OpType["leftParen"] = 23] = "leftParen";
    OpType[OpType["dblLeftParen"] = 24] = "dblLeftParen";
    OpType[OpType["rightBrace"] = 25] = "rightBrace";
    OpType[OpType["rightBrack"] = 26] = "rightBrack";
    OpType[OpType["rightParen"] = 27] = "rightParen";
    OpType[OpType["dblRightParen"] = 28] = "dblRightParen";
    OpType[OpType["semicolon"] = 29] = "semicolon";
    OpType[OpType["dblSemicolon"] = 30] = "dblSemicolon";
    OpType[OpType["semiAnd"] = 31] = "semiAnd";
    OpType[OpType["dblSemiAnd"] = 32] = "dblSemiAnd";
    OpType[OpType["semiOr"] = 33] = "semiOr";
    OpType[OpType["exclMark"] = 34] = "exclMark";
    OpType[OpType["addAdd"] = 35] = "addAdd";
    OpType[OpType["subSub"] = 36] = "subSub";
    OpType[OpType["star"] = 37] = "star";
    OpType[OpType["power"] = 38] = "power";
    OpType[OpType["equal"] = 39] = "equal";
    OpType[OpType["nequal"] = 40] = "nequal";
    OpType[OpType["lequal"] = 41] = "lequal";
    OpType[OpType["gequal"] = 42] = "gequal";
    OpType[OpType["addAssgn"] = 43] = "addAssgn";
    OpType[OpType["subAssgn"] = 44] = "subAssgn";
    OpType[OpType["mulAssgn"] = 45] = "mulAssgn";
    OpType[OpType["quoAssgn"] = 46] = "quoAssgn";
    OpType[OpType["remAssgn"] = 47] = "remAssgn";
    OpType[OpType["andAssgn"] = 48] = "andAssgn";
    OpType[OpType["orAssgn"] = 49] = "orAssgn";
    OpType[OpType["xorAssgn"] = 50] = "xorAssgn";
    OpType[OpType["shlAssgn"] = 51] = "shlAssgn";
    OpType[OpType["shrAssgn"] = 52] = "shrAssgn";
    OpType[OpType["rdrOut"] = 53] = "rdrOut";
    OpType[OpType["appOut"] = 54] = "appOut";
    OpType[OpType["rdrIn"] = 55] = "rdrIn";
    OpType[OpType["rdrInOut"] = 56] = "rdrInOut";
    OpType[OpType["dplIn"] = 57] = "dplIn";
    OpType[OpType["dplOut"] = 58] = "dplOut";
    OpType[OpType["clbOut"] = 59] = "clbOut";
    OpType[OpType["hdoc"] = 60] = "hdoc";
    OpType[OpType["dashHdoc"] = 61] = "dashHdoc";
    OpType[OpType["wordHdoc"] = 62] = "wordHdoc";
    OpType[OpType["rdrAll"] = 63] = "rdrAll";
    OpType[OpType["appAll"] = 64] = "appAll";
    OpType[OpType["cmdIn"] = 65] = "cmdIn";
    OpType[OpType["cmdOut"] = 66] = "cmdOut";
    OpType[OpType["plus"] = 67] = "plus";
    OpType[OpType["colPlus"] = 68] = "colPlus";
    OpType[OpType["minus"] = 69] = "minus";
    OpType[OpType["colMinus"] = 70] = "colMinus";
    OpType[OpType["quest"] = 71] = "quest";
    OpType[OpType["colQuest"] = 72] = "colQuest";
    OpType[OpType["assgn"] = 73] = "assgn";
    OpType[OpType["colAssgn"] = 74] = "colAssgn";
    OpType[OpType["perc"] = 75] = "perc";
    OpType[OpType["dblPerc"] = 76] = "dblPerc";
    OpType[OpType["hash"] = 77] = "hash";
    OpType[OpType["dblHash"] = 78] = "dblHash";
    OpType[OpType["caret"] = 79] = "caret";
    OpType[OpType["dblCaret"] = 80] = "dblCaret";
    OpType[OpType["comma"] = 81] = "comma";
    OpType[OpType["dblComma"] = 82] = "dblComma";
    OpType[OpType["at"] = 83] = "at";
    OpType[OpType["slash"] = 84] = "slash";
    OpType[OpType["dblSlash"] = 85] = "dblSlash";
    OpType[OpType["colon"] = 86] = "colon";
    OpType[OpType["tsExists"] = 87] = "tsExists";
    OpType[OpType["tsRegFile"] = 88] = "tsRegFile";
    OpType[OpType["tsDirect"] = 89] = "tsDirect";
    OpType[OpType["tsCharSp"] = 90] = "tsCharSp";
    OpType[OpType["tsBlckSp"] = 91] = "tsBlckSp";
    OpType[OpType["tsNmPipe"] = 92] = "tsNmPipe";
    OpType[OpType["tsSocket"] = 93] = "tsSocket";
    OpType[OpType["tsSmbLink"] = 94] = "tsSmbLink";
    OpType[OpType["tsSticky"] = 95] = "tsSticky";
    OpType[OpType["tsGIDSet"] = 96] = "tsGIDSet";
    OpType[OpType["tsUIDSet"] = 97] = "tsUIDSet";
    OpType[OpType["tsGrpOwn"] = 98] = "tsGrpOwn";
    OpType[OpType["tsUsrOwn"] = 99] = "tsUsrOwn";
    OpType[OpType["tsModif"] = 100] = "tsModif";
    OpType[OpType["tsRead"] = 101] = "tsRead";
    OpType[OpType["tsWrite"] = 102] = "tsWrite";
    OpType[OpType["tsExec"] = 103] = "tsExec";
    OpType[OpType["tsNoEmpty"] = 104] = "tsNoEmpty";
    OpType[OpType["tsFdTerm"] = 105] = "tsFdTerm";
    OpType[OpType["tsEmpStr"] = 106] = "tsEmpStr";
    OpType[OpType["tsNempStr"] = 107] = "tsNempStr";
    OpType[OpType["tsOptSet"] = 108] = "tsOptSet";
    OpType[OpType["tsVarSet"] = 109] = "tsVarSet";
    OpType[OpType["tsRefVar"] = 110] = "tsRefVar";
    OpType[OpType["tsReMatch"] = 111] = "tsReMatch";
    OpType[OpType["tsNewer"] = 112] = "tsNewer";
    OpType[OpType["tsOlder"] = 113] = "tsOlder";
    OpType[OpType["tsDevIno"] = 114] = "tsDevIno";
    OpType[OpType["tsEql"] = 115] = "tsEql";
    OpType[OpType["tsNeq"] = 116] = "tsNeq";
    OpType[OpType["tsLeq"] = 117] = "tsLeq";
    OpType[OpType["tsGeq"] = 118] = "tsGeq";
    OpType[OpType["tsLss"] = 119] = "tsLss";
    OpType[OpType["tsGtr"] = 120] = "tsGtr";
    OpType[OpType["globQuest"] = 121] = "globQuest";
    OpType[OpType["globStar"] = 122] = "globStar";
    OpType[OpType["globPlus"] = 123] = "globPlus";
    OpType[OpType["globAt"] = 124] = "globAt";
    OpType[OpType["globExcl"] = 125] = "globExcl";
})(OpType || (OpType = {}));
const opcode = [];
opcode[OpType.illegalTok] = " :illegalTok: ";
opcode[OpType._EOF] = " :_EOF: ";
opcode[OpType._Newl] = " :_Newl: ";
opcode[OpType._Lit] = " :_Lit: ";
opcode[OpType._LitWord] = " :_LitWord: ";
opcode[OpType._LitRedir] = " :_LitRedir: ";
opcode[OpType.sglQuote] = " ' ";
opcode[OpType.dblQuote] = ' " ';
opcode[OpType.bckQuote] = " ` ";
opcode[OpType.and] = " & ";
opcode[OpType.andAnd] = " && ";
opcode[OpType.orOr] = " || ";
opcode[OpType.or] = " | ";
opcode[OpType.orAnd] = " |& ";
opcode[OpType.dollar] = " $ ";
opcode[OpType.dollSglQuote] = " $' ";
opcode[OpType.dollDblQuote] = ' $" ';
opcode[OpType.dollBrace] = " ${ ";
opcode[OpType.dollBrack] = " $[ ";
opcode[OpType.dollParen] = " $( ";
opcode[OpType.dollDblParen] = " $(( ";
opcode[OpType.leftBrack] = " [ ";
opcode[OpType.dblLeftBrack] = " [[ ";
opcode[OpType.leftParen] = " ( ";
opcode[OpType.dblLeftParen] = " (( ";
opcode[OpType.rightBrace] = " } ";
opcode[OpType.rightBrack] = " ] ";
opcode[OpType.rightParen] = " ) ";
opcode[OpType.dblRightParen] = " )) ";
opcode[OpType.semicolon] = " ; ";
opcode[OpType.dblSemicolon] = " ;; ";
opcode[OpType.semiAnd] = " ;& ";
opcode[OpType.dblSemiAnd] = " ;;& ";
opcode[OpType.semiOr] = " ;| ";
opcode[OpType.exclMark] = " ! ";
opcode[OpType.addAdd] = " ++ ";
opcode[OpType.subSub] = " -- ";
opcode[OpType.star] = " * ";
opcode[OpType.power] = " ** ";
opcode[OpType.equal] = " == ";
opcode[OpType.nequal] = " != ";
opcode[OpType.lequal] = " <= ";
opcode[OpType.gequal] = " >= ";
opcode[OpType.addAssgn] = " += ";
opcode[OpType.subAssgn] = " -= ";
opcode[OpType.mulAssgn] = " *= ";
opcode[OpType.quoAssgn] = " /= ";
opcode[OpType.remAssgn] = " %= ";
opcode[OpType.andAssgn] = " &= ";
opcode[OpType.orAssgn] = " |= ";
opcode[OpType.xorAssgn] = " ^= ";
opcode[OpType.shlAssgn] = " <<= ";
opcode[OpType.shrAssgn] = " >>= ";
opcode[OpType.rdrOut] = " > ";
opcode[OpType.appOut] = " >> ";
opcode[OpType.rdrIn] = " < ";
opcode[OpType.rdrInOut] = " <> ";
opcode[OpType.dplIn] = " <& ";
opcode[OpType.dplOut] = " >& ";
opcode[OpType.clbOut] = " >| ";
opcode[OpType.hdoc] = " << ";
opcode[OpType.dashHdoc] = " <<- ";
opcode[OpType.wordHdoc] = " <<< ";
opcode[OpType.rdrAll] = " &> ";
opcode[OpType.appAll] = " &>> ";
opcode[OpType.cmdIn] = " <( ";
opcode[OpType.cmdOut] = " >( ";
opcode[OpType.plus] = " + ";
opcode[OpType.colPlus] = " :+ ";
opcode[OpType.minus] = " - ";
opcode[OpType.colMinus] = " :- ";
opcode[OpType.quest] = " ? ";
opcode[OpType.colQuest] = " :? ";
opcode[OpType.assgn] = " = ";
opcode[OpType.colAssgn] = " := ";
opcode[OpType.perc] = " % ";
opcode[OpType.dblPerc] = " %% ";
opcode[OpType.hash] = " # ";
opcode[OpType.dblHash] = " ## ";
opcode[OpType.caret] = " ^ ";
opcode[OpType.dblCaret] = " ^^ ";
opcode[OpType.comma] = " , ";
opcode[OpType.dblComma] = " ,, ";
opcode[OpType.at] = " @ ";
opcode[OpType.slash] = " / ";
opcode[OpType.dblSlash] = " // ";
opcode[OpType.colon] = " : ";
opcode[OpType.tsExists] = " -e ";
opcode[OpType.tsRegFile] = " -f ";
opcode[OpType.tsDirect] = " -d ";
opcode[OpType.tsCharSp] = " -c ";
opcode[OpType.tsBlckSp] = " -b ";
opcode[OpType.tsNmPipe] = " -p ";
opcode[OpType.tsSocket] = " -S ";
opcode[OpType.tsSmbLink] = " -L ";
opcode[OpType.tsSticky] = " -k ";
opcode[OpType.tsGIDSet] = " -g ";
opcode[OpType.tsUIDSet] = " -u ";
opcode[OpType.tsGrpOwn] = " -G ";
opcode[OpType.tsUsrOwn] = " -O ";
opcode[OpType.tsModif] = " -N ";
opcode[OpType.tsRead] = " -r ";
opcode[OpType.tsWrite] = " -w ";
opcode[OpType.tsExec] = " -x ";
opcode[OpType.tsNoEmpty] = " -s ";
opcode[OpType.tsFdTerm] = " -t ";
opcode[OpType.tsEmpStr] = " -z ";
opcode[OpType.tsNempStr] = " -n ";
opcode[OpType.tsOptSet] = " -o ";
opcode[OpType.tsVarSet] = " -v ";
opcode[OpType.tsRefVar] = " -R ";
opcode[OpType.tsReMatch] = " =~ ";
opcode[OpType.tsNewer] = " -nt ";
opcode[OpType.tsOlder] = " -ot ";
opcode[OpType.tsDevIno] = " -ef ";
opcode[OpType.tsEql] = " -eq ";
opcode[OpType.tsNeq] = " -ne ";
opcode[OpType.tsLeq] = " -le ";
opcode[OpType.tsGeq] = " -ge ";
opcode[OpType.tsLss] = " -lt ";
opcode[OpType.tsGtr] = " -gt ";
opcode[OpType.globQuest] = " ?( ";
opcode[OpType.globStar] = " *( ";
opcode[OpType.globPlus] = " +( ";
opcode[OpType.globAt] = " @( ";
opcode[OpType.globExcl] = " !( ";
function comments(lines) {
    let res = joiner(lines.map((l) => {
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
function prtSglQuoted(prt) {
    const { Pos, End, Type, Value } = prt, rest_psq = __rest(prt, ["Pos", "End", "Type", "Value"]);
    return [JSON.stringify(Value), comm({ rest_psq }, '{"rest_psq":{"Dollar":false}}')];
}
function prtCmdSubst(prt) {
    const { Pos, End, Type, Stmts } = prt, rest_pcs = __rest(prt, ["Pos", "End", "Type", "Stmts"]);
    // tslint:disable-next-line:max-line-length
    return ["$( " + joiner([statements(Stmts), comm({ rest_pcs }, '{"rest_pcs":{"Last":[],"ReplyVar":false,"TempFile":false}}')], " + ") + " )"];
}
function prtLit(prt) {
    const { Pos, End, Type, Value } = prt, rest_pl = __rest(prt, ["Pos", "End", "Type", "Value"]);
    return [JSON.stringify(Value), comm({ rest_pl }, '{"rest_pl":{}}')];
}
function prtDblQuoted(prt) {
    const { Pos, End, Type, Parts } = prt, rest_pdq = __rest(prt, ["Pos", "End", "Type", "Parts"]);
    return [...parts(Parts), comm({ rest_pdq }, '{"rest_pdq":{"Dollar":false}}')];
}
function param(prm) {
    const { Pos, End, Value } = prm, rest_prm = __rest(prm, ["Pos", "End", "Value"]);
    // tslint:disable-next-line:max-line-length
    return [/^[a-zA-Z_]\w*$/.test(Value) ? Value : Value === "0" ? "process.argv0" : /^\d+$/.test(Value) ? "process.argv[" + Value + "]" : Value === "#" ? "process.argv.length" : comm({ Value }), comm({ rest_prm }, '{"rest_prm":{}}')];
}
function prtParamExp(prt) {
    const { Pos, End, Type, Param } = prt, rest_ppe = __rest(prt, ["Pos", "End", "Type", "Param"]);
    // tslint:disable-next-line:max-line-length
    return [...param(Param), comm({ rest_ppe }, '{"rest_ppe":{"Excl":false,"Exp":null,"Index":null,"Length":false,"Names":0,"Repl":null,"Short":true,"Slice":null,"Width":false}}')];
}
function parts(prts) {
    if (!prts) {
        return [comm({ prts })];
    }
    const res = [];
    prts.forEach((part) => {
        if (!part) {
            res.push(comm({ empty_part: part }));
        }
        switch (part.Type) {
            case "SglQuoted":
                res.push(...prtSglQuoted(part));
                break;
            case "CmdSubst":
                res.push(...prtCmdSubst(part));
                break;
            case "Lit":
                res.push(...prtLit(part));
                break;
            case "DblQuoted":
                res.push(...prtDblQuoted(part));
                break;
            case "ParamExp":
                res.push(...prtParamExp(part));
                break;
            default:
                res.push(comm({ unknown_part: part }));
                break;
        }
    });
    return [joiner(res, " + ")];
}
function value(val) {
    if (!val) {
        return ['""', comm({ empty_val: val }, '{"empty_val":null}')];
    }
    const { Pos, End, Parts } = val, rest_val = __rest(val, ["Pos", "End", "Parts"]);
    return [...parts(Parts), comm({ rest_val }, '{"rest_val":{}}')];
}
function assigns(ass) {
    const res = [];
    ass.forEach((a) => {
        const { Pos, End, Name, Value } = a, rest_ass = __rest(a, ["Pos", "End", "Name", "Value"]);
        // tslint:disable-next-line:max-line-length
        res.push("let " + a.Name.Value + " = " + joiner(value(Value), " + ") + comm({ rest_ass }, '{"rest_ass":{"Append":false,"Array":null,"Index":null,"Naked":false}}'));
    });
    return joiner(res, " ;//1\n");
}
function arglist(args) {
    const res = [];
    args.forEach((a) => {
        const { Pos, End, Parts } = a, rest_args = __rest(a, ["Pos", "End", "Parts"]);
        res.push(...parts(Parts));
        res.push(comm({ rest_args }, '{"rest_args":{}}'));
    });
    return res;
}
function cmdCallExpr(cmd) {
    const { Pos, End, Type, Assigns, Args } = cmd, rest_cce = __rest(cmd, ["Pos", "End", "Type", "Assigns", "Args"]);
    return [assigns(Assigns), ...arglist(Args), comm({ rest_cce }, '{"rest_cce":{}}')];
}
function cmdBinaryCmd(cmd) {
    const { Pos, End, Type, Op, X, Y } = cmd, rest_cbc = __rest(cmd, ["Pos", "End", "Type", "Op", "X", "Y"]);
    return [statements([X]), opcode[Op] || "Op=" + Op, statements([Y]), comm({ rest_cbc }, '{"rest_cbc":{}}')];
}
function block(blk) {
    const { Pos, End, Stmts } = blk, rest_blk = __rest(blk, ["Pos", "End", "Stmts"]);
    return joiner([statements(Stmts), comm({ rest_blk }, '{"rest_blk":{"Last":[]}}')], " ;//3\n");
}
function cmdWhileClause(cmd) {
    const { Pos, End, Type, Cond, Do } = cmd, rest_cwc = __rest(cmd, ["Pos", "End", "Type", "Cond", "Do"]);
    // tslint:disable-next-line:max-line-length
    return ["while (" + block(Cond) + ") {\n" + block(Do) + "\n}", comm({ rest_cwc }, '{"rest_cwc":{"Until":false}}')];
}
function word(wrd) {
    if (!wrd) {
        return ['""', comm({ empty_wrd: wrd }, '{"empty_wrd":null}')];
    }
    const { Pos, End, Parts } = wrd, rest_wrd = __rest(wrd, ["Pos", "End", "Parts"]);
    return [...parts(Parts), comm({ rest_wrd }, '{"rest_wrd":{}}')];
}
function patterns(pts) {
    const res = [];
    pts.forEach((pat) => {
        const { Pos, End, Parts } = pat, rest_pts = __rest(pat, ["Pos", "End", "Parts"]);
        res.push(...parts(Parts).map((p) => "case " + p + " :\n"), comm({ rest_pts }, '{"rest_pts":{}}'));
    });
    return res;
}
function item(itm) {
    const res = [];
    itm.forEach((i) => {
        const { Pos, End, Comments, Patterns, Stmts, Op } = i, rest_itm = __rest(i, ["Pos", "End", "Comments", "Patterns", "Stmts", "Op"]);
        // tslint:disable-next-line:max-line-length
        res.push(comments(Comments), ...patterns(Patterns), statements(Stmts), opcode[Op] || "Op=" + Op, comm({ rest_itm }, '{"rest_itm":{"Last":[]}}'));
    });
    return res;
}
function cmdCaseClause(cmd) {
    const { Pos, End, Type, Items, Word } = cmd, rest_ccc = __rest(cmd, ["Pos", "End", "Type", "Items", "Word"]);
    // tslint:disable-next-line:max-line-length
    return ["switch ( " + joiner(word(Word), " + ") + " ) {\n", ...item(Items), "\n}", comm({ rest_ccc }, '{"rest_ccc":{"Last":[]}}')];
}
function cmdIfClause(cmd) {
    const { Pos, End, Type, Cond, Then, Else } = cmd, rest_cic = __rest(cmd, ["Pos", "End", "Type", "Cond", "Then", "Else"]);
    // tslint:disable-next-line:max-line-length
    return ["if ( " + block(Cond) + " ) {\n" + block(Then) + "\n}else{\n" + block(Else) + "\n)", comm({ rest_cic }, '{"rest_cic":{"Elif":false,"ElseComments":[],"FiComments":[]}}')];
}
function cmdFuncDecl(cmd) {
    const { Pos, End, Type, Name, Body } = cmd, rest_cfd = __rest(cmd, ["Pos", "End", "Type", "Name", "Body"]);
    // tslint:disable-next-line:max-line-length
    return ["function " + Name.Value + " () {\n" + block(Body) + "\n}", comm({ rest_cfd }, '{"rest_cfd":{"RsrvWord":false}}')];
}
function command(cmd) {
    switch (cmd.Type) {
        case "CallExpr":
            return cmdCallExpr(cmd);
        case "BinaryCmd":
            return cmdBinaryCmd(cmd);
        case "WhileClause":
            return cmdWhileClause(cmd);
        case "CaseClause":
            return cmdCaseClause(cmd);
        case "IfClause":
            return cmdIfClause(cmd);
        case "FuncDecl":
            return cmdFuncDecl(cmd);
        default:
            return [comm({ unknown_command: cmd })];
    }
}
function redirs(red) {
    const res = [];
    red.forEach((r) => {
        const { Pos, End, Op, Word } = r, rest_red = __rest(r, ["Pos", "End", "Op", "Word"]);
        res.push(opcode[Op] || "Op=" + Op, ...word(Word));
        res.push(comm({ rest_red }, '{"rest_red":{"Hdoc":null,"N":null}}'));
    });
    return joiner(res, " ");
}
function statements(stmts) {
    if (!stmts) {
        return comm({ empty_stmts: stmts });
    }
    const res = [];
    stmts.forEach((stmt) => {
        const { Pos, End, Comments, Cmd, Redirs } = stmt, rest_stmt = __rest(stmt, ["Pos", "End", "Comments", "Cmd", "Redirs"]);
        res.push(comments(Comments) + joiner(command(Cmd), " ") + redirs(Redirs));
        // tslint:disable-next-line:max-line-length
        res.push(comm({ rest_stmt }, '{"rest_stmt":{"Background":false,"Coprocess":false,"Negated":false}}'));
    });
    return joiner(res, " ;//2\n");
}
// ---------------------------------------------------------------------------------------------------------------------
["config.guess", "config.sub"].forEach((f) => {
    logg({ f });
    const t = fs_1.readFileSync(path_1.resolve("gnu-config", f), { encoding: "ascii" });
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
    // logg({ j });
    const js = statements(j.Stmts) + "\n" + comments(j.Last);
    // tslint:disable-next-line:no-console
    console.log(js);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7Ozs7Ozs7Ozs7QUFFSCxpREFBMEM7QUFDMUMsMkJBQWtDO0FBQ2xDLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFFL0IsU0FBUyxJQUFJLENBQUMsS0FBYTtJQUN6QixzQ0FBc0M7SUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FDVCxjQUFPLENBQUMsS0FBSyxFQUFFO1FBQ2IsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsS0FBSztRQUNkLE1BQU0sRUFBRSxJQUFJO0tBRWIsQ0FBQyxDQUNILENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxJQUFJLENBQUMsS0FBYSxFQUFFLE9BQWUsR0FBRztJQUM3QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2xDLE9BQU8sRUFBRSxDQUFDO0tBQ1g7U0FBTTtRQUNMLGdEQUFnRDtLQUNqRDtJQUNELE9BQU8sQ0FDTCxJQUFJO1FBQ0osY0FBTyxDQUFDLEtBQUssRUFBRTtZQUNiLEtBQUssRUFBRSxDQUFDO1lBQ1IsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQztRQUNGLE1BQU0sQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLElBQWMsRUFBRSxHQUFXO0lBQ3pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBZ0dELHdCQUF3QjtBQUN4QixtQ0FBbUM7QUFDbkMsSUFBSyxNQTZJSjtBQTdJRCxXQUFLLE1BQU07SUFDVCwrQ0FBVSxDQUFBO0lBRVYsbUNBQUksQ0FBQTtJQUNKLHFDQUFLLENB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QUM7QUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7QUFFOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNLENBQUM7QUFFckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7QUFFakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFFL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFFL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7QUFFbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7QUFFaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFFL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFFN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFFakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxP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