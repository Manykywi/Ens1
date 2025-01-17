const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

const config = {
  mode: 'development',
  devServer: {
    open: true,
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    filename: 'myProject.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]',
                // namedExport: true, case 1;
                namedExport: false,
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(baseConfig, config);
