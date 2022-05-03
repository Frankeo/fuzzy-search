import { isString } from "../utils/string";
import { Loader } from "./interface";

export class ListLoader implements Loader {
  canResolve(arg: any): boolean {
    return Array.isArray(arg) && arg.every((elem) => isString(elem));
  }

  load(arg: any): string[] {
    return arg as string[];
  }
}
