import { unknownCompare } from "../comparators/unknown-compare";
import { Array_ } from "../types";
import { trueSort } from "./true-sort";

export const arraySort = <T = Array_>(array: T): T =>
  (((array as unknown) as Array_)
    .map((a) => trueSort(a))
    .sort((a, b) => unknownCompare(a, b, 0)) as unknown) as T;
