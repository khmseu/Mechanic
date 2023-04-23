"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinTestOperator = exports.UnTestOperator = exports.BinAritOperator = exports.UnAritOperator = exports.ParExpOperator = exports.ParNamesOperator = exports.CaseOperator = exports.BinCmdOperator = exports.GlobOperator = exports.ProcOperator = exports.RedirOperator = void 0;
var RedirOperator;
(function (RedirOperator) {
    RedirOperator[RedirOperator["RdrOut"] = 53] = "RdrOut";
    RedirOperator[RedirOperator["AppOut"] = 54] = "AppOut";
    RedirOperator[RedirOperator["RdrIn"] = 55] = "RdrIn";
    RedirOperator[RedirOperator["RdrInOut"] = 56] = "RdrInOut";
    RedirOperator[RedirOperator["DplIn"] = 57] = "DplIn";
    RedirOperator[RedirOperator["DplOut"] = 58] = "DplOut";
    RedirOperator[RedirOperator["ClbOut"] = 59] = "ClbOut";
    RedirOperator[RedirOperator["Hdoc"] = 60] = "Hdoc";
    RedirOperator[RedirOperator["DashHdoc"] = 61] = "DashHdoc";
    RedirOperator[RedirOperator["WordHdoc"] = 62] = "WordHdoc";
    RedirOperator[RedirOperator["RdrAll"] = 63] = "RdrAll";
    RedirOperator[RedirOperator["AppAll"] = 64] = "AppAll";
})(RedirOperator = exports.RedirOperator || (exports.RedirOperator = {}));
var ProcOperator;
(function (ProcOperator) {
    ProcOperator[ProcOperator["CmdIn"] = 65] = "CmdIn";
    ProcOperator[ProcOperator["CmdOut"] = 66] = "CmdOut";
})(ProcOperator = exports.ProcOperator || (exports.ProcOperator = {}));
var GlobOperator;
(function (GlobOperator) {
    GlobOperator[GlobOperator["GlobZeroOrOne"] = 121] = "GlobZeroOrOne";
    GlobOperator[GlobOperator["GlobZeroOrMore"] = 122] = "GlobZeroOrMore";
    GlobOperator[GlobOperator["GlobOneOrMore"] = 123] = "GlobOneOrMore";
    GlobOperator[GlobOperator["GlobOne"] = 124] = "GlobOne";
    GlobOperator[GlobOperator["GlobExcept"] = 125] = "GlobExcept";
})(GlobOperator = exports.GlobOperator || (exports.GlobOperator = {}));
var BinCmdOperator;
(function (BinCmdOperator) {
    BinCmdOperator[BinCmdOperator["AndStmt"] = 10] = "AndStmt";
    BinCmdOperator[BinCmdOperator["OrStmt"] = 11] = "OrStmt";
    BinCmdOperator[BinCmdOperator["Pipe"] = 12] = "Pipe";
    BinCmdOperator[BinCmdOperator["PipeAll"] = 13] = "PipeAll";
})(BinCmdOperator = exports.BinCmdOperator || (exports.BinCmdOperator = {}));
var CaseOperator;
(function (CaseOperator) {
    CaseOperator[CaseOperator["Break"] = 30] = "Break";
    CaseOperator[CaseOperator["Fallthrough"] = 31] = "Fallthrough";
    CaseOperator[CaseOperator["Resume"] = 32] = "Resume";
    CaseOperator[CaseOperator["ResumeKorn"] = 33] = "ResumeKorn";
})(CaseOperator = exports.CaseOperator || (exports.CaseOperator = {}));
var ParNamesOperator;
(function (ParNamesOperator) {
    ParNamesOperator[ParNamesOperator["NamesPrefix"] = 37] = "NamesPrefix";
    ParNamesOperator[ParNamesOperator["NamesPrefixWords"] = 83] = "NamesPrefixWords";
})(ParNamesOperator = exports.ParNamesOperator || (exports.ParNamesOperator = {}));
var ParExpOperator;
(function (ParExpOperator) {
    ParExpOperator[ParExpOperator["AlternateUnset"] = 67] = "AlternateUnset";
    ParExpOperator[ParExpOperator["AlternateUnsetOrNull"] = 68] = "AlternateUnsetOrNull";
    ParExpOperator[ParExpOperator["DefaultUnset"] = 69] = "DefaultUnset";
    ParExpOperator[ParExpOperator["DefaultUnsetOrNull"] = 70] = "DefaultUnsetOrNull";
    ParExpOperator[ParExpOperator["ErrorUnset"] = 71] = "ErrorUnset";
    ParExpOperator[ParExpOperator["ErrorUnsetOrNull"] = 72] = "ErrorUnsetOrNull";
    ParExpOperator[ParExpOperator["AssignUnset"] = 73] = "AssignUnset";
    ParExpOperator[ParExpOperator["AssignUnsetOrNull"] = 74] = "AssignUnsetOrNull";
    ParExpOperator[ParExpOperator["RemSmallSuffix"] = 75] = "RemSmallSuffix";
    ParExpOperator[ParExpOperator["RemLargeSuffix"] = 76] = "RemLargeSuffix";
    ParExpOperator[ParExpOperator["RemSmallPrefix"] = 77] = "RemSmallPrefix";
    ParExpOperator[ParExpOperator["RemLargePrefix"] = 78] = "RemLargePrefix";
    ParExpOperator[ParExpOperator["UpperFirst"] = 79] = "UpperFirst";
    ParExpOperator[ParExpOperator["UpperAll"] = 80] = "UpperAll";
    ParExpOperator[ParExpOperator["LowerFirst"] = 81] = "LowerFirst";
    ParExpOperator[ParExpOperator["LowerAll"] = 82] = "LowerAll";
    ParExpOperator[ParExpOperator["OtherParamOps"] = 83] = "OtherParamOps";
})(ParExpOperator = exports.ParExpOperator || (exports.ParExpOperator = {}));
var UnAritOperator;
(function (UnAritOperator) {
    UnAritOperator[UnAritOperator["Not"] = 34] = "Not";
    UnAritOperator[UnAritOperator["BitNegation"] = 35] = "BitNegation";
    UnAritOperator[UnAritOperator["Inc"] = 36] = "Inc";
    UnAritOperator[UnAritOperator["Dec"] = 37] = "Dec";
    UnAritOperator[UnAritOperator["Plus"] = 67] = "Plus";
    UnAritOperator[UnAritOperator["Minus"] = 69] = "Minus";
})(UnAritOperator = exports.UnAritOperator || (exports.UnAritOperator = {}));
var BinAritOperator;
(function (BinAritOperator) {
    BinAritOperator[BinAritOperator["Add"] = 67] = "Add";
    BinAritOperator[BinAritOperator["Sub"] = 69] = "Sub";
    BinAritOperator[BinAritOperator["Mul"] = 37] = "Mul";
    BinAritOperator[BinAritOperator["Quo"] = 84] = "Quo";
    BinAritOperator[BinAritOperator["Rem"] = 75] = "Rem";
    BinAritOperator[BinAritOperator["Pow"] = 38] = "Pow";
    BinAritOperator[BinAritOperator["Eql"] = 39] = "Eql";
    BinAritOperator[BinAritOperator["Gtr"] = 53] = "Gtr";
    BinAritOperator[BinAritOperator["Lss"] = 55] = "Lss";
    BinAritOperator[BinAritOperator["Neq"] = 40] = "Neq";
    BinAritOperator[BinAritOperator["Leq"] = 41] = "Leq";
    BinAritOperator[BinAritOperator["Geq"] = 42] = "Geq";
    BinAritOperator[BinAritOperator["And"] = 9] = "And";
    BinAritOperator[BinAritOperator["Or"] = 12] = "Or";
    BinAritOperator[BinAritOperator["Xor"] = 79] = "Xor";
    BinAritOperator[BinAritOperator["Shr"] = 54] = "Shr";
    BinAritOperator[BinAritOperator["Shl"] = 60] = "Shl";
    BinAritOperator[BinAritOperator["AndArit"] = 10] = "AndArit";
    BinAritOperator[BinAritOperator["OrArit"] = 11] = "OrArit";
    BinAritOperator[BinAritOperator["Comma"] = 81] = "Comma";
    BinAritOperator[BinAritOperator["TernQuest"] = 71] = "TernQuest";
    BinAritOperator[BinAritOperator["TernColon"] = 86] = "TernColon";
    BinAritOperator[BinAritOperator["Assgn"] = 73] = "Assgn";
    BinAritOperator[BinAritOperator["AddAssgn"] = 43] = "AddAssgn";
    BinAritOperator[BinAritOperator["SubAssgn"] = 44] = "SubAssgn";
    BinAritOperator[BinAritOperator["MulAssgn"] = 45] = "MulAssgn";
    BinAritOperator[BinAritOperator["QuoAssgn"] = 46] = "QuoAssgn";
    BinAritOperator[BinAritOperator["RemAssgn"] = 47] = "RemAssgn";
    BinAritOperator[BinAritOperator["AndAssgn"] = 48] = "AndAssgn";
    BinAritOperator[BinAritOperator["OrAssgn"] = 49] = "OrAssgn";
    BinAritOperator[BinAritOperator["XorAssgn"] = 50] = "XorAssgn";
    BinAritOperator[BinAritOperator["ShlAssgn"] = 51] = "ShlAssgn";
    BinAritOperator[BinAritOperator["ShrAssgn"] = 52] = "ShrAssgn";
})(BinAritOperator = exports.BinAritOperator || (exports.BinAritOperator = {}));
var UnTestOperator;
(function (UnTestOperator) {
    UnTestOperator[UnTestOperator["TsExists"] = 87] = "TsExists";
    UnTestOperator[UnTestOperator["TsRegFile"] = 88] = "TsRegFile";
    UnTestOperator[UnTestOperator["TsDirect"] = 89] = "TsDirect";
    UnTestOperator[UnTestOperator["TsCharSp"] = 90] = "TsCharSp";
    UnTestOperator[UnTestOperator["TsBlckSp"] = 91] = "TsBlckSp";
    UnTestOperator[UnTestOperator["TsNmPipe"] = 92] = "TsNmPipe";
    UnTestOperator[UnTestOperator["TsSocket"] = 93] = "TsSocket";
    UnTestOperator[UnTestOperator["TsSmbLink"] = 94] = "TsSmbLink";
    UnTestOperator[UnTestOperator["TsSticky"] = 95] = "TsSticky";
    UnTestOperator[UnTestOperator["TsGIDSet"] = 96] = "TsGIDSet";
    UnTestOperator[UnTestOperator["TsUIDSet"] = 97] = "TsUIDSet";
    UnTestOperator[UnTestOperator["TsGrpOwn"] = 98] = "TsGrpOwn";
    UnTestOperator[UnTestOperator["TsUsrOwn"] = 99] = "TsUsrOwn";
    UnTestOperator[UnTestOperator["TsModif"] = 100] = "TsModif";
    UnTestOperator[UnTestOperator["TsRead"] = 101] = "TsRead";
    UnTestOperator[UnTestOperator["TsWrite"] = 102] = "TsWrite";
    UnTestOperator[UnTestOperator["TsExec"] = 103] = "TsExec";
    UnTestOperator[UnTestOperator["TsNoEmpty"] = 104] = "TsNoEmpty";
    UnTestOperator[UnTestOperator["TsFdTerm"] = 105] = "TsFdTerm";
    UnTestOperator[UnTestOperator["TsEmpStr"] = 106] = "TsEmpStr";
    UnTestOperator[UnTestOperator["TsNempStr"] = 107] = "TsNempStr";
    UnTestOperator[UnTestOperator["TsOptSet"] = 108] = "TsOptSet";
    UnTestOperator[UnTestOperator["TsVarSet"] = 109] = "TsVarSet";
    UnTestOperator[UnTestOperator["TsRefVar"] = 110] = "TsRefVar";
    UnTestOperator[UnTestOperator["TsNot"] = 34] = "TsNot";
})(UnTestOperator = exports.UnTestOperator || (exports.UnTestOperator = {}));
var BinTestOperator;
(function (BinTestOperator) {
    BinTestOperator[BinTestOperator["TsReMatch"] = 111] = "TsReMatch";
    BinTestOperator[BinTestOperator["TsNewer"] = 112] = "TsNewer";
    BinTestOperator[BinTestOperator["TsOlder"] = 113] = "TsOlder";
    BinTestOperator[BinTestOperator["TsDevIno"] = 114] = "TsDevIno";
    BinTestOperator[BinTestOperator["TsEql"] = 115] = "TsEql";
    BinTestOperator[BinTestOperator["TsNeq"] = 116] = "TsNeq";
    BinTestOperator[BinTestOperator["TsLeq"] = 117] = "TsLeq";
    BinTestOperator[BinTestOperator["TsGeq"] = 118] = "TsGeq";
    BinTestOperator[BinTestOperator["TsLss"] = 119] = "TsLss";
    BinTestOperator[BinTestOperator["TsGtr"] = 120] = "TsGtr";
    BinTestOperator[BinTestOperator["AndTest"] = 10] = "AndTest";
    BinTestOperator[BinTestOperator["OrTest"] = 11] = "OrTest";
    BinTestOperator[BinTestOperator["TsMatchShort"] = 73] = "TsMatchShort";
    BinTestOperator[BinTestOperator["TsMatch"] = 39] = "TsMatch";
    BinTestOperator[BinTestOperator["TsNoMatch"] = 40] = "TsNoMatch";
    BinTestOperator[BinTestOperator["TsBefore"] = 55] = "TsBefore";
    BinTestOperator[BinTestOperator["TsAfter"] = 53] = "TsAfter";
})(BinTestOperator = exports.BinTestOperator || (exports.BinTestOperator = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyVHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL1BhcnNlclR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7O0FBMGNILElBQVksYUFhWDtBQWJELFdBQVksYUFBYTtJQUN2QixzREFBcUIsQ0FBQTtJQUNyQixzREFBTSxDQUFBO0lBQ04sb0RBQUssQ0FBQTtJQUNMLDBEQUFRLENBQUE7SUFDUixvREFBSyxDQUFBO0lBQ0wsc0RBQU0sQ0FBQTtJQUNOLHNEQUFNLENBQUE7SUFDTixrREFBSSxDQUFBO0lBQ0osMERBQVEsQ0FBQTtJQUNSLDBEQUFRLENBQUE7SUFDUixzREFBTSxDQUFBO0lBQ04sc0RBQU0sQ0FBQTtBQUNSLENBQUMsRUFiVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQWF4QjtBQUVELElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUN0QixrREFBbUIsQ0FBQTtJQUNuQixvREFBTSxDQUFBO0FBQ1IsQ0FBQyxFQUhXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBR3ZCO0FBRUQsSUFBWSxZQU1YO0FBTkQsV0FBWSxZQUFZO0lBQ3RCLG1FQUErQixDQUFBO0lBQy9CLHFFQUFjLENBQUE7SUFDZCxtRUFBYSxDQUFBO0lBQ2IsdURBQU8sQ0FBQTtJQUNQLDZEQUFVLENBQUE7QUFDWixDQUFDLEVBTlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFNdkI7QUFFRCxJQUFZLGNBS1g7QUFMRCxXQUFZLGNBQWM7SUFDeEIsMERBQXNCLENBQUE7SUFDdEIsd0RBQU0sQ0FBQTtJQUNOLG9EQUFJLENBQUE7SUFDSiwwREFBTyxDQUFBO0FBQ1QsQ0FBQyxFQUxXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBS3pCO0FBRUQsSUFBWSxZQUtYO0FBTEQsV0FBWSxZQUFZO0lBQ3RCLGtEQUEwQixDQUFBO0lBQzFCLDhE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