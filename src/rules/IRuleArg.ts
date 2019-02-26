/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { DependencySpecList } from "../dependencies/DependencySpecList";
import { DataFromJS } from "../js/DataFromJS";
import { TargetSpecList } from "../targets/TargetSpecList";
import { CallbackR } from "./CallbackR";

export interface IRuleArg {
  Targets: TargetSpecList;
  Dependencies: DependencySpecList;
  Recipe: CallbackR;
}

export interface IRuleArgRaw {
  Targets: DataFromJS[];
  Dependencies: DataFromJS[];
  Recipe: DataFromJS;
}
