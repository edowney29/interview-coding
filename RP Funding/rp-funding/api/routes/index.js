const ordersRouter = require('./orders.routes')
// const exampleRouter = require('./example.routes')

// Import and setup all routers here with base /api route
module.exports = (app) => {
  app.use('/api', ordersRouter)
  // app.use('/api', exampleRouter)
}
