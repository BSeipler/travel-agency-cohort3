const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({
        success: false,
        message: 'You do not have access'
      })
    }
    const token = req.headers.authorization.split(' ')[1]
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: 'You do not have access'
    })
  }
}

module.exports = verifyToken
