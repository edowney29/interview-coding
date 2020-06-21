const db = require('../models/')
// const authService = require('../services/auth.service')
// const bcryptService = require('../services/bcrypt.service')

/**
 * Fetch all orders from database
 */
module.exports.getAllOrders = async (req, res) => {
  try {
    const orders = await db.orders.findAll()
    console.log('[SUCCESS]: getAllOrders')
    res.json({
      success: true,
      data: orders,
    })
  } catch (err) {
    res.json({
      success: false,
      message: err,
    })
  }
}

/**
 * Fetch all order status from database
 */
module.exports.getAllOrderStatus = async (req, res) => {
  try {
    const orderstatus = await db.orderstatus.findAll()
    console.log('[SUCCESS]: getAllOrderStatus')
    res.json({
      success: true,
      data: orderstatus,
    })
  } catch (err) {
    res.json({
      success: false,
      message: err,
    })
  }
}

/**
 * Fetch all shipping addresses from database
 */
module.exports.getAllShippingAddress = async (req, res) => {
  try {
    const shippingaddress = await db.shippingaddress.findAll()
    console.log('[SUCCESS]: getAllShippingAddress')
    res.json({
      success: true,
      data: shippingaddress,
    })
  } catch (err) {
    res.json({
      success: false,
      message: err,
    })
  }
}
