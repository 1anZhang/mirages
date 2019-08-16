// const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
  },
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
    // new CleanWebpackPlugin(['dist']),
    // new ManifestPlugin(),
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsPlugin()
  ],
  mode: 'production'
});
