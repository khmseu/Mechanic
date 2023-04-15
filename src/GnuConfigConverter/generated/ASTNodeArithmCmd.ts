/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IArithmCmd } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingleNotNull } from "./ASTSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeArithmCmd extends ASTNode {
  public kind: ASTnodeKind.ASTNodeArithmCmd = ASTnodeKind.ASTNodeArithmCmd;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeArithmCmd];
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public Unsigned: boolean; //     Unsigned: boolean;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;

  constructor(arithmcmd: IArithmCmd, public parent: ASTNode | null, public parentField: string) {
    super(arithmcmd, parent, parentField);
    logg("ASTNodeArithmCmd");
    this.Left = ASTSimpleSingleNotNull(ASTPos, arithmcmd.Left);
    this.Right = ASTSimpleSingleNotNull(ASTPos, arithmcmd.Right);
    this.Unsigned = arithmcmd.Unsigned;
    this.X = ASTSingleNotNull(ASTNodeArithmExpr, arithmcmd.X, this, "X");
    ["kind", "parent", "parentField", "Left", "Right"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeArithmCmdPre(this);
    visitor.visitAllPreAfter(this);
    this.X.accept(visitor);
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeArithmCmdPost(this);
    visitor.visitAllPostAfter(this);
  }
}
