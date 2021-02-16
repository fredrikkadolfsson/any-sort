export type Options = {
  preferedSortKeys?: string | string[];
};

let options: Options = {};

export const setOptions = (newOptions: Options): void => {
  options = newOptions;
};

export const getOptions = (): Options => options;
