# Development

## Overview

## Repository Scripts

### Installation Scripts

- `install` - Performs an `npm install` for every projects inside the `projects` folder.
- `update` - Performs an `npm update` for every projects inside the `projects` folder.
- `exec-all-projects` - Performs a specified command for every projects inside the `projects` folder. For example `npm run exec-all-projects -- "npm outdated"`

### Main Scripts

- `watch` -
- `dev` -
- `prd` -
- `storybook` -

### Main Scripts

- `docs-build` -
- `docs-watch` -
- `code-dev` -
- `code-watch` -
- `code-prd` -
- `test` -
- `test-watch` -
- `react-storybook` -
- `vue-storybook` -

## Projects

### mitch-datasource

The main project containing the source code for mitch-datasource.
This project is published as a package to NPM registry.

#### Major Dependencies
* [axios](https://www.axios.com)
  * Used to perform default AJAX operations
* [query-string](https://github.com/sindresorhus/query-string#readme)
  * For `QueryBuilder` (Used as part of `AJAX Datasource`) to convert an object to a query string

#### Technologies Used

This package was created using:
* `webpack` as the bundler
* `npm` scripts to run common tasks (e.g. build and sass compilation), instead of gulp, grunt
* `babel` with webpack to transpile JavaScript from ES6 to ES5, so this package codebase can utilise the newest ES6 features
* `esdoc` to build the API documentations
* `eslint` for linting JavaScript source code
* `nodemon` to set up npm watch scripts (to auto-compile when code changes are detected)
* `npm-run-all` to run multiple npm scripts in sequence/parallel whilst being compatible cross operating systems (e.g. Windows, Linux, etc)

#### Available NPM Scripts

##### Main Scripts

- `npm run dev` - Lint, build code & docs with development settings.
- `npm run prd` - Lint, build code & docs with production settings.
- `npm run watch` - Lint, build code & docs with development settings anytime when a change has been detected.

##### Other Scripts

- `build-dev` - Build the code, and build docs with development settings. Does not perform linting.
- `build-prd` - Build the code, and build docs with production settings. Does not perform linting.
- `build-watch` - Build code & docs with development settings anytime when a change has been detected.
- `watch-webpack` - Build code anytime when a change has been detected.
- `build-webpack-dev` - Build code with development settings.
- `build-webpack-prd` - Build code with production settings.
- `lint` - Lint the source code.
- `lint-watch` - Lint the source code anytime when a change has been detected
- `lint-fix` - Automatically fix any auto-fixable warnings or errors detected when linting.
- `build-docs` - Build the HTML documentations.
- `watch-docs` - Build the HTML documentations anytime when a change has been detected.

### mitch-datasource-documentation

### mitch-datasource-test

### mitch-datasource-test-react

### mitch-datasource-test-vue

### mitch-datasource-test-utilities