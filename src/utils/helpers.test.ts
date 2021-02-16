import { isObject, isSortable } from "./helpers";

test("empty object is an object", () => {
  expect(isObject({})).toBe(true);
});

test("object with content is an object", () => {
  expect(isObject({ test: 1 })).toBe(true);
});

test("null is not an object", () => {
  // eslint-disable-next-line unicorn/no-null
  expect(isObject(null)).toBe(false);
});

test("undefined is not an object", () => {
  expect(isObject(undefined)).toBe(false);
});

test("string is not an object", () => {
  expect(isObject("string")).toBe(false);
});

test("number is not an object", () => {
  expect(isObject(100)).toBe(false);
});

test("boolean is not an object", () => {
  expect(isObject(false)).toBe(false);
});

test("empty object is not sorable", () => {
  expect(isSortable({})).toBe(false);
});

test("object with content is not sortable", () => {
  expect(isSortable({ test: 1 })).toBe(false);
});

test("is not sortable", () => {
  // eslint-disable-next-line unicorn/no-null
  expect(isSortable(null)).toBe(false);
});

test("undefined is not sorable", () => {
  expect(isSortable(undefined)).toBe(false);
});

test("string is sortable", () => {
  expect(isSortable("string")).toBe(true);
});

test("number is sortable", () => {
  expect(isSortable(100)).toBe(true);
});

test("boolean is sortable", () => {
  expect(isSortable(true)).toBe(true);
});
