const ordersController = require('../controllers/orders.controller')
const router = require('express').Router()

// Routes from /orders that interact with the database and return a json response
router.route(`/orders`).get(ordersController.getAllOrders)
router.route(`/orders`).post(ordersController.postCreateOrder) // Ideally this route should have some Auth
router.route(`/orders/status`).get(ordersController.getAllOrderStatus)
router.route(`/orders/address`).get(ordersController.getAllShippingAddress)

// Example route for getting a specific order by orderId
// router.route(`/orders/:orderId`).get(ordersController.getOrderByOrderId)

module.exports = router
