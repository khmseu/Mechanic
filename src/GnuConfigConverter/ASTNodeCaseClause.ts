/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreCaseClause } from "./ASTMoreCaseClause";
import { ASTNode } from "./ASTNode";
import { ASTNodeCaseItem } from "./ASTNodeCaseItem";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { ICaseClause } from "./ParserTypes";

export class ASTNodeCaseClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCaseClause = ASTnodeKind.ASTNodeCaseClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeCaseClause];
  public more: ASTMoreCaseClause = new ASTMoreCaseClause();
  public Case: ASTPos; //     Case: I_Pos;
  public Esac: ASTPos; //     Esac: I_Pos;
  public Word: ASTNodeWord | null; //     Word: IWord | null;
  public Items: ASTNodeCaseItem[]; //     Items: ICaseItem[] | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(caseclause: ICaseClause, public parent: ASTNode | null) {
    super(caseclause, parent);
    logg("ASTNodeCaseClause");
    this.Case = ASTSimpleSingle(ASTPos, caseclause.Case)!;
    this.Esac = ASTSimpleSingle(ASTPos, caseclause.Esac)!;
    this.Word = ASTSingle(ASTNodeWord, caseclause.Word, this);
    this.Items = ASTArray(ASTNodeCaseItem, caseclause.Items, this);
    this.Last = ASTArray(ASTNodeComment, caseclause.Last, this)!;
    ["Case", "Esac"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeCaseClausePre(this);
    if (this.Word) {
      this.Word.accept(visitor);
    }
    this.Items.forEach((e) => e.accept(visitor));
    this.Last.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeCaseClausePost(this);
  }
}
