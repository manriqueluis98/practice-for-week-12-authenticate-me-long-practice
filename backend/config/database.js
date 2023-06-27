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
    use_env_variable: config.dbUrl,
    dialect: 'postgres',
    seederStorage: 'sequelize',
    diaclectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}

