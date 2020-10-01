const express = require('express')

const router = express.Router()
const userController = require('../controllers/userController')
const { getUsers, createUser, userLogin } = userController

router.get('/', getUsers)

router.post('/', createUser)

router.post('/login', userLogin)

module.exports = router
