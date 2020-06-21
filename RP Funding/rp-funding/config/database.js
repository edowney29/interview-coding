const Sequelize = require('sequelize')

const config = require('./config')

let connection

if (process.env.NODE_ENV === 'production') {
  connection = new Sequelize(config.production.database, config.production.username, config.production.password, {
    dialect: 'mysql',
    logging: false,
    define: {
      timestamps: false,
    },
  })
} else {
  connection = new Sequelize(config.development.database, config.development.username, config.development.password, {
    dialect: 'mysql',
    logging: false,
    define: {
      timestamps: false,
    },
  })
}

module.exports = connection
