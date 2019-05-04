/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTMoreBinaryCmd } from "./ASTMoreBinaryCmd";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingleNotNull } from "./ASTSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { logg } from "./logg";
import { BinCmdOperator, IBinaryCmd } from "./ParserTypes";
import { op, Token } from "./Token";

export class ASTNodeBinaryCmd extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBinaryCmd = ASTnodeKind.ASTNodeBinaryCmd;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeBinaryCmd];
  public more: ASTMoreBinaryCmd = new ASTMoreBinaryCmd();
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: BinCmdOperator;
  public OpString: string;
  public X: ASTNodeStmt; //     X: IStmt;
  public Y: ASTNodeStmt; //     Y: IStmt;

  constructor(binarycmd: IBinaryCmd, public parent: ASTNode | null, public parentField: string) {
    super(binarycmd, parent, parentField);
    logg("ASTNodeBinaryCmd");
    this.OpPos = ASTSimpleSingleNotNull(ASTPos, binarycmd.OpPos);
    this.Op = BinCmdOperator[binarycmd.Op];
    this.OpString = op((binarycmd.Op as unknown) as Token);
    this.X = ASTSingleNotNull(ASTNodeStmt, binarycmd.X, this, "X");
    this.Y = ASTSingleNotNull(ASTNodeStmt, binarycmd.Y, this, "Y");
    ["kind", "parent", "parentField", "OpPos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPre(this);
    visitor.visitASTNodeBinaryCmdPre(this);
    this.X.accept(visitor);
    this.Y.accept(visitor);
    visitor.visitASTNodeBinaryCmdPost(this);
    visitor.visitAllPost(this);
  }
}
