const stylemark = require('stylemark')

const input = './src/app/pages'
const output = './docs'
const configPath = './config/stylemark.yml'

stylemark({ input, output, configPath })
