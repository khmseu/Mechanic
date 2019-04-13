/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
export interface IVisitableItem {
    actionKey(): string;
}
interface IDoVisit {
    visitBefore(item: IVisitableItem): void;
    visitAfter(item: IVisitableItem): void;
}
export declare class Visitor {
    actions: {
        [key: string]: IDoVisit;
    };
    visit(item: IVisitableItem): any;
}
export {};
//# sourceMappingURL=VisitorPattern.d.ts.map