import { aFirst, bFirst, unchanged } from "../constants";
import type { UnknownObject } from "../types";
import { getOptions } from "../utils/options";
import { trueSort } from "./true-sort";

export const objectSort = <T = UnknownObject>(object: T): T => {
  const newData: UnknownObject = {};
  for (const key of (Object.keys(object) as Array<keyof T>).sort((a, b) => {
    const { preferedSortKeys } = getOptions();
    const aIndex = preferedSortKeys?.indexOf(a as string) ?? -1;
    const bIndex = preferedSortKeys?.indexOf(b as string) ?? -1;

    if (aIndex >= 0 && bIndex >= 0) {
      return aIndex < bIndex ? aFirst : bFirst;
    }
    if (aIndex >= 0) {
      return aFirst;
    }
    if (bIndex >= 0) {
      return bFirst;
    }

    if (a < b) {
      return aFirst;
    }
    if (a > b) {
      return bFirst;
    }
    return unchanged;
  })) {
    newData[key] = trueSort(object[key]);
  }
  return newData as T;
};
