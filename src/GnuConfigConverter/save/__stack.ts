/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export function __stack() {
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
  return stack as any;
}
