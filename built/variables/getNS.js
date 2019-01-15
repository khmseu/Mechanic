"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
function getNS(vt, ns) {
    const vn = vt[ns ? ns : "DEFAULT"];
    assert_1.ok(vn, "No such namespace " + ns);
    return vn;
}
exports.getNS = getNS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TlMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmFyaWFibGVzL2dldE5TLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxtQ0FBNEI7QUFHNUIsU0FBZ0IsS0FBSyxDQUFDLEVBQVcsRUFBRSxFQUFVO0lBQzNDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsV0FBRSxDQUFDLEVBQUUsRUFBRSxvQkFBb0IsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNsQyxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUM7QUFKRCxzQkFJQyJ9