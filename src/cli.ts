import fs from "node:fs";
import trueSort from ".";
import type { Object_ } from "./types";
import { parseArguments } from "./utils/cli-arguments";

const init = async () => {
  const [path, options] = parseArguments();

  const unsortedJson = (await import(path)) as Object_;
  const sortedJson = trueSort(unsortedJson, options);
  fs.writeFileSync(path, JSON.stringify(sortedJson, undefined, 2));
};

void init();
