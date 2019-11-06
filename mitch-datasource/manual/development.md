# Development

## Major Dependencies
* [axios](https://www.axios.com)
  * Used to perform default AJAX operations
* [query-string](https://github.com/sindresorhus/query-string#readme)
  * For `QueryBuilder` (Used as part of `AJAX Datasource`) to convert an object to a query string

## Technologies Used

This package was created using:
* `webpack` as the bundler
* `npm` scripts to run common tasks (e.g. build and sass compilation), instead of gulp, grunt
* `babel` with webpack to transpile JavaScript from ES6 to ES5, so this package codebase can utilise the newest ES6 features
* `esdoc` to build the API documentations
* `eslint` for linting JavaScript source code

## Available NPM Commands

### Main Commands
- `npm run dev` - Lint, build code & docs with development settings.
- `npm run prd` - Lint, build code & docs with production settings.
- `npm run watch` - Lint, build code & docs with development settings anytime when a change has been detected.

### Other Commands

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