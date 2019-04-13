/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTExpansion } from "./ASTExpansion";
import { ASTMoreParamExp } from "./ASTMoreParamExp";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ASTReplace } from "./ASTReplace";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { ASTSlice } from "./ASTSlice";
import { logg } from "./logg";
import { IParamExp, ParNamesOperator } from "./ParserTypes";
import { op, Token } from "./Token";

export class ASTNodeParamExp extends ASTNode {
  public kind: ASTnodeKind.ASTNodeParamExp = ASTnodeKind.ASTNodeParamExp;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeParamExp];
  public more: ASTMoreParamExp = new ASTMoreParamExp();
  public Dollar: ASTPos; //     Dollar: I_Pos;
  public Rbrace: ASTPos; //     Rbrace: I_Pos;
  public Short: boolean; //     Short: boolean;
  public Excl: boolean; //     Excl: boolean;
  public Length: boolean; //     Length: boolean;
  public Width: boolean; //     Width: boolean;
  public Param: ASTNodeLit | null; //     Param: ILit | null;
  public Index: ASTNodeArithmExpr; //     Index: IArithmExpr;
  public Slice: ASTSlice | null; //     Slice: I_Slice | null;
  public Repl: ASTReplace | null; //     Repl: I_Replace | null;
  public Names: string; //     Names: ParNamesOperator;
  public NamesString: string;
  public Exp: ASTExpansion | null; //     Exp: I_Expansion | null;

  constructor(paramexp: IParamExp) {
    super(paramexp);
    logg("ASTNodeParamExp");
    this.Dollar = ASTSimpleSingle(ASTPos, paramexp.Dollar)!;
    this.Rbrace = ASTSimpleSingle(ASTPos, paramexp.Rbrace)!;
    this.Short = paramexp.Short;
    this.Excl = paramexp.Excl;
    this.Length = paramexp.Length;
    this.Width = paramexp.Width;
    this.Param = ASTSingle(ASTNodeLit, paramexp.Param);
    this.Index = ASTSingle(ASTNodeArithmExpr, paramexp.Index)!;
    this.Slice = ASTSimpleSingle(ASTSlice, paramexp.Slice);
    this.Repl = ASTSimpleSingle(ASTReplace, paramexp.Repl);
    this.Names = ParNamesOperator[paramexp.Names];
    this.NamesString = op((paramexp.Names as unknown) as Token);
    this.Exp = ASTSimpleSingle(ASTExpansion, paramexp.Exp);
    ["Dollar", "Rbrace"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeParamExpPre(this);
    if (this.Param) {
      this.Param.accept(visitor);
    }
    this.Index.accept(visitor);
    visitor.visitASTNodeParamExpPost(this);
  }
}
