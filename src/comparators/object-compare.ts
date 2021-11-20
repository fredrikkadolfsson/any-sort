import { aFirst, bFirst } from "../constants";
import type { Object_ } from "../types";
import { getOptions } from "../utils/options";
import { arrayCompare } from "./array-compare";
import { unknownCompare } from "./unknown-compare";

const byPreferedKeys = (a: Object_, b: Object_) => {
  const { preferedSortKeys: preferedSortKeys_ } = getOptions();

  if (preferedSortKeys_ !== undefined) {
    const preferedSortKeys = Array.isArray(preferedSortKeys_)
      ? preferedSortKeys_
      : [preferedSortKeys_];

    for (const preferedSortKey of preferedSortKeys) {
      if (preferedSortKey in a && preferedSortKey in b) {
        const aValue = a[preferedSortKey];
        const bValue = b[preferedSortKey];

        const sortOrder = unknownCompare(aValue, bValue, undefined);
        if (sortOrder !== undefined) {
          return sortOrder;
        }
      } else if (preferedSortKey in a) {
        return aFirst;
      } else if (preferedSortKey in b) {
        return bFirst;
      }
    }
  }

  return;
};

const byKey = (a: Object_, b: Object_) => {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  return arrayCompare(aKeys, bKeys);
};

const byValue = (a: Object_, b: Object_) => {
  const aValues = Object.values(a);
  const bValues = Object.values(b);

  return arrayCompare(aValues, bValues);
};

export const objectCompare = (a: Object_, b: Object_): 1 | -1 | undefined =>
  byPreferedKeys(a, b) ?? byKey(a, b) ?? byValue(a, b);
