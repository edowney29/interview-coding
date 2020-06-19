module.exports = function (sequelize, DataTypes) {
  const orderstatus = sequelize.define(
    'orderstatus',
    {
      orderStatusId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamp: false,
    }
  )
  return orderstatus
}
