import { TargetMatcher, TargetSpec } from "./common";
declare class TMObject {
    ns: string | null;
    name: string | RegExp | TargetMatcher;
    constructor(ns: string | null, name: string | RegExp | TargetMatcher);
    match(target: string): string[] | null;
}
export declare type TMAnalysed = TMObject[];
export declare function tmAnalyse(targets: TargetSpec[]): TMAnalysed;
export {};
//# sourceMappingURL=tmAnalyse.d.ts.map