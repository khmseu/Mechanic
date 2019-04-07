/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { ICoprocClause } from "./ParserTypes";

export class ASTNodeCoprocClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCoprocClause = ASTnodeKind.ASTNodeCoprocClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeCoprocClause];
  public Coproc: ASTPos; //     Coproc: I_Pos;
  public Name: ASTNodeWord | null; //     Name: IWord | null;
  public Stmt: ASTNodeStmt | null; //     Stmt: IStmt | null;

  constructor(coprocclause: ICoprocClause) {
    super(coprocclause);
    logg("ASTNodeCoprocClause");
    this.Coproc = ASTSimpleSingle(ASTPos, coprocclause.Coproc)!;
    this.Name = ASTSingle(ASTNodeWord, coprocclause.Name);
    this.Stmt = ASTSingle(ASTNodeStmt, coprocclause.Stmt);
  }
}
