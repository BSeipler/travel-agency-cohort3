const express = require('express')

const router = express.Router()
const tripController = require('./../controllers/tripController')
const {
  createTrip,
  getTrips,
  getOneTrip,
  updateTrip,
  deleteTrip,
} = tripController

router.get('/', getTrips)
router.post('/', createTrip)
router.get('/:id', getOneTrip)
router.patch('/:id', updateTrip)
router.delete('/:id', deleteTrip)

module.exports = router