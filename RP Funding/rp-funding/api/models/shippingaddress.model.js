module.exports = function (sequelize, DataTypes) {
  const shippingaddress = sequelize.define(
    'shippingaddress',
    {
      shippingAddressId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      zip: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamp: false,
      freezeTableName: true,
    }
  )
  return shippingaddress
}
