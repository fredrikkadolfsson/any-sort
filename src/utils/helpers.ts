import { Object_, Sortable_ } from "../types";

export const isObject = (o: unknown): o is Object_ =>
  Boolean(o) && typeof o === "object";

export const isSortable = (s: unknown): s is Sortable_ =>
  typeof s === "bigint" ||
  typeof s === "boolean" ||
  typeof s === "number" ||
  typeof s === "string";

export const sortWeight = (s: unknown): number => {
  switch (typeof s) {
    case "number":
      return 0;
    case "bigint":
      return 1;
    case "boolean":
      return 2;
    case "string":
      return 3;
    default:
      return 100;
  }
};
