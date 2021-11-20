import { trueSort } from ".";
import { expectDeepEqual } from "./testUtils/expect-deep-equal";
import example from "./testUtils/example.json";
import exampleSorted from "./testUtils/example.sorted.json";
import exampleSortedName from "./testUtils/example.sorted.name.json";
import { setOptions } from "./utils/options";

test("Sorts without optins", () => {
  const trulySorted = trueSort(example);
  expectDeepEqual(trulySorted, exampleSorted);
});

test("sorts with option of preferedSortKeys", () => {
  setOptions({ preferedSortKeys: "name" });
  const trulySorted = trueSort(example);
  expectDeepEqual(trulySorted, exampleSortedName);
});
