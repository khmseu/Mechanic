/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IRedirect, RedirOperator } from "./ParserTypes";

export class ASTNodeRedirect extends ASTNode {
  public kind: ASTnodeKind.ASTNodeRedirect = ASTnodeKind.ASTNodeRedirect;
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: RedirOperator; //     Op: RedirOperator;
  public N: ASTNodeLit | null; //     N: ILit | null;
  public Word: ASTNodeWord | null; //     Word: IWord | null;
  public Hdoc: ASTNodeWord | null; //     Hdoc: IWord | null;

  constructor(redirect: IRedirect) {
    super(redirect);
    logg("ASTNodeRedirect");
    const { OpPos, Op, N, Word, Hdoc, ...rest_redirect } = redirect;
    this.OpPos = ASTSimpleSingle(ASTPos, OpPos)!;
    this.Op = Op;
    this.N = ASTSingle(ASTNodeLit, N);
    this.Word = ASTSingle(ASTNodeWord, Word);
    this.Hdoc = ASTSingle(ASTNodeWord, Hdoc);
    this.rest = rest_redirect;
  }
}
