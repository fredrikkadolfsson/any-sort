import { aFirst, bFirst } from "../constants";
import type { Array_ } from "../types";
import { unknownCompare } from "./unknown-compare";

export const arrayCompare = (a: Array_, b: Array_): 1 | -1 | undefined => {
  for (const [index, aValue] of a.entries()) {
    const bValue = b[index];
    if (bValue === undefined) {
      return bFirst;
    }
    const sortOrder = unknownCompare(aValue, bValue, undefined);
    if (sortOrder !== undefined) {
      return sortOrder;
    }
  }

  if (b[a.length] !== undefined) {
    return aFirst;
  }

  return;
};
