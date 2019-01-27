"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const path_1 = require("path");
const typescript_is_1 = require("typescript-is");
const vm2_1 = require("vm2");
const Rule_1 = require("../rules/Rule");
const VarTree_1 = require("../variables/VarTree");
function jsGetVar(...args) {
    assert_1.ok(args.length === 2, Error("getVar must have 2 parameters"));
    assert_1.ok(args[0] instanceof VarTree_1.VarTree, TypeError("first parameter must be a VarTree"));
    const vt = args[0];
    const vn = (object => { if (!(typeof object === "string"))
        throw new Error("Type assertion failed.");
    else
        return object; })(args[1]);
    return vt.getVar(vn);
}
function jsSetVar(...args) {
    assert_1.ok(args.length === 3, Error("setVar must have 3 parameters"));
    assert_1.ok(args[0] instanceof VarTree_1.VarTree, TypeError("first parameter must be a VarTree"));
    const vt = args[0];
    const vn = (object => { if (!(typeof object === "string"))
        throw new Error("Type assertion failed.");
    else
        return object; })(args[1]);
    const vv = (object => { if (!(object === undefined || object === null || typeof object === "string" || typeof object === "object" && object !== null && !Array.isArray(object) && ("toString" in object && (typeof object["toString"] === "object" && object["toString"] !== null && !Array.isArray(object["toString"])))))
        throw new Error("Type assertion failed.");
    else
        return object; })(args[2]);
    return vt.setVar(vn, vv);
}
const vmopts = {
    console: "inherit",
    sandbox: { Rule: Rule_1.Rule, getVar: jsGetVar, setVar: jsSetVar },
    require: {
        external: true,
        builtin: ["*"],
        root: "./",
        context: "sandbox",
    },
    sourceExtensions: ["mechanic"],
};
const vm = new vm2_1.NodeVM(vmopts);
const reqScript = new vm2_1.VMScript(`
module.exports = function(what) {
  require(what);
};
`);
const req = vm.run(reqScript);
function readRuleFile(dir) {
    const fn = path_1.resolve(dir, "manual.mechanic");
    req(fn);
}
exports.readRuleFile = readRuleFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZFJ1bGVGaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lvL3JlYWRSdWxlRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsbUNBQTRCO0FBQzVCLCtCQUErQjtBQUMvQixpREFBMkM7QUFDM0MsNkJBQXNEO0FBQ3RELHdDQUFxQztBQUNyQyxrREFBK0M7QUFHL0MsU0FBUyxRQUFRLENBQUMsR0FBRyxJQUFXO0lBQzlCLFdBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0lBQzlELFdBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksaUJBQU8sRUFBRSxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sRUFBRSxHQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixNQUFNLEVBQUU7OzswQkFBc0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsT0FBUSxFQUFjLENBQUMsTUFBTSxDQUFDLEVBQVksQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFDRCxTQUFTLFFBQVEsQ0FBQyxHQUFHLElBQVM7SUFDNUIsV0FBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7SUFDOUQsV0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxpQkFBTyxFQUFFLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxFQUFFLEdBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLE1BQU0sRUFBRTs7OzBCQUFzQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxNQUFNLEVBQUU7OzswQkFBd0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQsTUFBTSxNQUFNLEdBQWtCO0lBQzVCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBSixXQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0lBQ3JELE9BQU8sRUFBRTtRQUNQLFFBQVEsRUFBRSxJQUFJO1FBQ2QsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ2QsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsU0FBUztLQUNuQjtJQUNELGdCQUFnQixFQUFFLENBQUMsVUFBVSxDQUFDO0NBQy9CLENBQUM7QUFDRixNQUFNLEVBQUUsR0FBRyxJQUFJLFlBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QixNQUFNLFNBQVMsR0FBRyxJQUFJLGNBQVEsQ0FBQzs7OztDQUk5QixDQUFDLENBQUM7QUFDSCxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTlCLFNBQWdCLFlBQVksQ0FBQyxHQUFXO0lBQ3RDLE1BQU0sRUFBRSxHQUFHLGNBQU8sQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMzQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDVixDQUFDO0FBSEQsb0NBR0MifQ==