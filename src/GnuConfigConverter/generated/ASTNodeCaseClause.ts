/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { ICaseClause } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeCaseItem } from "./ASTNodeCaseItem";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeCaseClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCaseClause = ASTnodeKind.ASTNodeCaseClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeCaseClause];
  public Case: ASTPos; //     Case: I_Pos;
  public Esac: ASTPos; //     Esac: I_Pos;
  public Word: ASTNodeWord | null; //     Word: IWord | null;
  public Items: ASTNodeCaseItem[]; //     Items: ICaseItem[] | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(caseclause: ICaseClause, public parent: ASTNode | null, public parentField: string) {
    super(caseclause, parent, parentField);
    logg("ASTNodeCaseClause");
    this.Case = ASTSimpleSingleNotNull(ASTPos, caseclause.Case);
    this.Esac = ASTSimpleSingleNotNull(ASTPos, caseclause.Esac);
    this.Word = ASTSingle(ASTNodeWord, caseclause.Word, this, "Word");
    this.Items = ASTArray(ASTNodeCaseItem, caseclause.Items, this, "Items");
    this.Last = ASTArray(ASTNodeComment, caseclause.Last, this, "Last");
    ["kind", "parent", "parentField", "Case", "Esac"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeCaseClausePre(this);
    visitor.visitAllPreAfter(this);
    if (this.Last) {
      this.Last.accept(visitor);
    }
    this.Last.forEach((e) => e.accept(visitor));
    this.Last.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeCaseClausePost(this);
    visitor.visitAllPostAfter(this);
  }
}
