/* eslint-disable unicorn/no-null */
import { expectDeepEqual } from "../testUtils/expect-deep-equal";
import { setOptions } from "../utils/options";
import { objectSort } from "./object-sort";

test("simple object", () => {
  const sortedObject = objectSort({
    c: 1,
    b: 1,
    a: 1,
  });
  expectDeepEqual(sortedObject, {
    a: 1,
    b: 1,
    c: 1,
  });
});

test("nested object", () => {
  const sortedObject = objectSort({
    c: 1,
    b: 1,
    a: {
      a: 1,
      c: 1,
      b: {
        b: 1,
        c: 1,
        a: 1,
      },
    },
  });
  expectDeepEqual(sortedObject, {
    a: {
      a: 1,
      b: {
        a: 1,
        b: 1,
        c: 1,
      },
      c: 1,
    },
    b: 1,
    c: 1,
  });
});

test("nested object", () => {
  setOptions({ preferedSortKeys: "name" });
  const sortedObject = objectSort({
    __schema: {
      queryType: null,
      mutationType: null,
      subscriptionType: null,
      types: null,
      directives: null,
    },
  });
  expectDeepEqual(sortedObject, {
    __schema: {
      directives: null,
      mutationType: null,
      queryType: null,
      subscriptionType: null,
      types: null,
    },
  });
});
