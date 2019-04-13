"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTMoreLit_1 = require("./ASTMoreLit");
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const logg_1 = require("./logg");
class ASTNodeLit extends ASTNode_1.ASTNode {
    constructor(lit) {
        super(lit);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeLit;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeLit];
        this.more = new ASTMoreLit_1.ASTMoreLit();
        logg_1.logg("ASTNodeLit");
        this.ValuePos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, lit.ValuePos);
        this.ValueEnd = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, lit.ValueEnd);
        this.Value = lit.Value;
        ["ValuePos", "ValueEnd"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeLitPre(this);
        visitor.visitASTNodeLitPost(this);
    }
}
exports.ASTNodeLit = ASTNodeLit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUxpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUxpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsNkNBQTBDO0FBQzFDLHVDQUFvQztBQUNwQywrQ0FBNEM7QUFFNUMscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCxpQ0FBOEI7QUFHOUIsTUFBYSxVQUFXLFNBQVEsaUJBQU87SUFRckMsWUFBWSxHQUFTO1FBQ25CLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQVJOLFNBQUksR0FBMkIseUJBQVcsQ0FBQyxVQUFVLENBQUM7UUFDdEQsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxTQUFJLEdBQWUsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFPekMsV0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN2QixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNyQyxNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGO0FBekJELGdDQXlCQyJ9