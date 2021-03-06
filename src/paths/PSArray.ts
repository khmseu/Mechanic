/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { PSEntry } from "./PSEntry";

export const PSArray: PSEntry[] = [[/^.*$/, [process.env.PATH || "."]]];
