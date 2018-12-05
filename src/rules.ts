import {isFunction, isRegExp} from "util";

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

// import { promisify } from "util";

type VarTree = Map<string, Map<string, string>>;
type TargetMatcher = (candidate: string) => (string[]|null);
type TargetSpec = string|RegExp|TargetMatcher|[string, string | RegExp];
class TMObject {
  constructor(
      public ns: string|null, public name: string|RegExp|TargetMatcher) {}
  public match(target: string): string[]|null {
      if (isFunction(this.name)) {
          return (this.name as TargetMatcher)(target);
      } else if (isRegExp(this.name)) {
          return this.name.exec(target);
      } else if (typeof(name) === "string") {
          return name === target ? [target] : null;
      } else {
          return null;
      }
  }
}
type TMAnalysed = TMObject[];

type DependsGen = (vars: VarTree) => (TargetSpec);
type DependsSpec = string|DependsGen|[string, string];
interface IDObject {
  ns?: string;
  name: string|DependsGen;
}
type DAnalysed = IDObject[];

type CallbackR = (vars: VarTree) => void;

// tslint:disable-next-line:max-classes-per-file
class RuleObject {
  constructor(
      public targets: TMAnalysed, public dependencies: DAnalysed,
      public recipe: CallbackR) {}
  public matches(target: string): boolean {
    this.targets.forEach((element) => {
      const groups = element.match(target);
    });
    return true;
  }
  }

const rules: RuleObject[] = [];

function tmAnalyse(targets: TargetSpec[]): TMAnalysed {
  const ret: TMAnalysed = [];
  targets.forEach((target) => {
    if (Array.isArray(target)) {
      ret.push(new TMObject(target[0], target[1]));
    } else if (isFunction(target)) {
      ret.push(new TMObject(null, target));
    } else if (isRegExp(target)) {
      ret.push(new TMObject(null, target));
    } else if (typeof(target) === "string") {
      const m = /^(\w+):(.*)$/.exec(target);
      if (m) {
        ret.push(new TMObject(m[1], m[2]));
      } else {
        ret.push(new TMObject(null, target));
      }
    }
  });
  return ret;
  }

function dAnalyse(depends: DependsSpec[]): DAnalysed {
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

export const Rule = (spec: {
  Targets: TargetSpec[]; Dependencies: DependsSpec[]; Recipe: CallbackR;
}) => {
  const t = tmAnalyse(spec.Targets);
  const d = dAnalyse(spec.Dependencies);
  rules.push(new RuleObject(t, d, spec.Recipe));
};
