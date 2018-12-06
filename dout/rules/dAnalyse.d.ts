import { DependsGen, DependsSpec } from "./common";
interface IDObject {
    ns?: string;
    name: string | DependsGen;
}
export declare type DAnalysed = IDObject[];
export declare function dAnalyse(depends: DependsSpec[]): DAnalysed;
export {};
//# sourceMappingURL=dAnalyse.d.ts.map