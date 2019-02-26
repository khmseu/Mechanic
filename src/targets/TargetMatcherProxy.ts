/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { assertType } from "typescript-is";
import { VarTree } from "../variables/VarTree";
import { ITargetDetails } from "./ITargetDetails";
import { ITargetMatcher, ITargetMatcherRaw } from "./ITargetMatcher";

export class TargetMatcherProxy implements ITargetMatcher {
  constructor(private jsTM: ITargetMatcherRaw) {}
  public match(vars: VarTree, full: string, parent: string, child: string): ITargetDetails {
    return assertType<ITargetDetails>(this.jsTM.match(vars, full, parent, child));
  }
  public generate(vars: VarTree): string {
    return assertType<string>(this.jsTM.generate(vars));
  }
  public toString(): string {
    return assertType<string>(this.jsTM.toString());
  }
}
