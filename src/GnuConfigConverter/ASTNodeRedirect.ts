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
import { op, Token } from "./Token";

export class ASTNodeRedirect extends ASTNode {
  public kind: ASTnodeKind.ASTNodeRedirect = ASTnodeKind.ASTNodeRedirect;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeRedirect];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: RedirOperator;
  public OpString: string;
  public N: ASTNodeLit | null; //     N: ILit | null;
  public Word: ASTNodeWord | null; //     Word: IWord | null;
  public Hdoc: ASTNodeWord | null; //     Hdoc: IWord | null;

  constructor(redirect: IRedirect) {
    super(redirect);
    logg("ASTNodeRedirect");
    this.OpPos = ASTSimpleSingle(ASTPos, redirect.OpPos)!;
    this.Op = RedirOperator[redirect.Op];
    this.OpString = op((redirect.Op as unknown) as Token);
    this.N = ASTSingle(ASTNodeLit, redirect.N);
    this.Word = ASTSingle(ASTNodeWord, redirect.Word);
    this.Hdoc = ASTSingle(ASTNodeWord, redirect.Hdoc);
  }
}
