# Development

## Overview

This repository contains multiple projects. Each project has a specific set of responsibilities.
The main project is `mitch-datasource`, which contains the base source code.

Project Name | Description
--- | ---
`mitch-datasource` | The code datasource codebase. The NPM package is deployed from this folder.
`mitch-datasource-documentation` | The project to generate the documentation from the codebase and markdown files. That is, it generates the current documentation which you are viewing right now.
`mitch-datasource-test` | Performs automated tests for the core datasource codebase.
`mitch-datasource-test-react` | A playground application (using storybook) so integration tests with React can be manually performed. Manual tests can also be done here.
`mitch-datasource-test-vue` | A playground application (using storybook) so integration tests with Vue can be manually performed. Manual tests can also be done here.
`mitch-datasource-test-utilities` | Contains the core code for testing purposes, such as mocks, or stub data.

The relationship between all the above projects can be illustrated as per below:

![mitch-datasource architecture diagram](asset/Architecture.png)

Each project has their own set of scripts which you can run. However, for general use,
you can simply just use the scripts located at the root of this repository in `package.json`.
These scripts run convenient tasks when developing the application, and saves you the trouble of switching directories/terminals to execute individual scripts for each project.

### Commit Messages

#### Needs to Be In Certain Format

When making any GIT commits to this repository or a branch, it needs to be in a certain format (i.e. **Angular Commit Message Conventions**). This is because the `semantic-release` tool which this package uses relies on having a specific format of commit messages for it to evaluate whether to create a release, or not.

For more information, see the [semantic-release docs](https://github.com/semantic-release/semantic-release#commit-message-format).

#### Easier Way to Write Commit Messages

To assist making commits to the repository in that certain format, `commitizen` is installed at the root of the repo. To use it after you downloaded the repository:

1. Open up terminal
2. Change the working directory to the root of the repo
3. Enter the command `git add .` to add stage files. 
4. Enter the command `npm run commit`, and follow the prompts for it to construct a commit message for you.
5. Enter the command `git push` to push to the remote.

Note that steps 3 & 5 can be substituted through a GIT GUI tool (e.g. SourceTree). You can use a GUI to stage and push files to remote. However, ensure that you don't use the default commit command or commit of the GUI tool. You must use `npm run commit`.

## Deployment

### CI/CD

![mitch-datasource CI/CD flow diagram](asset/CirlceCI%20Workflow.png)

This package has a CI/CD pipeline with CircleCI configured. It has a workflow setup to use `semantic-release` so that if it detect any commits that requires a release (e.g. adding a new feature, breaking changes, fixes, etc), it'll perform various release related tasks including:

* Tagging the commit with vX.X.X
* Create a GitHub release (auto-generating the documentation)
* Publish to NPM package registry

However, this works through commit messages, so all commits, aside from merges needs to be under a certain format. For more information, see the section [Commit Messages](#commit-messages).

### Monorepo

This repository is essentially a monorepo as it has multiple projects. However only one project is released (i.e. the `mitch-datasource`) as a package. The others are for testing, documentation and various other purposes.

`semantic-release` doesn't support monorepos out-of-the-box. However, there are solutions for this. For more information see this [GitHub issue](https://github.com/semantic-release/semantic-release/issues/193).

To get `semantic-release` to work for mono repos, i.e. this repository, there are a few approaches. This repository took the approach mentioned in this [GitHub issue comment](https://github.com/semantic-release/semantic-release/issues/193#issuecomment-355418830).

Although this is a monorepo, it doesn't have multiple packages to release and publish. This package only releases a single project as a package. Thus, the `circleci` configuration was setup in such a way where it simply changes directory and then runs `semantic-release` in that directory.

## Services Used when Developing this Package

* `CircleCI` For CI/CD pipeline to publish to NPM.
* `GitHub` To host the source code
* `NPM Registry` To upload the node package and make it available as a node package
* `Netlify` To host the static HTML documentation

### Dependencies

* [axios](https://www.axios.com)
  * Used to perform default AJAX operations
* [query-string](https://github.com/sindresorhus/query-string#readme)
  * For `QueryBuilder` (Used as part of `AJAX Datasource`) to convert an object to a query string

### Development Dependencies

This package was created using:
* `semantic-release` to automate the release process to NPM, and creating git releases. Isn't actually an installed package, but used as part of the CI/CD CircleCI configuration as a CLI tool (called through npx). See the root `.circleci/config.yml` & `.circleci/notes.txt` for more details
* `commitizen` which ensures commits is in a nice format. See `commit` script of the main repository scripts
* `webpack` as the bundler
* `npm` scripts to run common tasks (e.g. build and sass compilation), instead of gulp, grunt
* `babel` with webpack to transpile JavaScript from ES6 & ES7 to ES5, so this package codebase can utilise the newest ES features
* `esdoc` to build the API documentations
* `eslint` for linting JavaScript source code
* `nodemon` to set up npm watch scripts (to auto-compile when code changes are detected)
* `npm-run-all` to run multiple npm scripts in sequence/parallel whilst being compatible cross operating systems (e.g. Windows, Linux, etc)
* `jest` for running tests
* `storybook` to develop playground applications to perform manual integration tests with client-side frameworks (e.g. React, Vue)
* `esm` to use modern ES import/export syntax (for executing node scripts without the need for webpack)
* `mermaid cli` to generate mermaid diagrams using markdownish syntax (i.e. `.mmd` files)
* `glob` retrieve all files within a folder matching an expression

## Repository Scripts

### Installation Scripts

To run the script, simply open up terminal and change directory to where the root `package.json` resides.
Afterwards, simply type in `npm run <ScriptName>`. For example, `npm run install`.

Script Name | Description
--- | ---
`install` | Performs an `npm install` for every projects inside the `projects` folder.
`update` | Performs an `npm update` for every projects inside the `projects` folder.
`exec-all-projects` | Performs a specified command for every projects inside the `projects` folder. For example `npm run exec-all-projects -- "npm outdated"`.

### Main Scripts

Script Name | Description
--- | ---
`dev` | Lint, test, build/compile the code and docs using development settings.
`prd` | Lint, test, build/compile the code and docs using production settings.
`watch` | Lint, test, build/compile the code and docs using development settings when a relevant file has been changed.
`storybook` | Runs the storybook applications for Vue & React. For manual integration tests with client-side frameworks (e.g. React, Vue).

### Other Scripts

Script Name | Description
--- | ---
`docs-build` | Build the documentation.
`docs-watch` | Build the documentation when a relevant file has been changed.
`code-dev` | Lint and build the code using development settings.
`code-prd` | Lint and build the code using production settings.
`code-watch` | Lint and build the code using development settings when a relevant file has been changed.
`test-utilities-dev` | Lint and build the test utilities project with development settings.
`test-utilities-prd` | Lint and build the test utilities project with production settings.
`test-utilities-watch` | Lint and build the test utilities project with development settings when a relevant file has been changed.
`test` | Run tests.
`test-watch` | Run tests when a relevant file has been changed.
`react-storybook` | Runs the storybook application for React. For manual integration tests with client-side frameworks (e.g. React, Vue).
`vue-storybook` | Runs the storybook application for Vue. For manual integration tests with client-side frameworks (e.g. React, Vue).
`commit` | Uses `commitizen` to create a angular styled commit message. Useful for `semantic-release`.

## Projects

### mitch-datasource

The main project containing the source code for mitch-datasource.
This project is published as a package to NPM registry.

#### Available NPM Scripts

##### Main Scripts

Script Name | Description
--- | ---
`dev` | Lint, build code & docs with development settings.
`prd` | Lint, build code & docs with production settings.
`watch` | Lint, build code & docs with development settings anytime when a change has been detected.

##### Other Scripts

Script Name | Description
--- | ---
`dev` | Lint and build the code with development settings.
`prd` | Lint and build the code with production settings.
`watch` | Lint and build code with development settings anytime when a change has been detected.
`webpack-watch` | Build code anytime when a change has been detected.
`webpack-build-dev` | Build code with development settings.
`webpack-build-prd` | Build code with production settings.
`lint` | Lint the source code, finding any errors or code smells.
`lint-watch` | Lint the source code anytime when a change has been detected.
`lint-fix` | Automatically fix any auto-fixable warnings or errors detected when linting.

### mitch-datasource-documentation

Generates the HTML documentation based on source code in the `mitch-datasource` project, and the markdown files in the `manual` folder. The built HTML documentation files will reside in the `docs` folder.

#### Available NPM Scripts

##### Main Scripts

Script Name | Description
--- | ---
`build` | Generate Diagrams and then build the HTML documentation to the `docs` folder.
`watch` | Generate Diagrams and then build the HTML documentation when a relevant file has been changed.

##### Other Scripts

Script Name | Description
--- | ---
`build-mermaid` | Generate diagrams to the `docs` folder.
`watch-mermaid` | Generate diagrams when a relevant file has been changed (i.e. `.mmd` files in `manual/asset/`).
`build-esdoc` | Build the HTML documentation to the `docs` folder.
`watch-esdoc` | Build the HTML documentation when a relevant file has been changed.

### mitch-datasource-test

Automated tests for the core codebase.

#### Available NPM Scripts

##### Main Scripts

Script Name | Description
--- | ---
`test` | Run the `jest` tests.
`test-debug` | Run the `jest` tests under debug mode which you can put breakpoints under.
`test-watch` | Run the `jest` tests when a relevant file has been changed.
`lint` | Lint the tests source code, finding any errors or code smells.
`lint-fix` | Fixes the automatically fixable lint errors.

### mitch-datasource-test-react

Based on `Create React App`, but with storybook installed.

#### Available NPM Scripts

##### Main Scripts

Script Name | Description
--- | ---
`storybook` | Runs the storybook application.

##### Other Scripts

Script Name | Description
--- | ---
`test` | Run React tests
`build-storybook` | Exports the storybook as a static app.

### mitch-datasource-test-vue

Initially created with default stock Vue project. Storybook was installed afterwards.

#### Available NPM Scripts

##### Main Scripts

Script Name | Description
--- | ---
`storybook` | Runs the storybook application.

##### Other Scripts

Script Name | Description
--- | ---
`lint` | Lint the Vue code.
`build-storybook` | Exports the storybook as a static app.

### mitch-datasource-test-utilities

Contains the core exports for testing purposes, such as mocks or data stubs.

#### Available NPM Scripts

##### Main Scripts

Script Name | Description
--- | ---
`dev` | Performs linting and builds the codebase.
`prd` | Performs linting and builds the codebase.
`watch` | Performs linting and builds the codebase.
`build-dev` | Performs linting and builds the codebase.
`build-prd` | Performs linting and builds the codebase.
`lint` | Lint the source code, finding any errors or code smells.
`lint-watch` | Lint the source code anytime when a change has been detected.
`lint-fix` | Automatically fix any auto-fixable warnings or errors detected when linting.

##### Other Scripts

Script Name | Description
--- | ---
`lint` | Lint the Vue code.
`build-storybook` | Exports the storybook as a static app.