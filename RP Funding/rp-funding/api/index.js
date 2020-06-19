/**
 * third party libraries
 */
const bodyParser = require('body-parser')
const express = require('express')
const helmet = require('helmet')
const http = require('http')
const path = require('path')
const cors = require('cors')
const _ = require('lodash')
/**
 * server configuration
 */
const models = require('./models/index')
// const auth = require('./policies/auth.policy')

/**
 * express application
 */
const app = express()
const server = http.Server(app)

// allow cross origin requests
app.use(cors())

// Secure express app
app.use(helmet())

// Parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Serve static build files
app.use(express.static(path.join(__dirname, '../app/build')))

// Secure your private routes with jwt authentication middleware
// app.all('/private/*', (req, res, next) => auth(req, res, next))

// Return index.html for all request unless it is an api request
app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) {
    next()
  } else {
    res.sendFile(path.join(__dirname, '../app/build', 'index.html'))
  }
})

require('./routes')(app)

server.listen(process.env.PORT || '8080', () => {
  console.error(`Server is listening on port ${process.env.PORT || '8080'}`)
})

// Load models and check connections to the database
models.sequelize
  .authenticate()
  .then(function () {
    console.log('Connected to MySQL server')
  })
  .catch(function (err) {
    console.error(err)
  })
