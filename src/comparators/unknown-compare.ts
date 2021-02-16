import { aFirst, bFirst } from "../constants";
import { isObject, isSortable, sortWeight } from "../utils/helpers";
import { arrayCompare } from "./array-compare";
import { objectCompare } from "./object-compare";

export const unknownCompare = <T = undefined>(
  a: unknown,
  b: unknown,
  fallbackValue: T,
): T | 1 | -1 => {
  if (a === b) {
    return fallbackValue;
  }

  if (a === null) {
    return bFirst;
  }
  if (b === null) {
    return aFirst;
  }

  if (typeof a === typeof b) {
    if (isSortable(a) && isSortable(b)) {
      return a < b ? aFirst : bFirst;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
      return arrayCompare(a, b) ?? fallbackValue;
    }
    if (isObject(a) && isObject(b)) {
      return objectCompare(a, b) ?? fallbackValue;
    }

    return fallbackValue;
  }

  return sortWeight(a) < sortWeight(b) ? aFirst : bFirst;
};
