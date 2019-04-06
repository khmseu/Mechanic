/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTExpansion } from "./ASTExpansion";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTPos } from "./ASTPos";
import { ASTReplace } from "./ASTReplace";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { ASTSlice } from "./ASTSlice";
import { logg } from "./logg";
import { IParamExp, ParNamesOperator } from "./ParserTypes";

export class ASTNodeParamExp extends ASTNode {
  public kind: ASTnodeKind.ASTNodeParamExp = ASTnodeKind.ASTNodeParamExp;
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
  public Names: ParNamesOperator; //     Names: ParNamesOperator;
  public Exp: ASTExpansion | null; //     Exp: I_Expansion | null;

  constructor(paramexp: IParamExp) {
    super(paramexp);
    logg("ASTNodeParamExp");
    // tslint:disable-next-line:max-line-length
    const { Dollar, Rbrace, Short, Excl, Length, Width, Param, Index, Slice, Repl, Names, Exp, ...rest_paramexp } = paramexp;
    this.Dollar = ASTSimpleSingle(ASTPos, Dollar)!;
    this.Rbrace = ASTSimpleSingle(ASTPos, Rbrace)!;
    this.Short = Short;
    this.Excl = Excl;
    this.Length = Length;
    this.Width = Width;
    this.Param = ASTSingle(ASTNodeLit, Param);
    this.Index = ASTSingle(ASTNodeArithmExpr, Index)!;
    this.Slice = ASTSimpleSingle(ASTSlice, Slice);
    this.Repl = ASTSimpleSingle(ASTReplace, Repl);
    this.Names = Names;
    this.Exp = ASTSimpleSingle(ASTExpansion, Exp);
    this.rest = rest_paramexp;
  }
}
