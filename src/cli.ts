import fs from "node:fs";
import trueSort from ".";
import type { UnknownObject } from "./types";
import { parseArguments } from "./utils/cli-arguments";

const init = async () => {
  const { path, options } = parseArguments();

  const unsortedJson = (await import(path)) as UnknownObject;
  const sortedJson = trueSort(unsortedJson, options);
  fs.writeFileSync(path, JSON.stringify(sortedJson, undefined, 2));
};

void init();
