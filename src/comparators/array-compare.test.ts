import { aFirst, bFirst } from "../constants";
import { expectDeepEqual } from "../testUtils/expect-deep-equal";
import { arrayCompare } from "./array-compare";

test("empty array", () => {
  const sortedArray = arrayCompare([], []);
  expectDeepEqual(sortedArray, undefined);
});

test("array with numbers", () => {
  const sortedArray = arrayCompare([1, 2], [2, 1]);
  expectDeepEqual(sortedArray, aFirst);
});

test("with strings", () => {
  const sortedArray = arrayCompare(["1", "2"], ["2", "1"]);
  expectDeepEqual(sortedArray, aFirst);
});

test("with booleans", () => {
  const sortedArray = arrayCompare([true, false], [false, true]);
  expectDeepEqual(sortedArray, bFirst);
});

test("with strings and b is shorter", () => {
  const sortedArray = arrayCompare(["1", "2", "3"], ["1", "2"]);
  expectDeepEqual(sortedArray, bFirst);
});

test("with strings and a is shorter", () => {
  const sortedArray = arrayCompare(["3", "2"], ["3", "2", "1"]);
  expectDeepEqual(sortedArray, aFirst);
});
