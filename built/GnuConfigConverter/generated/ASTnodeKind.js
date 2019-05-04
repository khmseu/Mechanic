"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ASTnodeKind;
(function (ASTnodeKind) {
    ASTnodeKind[ASTnodeKind["bad"] = 0] = "bad";
    ASTnodeKind[ASTnodeKind["ASTNodeArithmCmd"] = 1] = "ASTNodeArithmCmd";
    ASTnodeKind[ASTnodeKind["ASTNodeArithmExp"] = 2] = "ASTNodeArithmExp";
    ASTnodeKind[ASTnodeKind["ASTNodeArrayElem"] = 3] = "ASTNodeArrayElem";
    ASTnodeKind[ASTnodeKind["ASTNodeArrayExpr"] = 4] = "ASTNodeArrayExpr";
    ASTnodeKind[ASTnodeKind["ASTNodeAssign"] = 5] = "ASTNodeAssign";
    ASTnodeKind[ASTnodeKind["ASTNodeBinaryArithm"] = 6] = "ASTNodeBinaryArithm";
    ASTnodeKind[ASTnodeKind["ASTNodeBinaryCmd"] = 7] = "ASTNodeBinaryCmd";
    ASTnodeKind[ASTnodeKind["ASTNodeBinaryTest"] = 8] = "ASTNodeBinaryTest";
    ASTnodeKind[ASTnodeKind["ASTNodeBlock"] = 9] = "ASTNodeBlock";
    ASTnodeKind[ASTnodeKind["ASTNodeBraceExp"] = 10] = "ASTNodeBraceExp";
    ASTnodeKind[ASTnodeKind["ASTNodeCallExpr"] = 11] = "ASTNodeCallExpr";
    ASTnodeKind[ASTnodeKind["ASTNodeCaseClause"] = 12] = "ASTNodeCaseClause";
    ASTnodeKind[ASTnodeKind["ASTNodeCaseItem"] = 13] = "ASTNodeCaseItem";
    ASTnodeKind[ASTnodeKind["ASTNodeCmdSubst"] = 14] = "ASTNodeCmdSubst";
    ASTnodeKind[ASTnodeKind["ASTNodeComment"] = 15] = "ASTNodeComment";
    ASTnodeKind[ASTnodeKind["ASTNodeCoprocClause"] = 16] = "ASTNodeCoprocClause";
    ASTnodeKind[ASTnodeKind["ASTNodeCStyleLoop"] = 17] = "ASTNodeCStyleLoop";
    ASTnodeKind[ASTnodeKind["ASTNodeDblQuoted"] = 18] = "ASTNodeDblQuoted";
    ASTnodeKind[ASTnodeKind["ASTNodeDeclClause"] = 19] = "ASTNodeDeclClause";
    ASTnodeKind[ASTnodeKind["ASTNodeExtGlob"] = 20] = "ASTNodeExtGlob";
    ASTnodeKind[ASTnodeKind["ASTNodeFile"] = 21] = "ASTNodeFile";
    ASTnodeKind[ASTnodeKind["ASTNodeForClause"] = 22] = "ASTNodeForClause";
    ASTnodeKind[ASTnodeKind["ASTNodeFuncDecl"] = 23] = "ASTNodeFuncDecl";
    ASTnodeKind[ASTnodeKind["ASTNodeIfClause"] = 24] = "ASTNodeIfClause";
    ASTnodeKind[ASTnodeKind["ASTNodeLetClause"] = 25] = "ASTNodeLetClause";
    ASTnodeKind[ASTnodeKind["ASTNodeLit"] = 26] = "ASTNodeLit";
    ASTnodeKind[ASTnodeKind["ASTNodeParamExp"] = 27] = "ASTNodeParamExp";
    ASTnodeKind[ASTnodeKind["ASTNodeParenArithm"] = 28] = "ASTNodeParenArithm";
    ASTnodeKind[ASTnodeKind["ASTNodeParenTest"] = 29] = "ASTNodeParenTest";
    ASTnodeKind[ASTnodeKind["ASTNodeProcSubst"] = 30] = "ASTNodeProcSubst";
    ASTnodeKind[ASTnodeKind["ASTNodeRedirect"] = 31] = "ASTNodeRedirect";
    ASTnodeKind[ASTnodeKind["ASTNodeSglQuoted"] = 32] = "ASTNodeSglQuoted";
    ASTnodeKind[ASTnodeKind["ASTNodeStmt"] = 33] = "ASTNodeStmt";
    ASTnodeKind[ASTnodeKind["ASTNodeStmtList"] = 34] = "ASTNodeStmtList";
    ASTnodeKind[ASTnodeKind["ASTNodeSubshell"] = 35] = "ASTNodeSubshell";
    ASTnodeKind[ASTnodeKind["ASTNodeTestClause"] = 36] = "ASTNodeTestClause";
    ASTnodeKind[ASTnodeKind["ASTNodeTimeClause"] = 37] = "ASTNodeTimeClause";
    ASTnodeKind[ASTnodeKind["ASTNodeUnaryArithm"] = 38] = "ASTNodeUnaryArithm";
    ASTnodeKind[ASTnodeKind["ASTNodeUnaryTest"] = 39] = "ASTNodeUnaryTest";
    ASTnodeKind[ASTnodeKind["ASTNodeWhileClause"] = 40] = "ASTNodeWhileClause";
    ASTnodeKind[ASTnodeKind["ASTNodeWord"] = 41] = "ASTNodeWord";
    ASTnodeKind[ASTnodeKind["ASTNodeWordIter"] = 42] = "ASTNodeWordIter";
})(ASTnodeKind = exports.ASTnodeKind || (exports.ASTnodeKind = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUbm9kZUtpbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1Rub2RlS2luZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsSUFBWSxXQTRDWDtBQTVDRCxXQUFZLFdBQVc7SUFDckIsMkNBQUcsQ0FBQTtJQUNILHFFQUFnQixDQUFBO0lBQ2hCLHFFQUFnQixDQUFBO0lBQ2hCLHFFQUFnQixDQUFBO0lBQ2hCLHFFQUFnQixDQUFBO0lBQ2hCLCtEQUFhLENBQUE7SUFDYiwyRUFBbUIsQ0FBQTtJQUNuQixxRUFBZ0IsQ0FBQTtJQUNoQix1RUFBaUIsQ0FBQTtJQUNqQiw2REFBWSxDQUFBO0lBQ1osb0VBQWUsQ0FBQTtJQUNmLG9FQUFlLENBQUE7SUFDZix3RUFBaUIsQ0FBQTtJQUNqQixvRUFBZSxDQUFBO0lBQ2Ysb0VBQWUsQ0FBQTtJQUNmLGtFQUFjLENBQUE7SUFDZCw0RUFBbUIsQ0FBQTtJQUNuQix3RUFBaUIsQ0FBQTtJQUNqQixzRUFBZ0IsQ0FBQTtJQUNoQix3RUFBaUIsQ0FBQTtJQUNqQixrRUFBYyxDQUFBO0lBQ2QsNERBQVcsQ0FBQTtJQUNYLHNFQUFnQixDQUFBO0lBQ2hCLG9FQUFlLENBQUE7SUFDZixvRUFBZSxDQUFBO0lBQ2Ysc0VBQWdCLENBQUE7SUFDaEIsMERBQVUsQ0FBQTtJQUNWLG9FQUFlLENBQUE7SUFDZiwwRUFBa0IsQ0FBQTtJQUNsQixzRUFBZ0IsQ0FBQTtJQUNoQixzRUFBZ0IsQ0FBQTtJQUNoQixvRUFBZSxDQUFBO0lBQ2Ysc0VBQWdCLENBQUE7SUFDaEIsNERBQVcsQ0FBQTtJQUNYLG9FQUFlLENBQUE7SUFDZixvRUFBZSxDQUFBO0lBQ2Ysd0VBQWlCLENBQUE7SUFDakIsd0VBQWlCLENBQUE7SUFDakIsMEVBQWtCLENBQUE7SUFDbEIsc0VBQWdCLENBQUE7SUFDaEIsMEVBQWtCLENBQUE7SUFDbEIsNERBQVcsQ0FBQTtJQUNYLG9FQUFlLENBQUE7QUFDakIsQ0FBQyxFQTVDVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQTRDdEIifQ==