// backend/config/database.js
const config = require('./index');

module.exports = {
  development: {
    storage: config.dbFile,
    dialect: 'sqlite',
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    protocol: 'postgres',
    seederStorage: 'sequelize',
    diaclectOptions: {
      ssl: true
      // ssl: {
      //   require: true,
      //   rejectUnauthorized: false
      // }
    }
  }
}


