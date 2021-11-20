import fs from "node:fs";
import type { Options } from "./options";

const isFlag = (s: string) => s.startsWith("--");
const parsValue = (s: string) => (s.includes(",") ? s.split(",") : s);

export const parseArguments = () => {
  let probablyPath = "";
  const options: Options = {};

  for (let index = 0; index < process.argv.length; index++) {
    const argument = process.argv[index];
    if (argument !== undefined) {
      if (isFlag(argument)) {
        const aurguments = argument.split("=");
        const key = aurguments[0]?.replace("--", "") as keyof Options;

        if (key !== undefined) {
          let value = aurguments[1];
          if (value === undefined) {
            value = process.argv[index + 1];
            index++;
          }

          if (value === undefined) {
            throw new Error(`missing value for flag ${key}`);
          }
          options[key] = parsValue(value);
        }
      } else {
        probablyPath = argument;
      }
    }
  }

  const path = probablyPath?.startsWith("/")
    ? probablyPath
    : `${process.cwd()}/${probablyPath}`;

  try {
    fs.accessSync(path, fs.constants.F_OK);
    return { path, options };
  } catch {
    throw new Error("missing path or unauthorised to access given path");
  }
};
