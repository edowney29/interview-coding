module.exports.development = {
  database: 'ordersystem',
  username: 'newuser',
  password: 'password',
  host: 'localhost',
  port: 3306,
}

module.exports.production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT,
}
