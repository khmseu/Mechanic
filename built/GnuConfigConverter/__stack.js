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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvX19zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsU0FBZ0IsT0FBTztJQUNyQixNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7SUFDekMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztJQUN0QyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDbkMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLENBQUM7SUFDRixLQUFLLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztJQUNqQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQ3hCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNsRCxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7SUFDbkMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7SUFDaEMsT0FBTyxLQUFZLENBQUM7QUFDdEIsQ0FBQztBQWJELDBCQWFDIn0=