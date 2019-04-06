/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IFile } from "./ParserTypes";

export class ASTNodeFile extends ASTNode {
  public kind: ASTnodeKind.ASTNodeFile = ASTnodeKind.ASTNodeFile;
  public Name: string; //     Name: string;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(file: IFile) {
    super(file);
    logg("ASTNodeFile");
    const { Name, StmtList, Last, ...rest_file } = file;
    this.Name = Name;
    this.StmtList = ASTSingle(ASTNodeStmtList, StmtList);
    this.Last = ASTArray(ASTNodeComment, Last)!;
    this.rest = rest_file;
  }
}
