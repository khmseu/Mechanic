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
function analyseDependencySpecs(depends) {
    const ret = [];
    depends.forEach((depend) => {
        if (typeof depend === "string") {
            ret.push(new DependencyStringGenerator_1.DependencyStringGenerator(depend));
        }
        else {
            ret.push(depend);
        }
    });
    return ret;
}
exports.analyseDependencySpecs = analyseDependencySpecs;
//# sourceMappingURL=analyseDependencySpecs.js.map