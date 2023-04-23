"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetMatcherProxy = void 0;
const typia_1 = require("typia");
class TargetMatcherProxy {
    constructor(jsTM) {
        this.jsTM = jsTM;
    }
    match(vars, full, parent, child) {
        return (input => {
            const $guard = typia_1.assert.guard;
            const __is = input => {
                return null === input || Array.isArray(input) && input.every(elem => "string" === typeof elem);
            };
            if (false === __is(input))
                ((input, _path, _exceptionable = true) => {
                    return null === input || (Array.isArray(input) || $guard(true, {
                        path: _path + "",
                        expected: "(Array<string> | null)",
                        value: input
                    })) && input.every((elem, _index1) => "string" === typeof elem || $guard(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: "string",
                        value: elem
                    }));
                })(input, "$input", true);
            return input;
        })(this.jsTM.match(vars, full, parent, child));
    }
    generate(vars) {
        return (input => {
            const $guard = typia_1.assert.guard;
            const __is = input => {
                return "string" === typeof input;
            };
            if (false === __is(input))
                ((input, _path, _exceptionable = true) => {
                    return "string" === typeof input || $guard(true, {
                        path: _path + "",
                        expected: "string",
                        value: input
                    });
                })(input, "$input", true);
            return input;
        })(this.jsTM.generate(vars));
    }
    toString() {
        return (input => {
            const $guard = typia_1.assert.guard;
            const __is = input => {
                return "string" === typeof input;
            };
            if (false === __is(input))
                ((input, _path, _exceptionable = true) => {
                    return "string" === typeof input || $guard(true, {
                        path: _path + "",
                        expected: "string",
                        value: input
                    });
                })(input, "$input", true);
            return input;
        })(this.jsTM.toString());
    }
}
exports.TargetMatcherProxy = TargetMatcherProxy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFyZ2V0TWF0Y2hlclByb3h5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RhcmdldHMvVGFyZ2V0TWF0Y2hlclByb3h5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7O0FBRUgsaUNBQStCO0FBSy9CLE1BQWEsa0JBQWtCO0lBQzdCLFlBQW9CLElBQXVCO1FBQXZCLFNBQUksR0FBSixJQUFJLENBQW1CO0lBQUcsQ0FBQztJQUN4QyxLQUFLLENBQ1YsSUFBYSxFQUNiLElBQVksRUFDWixNQUFjLEVBQ2QsS0FBYTtRQUViOzJCQUFPLGNBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O1dBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQzVFLENBQUM7SUFDTSxRQUFRLENBQUMsSUFBYTtRQUMzQjsyQkFBTyxjQUFNOzs7Ozs7Ozs7Ozs7O1dBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDbEQsQ0FBQztJQUNNLFFBQVE7UUFDYjsyQkFBTyxjQUFNOzs7Ozs7Ozs7Ozs7O1dBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtJQUM5QyxDQUFDO0NBQ0Y7QUFoQkQsZ0RBZ0JDIn0=