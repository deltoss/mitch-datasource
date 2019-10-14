const path = require('path');

module.exports = (env, options) => ({
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
      root: 'MitchDatasourceTestUtilities',
      amd: 'mitchdatasourcetestutilities',
      commonjs: 'mitchdatasourcetestutilities',
    },
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    // To make it compatible with both web and node for UMD bundles,
    // as well as fix an issue with webpack:
    //   https://github.com/webpack/webpack/issues/6677
    //   https://github.com/webpack/webpack/issues/6525
    globalObject: 'typeof self !== "undefined" ? self : this',
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
  },
  target: 'node',
  optimization: {
    minimize: false,
  },
});
