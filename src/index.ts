import type { Options } from "./utils/options";
import { setOptions } from "./utils/options";
import { trueSort as trueSort_ } from "./sorters/true-sort";

export const trueSort = <T>(data: T, options?: Options) => {
  if (options !== undefined) {
    setOptions(options);
  }
  return trueSort_(data);
};

export default trueSort;
