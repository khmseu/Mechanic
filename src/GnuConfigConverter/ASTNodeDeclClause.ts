/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeAssign } from "./ASTNodeAssign";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IDeclClause } from "./ParserTypes";

export class ASTNodeDeclClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeDeclClause = ASTnodeKind.ASTNodeDeclClause;
  public Variant: ASTNodeLit | null; //     Variant: ILit | null;
  public Opts: ASTNodeWord[]; //     Opts: IWord[] | null;
  public Assigns: ASTNodeAssign[]; //     Assigns: IAssign[] | null;

  constructor(declclause: IDeclClause) {
    super(declclause);
    logg("ASTNodeDeclClause");
    const { Variant, Opts, Assigns, ...rest_declclause } = declclause;
    this.Variant = ASTSingle(ASTNodeLit, Variant);
    this.Opts = ASTArray(ASTNodeWord, Opts);
    this.Assigns = ASTArray(ASTNodeAssign, Assigns);
    this.rest = rest_declclause;
  }
}
