"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Visitor {
    constructor() {
        this.actions = {};
    }
    visit(item) {
        return this.actions[item.actionKey()].visit(item);
    }
}
exports.Visitor = Visitor;
// tslint:disable-next-line:max-classes-per-file
class Z {
    constructor() {
        this.z = () => { };
    }
}
// tslint:disable-next-line:max-classes-per-file
class X {
}
let x = {};
x.y = new Z();
x.y.z = () => { };
x = x;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlzaXRvclBhdHRlcm4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL1Zpc2l0b3JQYXR0ZXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFXSCxNQUFhLE9BQU87SUFBcEI7UUFDUyxZQUFPLEdBQWdDLEVBQUUsQ0FBQztJQUluRCxDQUFDO0lBSFEsS0FBSyxDQUFDLElBQW9CO1FBQy9CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGO0FBTEQsMEJBS0M7QUFFRCxnREFBZ0Q7QUFDaEQsTUFBTSxDQUFDO0lBQVA7UUFDUyxNQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FBQTtBQUNELGdEQUFnRDtBQUNoRCxNQUFNLENBQUM7Q0FFTjtBQUNELElBQUksQ0FBQyxHQUFNLEVBQUUsQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUNqQixDQUFDLEdBQUcsQ0FBQyxDQUFDIn0=