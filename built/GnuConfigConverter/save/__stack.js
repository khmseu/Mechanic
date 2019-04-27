"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
function __stack() {
    const origPrep = Error.prepareStackTrace;
    const origLim = Error.stackTraceLimit;
    Error.prepareStackTrace = (_, stk) => {
        return stk;
    };
    Error.stackTraceLimit = Infinity;
    const err = new Error();
    Error.captureStackTrace(err /*arguments.callee*/);
    const { stack } = err;
    Error.prepareStackTrace = origPrep;
    Error.stackTraceLimit = origLim;
    return stack;
}
exports.__stack = __stack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvc2F2ZS9fX3N0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxTQUFnQixPQUFPO0lBQ3JCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztJQUN6QyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO0lBQ3RDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNuQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQztJQUNGLEtBQUssQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO0lBQ2pDLE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDeEIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDdEIsS0FBSyxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQztJQUNuQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztJQUNoQyxPQUFPLEtBQVksQ0FBQztBQUN0QixDQUFDO0FBYkQsMEJBYUMifQ==