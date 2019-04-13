/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTMoreArithmCmd } from "./ASTMoreArithmCmd";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IArithmCmd } from "./ParserTypes";

export class ASTNodeArithmCmd extends ASTNode {
  public kind: ASTnodeKind.ASTNodeArithmCmd = ASTnodeKind.ASTNodeArithmCmd;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeArithmCmd];
  public more: ASTMoreArithmCmd = new ASTMoreArithmCmd();
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public Unsigned: boolean; //     Unsigned: boolean;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;

  constructor(arithmcmd: IArithmCmd) {
    super(arithmcmd);
    logg("ASTNodeArithmCmd");
    this.Left = ASTSimpleSingle(ASTPos, arithmcmd.Left)!;
    this.Right = ASTSimpleSingle(ASTPos, arithmcmd.Right)!;
    this.Unsigned = arithmcmd.Unsigned;
    this.X = ASTSingle(ASTNodeArithmExpr, arithmcmd.X)!;
    ["Left", "Right"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeArithmCmdPre(this);
    this.X.accept(visitor);
    visitor.visitASTNodeArithmCmdPost(this);
  }
}
