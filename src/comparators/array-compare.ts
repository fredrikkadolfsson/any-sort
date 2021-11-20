import { aFirst, bFirst } from "../constants";
import type { UnknownArray } from "../types";
import { unknownCompare } from "./unknown-compare";

export const arrayCompare = (
  a: UnknownArray,
  b: UnknownArray,
): 1 | -1 | undefined => {
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
