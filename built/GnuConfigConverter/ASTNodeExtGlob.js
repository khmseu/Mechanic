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
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeExtGlob extends ASTNode_1.ASTNode {
    constructor(extglob) {
        super(extglob);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeExtGlob;
        logg_1.logg("ASTNodeExtGlob");
        const { OpPos, Op, Pattern, ...rest_extglob } = extglob;
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, OpPos);
        this.Op = Op;
        this.Pattern = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, Pattern);
        this.rest = rest_extglob;
    }
}
exports.ASTNodeExtGlob = ASTNodeExtGlob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUV4dEdsb2IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVFeHRHbG9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLDZDQUEwQztBQUMxQyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxjQUFlLFNBQVEsaUJBQU87SUFNekMsWUFBWSxPQUFpQjtRQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFOVixTQUFJLEdBQStCLHlCQUFXLENBQUMsY0FBYyxDQUFDO1FBT25FLFdBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBUyxDQUFDLHVCQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBZkQsd0NBZUMifQ==