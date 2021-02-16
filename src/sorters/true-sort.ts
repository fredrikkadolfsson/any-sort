import { isObject } from "../utils/helpers";
import { arraySort } from "./array-sort";
import { objectSort } from "./object-sort";

export const trueSort = <T>(data: T): T => {
  if (Array.isArray(data)) {
    return arraySort(data);
  }
  if (isObject(data)) {
    return objectSort(data);
  }
  return data;
};
