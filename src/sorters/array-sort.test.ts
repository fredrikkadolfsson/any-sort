import { expectDeepEqual } from "../testUtils/expect-deep-equal";
import { setOptions } from "../utils/options";
import { arraySort } from "./array-sort";

test("simple array with numbers", () => {
  const sortedObject = arraySort([3, 2, 2, 1]);
  expectDeepEqual(sortedObject, [1, 2, 2, 3]);
});

test("simple array with string", () => {
  const sortedObject = arraySort(["3", "2", "2", "1"]);
  expectDeepEqual(sortedObject, ["1", "2", "2", "3"]);
});

test("simple array with objects", () => {
  const sortedObject = arraySort([{ c: 1 }, { b: 1 }, { b: 1 }, { a: 1 }]);
  expectDeepEqual(sortedObject, [{ a: 1 }, { b: 1 }, { b: 1 }, { c: 1 }]);
});

test("simple array with objects different size", () => {
  const sortedObject = arraySort([{ a: 1, c: 1 }, { b: 1 }, { a: 1 }]);
  expectDeepEqual(sortedObject, [{ a: 1 }, { a: 1, c: 1 }, { b: 1 }]);
});

test("simple array with null", () => {
  // eslint-disable-next-line unicorn/no-null
  const sortedObject = arraySort([null, { a: 1 }, null]);
  // eslint-disable-next-line unicorn/no-null
  expectDeepEqual(sortedObject, [{ a: 1 }, null, null]);
});

test("simple array with undefined", () => {
  const sortedObject = arraySort([undefined, { a: 1 }, undefined]);
  expectDeepEqual(sortedObject, [{ a: 1 }, undefined, undefined]);
});

test("simple array with objects sort by prefered key", () => {
  setOptions({ preferedSortKeys: "x" });
  const sortedObject = arraySort([
    { c: 1, x: 3 },
    { b: 1, x: 2 },
    { a: 1, x: 1 },
  ]);
  expectDeepEqual(sortedObject, [
    { x: 1, a: 1 },
    { x: 2, b: 1 },
    { x: 3, c: 1 },
  ]);
  setOptions({});
});

test("simple array with objects sort by prefered keys", () => {
  setOptions({ preferedSortKeys: ["y", "x"] });
  const sortedObject = arraySort([
    { c: 1, x: 3 },
    { b: 1, x: 2 },
    { a: 1, x: 1 },
  ]);
  expectDeepEqual(sortedObject, [
    { x: 1, a: 1 },
    { x: 2, b: 1 },
    { x: 3, c: 1 },
  ]);
  setOptions({});
});

test("simple array with objects sort by prefered keys but one does not contain prefered key", () => {
  setOptions({ preferedSortKeys: ["y", "x"] });
  const sortedObject = arraySort([{ c: 1, x: 3 }, { b: 1, x: 2 }, { a: 1 }]);
  expectDeepEqual(sortedObject, [{ x: 2, b: 1 }, { x: 3, c: 1 }, { a: 1 }]);
  setOptions({});
});
