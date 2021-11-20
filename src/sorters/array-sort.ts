import { unknownCompare } from "../comparators/unknown-compare";
import type { UnknownArray } from "../types";
import { trueSort } from "./true-sort";

export const arraySort = <T extends UnknownArray>(array: T): T =>
  array
    .map((a) => trueSort(a))
    .sort((a, b) => unknownCompare(a, b, 0)) as unknown as T;
