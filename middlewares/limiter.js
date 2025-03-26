const rateLimit = require('express-rate-limit')

const loginLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
  message: 'Too many requests login request from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
})

module.exports = loginLimiter