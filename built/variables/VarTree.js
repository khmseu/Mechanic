"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarTree = void 0;
const assert_1 = require("assert");
const typia_1 = require("typia");
const patterns_1 = require("./patterns");
/**
 * Var tree
 */
class VarTree {
    /**
     * Creates an instance of var tree.
     */
    constructor() {
        this.vars = {
            ENV: process.env,
        };
    }
    /**
     * Gets var
     * @param varName
     * @returns var
     */
    getVar(varName) {
        const r = patterns_1.rexParseAsVar.exec(varName);
        (0, assert_1.ok)(r, SyntaxError("not a valid var name " + varName));
        const [ns, name] = r;
        const vn = this.getNS(ns);
        const vv = vn[name];
        if (!vv) {
            return vv;
        }
        const vv1 = (input => {
            const $io0 = input => true;
            return "object" === typeof input && null !== input && $io0(input);
        })(vv) ? vv.toString() : vv;
        return vv1;
    }
    /**
     * Sets var
     * @param varName
     * @param varValue
     */
    setVar(varName, varValue) {
        const r = patterns_1.rexParseAsVar.exec(varName);
        (0, assert_1.ok)(r, SyntaxError("not a valid var name " + varName));
        const [ns, name] = r;
        const vn = this.getNS(ns);
        vn[name] = varValue;
    }
    /**
     * Gets ns
     * @param ns
     * @returns
     */
    getNS(ns) {
        const vn = this.vars[ns];
        (0, assert_1.ok)(vn, Error("No such namespace " + ns));
        return vn;
    }
}
exports.VarTree = VarTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFyVHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YXJpYWJsZXMvVmFyVHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7OztBQUVILG1DQUE0QjtBQUM1QixpQ0FBMkI7QUFHM0IseUNBQTJDO0FBSTNDOztHQUVHO0FBQ0gsTUFBYSxPQUFPO0lBT2xCOztPQUVHO0lBQ0g7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxPQUFlO1FBQzNCLE1BQU0sQ0FBQyxHQUFHLHdCQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLElBQUEsV0FBRSxFQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsdUJBQXVCLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQztRQUN0QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLE1BQU0sRUFBRSxHQUFhLEVBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE1BQU0sR0FBRyxHQUFHOzs7V0FBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN2RCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLE9BQWUsRUFBRSxRQUFrQjtRQUMvQyxNQUFNLENBQUMsR0FBRyx3QkFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFBLFdBQUUsRUFBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUM7UUFDdEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixFQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ssS0FBSyxDQUFDLEVBQVU7UUFDdEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixJQUFBLFdBQUUsRUFBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0NBQ0Y7QUF0REQsMEJBc0RDIn0=