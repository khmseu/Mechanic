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
//# sourceMappingURL=readRuleFile.js.map