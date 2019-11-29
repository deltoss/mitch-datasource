[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![made-with-esdocs](https://img.shields.io/badge/Made%20with-ESDocs-green.svg)](https://esdoc.org/)
[![CircleCI](https://circleci.com/gh/deltoss/mitch-datasource.svg?style=svg)](https://circleci.com/gh/deltoss/mitch-datasource)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Netlify Status](https://api.netlify.com/api/v1/badges/caf9565a-9cd5-47c2-a6d8-e52333d17376/deploy-status)](https://app.netlify.com/sites/mitch-datasource/deploys)
[![Dependabot Enabled](https://img.shields.io/badge/Dependabot-Enabled-lightgrey.svg?logo=dependabot&labelColor=blue)](https://dependabot.com/)

# Introduction

Modern applications are usually data-oriented, and it can have many ways to present data. There can be many different components, plugins, and so on. Between all of these, the approach to perform data operations is mostly the same. Why would you want to write the same pagination/search/sorting logic per component?

That's where this package shines. `mitch-datasource` was developed to resolve the issue by having a core entity which manage those data operations whilst being flexible to cater to different requirements. It's framework-agnostic, so you can feed it into plugins, components, or whatever.

# Features

- Client-Side Framework Agnostic
- Highly Customisable & Extensible
- Works and tested with React & Vue (See `mitch-datasource-test-vue` & `mitch-datasourve-test-react` projects)
- Pagination
- Sorting (Single & Multi Column Support)
- Search (Single & Multi Column Support)
- Datasources for:
  - AJAX
  - Array
- Events

# Requested/Future Improvements

- Support Hierarchical Datasets
- CRUD operations
- Grouping Data

# License

MIT © Michael Tran