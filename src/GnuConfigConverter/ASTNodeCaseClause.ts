/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeCaseItem } from "./ASTNodeCaseItem";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { ICaseClause } from "./ParserTypes";

export class ASTNodeCaseClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCaseClause = ASTnodeKind.ASTNodeCaseClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeCaseClause];
  public Case: ASTPos; //     Case: I_Pos;
  public Esac: ASTPos; //     Esac: I_Pos;
  public Word: ASTNodeWord | null; //     Word: IWord | null;
  public Items: ASTNodeCaseItem[]; //     Items: ICaseItem[] | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(caseclause: ICaseClause) {
    super(caseclause);
    logg("ASTNodeCaseClause");
    this.Case = ASTSimpleSingle(ASTPos, caseclause.Case)!;
    this.Esac = ASTSimpleSingle(ASTPos, caseclause.Esac)!;
    this.Word = ASTSingle(ASTNodeWord, caseclause.Word);
    this.Items = ASTArray(ASTNodeCaseItem, caseclause.Items);
    this.Last = ASTArray(ASTNodeComment, caseclause.Last)!;
  }
}
