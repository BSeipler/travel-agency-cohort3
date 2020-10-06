const Trip = require('./../models/tripModel')

/*****************************************************
 Create New Trip
*****************************************************/

exports.createTrip = async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body)
    return res.json({
      success: true,
      newTrip
    })
  } catch (error) {
    console.log(error.message)
  }
}

/*****************************************************
 Get All Trips
*****************************************************/
exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find()
    res.json({
      success: true,
      trips
    })
  } catch (error) {
    console.log(error.message)
  }
}

/*****************************************************
 Get One Trip
*****************************************************/
exports.getOneTrip = async (req, res) => {
  try {
    const trip = await Trip.find({ _id: req.params.id })
    return res.json({
      success: true,
      trip
    })
  } catch (error) {
    console.log(error.message)
  }
}

/*****************************************************
 Update Trip
*****************************************************/
exports.updateTrip = async (req, res) => {
  try {
    const trip = await Trip.updateOne({ _id: req.params.id }, req.body)
    return res.json({
      success: true,
      trip
    })
  } catch (error) {
    console.log(error.message)
  }
}

/*****************************************************
 Delete Trip
*****************************************************/
exports.deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.deleteOne({ _id: req.params.id })
    return res.json({
      success: true,
      trip
    })
  } catch (error) {
    console.log(error.message)
  }
}

/*****************************************************
 Get Trips By Region
*****************************************************/
exports.getTripsByRegion = async (req, res) => {
  try {
    const trips = await Trip.find({ region: req.params.region })
    res.json({
      success: true,
      trips
    })
  } catch (error) {
    console.log(error.message)
  }
}
