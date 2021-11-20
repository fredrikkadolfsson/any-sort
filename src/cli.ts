import fs from "node:fs";
import trueSort from ".";
import { parseArguments } from "./utils/cli-arguments";

const init = async () => {
  const [path, options] = parseArguments();

  const unsortedJson = await import(path);
  const sortedJson = trueSort(unsortedJson, options);
  fs.writeFileSync(path, JSON.stringify(sortedJson, undefined, 2));
};
init();
