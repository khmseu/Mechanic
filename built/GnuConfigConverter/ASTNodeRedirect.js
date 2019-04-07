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
const ParserTypes_1 = require("./ParserTypes");
const Token_1 = require("./Token");
class ASTNodeRedirect extends ASTNode_1.ASTNode {
    constructor(redirect) {
        super(redirect);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeRedirect;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeRedirect];
        logg_1.logg("ASTNodeRedirect");
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, redirect.OpPos);
        this.Op = ParserTypes_1.RedirOperator[redirect.Op];
        this.OpString = Token_1.op(redirect.Op);
        this.N = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, redirect.N);
        this.Word = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, redirect.Word);
        this.Hdoc = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, redirect.Hdoc);
    }
}
exports.ASTNodeRedirect = ASTNodeRedirect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVJlZGlyZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlUmVkaXJlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHVDQUFvQztBQUNwQywrQ0FBNEM7QUFDNUMsNkNBQTBDO0FBQzFDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFDOUIsK0NBQXlEO0FBQ3pELG1DQUFvQztBQUVwQyxNQUFhLGVBQWdCLFNBQVEsaUJBQU87SUFVMUMsWUFBWSxRQUFtQjtRQUM3QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFWWCxTQUFJLEdBQWdDLHlCQUFXLENBQUMsZUFBZSxDQUFDO1FBQ2hFLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFVbkUsV0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLEVBQUUsR0FBRywyQkFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQUUsQ0FBRSxRQUFRLENBQUMsRUFBdUIsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxDQUFDLEdBQUcscUJBQVMsQ0FBQyx1QkFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMseUJBQVcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRjtBQXBCRCwwQ0FvQkMifQ==