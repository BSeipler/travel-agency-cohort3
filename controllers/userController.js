const User = require('./../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/*****************************************************
 GET ALL USERS
*****************************************************/
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json({
      success: true,
      users
    })
  } catch (error) {
    console.log(error.message)
  }
}

/*****************************************************
 Create New User
*****************************************************/
exports.createUser = async (req, res) => {
  try {
    // destructuring the req body
    const { firstName, lastName, email, password } = req.body
    // check if user already exists by email
    const doesExist = await User.exists({ email })
    // if a user exists, send back an error : add them to the database
    if (doesExist) {
      return res.json({
        success: false,
        message: 'User already exists'
      })
    }
    // encrypt the password before inserting into the database
    const hash = await bcrypt.hash(password, 10)
    // reassign the password property to the encrypted password
    req.body.password = hash
    // create user
    const newUser = await User.create(req.body)
    // find the newly created user in the database
    const user = await User.find({ email })
    // save the userId
    const userId = user[0]._id
    // create the payload
    const payload = {
      userId
    }
    // create the token
    const token = await jwt.sign(payload, process.env.JWT_SECRET)
    // send the token back with the response
    res.json({
      success: true,
      newUser,
      token
    })
  } catch (error) {
    console.log(error.message)
  }
}

/*****************************************************
 Login User
*****************************************************/
exports.userLogin = async (req, res) => {
  try {
    // destructure the req body
    const { email, password } = req.body
    // check if user exists by email
    const doesExist = await User.exists({ email })
    // if they don't exist, send back an error : compare the passwords
    if (!doesExist) {
      return res.json({
        success: false,
        message: 'User does not exist'
      })
    }
    // grab the user from the database based on the email
    const user = await User.find({ email })
    // grab the users password
    const encryptedPassword = user[0].password
    // compare the users password with the password sent with the request
    const doesMatch = await bcrypt.compare(password, encryptedPassword)
    // if the passwords don't match, send an error : send success!
    if (!doesMatch) {
      return res.json({
        success: false,
        message: 'Credentials do not match'
      })
    }
    // save the userId
    const userId = user[0]._id
    // create the payload
    const payload = {
      userId
    }
    // create the token
    const token = await jwt.sign(payload, process.env.JWT_SECRET)
    // send the token back with the response
    return res.json({
      success: true,
      message: 'User is now logged in!',
      token
    })
  } catch (error) {
    console.log(error.message)
  }
}

/*****************************************************
 Update User
*****************************************************/
exports.updateUser = async (req, res) => {
  try {
    const user = await User.updateOne({ _id: req.user.userId }, req.body)
    return res.json({
      success: true,
      message: 'User has been updated',
      user
    })
  } catch (error) {
    console.log(error.message)
  }
}

/*****************************************************
 Delete User
*****************************************************/
exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.user.userId })
    return res.json({
      success: true,
      message: 'User has been deleted'
    })
  } catch (error) {
    console.log(error.message)
  }
}
