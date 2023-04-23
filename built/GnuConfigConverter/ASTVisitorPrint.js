"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTVisitorPrint = void 0;
const ASTVisitorBase_1 = require("./generated/ASTVisitorBase");
class ASTVisitorPrint extends ASTVisitorBase_1.ASTVisitorBase {
    constructor(cb) {
        super();
        this.cb = cb;
    }
    visitAllPostAfter(node) {
        const missing = {};
        if (!node.more.printDone) {
            missing.printer = node.kindString;
        }
        if (Object.keys(node.more.commentField).length) {
            missing.comments = Object.keys(node.more.commentField);
        }
        if (Object.keys(missing).length) {
            this.cbc({ missing });
            this.cbc(node);
        }
    }
    visitASTNodeCommentPost(node) {
        node.more.printDone = true;
    }
    visitASTNodeStmtPost(node) {
        this.combine(node, "...");
    }
    visitASTNodeCaseItemPost(node) {
        this.combine(node, "...");
    }
    visitASTNodeIfClausePost(node) {
        this.combine(node, "...");
    }
    visitASTNodeStmtListPost(node) {
        this.combine(node, "...");
    }
    pull(node, cf) {
        const ret = node.more[cf];
        delete node.more.commentField[cf];
        return ret;
    }
    cbc(data) {
        if (data) {
            this.cb(data);
        }
    }
    combine(node, data) {
        this.cbc(this.pull(node, "Comments"));
        this.cbc(data);
        this.cbc(this.pull(node, "Last"));
    }
}
exports.ASTVisitorPrint = ASTVisitorPrint;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUVmlzaXRvclByaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1RWaXNpdG9yUHJpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOzs7QUFHSCwrREFBNEQ7QUFFNUQsTUFBYSxlQUFnQixTQUFRLCtCQUFjO0lBQ2pELFlBQW9CLEVBQXdCO1FBQzFDLEtBQUssRUFBRSxDQUFDO1FBRFUsT0FBRSxHQUFGLEVBQUUsQ0FBc0I7SUFFNUMsQ0FBQztJQUNNLGlCQUFpQixDQUFDLElBQWE7UUFDcEMsTUFBTSxPQUFPLEdBQXlCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDeEIsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQzlDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUVNLHVCQUF1QixDQUFDLElBQWE7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFDTSxvQkFBb0IsQ0FBQyxJQUFhO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTSx3QkFBd0IsQ0FBQyxJQUFhO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTSx3QkFBd0IsQ0FBQyxJQUFhO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTSx3QkFBd0IsQ0FBQyxJQUFhO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyxJQUFJLENBQUMsSUFBYSxFQUFFLEVBQVU7UUFDcEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNPLEdBQUcsQ0FBQyxJQUFTO1FBQ25CLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUNPLE9BQU8sQ0FBQyxJQUFhLEVBQUUsSUFBUztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7QUFqREQsMENBaURDIn0=