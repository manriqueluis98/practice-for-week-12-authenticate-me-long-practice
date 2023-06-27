// backend/config/index.js
module.exports = {
  enviroment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000,
  dbFile: process.env.DB_FILE,
  dbUrl: process.env.DB_URL,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  jwtConfig: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN
  }
}