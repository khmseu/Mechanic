/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IParsedName } from "./IParsedName";
/**
 * Parses raw name
 *
 * @param rawName
 * Names consist of literal text interspersed with special sequences
 * - `%` is a wildcard
 * - `${ns:name}` is a variable to interpolate
 * - `${name}` is the same in a default namespace
 * - or the whole string could match `#${ns:name}` or `#${name}` which means the variable itself
 *
 * `ns` and `name` must match `\p{IDS}\p{IDC}*`, unless in the default namespace when `name` can also match `^\d+$`
 *
 * Names matching `\p{Upper}+` are reserved
 *
 * @returns
 */
export declare function parseRawName(rawName: string): IParsedName;
//# sourceMappingURL=parseRawName.d.ts.map