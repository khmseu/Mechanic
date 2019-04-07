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
  constructor(command: ICommand) {
    super(command);
    logg("ASTNodeCommand");
    switch (syntax.NodeType(command)) {
      case "CallExpr":
        return new ASTNodeCallExpr(command as ICallExpr);
      case "IfClause":
        return new ASTNodeIfClause(command as IIfClause);
      case "WhileClause":
        return new ASTNodeWhileClause(command as IWhileClause);
      case "ForClause":
        return new ASTNodeForClause(command as IForClause);
      case "CaseClause":
        return new ASTNodeCaseClause(command as ICaseClause);
      case "Block":
        return new ASTNodeBlock(command as IBlock);
      case "Subshell":
        return new ASTNodeSubshell(command as ISubshell);
      case "BinaryCmd":
        return new ASTNodeBinaryCmd(command as IBinaryCmd);
      case "FuncDecl":
        return new ASTNodeFuncDecl(command as IFuncDecl);
      case "ArithmCmd":
        return new ASTNodeArithmCmd(command as IArithmCmd);
      case "TestClause":
        return new ASTNodeTestClause(command as ITestClause);
      case "DeclClause":
        return new ASTNodeDeclClause(command as IDeclClause);
      case "LetClause":
        return new ASTNodeLetClause(command as ILetClause);
      case "TimeClause":
        return new ASTNodeTimeClause(command as ITimeClause);
      case "CoprocClause":
        return new ASTNodeCoprocClause(command as ICoprocClause);
      default:
        throw { NodeType: syntax.NodeType(command) };
    }
  }
}
