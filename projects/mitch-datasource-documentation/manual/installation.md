# Installation

## Local Files

1. Clone or download this git repository, and move the contents of the `dist` folder to your project. For example, you can put it in `/scripts/mitch-datasource` inside your project.

2. Import the `mitch-datasource` files as below, changing the path depending on where you copied it into for your project
   ```html
   <script src="/scripts/mitch-datasource/js/index.min.js"></script>
   ```

## With NPM

`mitch-datasource` is available on npm. You can perform the following steps to get it set up.

1. Open up your terminal, and run the below command from your project directory:
   ```bash
   npm install mitch-datasource --save
   ```

2. Now you can use CommonJS, AMD, or ES6 to import the plugin. For example:
   ```JavaScript
   var mitchDatasource = require('mitch-datasource');
   ```