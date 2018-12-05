declare type VarTree = Map<string, Map<string, string>>;
declare type TargetMatcher = (candidate: string) => (string[] | null);
declare type TargetSpec = string | RegExp | TargetMatcher | [string, string | RegExp];
declare type DependsGen = (vars: VarTree) => (TargetSpec);
declare type DependsSpec = string | DependsGen | [string, string];
declare type CallbackR = (vars: VarTree) => void;
export declare const Rule: (spec: {
    Targets: TargetSpec[];
    Dependencies: DependsSpec[];
    Recipe: CallbackR;
}) => void;
export {};
//# sourceMappingURL=rules.d.ts.map