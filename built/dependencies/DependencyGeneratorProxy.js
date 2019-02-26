"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_is_1 = require("typescript-is");
class DependencyGeneratorProxy {
    constructor(jsTM) {
        this.jsTM = jsTM;
    }
    generate(vars) {
        return (object => { if (!(Array.isArray(object) && object.every(item => { return typeof item === "string"; })))
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
exports.DependencyGeneratorProxy = DependencyGeneratorProxy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVwZW5kZW5jeUdlbmVyYXRvclByb3h5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlcGVuZGVuY2llcy9EZXBlbmRlbmN5R2VuZXJhdG9yUHJveHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILGlEQUEyQztBQUszQyxNQUFhLHdCQUF3QjtJQUNuQyxZQUFvQixJQUE2QjtRQUE3QixTQUFJLEdBQUosSUFBSSxDQUF5QjtJQUFHLENBQUM7SUFDOUMsUUFBUSxDQUFDLElBQWE7UUFDM0I7Ozs4QkFBa0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDOUQsQ0FBQztJQUNNLFFBQVE7UUFDYjs7OzhCQUEwQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO0lBQ2xELENBQUM7Q0FDRjtBQVJELDREQVFDIn0=