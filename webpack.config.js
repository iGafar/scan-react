const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    mode: argv.mode || 'development',
    entry: { scan: path.resolve(__dirname, './src/main.tsx') },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, './dist'),
      publicPath: isProduction ? '/scan-react/' : '/',
      clean: true,
    },
    module: {
      rules: [
        { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './index.html'),
      }),
      new MiniCssExtractPlugin({ filename: 'style.css' }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'public', to: '' }],
      }),
    ],
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              drop_console: true,
            },
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true,
      open: true,
    },
  };
};