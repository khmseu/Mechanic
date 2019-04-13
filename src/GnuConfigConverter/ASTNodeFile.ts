/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreFile } from "./ASTMoreFile";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IFile } from "./ParserTypes";

export class ASTNodeFile extends ASTNode {
  public kind: ASTnodeKind.ASTNodeFile = ASTnodeKind.ASTNodeFile;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeFile];
  public more: ASTMoreFile = new ASTMoreFile();
  public Name: string; //     Name: string;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(file: IFile) {
    super(file);
    logg("ASTNodeFile");
    this.Name = file.Name;
    this.StmtList = ASTSingle(ASTNodeStmtList, file.StmtList);
    this.Last = ASTArray(ASTNodeComment, file.Last)!;
    [].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeFilePre(this);
    if (this.StmtList) {
      this.StmtList.accept(visitor);
    }
    this.Last.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeFilePost(this);
  }
}
