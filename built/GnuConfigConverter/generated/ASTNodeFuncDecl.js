"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTNodeStmt_1 = require("./ASTNodeStmt");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
const ASTSingle_1 = require("./ASTSingle");
class ASTNodeFuncDecl extends ASTNode_1.ASTNode {
    constructor(funcdecl, parent, parentField) {
        super(funcdecl, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeFuncDecl;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeFuncDecl];
        logg_1.logg("ASTNodeFuncDecl");
        this.Position = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, funcdecl.Position);
        this.RsrvWord = funcdecl.RsrvWord;
        this.Name = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, funcdecl.Name, this, "Name");
        this.Body = ASTSingle_1.ASTSingle(ASTNodeStmt_1.ASTNodeStmt, funcdecl.Body, this, "Body");
        ["kind", "parent", "parentField", "Position"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPreBefore(this);
        visitor.visitASTNodeFuncDeclPre(this);
        visitor.visitAllPreAfter(this);
        if (this.Name) {
            this.Name.accept(visitor);
        }
        if (this.Body) {
            this.Body.accept(visitor);
        }
        visitor.visitAllPostBefore(this);
        visitor.visitASTNodeFuncDeclPost(this);
        visitor.visitAllPostAfter(this);
    }
}
exports.ASTNodeFuncDecl = ASTNodeFuncDecl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUZ1bmNEZWNsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9nZW5lcmF0ZWQvQVNUTm9kZUZ1bmNEZWNsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxrQ0FBK0I7QUFFL0IsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1Qyw2Q0FBMEM7QUFDMUMsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyxxRUFBa0U7QUFDbEUsMkNBQXdDO0FBR3hDLE1BQWEsZUFBZ0IsU0FBUSxpQkFBTztJQVExQyxZQUFZLFFBQW1CLEVBQVMsTUFBc0IsRUFBUyxXQUFtQjtRQUN4RixLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQURDLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFQbkYsU0FBSSxHQUFnQyx5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNoRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBUW5FLFdBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsK0NBQXNCLENBQUMsZUFBTSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHVCQUFVLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMxRCxNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7QUFuQ0QsMENBbUNDIn0=