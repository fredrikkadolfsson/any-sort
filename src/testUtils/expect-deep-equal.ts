export const expectDeepEqual = (a: unknown, b: unknown) =>
  expect(JSON.stringify(a)).toEqual(JSON.stringify(b));
