/**
 * Created by xueyingchen.
 */
const {transform} = require('babel-core')
const {format} = require('prettier')
const fs = require('fs')

const babelPlugin = require('./plugins/js-to-prop-types')
const schema = require('./schema')

const sourceCode = 'const propTypes = ' + JSON.stringify(schema)

const {code} = transform(sourceCode, {
  presets: ['env'],
  plugins: [babelPlugin]
})

fs.writeFile('result.js', format(code), (err) => {
  if (err) {
    console.error('Error: ', err)
    return
  }

  console.log('Great Work!')
})
