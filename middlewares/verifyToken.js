const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
  try {
    // check if an authorization header exists
    if (!req.headers.authorization) {
      return res.status(401).json({
        success: false,
        message: 'You do not have access'
      })
    }
    // split the auth header
    const authHeader = req.headers.authorization.split(' ')
    // if the auth header does not begin with Bearer, send an error : decode the token
    if (authHeader[0] !== 'Bearer') {
      return res.status(401).json({
        success: false,
        message: 'You do not have access'
      })
    }
    const token = authHeader[1]
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