/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { VarTree } from "../variables/VarTree";
import { DependencyList } from "./DependencyList";
import { DataOrCallable } from "../utils/DataOrCallable";
/**
 * Idependency generator
 */
export interface IDependencyGenerator {
    /**
     *
     * @param vars
     * @returns generate
     */
    generate(vars: VarTree): DependencyList;
    /**
     *
     * @returns string
     */
    toString(): string;
}
export interface IDependencyGeneratorRaw {
    generate: DataOrCallable;
    toString: DataOrCallable;
}
//# sourceMappingURL=IDependencyGenerator.d.ts.map