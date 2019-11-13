// const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: './.build_cache/terser',
        terserOptions: {
          warnings: false,
          ie8: false
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'static' }
    ]),
    // new ManifestPlugin(),
    new BundleAnalyzerPlugin()
  ],
  mode: 'production'
});
