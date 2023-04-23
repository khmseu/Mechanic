"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyGeneratorProxy = void 0;
const typia_1 = require("typia");
class DependencyGeneratorProxy {
    constructor(jsTM) {
        this.jsTM = jsTM;
    }
    generate(vars) {
        return (input => {
            const $guard = typia_1.assert.guard;
            const __is = input => {
                return Array.isArray(input) && input.every(elem => "string" === typeof elem);
            };
            if (false === __is(input))
                ((input, _path, _exceptionable = true) => {
                    return (Array.isArray(input) || $guard(true, {
                        path: _path + "",
                        expected: "Array<string>",
                        value: input
                    })) && input.every((elem, _index1) => "string" === typeof elem || $guard(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: "string",
                        value: elem
                    }));
                })(input, "$input", true);
            return input;
        })(this.jsTM.generate.call(vars));
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
        })(this.jsTM.toString.call());
    }
}
exports.DependencyGeneratorProxy = DependencyGeneratorProxy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVwZW5kZW5jeUdlbmVyYXRvclByb3h5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlcGVuZGVuY2llcy9EZXBlbmRlbmN5R2VuZXJhdG9yUHJveHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOzs7QUFFSCxpQ0FBK0I7QUFRL0IsTUFBYSx3QkFBd0I7SUFDbkMsWUFBb0IsSUFBNkI7UUFBN0IsU0FBSSxHQUFKLElBQUksQ0FBeUI7SUFBRyxDQUFDO0lBQzlDLFFBQVEsQ0FBQyxJQUFhO1FBQzNCOzJCQUFPLGNBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O1dBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUMvRCxDQUFDO0lBQ00sUUFBUTtRQUNiOzJCQUFPLGNBQU07Ozs7Ozs7Ozs7Ozs7V0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUNuRCxDQUFDO0NBQ0Y7QUFSRCw0REFRQyJ9