import { getOptions, setOptions } from "./options";

test("able to set and reset options", () => {
  expect(getOptions()).toEqual({});
  setOptions({ preferedSortKeys: "option" });
  expect(getOptions()).toEqual({ preferedSortKeys: "option" });
  setOptions({});
  expect(getOptions()).toEqual({});
});
