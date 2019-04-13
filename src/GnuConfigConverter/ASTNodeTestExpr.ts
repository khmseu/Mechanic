/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { syntax } from "mvdan-sh";
import { ASTNode } from "./ASTNode";
import { ASTNodeBinaryTest } from "./ASTNodeBinaryTest";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeParenTest } from "./ASTNodeParenTest";
import { ASTNodeUnaryTest } from "./ASTNodeUnaryTest";
import { ASTNodeWord } from "./ASTNodeWord";
import { logg } from "./logg";
import { IBinaryTest, IParenTest, ITestExpr, IUnaryTest, IWord } from "./ParserTypes";

export class ASTNodeTestExpr extends ASTNode {
  // tslint:disable-next-line:max-line-length
  public kind: ASTnodeKind.bad | ASTnodeKind.ASTNodeBinaryTest | ASTnodeKind.ASTNodeUnaryTest | ASTnodeKind.ASTNodeParenTest | ASTnodeKind.ASTNodeWord = ASTnodeKind.bad;
  public kindString: string = ASTnodeKind[ASTnodeKind.bad];
  constructor(testexpr: ITestExpr, public parent: ASTNode | null) {
    super(testexpr, parent);
    logg("ASTNodeTestExpr");
    switch (syntax.NodeType(testexpr)) {
      case "BinaryTest":
        return new ASTNodeBinaryTest(testexpr as IBinaryTest, parent);
      case "UnaryTest":
        return new ASTNodeUnaryTest(testexpr as IUnaryTest, parent);
      case "ParenTest":
        return new ASTNodeParenTest(testexpr as IParenTest, parent);
      case "Word":
        return new ASTNodeWord(testexpr as IWord, parent);
      default:
        throw { NodeType: syntax.NodeType(testexpr) };
    }
  }
}
