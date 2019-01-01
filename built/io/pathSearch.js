"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
/**
 * Paths search
 * modified from path-search module
 * @param path
 * @param name
 * @returns search
 */
function pathSearch(path, name) {
    const triple = (dir) => {
        if (path_1.isAbsolute(name)) {
            return [path_1.resolve(name), path_1.parse(name).root, path_1.normalize(name)];
        }
        return [path_1.resolve(dir, name), path_1.resolve(dir), path_1.normalize(name)];
    };
    if (path_1.isAbsolute(name)) {
        return triple("");
    }
    for (const dir of path) {
        const candidate = path_1.resolve(dir, name);
        if (fs_1.existsSync(candidate)) {
            return triple(dir);
        }
    }
    return triple(path[0]);
}
exports.pathSearch = pathSearch;
//# sourceMappingURL=pathSearch.js.map