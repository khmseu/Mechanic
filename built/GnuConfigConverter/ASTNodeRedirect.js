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
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeRedirect extends ASTNode_1.ASTNode {
    constructor(redirect) {
        super(redirect);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeRedirect;
        logg_1.logg("ASTNodeRedirect");
        const { OpPos, Op, N, Word, Hdoc, ...rest_redirect } = redirect;
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, OpPos);
        this.Op = Op;
        this.N = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, N);
        this.Word = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, Word);
        this.Hdoc = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, Hdoc);
        this.rest = rest_redirect;
    }
}
exports.ASTNodeRedirect = ASTNodeRedirect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVJlZGlyZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlUmVkaXJlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHVDQUFvQztBQUNwQywrQ0FBNEM7QUFDNUMsNkNBQTBDO0FBQzFDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxlQUFnQixTQUFRLGlCQUFPO0lBUTFDLFlBQVksUUFBbUI7UUFDN0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBUlgsU0FBSSxHQUFnQyx5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQVNyRSxXQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QixNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLGFBQWEsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLHVCQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBbkJELDBDQW1CQyJ9