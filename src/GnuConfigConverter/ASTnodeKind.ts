/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export enum ASTnodeKind {
  bad,
  ASTNodeArithmCmd,
  ASTNodeArithmExp,
  ASTNodeArrayElem,
  ASTNodeArrayExpr,
  ASTNodeAssign,
  ASTNodeBinaryArithm,
  ASTNodeBinaryCmd,
  ASTNodeBinaryTest,
  ASTNodeBlock,
  ASTNodeBraceExp,
  ASTNodeCallExpr,
  ASTNodeCaseClause,
  ASTNodeCaseItem,
  ASTNodeCmdSubst,
  ASTNodeComment,
  ASTNodeCoprocClause,
  ASTNodeCStyleLoop,
  ASTNodeDblQuoted,
  ASTNodeDeclClause,
  ASTNodeExtGlob,
  ASTNodeFile,
  ASTNodeForClause,
  ASTNodeFuncDecl,
  ASTNodeIfClause,
  ASTNodeLetClause,
  ASTNodeLit,
  ASTNodeParamExp,
  ASTNodeParenArithm,
  ASTNodeParenTest,
  ASTNodeProcSubst,
  ASTNodeRedirect,
  ASTNodeSglQuoted,
  ASTNodeStmt,
  ASTNodeStmtList,
  ASTNodeSubshell,
  ASTNodeTestClause,
  ASTNodeTimeClause,
  ASTNodeUnaryArithm,
  ASTNodeUnaryTest,
  ASTNodeWhileClause,
  ASTNodeWord,
  ASTNodeWordIter,
}
