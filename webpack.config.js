module.exports = {
  entry: './entry.js',
  output: {
    filname: 'bundle.js',
    path: __dirname
  },
  module: {
    loaders: [ {
      test: /\.jsx$/,
      loader: 'jsx-loader?harmony'
    } ]
  },
  externals: {
    'rect-dom': "ReactDOM",
    'rect': "React"
  }
}

