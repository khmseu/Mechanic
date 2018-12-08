// MIT License
//
// Copyright (c) 2018 Kai Henningsen
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import nanomatch = require("nanomatch");
import { ITargetDetails, ITargetMatcher, TargetSpec } from "./common";

class StringMatcher implements ITargetMatcher {
  private readonly rx: RegExp;
  constructor(m: string) {
    this.rx = nanomatch.makeRe(m, { capture: true });
  }
  public match(_: string, __: string, child: string): ITargetDetails | null {
    return Object.assign({ targets: [] }, this.rx.exec(child));
  }
}

export type TMAnalysed = Array<{ ns: string; matcher: ITargetMatcher }>;

export function tmAnalyse(targets: TargetSpec[]): TMAnalysed {
  const ret: TMAnalysed = [];
  targets.forEach((target) => {
    if (Array.isArray(target)) {
      const [n, m] = target;
      ret.push({ ns: n, matcher: typeof m === "string" ? new StringMatcher(m) : m });
    } else if (typeof target === "string") {
      const m = /^(\w+):(.*)$/.exec(target);
      if (m) {
        ret.push({ ns: m[1], matcher: new StringMatcher(m[2]) });
      } else {
        ret.push({ ns: "", matcher: new StringMatcher(target) });
      }
    } else {
      ret.push({ ns: "", matcher: target });
    }
  });
  return ret;
}
