const ordersRouter = require('./orders.routes')
const ordersStatusRouter = require('./orderstatus.routes')
const shippingAddressRouter = require('./shippingaddress.routes')

module.exports = (app) => {
  app.use('/api', ordersRouter)
  app.use('/api', ordersStatusRouter)
  app.use('/api', shippingAddressRouter)
}
