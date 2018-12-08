export declare type VarTree = Map<string, Map<string, string>>;
export interface ITargetDetails extends RegExpMatchArray {
    targets: string[];
}
export interface ITargetMatcher {
    match(full: string, parent: string, child: string): ITargetDetails | null;
}
export declare type TargetSpec = string | ITargetMatcher | [string, string | ITargetMatcher];
export interface IDependsGenerator {
    generate(details: ITargetDetails, vars: VarTree): string[];
}
export declare type DependsSpec = string | IDependsGenerator;
export declare type CallbackR = (vars: VarTree) => void;
//# sourceMappingURL=common.d.ts.map