import { trueSort } from "./true-sort";
import { expectDeepEqual } from "../testUtils/expect-deep-equal";
import example from "../testUtils/example.json";
import exampleSorted from "../testUtils/example.sorted.json";
import exampleSortedName from "../testUtils/example.sorted.name.json";
import { setOptions } from "../utils/options";

test("empty object", () => {
  const trulySorted = trueSort({});
  expectDeepEqual(trulySorted, {});
});

test("empty array", () => {
  const trulySorted = trueSort([]);
  expectDeepEqual(trulySorted, []);
});

test("empty string", () => {
  const trulySorted = trueSort("");
  expectDeepEqual(trulySorted, "");
});

test("number", () => {
  const trulySorted = trueSort(1);
  expectDeepEqual(trulySorted, 1);
});

test("boolean", () => {
  const trulySorted = trueSort(true);
  expectDeepEqual(trulySorted, true);
});

test("undefined", () => {
  const trulySorted = trueSort(undefined);
  expectDeepEqual(trulySorted, undefined);
});

test("advanced", () => {
  const trulySorted = trueSort(example);
  expectDeepEqual(trulySorted, exampleSorted);
});

test("advanced by preferedSortKeys", () => {
  setOptions({ preferedSortKeys: "name" });
  const trulySorted = trueSort(example);
  expectDeepEqual(trulySorted, exampleSortedName);
  setOptions({});
});
