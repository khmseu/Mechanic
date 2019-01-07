"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
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
    assert_1.ok(path.length > 0, "path may not be empty");
    const nn = path_1.normalize(name);
    if (path_1.isAbsolute(name)) {
        const rn = path_1.resolve(name);
        return [rn, path_1.parse(rn).root, nn];
    }
    let c0;
    let d0;
    // tslint:disable-next-line:no-shadowed-variable
    for (const dir of path) {
        const candidate = path_1.resolve(dir, name);
        if (fs_1.existsSync(candidate)) {
            return [candidate, path_1.resolve(dir), nn];
        }
        if (!c0 && !d0) {
            c0 = candidate;
            d0 = dir;
        }
    }
    return [c0, path_1.resolve(d0), nn];
}
exports.pathSearch = pathSearch;
//# sourceMappingURL=pathSearch.js.map