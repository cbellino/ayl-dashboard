const babel = require('babel-core')
// const babelJest = require('babel-jest')
// const webpackAlias = require('jest-webpack-alias')

module.exports = {
  process: function (src, filename) {
    // Ignore all files within node_modules
    if (filename.indexOf('node_modules') === -1) {
      // src = babelJest.process(src, filename)
      // src = webpackAlias.process(src, filename)
      return babel.transform(src, { filename: filename }).code
    }

    return src
  }
}
