import { parseArguments } from "./cli-arguments";

const path = "src/utils/cli-arguments.ts";
const absolutPath = `${process.cwd()}/${path}`;

test("throws error when missing path", () => {
  process.argv = ["node", "command"];
  expect(parseArguments).toThrowError("missing path");
});

test("returns empty object when no options are passed", () => {
  process.argv = ["node", "command", path];
  const returnValue = parseArguments();
  expect(returnValue).toEqual([absolutPath, {}]);
});

test("returns options when passed", () => {
  process.argv = [
    "node",
    "command",
    path,
    "--optionKey=optionValue",
    "--optionKey2",
    "optionValue2",
  ];
  const returnValue = parseArguments();
  expect(returnValue).toEqual([
    absolutPath,
    {
      optionKey: "optionValue",
      optionKey2: "optionValue2",
    },
  ]);
});

test("returns array options when passed", () => {
  process.argv = [
    "node",
    "command",
    path,
    "--optionKey=optionValueA,optionValueB,optionValueC",
    "--optionKey2",
    "optionValue2A,optionValue2B,optionValue2C",
  ];
  const returnValue = parseArguments();
  expect(returnValue).toEqual([
    absolutPath,
    {
      optionKey: ["optionValueA", "optionValueB", "optionValueC"],
      optionKey2: ["optionValue2A", "optionValue2B", "optionValue2C"],
    },
  ]);
});

test("throws error when option value is missing", () => {
  process.argv = ["node", "command", "url", "--optionKey"];
  expect(parseArguments).toThrowError("optionKey");
});
