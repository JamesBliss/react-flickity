const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },

  externals: {
    react: 'React'
  },

  output: {
    filename: 'dist/react-flickity.js',
    libraryTarget: 'umd',
    library: 'reactFlickity'
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

  resolve: {
    extensions: [
      '',
      '.jsx',
      '.js'
    ]
  }
};