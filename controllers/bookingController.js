const User = require('./../models/userModel')
const mongoose = require('mongoose')

/*****************************************************
  Create Booking
*****************************************************/
exports.createBooking = async (req, res) => {
    try {
        const newBooking = await User.updateOne({
            _id: req.user.userId
        }, {
            $push: {
                bookedTrips: {
                    tripId: req.body.tripId
                }
            }
        })
        return res.json({
            success: true,
            newBooking
        })
    } catch (error) {
        console.log(error.message)
    }
}

/*****************************************************
  Delete Booking
*****************************************************/
exports.deleteBooking = async (req, res) => {
    try {
        const deletedBooking = await User.updateOne({
            _id: req.user.userId
        }, {
            $pull: {
                bookedTrips: {
                    _id: req.body.bookingId
                }
            }
        })
        return res.json({
            success: true,
            deletedBooking
        })
    } catch (error) {
        console.log(error.message)
    }
}