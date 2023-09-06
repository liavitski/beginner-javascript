const path = require('path');
const LodashWebpackPlugin = require('lodash-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new LodashWebpackPlugin()],
};
