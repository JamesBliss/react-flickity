const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ]
  },

  externals: {
    react: 'React'
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],

  output: {
    filename: 'dist/react-flickity.js',
    libraryTarget: 'umd',
    library: 'reactFlickity'
  },

  resolve: {
    extensions: [
      '.jsx',
      '.js',
      '.scss'
    ]
  }
};