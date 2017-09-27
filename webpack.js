var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?stage=0',
        exclude: /node_modules/
      }
    ]
  },

  externals: {
    react: 'React'
  },

  // TODO: use your component name here
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
