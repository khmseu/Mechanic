export declare type VarTree = Map<string, Map<string, string>>;
export declare type TargetMatcher = (candidate: string) => (string[] | null);
export declare type TargetSpec = string | RegExp | TargetMatcher | [string, string | RegExp];
export declare type DependsGen = (vars: VarTree) => (TargetSpec);
export declare type DependsSpec = string | DependsGen | [string, string];
export declare type CallbackR = (vars: VarTree) => void;
//# sourceMappingURL=common.d.ts.map