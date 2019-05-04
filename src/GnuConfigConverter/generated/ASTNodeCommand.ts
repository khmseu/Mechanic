/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { syntax } from "mvdan-sh";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmCmd } from "./ASTNodeArithmCmd";
import { ASTNodeBinaryCmd } from "./ASTNodeBinaryCmd";
import { ASTNodeBlock } from "./ASTNodeBlock";
import { ASTNodeCallExpr } from "./ASTNodeCallExpr";
import { ASTNodeCaseClause } from "./ASTNodeCaseClause";
import { ASTNodeCoprocClause } from "./ASTNodeCoprocClause";
import { ASTNodeDeclClause } from "./ASTNodeDeclClause";
import { ASTNodeForClause } from "./ASTNodeForClause";
import { ASTNodeFuncDecl } from "./ASTNodeFuncDecl";
import { ASTNodeIfClause } from "./ASTNodeIfClause";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLetClause } from "./ASTNodeLetClause";
import { ASTNodeSubshell } from "./ASTNodeSubshell";
import { ASTNodeTestClause } from "./ASTNodeTestClause";
import { ASTNodeTimeClause } from "./ASTNodeTimeClause";
import { ASTNodeWhileClause } from "./ASTNodeWhileClause";
import { logg } from "./logg";
// tslint:disable-next-line:max-line-length
import { IArithmCmd, IBinaryCmd, IBlock, ICallExpr, ICaseClause, ICommand, ICoprocClause, IDeclClause, IForClause, IFuncDecl, IIfClause, ILetClause, ISubshell, ITestClause, ITimeClause, IWhileClause } from "./ParserTypes";

export class ASTNodeCommand extends ASTNode {
  // tslint:disable-next-line:max-line-length
  public kind: ASTnodeKind.bad | ASTnodeKind.ASTNodeCallExpr | ASTnodeKind.ASTNodeIfClause | ASTnodeKind.ASTNodeWhileClause | ASTnodeKind.ASTNodeForClause | ASTnodeKind.ASTNodeCaseClause | ASTnodeKind.ASTNodeBlock | ASTnodeKind.ASTNodeSubshell | ASTnodeKind.ASTNodeBinaryCmd | ASTnodeKind.ASTNodeFuncDecl | ASTnodeKind.ASTNodeArithmCmd | ASTnodeKind.ASTNodeTestClause | ASTnodeKind.ASTNodeDeclClause | ASTnodeKind.ASTNodeLetClause | ASTnodeKind.ASTNodeTimeClause | ASTnodeKind.ASTNodeCoprocClause = ASTnodeKind.bad;
  public kindString: string = ASTnodeKind[ASTnodeKind.bad];
  constructor(command: ICommand, public parent: ASTNode | null, public parentField: string) {
    super(command, parent, parentField);
    logg("ASTNodeCommand");
    switch (syntax.NodeType(command)) {
      case "CallExpr":
        return new ASTNodeCallExpr(command as ICallExpr, parent, parentField);
      case "IfClause":
        return new ASTNodeIfClause(command as IIfClause, parent, parentField);
      case "WhileClause":
        return new ASTNodeWhileClause(command as IWhileClause, parent, parentField);
      case "ForClause":
        return new ASTNodeForClause(command as IForClause, parent, parentField);
      case "CaseClause":
        return new ASTNodeCaseClause(command as ICaseClause, parent, parentField);
      case "Block":
        return new ASTNodeBlock(command as IBlock, parent, parentField);
      case "Subshell":
        return new ASTNodeSubshell(command as ISubshell, parent, parentField);
      case "BinaryCmd":
        return new ASTNodeBinaryCmd(command as IBinaryCmd, parent, parentField);
      case "FuncDecl":
        return new ASTNodeFuncDecl(command as IFuncDecl, parent, parentField);
      case "ArithmCmd":
        return new ASTNodeArithmCmd(command as IArithmCmd, parent, parentField);
      case "TestClause":
        return new ASTNodeTestClause(command as ITestClause, parent, parentField);
      case "DeclClause":
        return new ASTNodeDeclClause(command as IDeclClause, parent, parentField);
      case "LetClause":
        return new ASTNodeLetClause(command as ILetClause, parent, parentField);
      case "TimeClause":
        return new ASTNodeTimeClause(command as ITimeClause, parent, parentField);
      case "CoprocClause":
        return new ASTNodeCoprocClause(command as ICoprocClause, parent, parentField);
      default:
        throw { NodeType: syntax.NodeType(command) };
    }
  }
}
