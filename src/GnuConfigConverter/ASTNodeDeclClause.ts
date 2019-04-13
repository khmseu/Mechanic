/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreDeclClause } from "./ASTMoreDeclClause";
import { ASTNode } from "./ASTNode";
import { ASTNodeAssign } from "./ASTNodeAssign";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IDeclClause } from "./ParserTypes";

export class ASTNodeDeclClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeDeclClause = ASTnodeKind.ASTNodeDeclClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeDeclClause];
  public more: ASTMoreDeclClause = new ASTMoreDeclClause();
  public Variant: ASTNodeLit | null; //     Variant: ILit | null;
  public Opts: ASTNodeWord[]; //     Opts: IWord[] | null;
  public Assigns: ASTNodeAssign[]; //     Assigns: IAssign[] | null;

  constructor(declclause: IDeclClause) {
    super(declclause);
    logg("ASTNodeDeclClause");
    this.Variant = ASTSingle(ASTNodeLit, declclause.Variant);
    this.Opts = ASTArray(ASTNodeWord, declclause.Opts);
    this.Assigns = ASTArray(ASTNodeAssign, declclause.Assigns);
    [].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeDeclClausePre(this);
    if (this.Variant) {
      this.Variant.accept(visitor);
    }
    this.Opts.forEach((e) => e.accept(visitor));
    this.Assigns.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeDeclClausePost(this);
  }
}
