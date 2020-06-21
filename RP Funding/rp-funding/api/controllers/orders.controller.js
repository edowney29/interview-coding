const db = require('../models/')
const util = require('../util')
// const authService = require('../services/auth.service')
// const bcryptService = require('../services/bcrypt.service')

/**
 * Fetch all orders from database
 */
module.exports.getAllOrders = async (req, res) => {
  const apiInfo = { api: 'GET_ALL_ORDERS' }
  try {
    const orders = await db.orders.findAll()
    util.printSuccess(apiInfo)
    res.json({
      success: true,
      data: orders,
    })
  } catch (err) {
    util.printError(apiInfo)
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
  const apiInfo = { api: 'GET_ALL_ORDER_STATUS' }
  try {
    const orderstatus = await db.orderstatus.findAll()
    util.printSuccess(apiInfo)
    res.json({
      success: true,
      data: orderstatus,
    })
  } catch (err) {
    util.printError(apiInfo)
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
  const apiInfo = { api: 'GET_ALL_SHIPPING_ADDRESS' }
  try {
    const shippingaddress = await db.shippingaddress.findAll()
    util.printSuccess(apiInfo)
    res.json({
      success: true,
      data: shippingaddress,
    })
  } catch (err) {
    util.printError(apiInfo)
    res.json({
      success: false,
      message: err,
    })
  }
}

/**
 * Create a new order and insert it into the correct tables
 */
module.exports.postCreateOrder = async (req, res) => {
  const apiInfo = { api: 'POST_CREATE_ORDER' }
  const apiData = {
    description: req.body.description,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  }

  try {
    const result = await db.sequelize.transaction(async (t) => {
      const orderstatus = await db.orderstatus.create({ name: 'Ordered' }, { transaction: t })
      const shippingaddress = await db.shippingaddress.create(
        {
          address: apiData.address,
          city: apiData.city,
          state: apiData.state,
          zip: apiData.zip,
        },
        { transaction: t }
      )
      const orders = await db.orders.create(
        {
          orderDescription: apiData.description,
          orderStatusId: orderstatus.dataValues.orderStatusId,
          shippingAddressId: shippingaddress.dataValues.shippingAddressId,
          createdDate: new Date(),
        },
        { transaction: t }
      )
      return { orders, orderstatus, shippingaddress }
    })

    util.printSuccess(apiInfo, apiData)
    res.json({
      success: true,
      data: result,
    })
  } catch (err) {
    util.printError(apiInfo, apiData, err)
    res.json({
      success: false,
      message: err,
    })
  }
}
