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
const ASTNodeWord_1 = require("./ASTNodeWord");
const logg_1 = require("./logg");
class ASTNodeBraceExp extends ASTNode_1.ASTNode {
    constructor(braceexp) {
        super(braceexp);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeBraceExp;
        logg_1.logg("ASTNodeBraceExp");
        const { Sequence, Chars, Elems, ...rest_braceexp } = braceexp;
        this.Sequence = Sequence;
        this.Chars = Chars;
        this.Elems = ASTArray_1.ASTArray(ASTNodeWord_1.ASTNodeWord, Elems);
        this.rest = rest_braceexp;
    }
}
exports.ASTNodeBraceExp = ASTNodeBraceExp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJyYWNlRXhwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlQnJhY2VFeHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLCtDQUE0QztBQUM1QyxpQ0FBOEI7QUFHOUIsTUFBYSxlQUFnQixTQUFRLGlCQUFPO0lBTTFDLFlBQVksUUFBbUI7UUFDN0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBTlgsU0FBSSxHQUFnQyx5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQU9yRSxXQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QixNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxhQUFhLEVBQUUsR0FBRyxRQUFRLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLHlCQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBZkQsMENBZUMifQ==