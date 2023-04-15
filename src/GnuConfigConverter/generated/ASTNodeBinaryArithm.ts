/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { BinAritOperator, IBinaryArithm } from "../ParserTypes";
import { op, Token } from "../Token";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingleNotNull } from "./ASTSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeBinaryArithm extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBinaryArithm = ASTnodeKind.ASTNodeBinaryArithm;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeBinaryArithm];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: BinAritOperator;
  public OpString: string;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;
  public Y: ASTNodeArithmExpr; //     Y: IArithmExpr;

  constructor(binaryarithm: IBinaryArithm, public parent: ASTNode | null, public parentField: string) {
    super(binaryarithm, parent, parentField);
    logg("ASTNodeBinaryArithm");
    this.OpPos = ASTSimpleSingleNotNull(ASTPos, binaryarithm.OpPos);
    this.Op = BinAritOperator[binaryarithm.Op];
    this.OpString = op((binaryarithm.Op as unknown) as Token);
    this.X = ASTSingleNotNull(ASTNodeArithmExpr, binaryarithm.X, this, "X");
    this.Y = ASTSingleNotNull(ASTNodeArithmExpr, binaryarithm.Y, this, "Y");
    ["kind", "parent", "parentField", "OpPos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeBinaryArithmPre(this);
    visitor.visitAllPreAfter(this);
    this.X.accept(visitor);
    this.Y.accept(visitor);
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeBinaryArithmPost(this);
    visitor.visitAllPostAfter(this);
  }
}
