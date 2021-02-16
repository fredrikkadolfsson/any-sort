export const expectDeepEqual = (a: unknown, b: unknown): void =>
  expect(JSON.stringify(a)).toEqual(JSON.stringify(b));
