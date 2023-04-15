/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IBlock } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeBlock extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBlock = ASTnodeKind.ASTNodeBlock;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeBlock];
  public Lbrace: ASTPos; //     Lbrace: I_Pos;
  public Rbrace: ASTPos; //     Rbrace: I_Pos;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(block: IBlock, public parent: ASTNode | null, public parentField: string) {
    super(block, parent, parentField);
    logg("ASTNodeBlock");
    this.Lbrace = ASTSimpleSingleNotNull(ASTPos, block.Lbrace);
    this.Rbrace = ASTSimpleSingleNotNull(ASTPos, block.Rbrace);
    this.StmtList = ASTSingle(ASTNodeStmtList, block.StmtList, this, "StmtList");
    this.Last = ASTArray(ASTNodeComment, block.Last, this, "Last");
    ["kind", "parent", "parentField", "Lbrace", "Rbrace"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeBlockPre(this);
    visitor.visitAllPreAfter(this);
    if (this.StmtList) {
      this.StmtList.accept(visitor);
    }
    this.Last.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeBlockPost(this);
    visitor.visitAllPostAfter(this);
  }
}
