require('dotenv').config()

const express = require('express')
const userRoute = require('./routes/userRoute')
const mongoDb = require('./utils/database')
const tripRoute = require('./routes/tripRoute')

const app = express()

// middleware
app.use(express.json())
app.use('/api/v1/users', userRoute)
app.use('/api/v1/trips', tripRoute)

// assign the port
const port = process.env.PORT || 6428

// create the server
app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
  mongoDb()
})
