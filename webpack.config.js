const autoprefixer = require('autoprefixer')
const precss = require('precss')

module.exports = {
  entry: './entry.js',
  output: {
    filname: 'bundle.js',
    path: __dirname
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?harmony'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  externals: {
    'rect-dom': "ReactDOM",
    'rect': "React"
  },
  postcss: () => [autoprefixer, precss]
}

