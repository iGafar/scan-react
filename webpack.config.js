const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const publicPath = isProduction ? '/scan-react/' : '/';

  return {
    mode: argv.mode || 'development',
    entry: { scan: path.resolve(__dirname, './src/main.tsx') },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, './dist'),
      publicPath: publicPath,
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
                publicPath: isProduction ? '/scan-react/images/' : '/images/',
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
        title: 'Scan',
      }),
      new MiniCssExtractPlugin({ filename: 'style.css' }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public', to: '' },
          {
            from: path.resolve(__dirname, 'dist/index.html'),
            to: '404.html',
            noErrorOnMissing: true,
          },
        ],
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
    },
  };
};
