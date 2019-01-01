"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const DependencyStringGenerator_1 = require("./DependencyStringGenerator");
/**
 * Analyses dependency spec
 * @param depends
 * @returns dependency spec
 */
function analyseDependencySpec(depends) {
    const ret = [];
    depends.forEach((depend) => {
        if (typeof depend === "string") {
            ret.push({ generator: new DependencyStringGenerator_1.DependencyStringGenerator(depend) });
        }
        else {
            ret.push({ generator: depend });
        }
    });
    return ret;
}
exports.analyseDependencySpec = analyseDependencySpec;
//# sourceMappingURL=analyseDependencySpec.js.map