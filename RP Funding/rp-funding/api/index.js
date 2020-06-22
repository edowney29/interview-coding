const bodyParser = require('body-parser')
const express = require('express')
const helmet = require('helmet')
const http = require('http')
const path = require('path')
const cors = require('cors')
const _ = require('lodash')

// Unused auth middleware
// const auth = require('./policies/auth.policy')

const app = express()
const server = http.Server(app)
app.use(cors()) // Allow cross origin requests
app.use(helmet()) // Secure general express app
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Serve static build files
app.use(express.static(path.join(__dirname, '../app/build')))

// Return index.html for all request unless it is an api request
app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) {
    next()
  } else {
    res.sendFile(path.join(__dirname, '../app/build', 'index.html'))
  }
})

// Load all route apis into server
require('./routes')(app)

// Listen on port for http request
server.listen(process.env.PORT || '8080', () => {
  console.error(`Server is listening on port http://localhost:${process.env.PORT || '8080'}/`)
})

// Load models and check connection to the database
const models = require('./models/')
models.sequelize
  .authenticate()
  .then(function () {
    console.log('Connected to MySQL server')
  })
  .catch(function (err) {
    console.error(err)
  })
