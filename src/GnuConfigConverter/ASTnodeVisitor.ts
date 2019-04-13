/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNodeArithmCmd } from "./ASTNodeArithmCmd";
import { ASTNodeArithmExp } from "./ASTNodeArithmExp";
import { ASTNodeArrayElem } from "./ASTNodeArrayElem";
import { ASTNodeArrayExpr } from "./ASTNodeArrayExpr";
import { ASTNodeAssign } from "./ASTNodeAssign";
import { ASTNodeBinaryArithm } from "./ASTNodeBinaryArithm";
import { ASTNodeBinaryCmd } from "./ASTNodeBinaryCmd";
import { ASTNodeBinaryTest } from "./ASTNodeBinaryTest";
import { ASTNodeBlock } from "./ASTNodeBlock";
import { ASTNodeBraceExp } from "./ASTNodeBraceExp";
import { ASTNodeCallExpr } from "./ASTNodeCallExpr";
import { ASTNodeCaseClause } from "./ASTNodeCaseClause";
import { ASTNodeCaseItem } from "./ASTNodeCaseItem";
import { ASTNodeCmdSubst } from "./ASTNodeCmdSubst";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTNodeCoprocClause } from "./ASTNodeCoprocClause";
import { ASTNodeCStyleLoop } from "./ASTNodeCStyleLoop";
import { ASTNodeDblQuoted } from "./ASTNodeDblQuoted";
import { ASTNodeDeclClause } from "./ASTNodeDeclClause";
import { ASTNodeExtGlob } from "./ASTNodeExtGlob";
import { ASTNodeFile } from "./ASTNodeFile";
import { ASTNodeForClause } from "./ASTNodeForClause";
import { ASTNodeFuncDecl } from "./ASTNodeFuncDecl";
import { ASTNodeIfClause } from "./ASTNodeIfClause";
import { ASTNodeLetClause } from "./ASTNodeLetClause";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeParamExp } from "./ASTNodeParamExp";
import { ASTNodeParenArithm } from "./ASTNodeParenArithm";
import { ASTNodeParenTest } from "./ASTNodeParenTest";
import { ASTNodeProcSubst } from "./ASTNodeProcSubst";
import { ASTNodeRedirect } from "./ASTNodeRedirect";
import { ASTNodeSglQuoted } from "./ASTNodeSglQuoted";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTNodeSubshell } from "./ASTNodeSubshell";
import { ASTNodeTestClause } from "./ASTNodeTestClause";
import { ASTNodeTimeClause } from "./ASTNodeTimeClause";
import { ASTNodeUnaryArithm } from "./ASTNodeUnaryArithm";
import { ASTNodeUnaryTest } from "./ASTNodeUnaryTest";
import { ASTNodeWhileClause } from "./ASTNodeWhileClause";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTNodeWordIter } from "./ASTNodeWordIter";

export class ASTnodeVisitor {
  public visitASTNodeArithmCmdPre(node: ASTNodeArithmCmd): void {
    node = node;
  }
  public visitASTNodeArithmCmdPost(node: ASTNodeArithmCmd): void {
    node = node;
  }
  public visitASTNodeArithmExpPre(node: ASTNodeArithmExp): void {
    node = node;
  }
  public visitASTNodeArithmExpPost(node: ASTNodeArithmExp): void {
    node = node;
  }
  public visitASTNodeArrayElemPre(node: ASTNodeArrayElem): void {
    node = node;
  }
  public visitASTNodeArrayElemPost(node: ASTNodeArrayElem): void {
    node = node;
  }
  public visitASTNodeArrayExprPre(node: ASTNodeArrayExpr): void {
    node = node;
  }
  public visitASTNodeArrayExprPost(node: ASTNodeArrayExpr): void {
    node = node;
  }
  public visitASTNodeAssignPre(node: ASTNodeAssign): void {
    node = node;
  }
  public visitASTNodeAssignPost(node: ASTNodeAssign): void {
    node = node;
  }
  public visitASTNodeBinaryArithmPre(node: ASTNodeBinaryArithm): void {
    node = node;
  }
  public visitASTNodeBinaryArithmPost(node: ASTNodeBinaryArithm): void {
    node = node;
  }
  public visitASTNodeBinaryCmdPre(node: ASTNodeBinaryCmd): void {
    node = node;
  }
  public visitASTNodeBinaryCmdPost(node: ASTNodeBinaryCmd): void {
    node = node;
  }
  public visitASTNodeBinaryTestPre(node: ASTNodeBinaryTest): void {
    node = node;
  }
  public visitASTNodeBinaryTestPost(node: ASTNodeBinaryTest): void {
    node = node;
  }
  public visitASTNodeBlockPre(node: ASTNodeBlock): void {
    node = node;
  }
  public visitASTNodeBlockPost(node: ASTNodeBlock): void {
    node = node;
  }
  public visitASTNodeBraceExpPre(node: ASTNodeBraceExp): void {
    node = node;
  }
  public visitASTNodeBraceExpPost(node: ASTNodeBraceExp): void {
    node = node;
  }
  public visitASTNodeCallExprPre(node: ASTNodeCallExpr): void {
    node = node;
  }
  public visitASTNodeCallExprPost(node: ASTNodeCallExpr): void {
    node = node;
  }
  public visitASTNodeCaseClausePre(node: ASTNodeCaseClause): void {
    node = node;
  }
  public visitASTNodeCaseClausePost(node: ASTNodeCaseClause): void {
    node = node;
  }
  public visitASTNodeCaseItemPre(node: ASTNodeCaseItem): void {
    node = node;
  }
  public visitASTNodeCaseItemPost(node: ASTNodeCaseItem): void {
    node = node;
  }
  public visitASTNodeCmdSubstPre(node: ASTNodeCmdSubst): void {
    node = node;
  }
  public visitASTNodeCmdSubstPost(node: ASTNodeCmdSubst): void {
    node = node;
  }
  public visitASTNodeCommentPre(node: ASTNodeComment): void {
    node = node;
  }
  public visitASTNodeCommentPost(node: ASTNodeComment): void {
    node = node;
  }
  public visitASTNodeCoprocClausePre(node: ASTNodeCoprocClause): void {
    node = node;
  }
  public visitASTNodeCoprocClausePost(node: ASTNodeCoprocClause): void {
    node = node;
  }
  public visitASTNodeCStyleLoopPre(node: ASTNodeCStyleLoop): void {
    node = node;
  }
  public visitASTNodeCStyleLoopPost(node: ASTNodeCStyleLoop): void {
    node = node;
  }
  public visitASTNodeDblQuotedPre(node: ASTNodeDblQuoted): void {
    node = node;
  }
  public visitASTNodeDblQuotedPost(node: ASTNodeDblQuoted): void {
    node = node;
  }
  public visitASTNodeDeclClausePre(node: ASTNodeDeclClause): void {
    node = node;
  }
  public visitASTNodeDeclClausePost(node: ASTNodeDeclClause): void {
    node = node;
  }
  public visitASTNodeExtGlobPre(node: ASTNodeExtGlob): void {
    node = node;
  }
  public visitASTNodeExtGlobPost(node: ASTNodeExtGlob): void {
    node = node;
  }
  public visitASTNodeFilePre(node: ASTNodeFile): void {
    node = node;
  }
  public visitASTNodeFilePost(node: ASTNodeFile): void {
    node = node;
  }
  public visitASTNodeForClausePre(node: ASTNodeForClause): void {
    node = node;
  }
  public visitASTNodeForClausePost(node: ASTNodeForClause): void {
    node = node;
  }
  public visitASTNodeFuncDeclPre(node: ASTNodeFuncDecl): void {
    node = node;
  }
  public visitASTNodeFuncDeclPost(node: ASTNodeFuncDecl): void {
    node = node;
  }
  public visitASTNodeIfClausePre(node: ASTNodeIfClause): void {
    node = node;
  }
  public visitASTNodeIfClausePost(node: ASTNodeIfClause): void {
    node = node;
  }
  public visitASTNodeLetClausePre(node: ASTNodeLetClause): void {
    node = node;
  }
  public visitASTNodeLetClausePost(node: ASTNodeLetClause): void {
    node = node;
  }
  public visitASTNodeLitPre(node: ASTNodeLit): void {
    node = node;
  }
  public visitASTNodeLitPost(node: ASTNodeLit): void {
    node = node;
  }
  public visitASTNodeParamExpPre(node: ASTNodeParamExp): void {
    node = node;
  }
  public visitASTNodeParamExpPost(node: ASTNodeParamExp): void {
    node = node;
  }
  public visitASTNodeParenArithmPre(node: ASTNodeParenArithm): void {
    node = node;
  }
  public visitASTNodeParenArithmPost(node: ASTNodeParenArithm): void {
    node = node;
  }
  public visitASTNodeParenTestPre(node: ASTNodeParenTest): void {
    node = node;
  }
  public visitASTNodeParenTestPost(node: ASTNodeParenTest): void {
    node = node;
  }
  public visitASTNodeProcSubstPre(node: ASTNodeProcSubst): void {
    node = node;
  }
  public visitASTNodeProcSubstPost(node: ASTNodeProcSubst): void {
    node = node;
  }
  public visitASTNodeRedirectPre(node: ASTNodeRedirect): void {
    node = node;
  }
  public visitASTNodeRedirectPost(node: ASTNodeRedirect): void {
    node = node;
  }
  public visitASTNodeSglQuotedPre(node: ASTNodeSglQuoted): void {
    node = node;
  }
  public visitASTNodeSglQuotedPost(node: ASTNodeSglQuoted): void {
    node = node;
  }
  public visitASTNodeStmtPre(node: ASTNodeStmt): void {
    node = node;
  }
  public visitASTNodeStmtPost(node: ASTNodeStmt): void {
    node = node;
  }
  public visitASTNodeStmtListPre(node: ASTNodeStmtList): void {
    node = node;
  }
  public visitASTNodeStmtListPost(node: ASTNodeStmtList): void {
    node = node;
  }
  public visitASTNodeSubshellPre(node: ASTNodeSubshell): void {
    node = node;
  }
  public visitASTNodeSubshellPost(node: ASTNodeSubshell): void {
    node = node;
  }
  public visitASTNodeTestClausePre(node: ASTNodeTestClause): void {
    node = node;
  }
  public visitASTNodeTestClausePost(node: ASTNodeTestClause): void {
    node = node;
  }
  public visitASTNodeTimeClausePre(node: ASTNodeTimeClause): void {
    node = node;
  }
  public visitASTNodeTimeClausePost(node: ASTNodeTimeClause): void {
    node = node;
  }
  public visitASTNodeUnaryArithmPre(node: ASTNodeUnaryArithm): void {
    node = node;
  }
  public visitASTNodeUnaryArithmPost(node: ASTNodeUnaryArithm): void {
    node = node;
  }
  public visitASTNodeUnaryTestPre(node: ASTNodeUnaryTest): void {
    node = node;
  }
  public visitASTNodeUnaryTestPost(node: ASTNodeUnaryTest): void {
    node = node;
  }
  public visitASTNodeWhileClausePre(node: ASTNodeWhileClause): void {
    node = node;
  }
  public visitASTNodeWhileClausePost(node: ASTNodeWhileClause): void {
    node = node;
  }
  public visitASTNodeWordPre(node: ASTNodeWord): void {
    node = node;
  }
  public visitASTNodeWordPost(node: ASTNodeWord): void {
    node = node;
  }
  public visitASTNodeWordIterPre(node: ASTNodeWordIter): void {
    node = node;
  }
  public visitASTNodeWordIterPost(node: ASTNodeWordIter): void {
    node = node;
  }
}
