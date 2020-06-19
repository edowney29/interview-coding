module.exports = function (sequelize, DataTypes) {
  const orders = sequelize.define(
    'orders',
    {
      orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      orderStatusId: {
        type: DataTypes.INTEGER,
      },
      orderDescription: {
        type: DataTypes.STRING,
      },
      createdDate: {
        type: DataTypes.DATE,
      },
      shippedDate: {
        type: DataTypes.DATE,
      },
      shippingAddressId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamp: false,
    }
  )
  return orders
}
