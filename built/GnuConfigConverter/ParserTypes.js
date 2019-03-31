"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyVHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL1BhcnNlclR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUE0YUgsSUFBWSxhQWFYO0FBYkQsV0FBWSxhQUFhO0lBQ3ZCLHNEQUFxQixDQUFBO0lBQ3JCLHNEQUFNLENBQUE7SUFDTixvREFBSyxDQUFBO0lBQ0wsMERBQVEsQ0FBQTtJQUNSLG9EQUFLLENBQUE7SUFDTCxzREFBTSxDQUFBO0lBQ04sc0RBQU0sQ0FBQTtJQUNOLGtEQUFJLENBQUE7SUFDSiwwREFBUSxDQUFBO0lBQ1IsMERBQVEsQ0FBQTtJQUNSLHNEQUFNLENBQUE7SUFDTixzREFBTSxDQUFBO0FBQ1IsQ0FBQyxFQWJXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBYXhCO0FBRUQsSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLGtEQUFtQixDQUFBO0lBQ25CLG9EQUFNLENBQUE7QUFDUixDQUFDLEVBSFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFHdkI7QUFFRCxJQUFZLFlBTVg7QUFORCxXQUFZLFlBQVk7SUFDdEIsbUVBQStCLENBQUE7SUFDL0IscUVBQWMsQ0FBQTtJQUNkLG1FQUFhLENBQUE7SUFDYix1REFBTyxDQUFBO0lBQ1AsNkRBQVUsQ0FBQTtBQUNaLENBQUMsRUFOVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQU12QjtBQUVELElBQVksY0FLWDtBQUxELFdBQVksY0FBYztJQUN4QiwwREFBc0IsQ0FBQTtJQUN0Qix3REFBTSxDQUFBO0lBQ04sb0RBQUksQ0FBQTtJQUNKLDBEQUFPLENBQUE7QUFDVCxDQUFDLEVBTFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFLekI7QUFFRCxJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDdEIsa0RBQTBCLENBQUE7SUFDMUIsOERB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