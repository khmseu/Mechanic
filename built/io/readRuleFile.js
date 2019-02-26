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
const DependencyGeneratorProxy_1 = require("../dependencies/DependencyGeneratorProxy");
const assertClass_1 = require("../js/assertClass");
const checkArgs_1 = require("../js/checkArgs");
const Rule_1 = require("../rules/Rule");
const TargetMatcherProxy_1 = require("../targets/TargetMatcherProxy");
const VarTree_1 = require("../variables/VarTree");
const vmopts = {
    console: "inherit",
    sandbox: {
        /**
         *
         * @param args
         * @return
         */
        Rule(...args) {
            checkArgs_1.checkArgs(1, args);
            const specraw = (object => { if (!(typeof object === "object" && object !== null && !Array.isArray(object) && ("Targets" in object && (Array.isArray(object["Targets"]) && object["Targets"].every(item => { return true; }))) && ("Dependencies" in object && (Array.isArray(object["Dependencies"]) && object["Dependencies"].every(item => { return true; }))) && ("Recipe" in object && true)))
                throw new Error("Type assertion failed.");
            else
                return object; })(args[0]);
            return Rule_1.Rule({
                Targets: specraw.Targets.map((t) => {
                    const tt = (object => { if (!(typeof object === "string" || typeof object === "object" && object !== null && !Array.isArray(object) && ("match" in object && true) && ("generate" in object && true) && ("toString" in object && true)))
                        throw new Error("Type assertion failed.");
                    else
                        return object; })(t);
                    if (typeof tt === "string") {
                        return tt;
                    }
                    else {
                        return new TargetMatcherProxy_1.TargetMatcherProxy(tt);
                    }
                }),
                Dependencies: specraw.Dependencies.map((d) => {
                    const dd = (object => { if (!(typeof object === "object" && object !== null && !Array.isArray(object) && ("generate" in object && true) && ("toString" in object && true)))
                        throw new Error("Type assertion failed.");
                    else
                        return object; })(d);
                    if (typeof dd === "string") {
                        return dd;
                    }
                    else {
                        return new DependencyGeneratorProxy_1.DependencyGeneratorProxy(dd);
                    }
                }),
                Recipe: (vars) => specraw.Recipe(vars),
            });
        },
        /**
         * Gets var
         * @param args
         * @returns
         */
        getVar(...args) {
            checkArgs_1.checkArgs(2, args);
            assert_1.ok(args[0] instanceof VarTree_1.VarTree, TypeError("first parameter must be a VarTree"));
            const vt = assertClass_1.assertClass(VarTree_1.VarTree, args[0]);
            const vn = (object => { if (!(typeof object === "string"))
                throw new Error("Type assertion failed.");
            else
                return object; })(args[1]);
            return vt.getVar(vn);
        },
        /**
         * Sets var
         * @param args
         * @returns
         */
        setVar(...args) {
            checkArgs_1.checkArgs(3, args);
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
        },
    },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZFJ1bGVGaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lvL3JlYWRSdWxlRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsbUNBQTRCO0FBQzVCLCtCQUErQjtBQUMvQixpREFBMkM7QUFDM0MsNkJBQXNEO0FBQ3RELHVGQUFvRjtBQUVwRixtREFBZ0Q7QUFDaEQsK0NBQTRDO0FBRzVDLHdDQUFxQztBQUVyQyxzRUFBbUU7QUFDbkUsa0RBQStDO0FBRy9DLE1BQU0sTUFBTSxHQUFrQjtJQUM1QixPQUFPLEVBQUUsU0FBUztJQUNsQixPQUFPLEVBQUU7UUFDUDs7OztXQUlHO1FBQ0gsSUFBSSxDQUFDLEdBQUcsSUFBa0I7WUFDeEIscUJBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkIsTUFBTSxPQUFPOzs7a0NBQTJCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELE9BQU8sV0FBSSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUNqQyxNQUFNLEVBQUU7OzswQ0FBMEMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JELElBQUksT0FBTyxFQUFFLEtBQUssUUFBUSxFQUFFO3dCQUMxQixPQUFPLEVBQUUsQ0FBQztxQkFDWDt5QkFBTTt3QkFDTCxPQUFPLElBQUksdUNBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ25DO2dCQUNILENBQUMsQ0FBQztnQkFDRixZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDM0MsTUFBTSxFQUFFOzs7MENBQXVDLENBQUMsQ0FBQyxDQUFDO29CQUNsRCxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsRUFBRTt3QkFDMUIsT0FBTyxFQUFFLENBQUM7cUJBQ1g7eUJBQU07d0JBQ0wsT0FBTyxJQUFJLG1EQUF3QixDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUN6QztnQkFDSCxDQUFDLENBQUM7Z0JBQ0YsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUN2QyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0Q7Ozs7V0FJRztRQUNILE1BQU0sQ0FBQyxHQUFHLElBQWtCO1lBQzFCLHFCQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25CLFdBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksaUJBQU8sRUFBRSxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1lBQy9FLE1BQU0sRUFBRSxHQUFHLHlCQUFXLENBQVUsaUJBQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxNQUFNLEVBQUU7OztrQ0FBc0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFDRDs7OztXQUlHO1FBQ0gsTUFBTSxDQUFDLEdBQUcsSUFBa0I7WUFDMUIscUJBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkIsV0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxpQkFBTyxFQUFFLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7WUFDL0UsTUFBTSxFQUFFLEdBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sRUFBRTs7O2tDQUFzQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxNQUFNLEVBQUU7OztrQ0FBd0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQixDQUFDO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxRQUFRLEVBQUUsSUFBSTtRQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLFNBQVM7S0FDbkI7SUFDRCxnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsQ0FBQztDQUMvQixDQUFDO0FBQ0YsTUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxjQUFRLENBQUM7Ozs7Q0FJOUIsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUU5QixTQUFnQixZQUFZLENBQUMsR0FBVztJQUN0QyxNQUFNLEVBQUUsR0FBRyxjQUFPLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDM0MsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUhELG9DQUdDIn0=