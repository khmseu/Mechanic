"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const typescript_is_1 = require("typescript-is");
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
        assert_1.ok(r, SyntaxError("not a valid var name " + varName));
        const [ns, name] = r;
        const vn = this.getNS(ns);
        const vv = vn[name];
        if (!vv) {
            return vv;
        }
        const vv1 = (object => { return typeof object === "object" && object !== null && !Array.isArray(object) && ("toString" in object && (typeof object["toString"] === "object" && object["toString"] !== null && !Array.isArray(object["toString"]))); })(vv) ? vv.toString() : vv;
        return vv1;
    }
    /**
     * Sets var
     * @param varName
     * @param varValue
     */
    setVar(varName, varValue) {
        const r = patterns_1.rexParseAsVar.exec(varName);
        assert_1.ok(r, SyntaxError("not a valid var name " + varName));
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
        assert_1.ok(vn, Error("No such namespace " + ns));
        return vn;
    }
}
exports.VarTree = VarTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFyVHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YXJpYWJsZXMvVmFyVHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsbUNBQTRCO0FBQzVCLGlEQUFtQztBQUduQyx5Q0FBMkM7QUFJM0M7O0dBRUc7QUFDSCxNQUFhLE9BQU87SUFPbEI7O09BRUc7SUFDSDtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDVixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLE9BQWU7UUFDM0IsTUFBTSxDQUFDLEdBQUcsd0JBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsV0FBRSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsdUJBQXVCLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQztRQUN0QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLE1BQU0sRUFBRSxHQUFhLEVBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE1BQU0sR0FBRyxHQUFHLDJPQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBZSxFQUFFLFFBQWtCO1FBQy9DLE1BQU0sQ0FBQyxHQUFHLHdCQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLFdBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUM7UUFDdEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixFQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ssS0FBSyxDQUFDLEVBQVU7UUFDdEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixXQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNGO0FBdERELDBCQXNEQyJ9