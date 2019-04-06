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
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IBlock } from "./ParserTypes";

export class ASTNodeBlock extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBlock = ASTnodeKind.ASTNodeBlock;
  public Lbrace: ASTPos; //     Lbrace: I_Pos;
  public Rbrace: ASTPos; //     Rbrace: I_Pos;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(block: IBlock) {
    super(block);
    logg("ASTNodeBlock");
    const { Lbrace, Rbrace, StmtList, Last, ...rest_block } = block;
    this.Lbrace = ASTSimpleSingle(ASTPos, Lbrace)!;
    this.Rbrace = ASTSimpleSingle(ASTPos, Rbrace)!;
    this.StmtList = ASTSingle(ASTNodeStmtList, StmtList);
    this.Last = ASTArray(ASTNodeComment, Last)!;
    this.rest = rest_block;
  }
}
