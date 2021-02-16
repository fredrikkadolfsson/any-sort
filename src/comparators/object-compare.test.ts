import { aFirst, bFirst } from "../constants";
import { expectDeepEqual } from "../testUtils/expect-deep-equal";
import { setOptions } from "../utils/options";
import { objectCompare } from "./object-compare";

test("empty objecty", () => {
  const sortedObject = objectCompare({}, {});
  expectDeepEqual(sortedObject, undefined);
});

test("equal objecty", () => {
  const sortedObject = objectCompare({ a: 1, b: 2 }, { a: 1, b: 2 });
  expectDeepEqual(sortedObject, undefined);
});

test("sort object by prefered key", () => {
  setOptions({ preferedSortKeys: "b" });
  const sortedObject = objectCompare({ a: 1, b: 2 }, { a: 1, b: 3 });
  expectDeepEqual(sortedObject, aFirst);
  setOptions({});
});

test("sort object by key", () => {
  const sortedObject = objectCompare({ b: 2 }, { a: 1, b: 3 });
  expectDeepEqual(sortedObject, bFirst);
});

test("sort object by key", () => {
  const sortedObject = objectCompare({ b: 2 }, { b: 3 });
  expectDeepEqual(sortedObject, aFirst);
});
