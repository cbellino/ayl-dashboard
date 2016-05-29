import path from 'path'
import React from 'react'
import ReactDOM from 'react-dom/server'
import fs from 'fs'

import Html from '../src/components/Html/Html'

const filename = 'index.html'
const output = path.join(__dirname, '../build/public', filename)

/**
 * Creates the index.html file.
 */
function buildIndex() {
  return new Promise((resolve, reject) => {
    const assets = require('../build/assets.js')
    const data = { title: '', description: '', css: '', body: '', entry: assets.main.js }
    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />)

    fs.writeFile(output, html, (err) => {
      if (err) {
        console.error(err)
        reject()
      }

      console.log(`Created index file: ${output}`)

      resolve()
    })
  })
}

export default buildIndex
