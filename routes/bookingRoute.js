const express = require('express')

const router = express.Router()
const bookingController = require('./../controllers/bookingController')
const verifyToken = require('./../middlewares/verifyToken')

const {
    createBooking,
    deleteBooking
} = bookingController

router.patch('/create-booking', verifyToken, createBooking)
router.patch('/delete-booking', verifyToken, deleteBooking)

module.exports = router