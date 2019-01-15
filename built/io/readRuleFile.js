"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const vm2_1 = require("vm2");
const Rule_1 = require("../rules/Rule");
const getVar_1 = require("../variables/getVar");
const setVar_1 = require("../variables/setVar");
const vmopts = {
    console: "inherit",
    sandbox: { Rule: Rule_1.Rule, getVar: getVar_1.getVar, setVar: setVar_1.setVar },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZFJ1bGVGaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lvL3JlYWRSdWxlRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsK0JBQStCO0FBQy9CLDZCQUFzRDtBQUN0RCx3Q0FBcUM7QUFDckMsZ0RBQTZDO0FBQzdDLGdEQUE2QztBQUU3QyxNQUFNLE1BQU0sR0FBa0I7SUFDNUIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFKLFdBQUksRUFBRSxNQUFNLEVBQU4sZUFBTSxFQUFFLE1BQU0sRUFBTixlQUFNLEVBQUU7SUFDakMsT0FBTyxFQUFFO1FBQ1AsUUFBUSxFQUFFLElBQUk7UUFDZCxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxTQUFTO0tBQ25CO0lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Q0FDL0IsQ0FBQztBQUNGLE1BQU0sRUFBRSxHQUFHLElBQUksWUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLE1BQU0sU0FBUyxHQUFHLElBQUksY0FBUSxDQUFDOzs7O0NBSTlCLENBQUMsQ0FBQztBQUNILE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFOUIsU0FBZ0IsWUFBWSxDQUFDLEdBQVc7SUFDdEMsTUFBTSxFQUFFLEdBQUcsY0FBTyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNWLENBQUM7QUFIRCxvQ0FHQyJ9