"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_is_1 = require("typescript-is");
class TargetMatcherProxy {
    constructor(jsTM) {
        this.jsTM = jsTM;
    }
    match(vars, full, parent, child) {
        return (object => { if (!(object === null || Array.isArray(object) && object.every(item => { return typeof item === "string"; })))
            throw new Error("Type assertion failed.");
        else
            return object; })(this.jsTM.match(vars, full, parent, child));
    }
    generate(vars) {
        return (object => { if (!(typeof object === "string"))
            throw new Error("Type assertion failed.");
        else
            return object; })(this.jsTM.generate(vars));
    }
    toString() {
        return (object => { if (!(typeof object === "string"))
            throw new Error("Type assertion failed.");
        else
            return object; })(this.jsTM.toString());
    }
}
exports.TargetMatcherProxy = TargetMatcherProxy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFyZ2V0TWF0Y2hlclByb3h5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RhcmdldHMvVGFyZ2V0TWF0Y2hlclByb3h5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxpREFBMkM7QUFLM0MsTUFBYSxrQkFBa0I7SUFDN0IsWUFBb0IsSUFBdUI7UUFBdkIsU0FBSSxHQUFKLElBQUksQ0FBbUI7SUFBRyxDQUFDO0lBQ3hDLEtBQUssQ0FBQyxJQUFhLEVBQUUsSUFBWSxFQUFFLE1BQWMsRUFBRSxLQUFhO1FBQ3JFOzs7OEJBQWtDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQ2hGLENBQUM7SUFDTSxRQUFRLENBQUMsSUFBYTtRQUMzQjs7OzhCQUEwQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUN0RCxDQUFDO0lBQ00sUUFBUTtRQUNiOzs7OEJBQTBCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7SUFDbEQsQ0FBQztDQUNGO0FBWEQsZ0RBV0MifQ==