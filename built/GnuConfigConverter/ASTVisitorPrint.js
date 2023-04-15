"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUVmlzaXRvclByaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1RWaXNpdG9yUHJpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUdILCtEQUE0RDtBQUU1RCxNQUFhLGVBQWdCLFNBQVEsK0JBQWM7SUFDakQsWUFBb0IsRUFBd0I7UUFDMUMsS0FBSyxFQUFFLENBQUM7UUFEVSxPQUFFLEdBQUYsRUFBRSxDQUFzQjtJQUU1QyxDQUFDO0lBQ00saUJBQWlCLENBQUMsSUFBYTtRQUNwQyxNQUFNLE9BQU8sR0FBeUIsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDbkM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDOUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBRU0sdUJBQXVCLENBQUMsSUFBYTtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUNNLG9CQUFvQixDQUFDLElBQWE7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNNLHdCQUF3QixDQUFDLElBQWE7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNNLHdCQUF3QixDQUFDLElBQWE7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNNLHdCQUF3QixDQUFDLElBQWE7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLElBQUksQ0FBQyxJQUFhLEVBQUUsRUFBVTtRQUNwQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ08sR0FBRyxDQUFDLElBQVM7UUFDbkIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBQ08sT0FBTyxDQUFDLElBQWEsRUFBRSxJQUFTO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRjtBQWpERCwwQ0FpREMifQ==