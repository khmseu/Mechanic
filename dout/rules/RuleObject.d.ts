import { CallbackR } from "./common";
import { DAnalysed } from "./dAnalyse";
import { TMAnalysed } from "./tmAnalyse";
export declare class RuleObject {
    targets: TMAnalysed;
    dependencies: DAnalysed;
    recipe: CallbackR;
    constructor(targets: TMAnalysed, dependencies: DAnalysed, recipe: CallbackR);
    matches(target: string): string[] | null;
}
export declare const rules: RuleObject[];
//# sourceMappingURL=RuleObject.d.ts.map