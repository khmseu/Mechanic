import { isFunction } from "util";
import { DependsGen, DependsSpec } from "./common";

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

interface IDObject {
  ns?: string;
  name: string|DependsGen;
}
export type DAnalysed = IDObject[];

export function dAnalyse(depends: DependsSpec[]): DAnalysed {
  const ret: DAnalysed = [];
  depends.forEach((depend) => {
    if (Array.isArray(depend)) {
      ret.push({
        ns: depend[0],
        name: depend[1],
      });
    } else if (isFunction(depend)) {
      ret.push({
        name: depend,
      });
    } else if (typeof(depend) === "string") {
      const m = /^(\w+):(.*)$/.exec(depend);
      if (m) {
        ret.push({
          ns: m[1],
          name: m[2],
        });
      } else {
        ret.push({
          name: depend,
        });
      }
    }
  });
  return ret;
  }
