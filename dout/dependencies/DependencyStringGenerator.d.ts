/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { VarTree } from "../variables/VarTree";
import { DependencyList } from "./DependencyList";
import { IDependencyGenerator } from "./IDependencyGenerator";
/**
 * Dependency string matcher
 */
export declare class DependencyStringGenerator implements IDependencyGenerator {
    private readonly rawName;
    /**
     * Parsed  of dependency string generator
     */
    private parsed;
    /**
     * Creates an instance of dependency string generator.
     * @param rawName
     */
    constructor(rawName: string);
    /**
     * Generates dependency string matcher
     * @param vars
     * @returns generate
     */
    generate(vars: VarTree): DependencyList;
    /**
     * To string
     * @returns string
     */
    toString(): string;
}
//# sourceMappingURL=DependencyStringGenerator.d.ts.map