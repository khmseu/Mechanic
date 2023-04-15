"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ASTArray_1 = require("./ASTArray");
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
const ASTSingle_1 = require("./ASTSingle");
class ASTNodeWordIter extends ASTNode_1.ASTNode {
    constructor(worditer, parent, parentField) {
        super(worditer, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeWordIter;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeWordIter];
        logg_1.logg("ASTNodeWordIter");
        this.Name = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, worditer.Name, this, "Name");
        this.InPos = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, worditer.InPos);
        this.Items = ASTArray_1.ASTArray(ASTNodeWord_1.ASTNodeWord, worditer.Items, this, "Items");
        ["kind", "parent", "parentField", "InPos"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPreBefore(this);
        visitor.visitASTNodeWordIterPre(this);
        visitor.visitAllPreAfter(this);
        if (this.Name) {
            this.Name.accept(visitor);
        }
        this.Items.forEach((e) => e.accept(visitor));
        visitor.visitAllPostBefore(this);
        visitor.visitASTNodeWordIterPost(this);
        visitor.visitAllPostAfter(this);
    }
}
exports.ASTNodeWordIter = ASTNodeWordIter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVdvcmRJdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9nZW5lcmF0ZWQvQVNUTm9kZVdvcmRJdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxrQ0FBK0I7QUFFL0IseUNBQXNDO0FBQ3RDLHVDQUFvQztBQUNwQywrQ0FBNEM7QUFDNUMsNkNBQTBDO0FBQzFDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMscUVBQWtFO0FBQ2xFLDJDQUF3QztBQUd4QyxNQUFhLGVBQWdCLFNBQVEsaUJBQU87SUFPMUMsWUFBWSxRQUFtQixFQUFTLE1BQXNCLEVBQVMsV0FBbUI7UUFDeEYsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFEQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBTm5GLFNBQUksR0FBZ0MseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFDaEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQU9uRSxXQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsdUJBQVUsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLCtDQUFzQixDQUFDLGVBQU0sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLHlCQUFXLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN2RCxNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7QUEvQkQsMENBK0JDIn0=