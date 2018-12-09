/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

// tslint:disable-next-line:interface-over-type-literal
export type VarTree = {
  [ns: string]:
    | {
        [vn: string]: string | undefined;
      }
    | undefined;
};

export type ITargetDetails = string[];
export interface ITargetMatcher {
  match(full: string, parent: string, child: string): ITargetDetails | null;
  generate(vars: VarTree): string;
  toString(): string;
}
export type TargetSpec = string | ITargetMatcher | [string, string | ITargetMatcher];

export interface IDependencyGenerator {
  generate(vars: VarTree): string[];
}
export type DependencySpec = string | IDependencyGenerator;

export type CallbackR = (vars: VarTree) => void;
