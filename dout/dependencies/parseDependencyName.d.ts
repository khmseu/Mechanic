/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
/**
 * Parses dependency name
 * @param m
 * @returns
 */
declare function parseDependencyName(m: string): {
    fp: string[];
    rx: string[];
    vr: {
        ns: string;
        name: string;
    }[];
};
//# sourceMappingURL=parseDependencyName.d.ts.map