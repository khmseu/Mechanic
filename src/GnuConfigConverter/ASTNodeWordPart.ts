/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { syntax } from "mvdan-sh";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExp } from "./ASTNodeArithmExp";
import { ASTNodeBraceExp } from "./ASTNodeBraceExp";
import { ASTNodeCmdSubst } from "./ASTNodeCmdSubst";
import { ASTNodeDblQuoted } from "./ASTNodeDblQuoted";
import { ASTNodeExtGlob } from "./ASTNodeExtGlob";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeParamExp } from "./ASTNodeParamExp";
import { ASTNodeProcSubst } from "./ASTNodeProcSubst";
import { ASTNodeSglQuoted } from "./ASTNodeSglQuoted";
import { logg } from "./logg";
// tslint:disable-next-line:max-line-length
import { IArithmExp, IBraceExp, ICmdSubst, IDblQuoted, IExtGlob, ILit, IParamExp, IProcSubst, ISglQuoted, IWordPart } from "./ParserTypes";

export class ASTNodeWordPart extends ASTNode {
  // tslint:disable-next-line:max-line-length
  public kind: ASTnodeKind.bad | ASTnodeKind.ASTNodeLit | ASTnodeKind.ASTNodeSglQuoted | ASTnodeKind.ASTNodeDblQuoted | ASTnodeKind.ASTNodeParamExp | ASTnodeKind.ASTNodeCmdSubst | ASTnodeKind.ASTNodeArithmExp | ASTnodeKind.ASTNodeProcSubst | ASTnodeKind.ASTNodeExtGlob | ASTnodeKind.ASTNodeBraceExp = ASTnodeKind.bad;
  public kindString: string = ASTnodeKind[ASTnodeKind.bad];
  constructor(wordpart: IWordPart, public parent: ASTNode | null, public parentField: string) {
    super(wordpart, parent, parentField);
    logg("ASTNodeWordPart");
    switch (syntax.NodeType(wordpart)) {
      case "Lit":
        return new ASTNodeLit(wordpart as ILit, parent, parentField);
      case "SglQuoted":
        return new ASTNodeSglQuoted(wordpart as ISglQuoted, parent, parentField);
      case "DblQuoted":
        return new ASTNodeDblQuoted(wordpart as IDblQuoted, parent, parentField);
      case "ParamExp":
        return new ASTNodeParamExp(wordpart as IParamExp, parent, parentField);
      case "CmdSubst":
        return new ASTNodeCmdSubst(wordpart as ICmdSubst, parent, parentField);
      case "ArithmExp":
        return new ASTNodeArithmExp(wordpart as IArithmExp, parent, parentField);
      case "ProcSubst":
        return new ASTNodeProcSubst(wordpart as IProcSubst, parent, parentField);
      case "ExtGlob":
        return new ASTNodeExtGlob(wordpart as IExtGlob, parent, parentField);
      case "BraceExp":
        return new ASTNodeBraceExp(wordpart as IBraceExp, parent, parentField);
      default:
        throw { NodeType: syntax.NodeType(wordpart) };
    }
  }
}
