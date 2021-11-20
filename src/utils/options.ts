export type Options = {
  preferedSortKeys?: string | string[];
};

let options: Options = {};

export const setOptions = (newOptions: Options) => {
  options = newOptions;
};

export const getOptions = () => options;
