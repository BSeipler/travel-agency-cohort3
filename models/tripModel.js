const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const reqDate = {
  type: Date,
  required: true
}

const tripSchema = mongoose.Schema({
  destination: reqString,
  cost: {
    type: Number,
    required: true
  },
  title: reqString,
  startDate: reqDate,
  endDate: reqDate,
  image: reqString,
  description: reqString,
  region: reqString
})

module.exports = mongoose.model('Trip', tripSchema)
