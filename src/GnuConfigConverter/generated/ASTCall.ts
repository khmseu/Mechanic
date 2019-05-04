/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export function ASTCall<PE>(pe: (() => PE) | null) {
  return pe ? pe() : null;
}
