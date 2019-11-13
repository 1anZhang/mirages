const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

// const APP_DIR = path.resolve(__dirname, '../src');

module.exports = {
  entry: {
    app: './src/index'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.json', '.jsx', '.less', 'jpg', 'png', 'svg'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      images: path.resolve(__dirname, 'src/images'),
      svgs: path.resolve(__dirname, 'src/svgs'),
      utils: path.resolve(__dirname, 'src/utils'),
      blocks: path.resolve(__dirname, 'src/blocks'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      components: path.resolve(__dirname, 'src/components')
    }
  },
  plugins: [
    new ProgressBarPlugin({
      format: `build【${chalk.green(':bar')}】${chalk.blue.bold(':percent')} ${chalk.yellow.bold(
        ':elapsed seconds'
      )}`,
      clear: true,
      width: 40
    }),
    new HtmlWebpackPlugin({
      title: 'YxY',
      template: './public/index.html'
    })
  ]
};
