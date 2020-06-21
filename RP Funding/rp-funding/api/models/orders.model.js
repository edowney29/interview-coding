module.exports = function (sequelize, DataTypes) {
  const orders = sequelize.define(
    'orders',
    {
      orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
      freezeTableName: true,
    }
  )
  return orders
}
