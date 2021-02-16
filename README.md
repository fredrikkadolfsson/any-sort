# True Sort &nbsp; ![npm](https://img.shields.io/npm/v/true-sort?style=flat-square)

Truly sort anything, and with zero dependencies 🚀

## Installing

Via npm:

```bash
$ npm install [--save-dev] true-sort
```

Via yarn:

```bash
$ yarn add [--dev] true-sort
```

## Usage

```js
import { trueSort } from "true-sort";
// Or
import trueSort from "true-sort";

const unsortedData = ...;
const options = { preferedSortKeys: "id" };
trueSort(unsortedData, options);
```

### CLI

True Sort can be used on JSON files trough the CLI.

```bash
$ node node_modules/true-sort/dist/cli.js path/to/json [options]
```

## Options

| Option           | Type                            | Description                                                                           |
| ---------------- | ------------------------------- | ------------------------------------------------------------------------------------- |
| preferedSortKeys | <code>string \| string[]</code> | Single or prioritized list of keys which the sort of objects will be sorted based on. |
