"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTNodeStmt_1 = require("./ASTNodeStmt");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeFuncDecl extends ASTNode_1.ASTNode {
    constructor(funcdecl) {
        super(funcdecl);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeFuncDecl;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeFuncDecl];
        logg_1.logg("ASTNodeFuncDecl");
        this.Position = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, funcdecl.Position);
        this.RsrvWord = funcdecl.RsrvWord;
        this.Name = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, funcdecl.Name);
        this.Body = ASTSingle_1.ASTSingle(ASTNodeStmt_1.ASTNodeStmt, funcdecl.Body);
    }
}
exports.ASTNodeFuncDecl = ASTNodeFuncDecl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUZ1bmNEZWNsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlRnVuY0RlY2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHVDQUFvQztBQUNwQywrQ0FBNEM7QUFDNUMsNkNBQTBDO0FBQzFDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxlQUFnQixTQUFRLGlCQUFPO0lBUTFDLFlBQVksUUFBbUI7UUFDN0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBUlgsU0FBSSxHQUFnQyx5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNoRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBUW5FLFdBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsdUJBQVUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRjtBQWhCRCwwQ0FnQkMifQ==