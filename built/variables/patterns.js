"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const identifier = "p{IDS}p{IDC}*";
exports.parseVar = `\\\${(?:(${identifier}):)?(${identifier})`;
exports.testVar = `\\\${(?:(?:${identifier}):)?(?:${identifier}})`;
exports.rexParseAsVar = new RegExp(`^${exports.parseVar}$`);
//# sourceMappingURL=patterns.js.map