import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';

const config = process.env.NODE_ENV === 'production' ?
    require('./webpack.config.prod.babel.js') :
    require('./webpack.config.dev.babel.js');

const common = {
  context: __dirname,
  entry: {
    jsx: './src/index.jsx',
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'babel-loader'] },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(jpe?g|png|gif)$/, loader: 'url?limit=10000' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/index.template.ejs',
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  eslint: {
    configFile: './.eslintrc',
  },
};

module.exports = merge(common, config);
