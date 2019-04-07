"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTArray_1 = require("./ASTArray");
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeWordIter extends ASTNode_1.ASTNode {
    constructor(worditer) {
        super(worditer);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeWordIter;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeWordIter];
        logg_1.logg("ASTNodeWordIter");
        this.Name = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, worditer.Name);
        this.InPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, worditer.InPos);
        this.Items = ASTArray_1.ASTArray(ASTNodeWord_1.ASTNodeWord, worditer.Items);
    }
}
exports.ASTNodeWordIter = ASTNodeWordIter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVdvcmRJdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlV29yZEl0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLDZDQUEwQztBQUMxQywrQ0FBNEM7QUFDNUMscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsZUFBZ0IsU0FBUSxpQkFBTztJQU8xQyxZQUFZLFFBQW1CO1FBQzdCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQVBYLFNBQUksR0FBZ0MseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFDaEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQU9uRSxXQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsdUJBQVUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLHlCQUFXLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRjtBQWRELDBDQWNDIn0=