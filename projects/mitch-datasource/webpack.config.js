const path = require('path');

module.exports = (env, options) => {
  // Common Configurations for multiple outputs
  const commonConfig = {
    // If webpack is used under development mode,
    // generate source maps for better debugging experience
    devtool: options.mode === 'development' ? 'inline-source-map' : false,
    entry: {
      index: './src/index.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    output: {
      library: {
        root: 'MitchDatasource',
        amd: 'mitchdatasource',
        commonjs: 'mitchdatasource',
      },
      libraryExport: 'default',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      // To make it compatible with both web and node for UMD bundles,
      // as well as fix an issue with webpack:
      //   https://github.com/webpack/webpack/issues/6677
      //   https://github.com/webpack/webpack/issues/6525
      globalObject: 'typeof self !== "undefined" ? self : this',
    },
  };

  const fullConfig = {
    ...commonConfig, // ES6 Spread operator
    output: {
      ...commonConfig.output,
      filename: '[name].js',
      path: path.resolve(__dirname, 'dest/js'),
      publicPath: './dest',
    },
    optimization: {
      minimize: false,
    },
  };

  const minifiedConfig = {
    ...commonConfig,
    output: {
      ...commonConfig.output,
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dest/js'),
      publicPath: './dest',
    },
    optimization: {
      minimize: true,
    },
  };

  const entryPointConfig = {
    ...commonConfig,
    target: 'node',
    output: {
      ...commonConfig.output,
      filename: '[name].js',
      path: path.resolve(__dirname, 'lib'),
    },
    optimization: {
      minimize: false,
    },
  };

  return [
    fullConfig, minifiedConfig, entryPointConfig,
  ];
};
