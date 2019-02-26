/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { VarTree } from "../variables/VarTree";
import { DependencyList } from "./DependencyList";
import { IDependencyGenerator, IDependencyGeneratorRaw } from "./IDependencyGenerator";
export declare class DependencyGeneratorProxy implements IDependencyGenerator {
    private jsTM;
    constructor(jsTM: IDependencyGeneratorRaw);
    generate(vars: VarTree): DependencyList;
    toString(): string;
}
//# sourceMappingURL=DependencyGeneratorProxy.d.ts.map