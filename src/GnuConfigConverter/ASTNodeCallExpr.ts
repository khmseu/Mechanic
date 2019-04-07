/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeAssign } from "./ASTNodeAssign";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { logg } from "./logg";
import { ICallExpr } from "./ParserTypes";

export class ASTNodeCallExpr extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCallExpr = ASTnodeKind.ASTNodeCallExpr;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeCallExpr];
  public Assigns: ASTNodeAssign[]; //     Assigns: IAssign[] | null;
  public Args: ASTNodeWord[]; //     Args: IWord[] | null;

  constructor(callexpr: ICallExpr) {
    super(callexpr);
    logg("ASTNodeCallExpr");
    this.Assigns = ASTArray(ASTNodeAssign, callexpr.Assigns);
    this.Args = ASTArray(ASTNodeWord, callexpr.Args);
  }
}
