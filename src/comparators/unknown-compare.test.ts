import { aFirst, bFirst } from "../constants";
import { unknownCompare } from "./unknown-compare";

test("returns fallbackValue when equal", () => {
  expect(unknownCompare("", "", 0)).toEqual(0);
  expect(unknownCompare("", "", undefined)).toEqual(undefined);
  expect(unknownCompare("", "", "fallbackValue")).toEqual("fallbackValue");
});

describe("equal values return zero", () => {
  test("string", () => {
    expect(unknownCompare("test", "test", 0)).toEqual(0);
  });

  test("numbers", () => {
    expect(unknownCompare(1, 1, 0)).toEqual(0);
  });

  test("empty object", () => {
    expect(unknownCompare({}, {}, 0)).toEqual(0);
  });

  test("object", () => {
    expect(unknownCompare({ a: 1 }, { a: 1 }, 0)).toEqual(0);
  });

  test("empty array", () => {
    expect(unknownCompare([], [], 0)).toEqual(0);
  });

  test("array", () => {
    expect(unknownCompare(["1", 2], ["1", 2], 0)).toEqual(0);
  });

  test("null", () => {
    // eslint-disable-next-line unicorn/no-null
    expect(unknownCompare(null, null, 0)).toEqual(0);
  });

  test("undefined", () => {
    expect(unknownCompare(undefined, undefined, 0)).toEqual(0);
  });
});

describe("sort equal types", () => {
  test("numbers", () => {
    expect(unknownCompare(1, 2, 0)).toEqual(aFirst);
  });

  test("strings", () => {
    expect(unknownCompare("a", "b", 0)).toEqual(aFirst);
  });

  test("boolean", () => {
    expect(unknownCompare(true, false, 0)).toEqual(bFirst);
  });

  test("array with numbers", () => {
    expect(unknownCompare([1], [0], 0)).toEqual(bFirst);
  });

  test("array with strings", () => {
    expect(unknownCompare(["1"], ["0"], 0)).toEqual(bFirst);
  });
});

describe("order", () => {
  test("number before string", () => {
    expect(unknownCompare(0, "0", 0)).toEqual(aFirst);
  });

  test("boolean before string", () => {
    expect(unknownCompare("0", true, 0)).toEqual(bFirst);
  });
  test("number before boolean", () => {
    expect(unknownCompare(false, 1, 0)).toEqual(bFirst);
  });
});

describe("null", () => {
  test("equal retuns zero", () => {
    // eslint-disable-next-line unicorn/no-null
    expect(unknownCompare(null, null, 0)).toEqual(0);
  });

  test("if a is null sort it last", () => {
    // eslint-disable-next-line unicorn/no-null
    expect(unknownCompare(null, 1, 0)).toEqual(bFirst);
  });

  test("if b is null sort it last", () => {
    // eslint-disable-next-line unicorn/no-null
    expect(unknownCompare(1, null, 0)).toEqual(aFirst);
  });

  test("if b is null sort it last", () => {
    // eslint-disable-next-line unicorn/no-null
    expect(unknownCompare(undefined, null, 0)).toEqual(aFirst);
  });
});

describe("undefined", () => {
  test("equal retuns zero", () => {
    expect(unknownCompare(undefined, undefined, 0)).toEqual(0);
  });

  test("if a is undefined sort it last", () => {
    expect(unknownCompare(undefined, 1, 0)).toEqual(bFirst);
  });

  test("if b is undefined sort it last", () => {
    expect(unknownCompare(1, undefined, 0)).toEqual(aFirst);
  });

  test("if b is undefined but a is null sort b first", () => {
    // eslint-disable-next-line unicorn/no-null
    expect(unknownCompare(null, undefined, 0)).toEqual(bFirst);
  });
});
