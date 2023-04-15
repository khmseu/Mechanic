"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ASTVisitorBase {
    visitAllPreBefore(node) {
        node = node;
    }
    visitAllPreAfter(node) {
        node = node;
    }
    visitAllPostBefore(node) {
        node = node;
    }
    visitAllPostAfter(node) {
        node = node;
    }
    visitASTNodeArithmCmdPre(node) {
        node = node;
    }
    visitASTNodeArithmCmdPost(node) {
        node = node;
    }
    visitASTNodeArithmExpPre(node) {
        node = node;
    }
    visitASTNodeArithmExpPost(node) {
        node = node;
    }
    visitASTNodeArrayElemPre(node) {
        node = node;
    }
    visitASTNodeArrayElemPost(node) {
        node = node;
    }
    visitASTNodeArrayExprPre(node) {
        node = node;
    }
    visitASTNodeArrayExprPost(node) {
        node = node;
    }
    visitASTNodeAssignPre(node) {
        node = node;
    }
    visitASTNodeAssignPost(node) {
        node = node;
    }
    visitASTNodeBinaryArithmPre(node) {
        node = node;
    }
    visitASTNodeBinaryArithmPost(node) {
        node = node;
    }
    visitASTNodeBinaryCmdPre(node) {
        node = node;
    }
    visitASTNodeBinaryCmdPost(node) {
        node = node;
    }
    visitASTNodeBinaryTestPre(node) {
        node = node;
    }
    visitASTNodeBinaryTestPost(node) {
        node = node;
    }
    visitASTNodeBlockPre(node) {
        node = node;
    }
    visitASTNodeBlockPost(node) {
        node = node;
    }
    visitASTNodeBraceExpPre(node) {
        node = node;
    }
    visitASTNodeBraceExpPost(node) {
        node = node;
    }
    visitASTNodeCallExprPre(node) {
        node = node;
    }
    visitASTNodeCallExprPost(node) {
        node = node;
    }
    visitASTNodeCaseClausePre(node) {
        node = node;
    }
    visitASTNodeCaseClausePost(node) {
        node = node;
    }
    visitASTNodeCaseItemPre(node) {
        node = node;
    }
    visitASTNodeCaseItemPost(node) {
        node = node;
    }
    visitASTNodeCmdSubstPre(node) {
        node = node;
    }
    visitASTNodeCmdSubstPost(node) {
        node = node;
    }
    visitASTNodeCommentPre(node) {
        node = node;
    }
    visitASTNodeCommentPost(node) {
        node = node;
    }
    visitASTNodeCoprocClausePre(node) {
        node = node;
    }
    visitASTNodeCoprocClausePost(node) {
        node = node;
    }
    visitASTNodeCStyleLoopPre(node) {
        node = node;
    }
    visitASTNodeCStyleLoopPost(node) {
        node = node;
    }
    visitASTNodeDblQuotedPre(node) {
        node = node;
    }
    visitASTNodeDblQuotedPost(node) {
        node = node;
    }
    visitASTNodeDeclClausePre(node) {
        node = node;
    }
    visitASTNodeDeclClausePost(node) {
        node = node;
    }
    visitASTNodeExtGlobPre(node) {
        node = node;
    }
    visitASTNodeExtGlobPost(node) {
        node = node;
    }
    visitASTNodeFilePre(node) {
        node = node;
    }
    visitASTNodeFilePost(node) {
        node = node;
    }
    visitASTNodeForClausePre(node) {
        node = node;
    }
    visitASTNodeForClausePost(node) {
        node = node;
    }
    visitASTNodeFuncDeclPre(node) {
        node = node;
    }
    visitASTNodeFuncDeclPost(node) {
        node = node;
    }
    visitASTNodeIfClausePre(node) {
        node = node;
    }
    visitASTNodeIfClausePost(node) {
        node = node;
    }
    visitASTNodeLetClausePre(node) {
        node = node;
    }
    visitASTNodeLetClausePost(node) {
        node = node;
    }
    visitASTNodeLitPre(node) {
        node = node;
    }
    visitASTNodeLitPost(node) {
        node = node;
    }
    visitASTNodeParamExpPre(node) {
        node = node;
    }
    visitASTNodeParamExpPost(node) {
        node = node;
    }
    visitASTNodeParenArithmPre(node) {
        node = node;
    }
    visitASTNodeParenArithmPost(node) {
        node = node;
    }
    visitASTNodeParenTestPre(node) {
        node = node;
    }
    visitASTNodeParenTestPost(node) {
        node = node;
    }
    visitASTNodeProcSubstPre(node) {
        node = node;
    }
    visitASTNodeProcSubstPost(node) {
        node = node;
    }
    visitASTNodeRedirectPre(node) {
        node = node;
    }
    visitASTNodeRedirectPost(node) {
        node = node;
    }
    visitASTNodeSglQuotedPre(node) {
        node = node;
    }
    visitASTNodeSglQuotedPost(node) {
        node = node;
    }
    visitASTNodeStmtPre(node) {
        node = node;
    }
    visitASTNodeStmtPost(node) {
        node = node;
    }
    visitASTNodeStmtListPre(node) {
        node = node;
    }
    visitASTNodeStmtListPost(node) {
        node = node;
    }
    visitASTNodeSubshellPre(node) {
        node = node;
    }
    visitASTNodeSubshellPost(node) {
        node = node;
    }
    visitASTNodeTestClausePre(node) {
        node = node;
    }
    visitASTNodeTestClausePost(node) {
        node = node;
    }
    visitASTNodeTimeClausePre(node) {
        node = node;
    }
    visitASTNodeTimeClausePost(node) {
        node = node;
    }
    visitASTNodeUnaryArithmPre(node) {
        node = node;
    }
    visitASTNodeUnaryArithmPost(node) {
        node = node;
    }
    visitASTNodeUnaryTestPre(node) {
        node = node;
    }
    visitASTNodeUnaryTestPost(node) {
        node = node;
    }
    visitASTNodeWhileClausePre(node) {
        node = node;
    }
    visitASTNodeWhileClausePost(node) {
        node = node;
    }
    visitASTNodeWordPre(node) {
        node = node;
    }
    visitASTNodeWordPost(node) {
        node = node;
    }
    visitASTNodeWordIterPre(node) {
        node = node;
    }
    visitASTNodeWordIterPost(node) {
        node = node;
    }
}
exports.ASTVisitorBase = ASTVisitorBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUVmlzaXRvckJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1RWaXNpdG9yQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBOENILE1BQWEsY0FBYztJQUNsQixpQkFBaUIsQ0FBQyxJQUFhO1FBQ3BDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00sZ0JBQWdCLENBQUMsSUFBYTtRQUNuQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLGtCQUFrQixDQUFDLElBQWE7UUFDckMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSxpQkFBaUIsQ0FBQyxJQUFhO1FBQ3BDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00sd0JBQXdCLENBQUMsSUFBc0I7UUFDcEQsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSx5QkFBeUIsQ0FBQyxJQUFzQjtRQUNyRCxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLHdCQUF3QixDQUFDLElBQXNCO1FBQ3BELElBQUksR0FBRyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00seUJBQXlCLENBQUMsSUFBc0I7UUFDckQsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSx3QkFBd0IsQ0FBQyxJQUFzQjtRQUNwRCxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLHlCQUF5QixDQUFDLElBQXNCO1FBQ3JELElBQUksR0FBRyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00sd0JBQXdCLENBQUMsSUFBc0I7UUFDcEQsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSx5QkFBeUIsQ0FBQyxJQUFzQjtRQUNyRCxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLHFCQUFx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