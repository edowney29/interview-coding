module.exports = function (sequelize, DataTypes) {
  const orderstatus = sequelize.define(
    'orderstatus',
    {
      orderStatusId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamp: false,
      freezeTableName: true,
    }
  )
  return orderstatus
}
