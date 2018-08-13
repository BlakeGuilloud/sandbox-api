const { parseJson, mount } = require('paperplane')
const { compose } = require('ramda')
const http = require('http')
const mongoose = require('mongoose')
const endpoints = require('./endpoints')

const app = compose(endpoints, parseJson)

mongoose.connect('mongodb://localhost/test', (err) => {
  if (err) {
    console.log('Error connecting to mongo: ', err)
    process.exit(1)
  } else {
    http.createServer(mount(app)).listen(8080, () => {
      console.log('Listening on port 8080')
    })
  }
})
