const db = require('../models/')
const authService = require('../services/auth.service')
const bcryptService = require('../services/bcrypt.service')

module.exports.getAllOrders = async (req, res) => {
  const apiData = {}
  try {
    const orders = await db.orders.findAll()
    const orderstatus = await db.orderstatus.findAll()
    const shippingaddress = await db.shippingaddress.findAll()
    console.log('[SUCCESS]: getAllOrders')
    res.json({
      success: true,
      data: {
        orders,
        orderstatus,
        shippingaddress,
      },
    })
  } catch (err) {
    res.json({
      success: false,
      message: err,
    })
  }
}
