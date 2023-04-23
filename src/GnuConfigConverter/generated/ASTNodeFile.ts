/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IFile } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeFile extends ASTNode {
  public kind: ASTnodeKind.ASTNodeFile = ASTnodeKind.ASTNodeFile;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeFile];
  public Name: string; //     Name: string;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(file: IFile, public parent: ASTNode | null, public parentField: string) {
    super(file, parent, parentField);
    logg("ASTNodeFile");
    this.Name = file.Name;
    this.StmtList = ASTSingle(ASTNodeStmtList, file.StmtList, this, "StmtList");
    this.Last = ASTArray(ASTNodeComment, file.Last, this, "Last");
    ["kind", "parent", "parentField"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeFilePre(this);
    visitor.visitAllPreAfter(this);
    if (this.Last) {
      this.Last.accept(visitor);
    }
    this.Last.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeFilePost(this);
    visitor.visitAllPostAfter(this);
  }
}
