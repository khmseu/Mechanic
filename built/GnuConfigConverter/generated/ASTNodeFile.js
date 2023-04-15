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
const ASTNodeComment_1 = require("./ASTNodeComment");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeStmtList_1 = require("./ASTNodeStmtList");
const ASTSingle_1 = require("./ASTSingle");
class ASTNodeFile extends ASTNode_1.ASTNode {
    constructor(file, parent, parentField) {
        super(file, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeFile;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeFile];
        logg_1.logg("ASTNodeFile");
        this.Name = file.Name;
        this.StmtList = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, file.StmtList, this, "StmtList");
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, file.Last, this, "Last");
        ["kind", "parent", "parentField"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPreBefore(this);
        visitor.visitASTNodeFilePre(this);
        visitor.visitAllPreAfter(this);
        if (this.StmtList) {
            this.StmtList.accept(visitor);
        }
        this.Last.forEach((e) => e.accept(visitor));
        visitor.visitAllPostBefore(this);
        visitor.visitASTNodeFilePost(this);
        visitor.visitAllPostAfter(this);
    }
}
exports.ASTNodeFile = ASTNodeFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1ROb2RlRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsa0NBQStCO0FBRS9CLHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQsMkNBQXdDO0FBR3hDLE1BQWEsV0FBWSxTQUFRLGlCQUFPO0lBT3RDLFlBQVksSUFBVyxFQUFTLE1BQXNCLEVBQVMsV0FBbUI7UUFDaEYsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFESCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBTjNFLFNBQUksR0FBNEIseUJBQVcsQ0FBQyxXQUFXLENBQUM7UUFDeEQsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQU8vRCxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQVMsQ0FBQyxpQ0FBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQVEsQ0FBQywrQkFBYyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlELENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUM5QyxNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBL0JELGtDQStCQyJ9