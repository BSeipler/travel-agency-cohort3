const express = require('express')

const router = express.Router()
const userController = require('../controllers/userController')
const verifyToken = require('./../middlewares/verifyToken')
const {
  getUsers,
  createUser,
  userLogin,
  updateUser,
  deleteUser,
  getOneUser
} = userController

router.get('/', getUsers)

router.post('/', createUser)

router.patch('/', verifyToken, updateUser)

router.delete('/', verifyToken, deleteUser)

router.post('/login', userLogin)

router.get('/getOneUser', verifyToken, getOneUser)

module.exports = router
