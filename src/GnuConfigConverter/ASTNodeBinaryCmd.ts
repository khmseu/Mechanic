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
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
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

  constructor(binarycmd: IBinaryCmd) {
    super(binarycmd);
    logg("ASTNodeBinaryCmd");
    this.OpPos = ASTSimpleSingle(ASTPos, binarycmd.OpPos)!;
    this.Op = BinCmdOperator[binarycmd.Op];
    this.OpString = op((binarycmd.Op as unknown) as Token);
    this.X = ASTSingle(ASTNodeStmt, binarycmd.X)!;
    this.Y = ASTSingle(ASTNodeStmt, binarycmd.Y)!;
    ["OpPos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeBinaryCmdPre(this);
    this.X.accept(visitor);
    this.Y.accept(visitor);
    visitor.visitASTNodeBinaryCmdPost(this);
  }
}
