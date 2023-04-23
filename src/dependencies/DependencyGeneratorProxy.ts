/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { assert } from "typia";
import { VarTree } from "../variables/VarTree";
import { DependencyList } from "./DependencyList";
import {
  IDependencyGenerator,
  IDependencyGeneratorRaw,
} from "./IDependencyGenerator";

export class DependencyGeneratorProxy implements IDependencyGenerator {
  constructor(private jsTM: IDependencyGeneratorRaw) {}
  public generate(vars: VarTree): DependencyList {
    return assert<DependencyList>(this.jsTM.generate.call(vars));
  }
  public toString(): string {
    return assert<string>(this.jsTM.toString.call());
  }
}
