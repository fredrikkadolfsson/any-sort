import { promises as fs } from "fs";
import type { UnknownObject } from "./types";
import { parseArguments } from "./utils/cli-arguments";
import trueSort from ".";

const init = async () => {
  const { path, options } = parseArguments();

  const data = await fs.readFile(path, "utf8");
  const unsortedJson = JSON.parse(data) as UnknownObject;
  const sortedJson = trueSort(unsortedJson, options);
  await fs.writeFile(path, JSON.stringify(sortedJson, undefined, 2));
};

void init();
