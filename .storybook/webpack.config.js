const path = require('path')
const DEBUG = '../webpack.config'.DEBUG
const AUTOPREFIXER_BROWSERS = '../webpack.config'.AUTOPREFIXER_BROWSERS

module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'isomorphic-style-loader',
          'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
          'postcss-loader'
        ],
        include: path.resolve(__dirname, '../')
      }
    ]
  },

  postcss: function plugins(bundler) {
    return [
      require('postcss-import')({ addDependencyTo: bundler }),
      require('precss')(),
      require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })
    ]
  }
}
