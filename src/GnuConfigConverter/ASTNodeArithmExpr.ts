/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { syntax } from "mvdan-sh";
import { ASTNode } from "./ASTNode";
import { ASTNodeBinaryArithm } from "./ASTNodeBinaryArithm";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeParenArithm } from "./ASTNodeParenArithm";
import { ASTNodeUnaryArithm } from "./ASTNodeUnaryArithm";
import { ASTNodeWord } from "./ASTNodeWord";
import { logg } from "./logg";
import { IArithmExpr, IBinaryArithm, IParenArithm, IUnaryArithm, IWord } from "./ParserTypes";

export class ASTNodeArithmExpr extends ASTNode {
  // tslint:disable-next-line:max-line-length
  public kind: ASTnodeKind.bad | ASTnodeKind.ASTNodeBinaryArithm | ASTnodeKind.ASTNodeUnaryArithm | ASTnodeKind.ASTNodeParenArithm | ASTnodeKind.ASTNodeWord = ASTnodeKind.bad;
  public kindString: string = ASTnodeKind[ASTnodeKind.bad];
  constructor(arithmexpr: IArithmExpr, public parent: ASTNode | null) {
    super(arithmexpr, parent);
    logg("ASTNodeArithmExpr");
    switch (syntax.NodeType(arithmexpr)) {
      case "BinaryArithm":
        return new ASTNodeBinaryArithm(arithmexpr as IBinaryArithm, parent);
      case "UnaryArithm":
        return new ASTNodeUnaryArithm(arithmexpr as IUnaryArithm, parent);
      case "ParenArithm":
        return new ASTNodeParenArithm(arithmexpr as IParenArithm, parent);
      case "Word":
        return new ASTNodeWord(arithmexpr as IWord, parent);
      default:
        throw { NodeType: syntax.NodeType(arithmexpr) };
    }
  }
}
