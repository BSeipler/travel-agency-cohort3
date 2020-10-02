require('dotenv').config()

const express = require('express')
const userRoute = require('./routes/userRoute')
const mongoDb = require('./utils/database')

const app = express()

// middleware
app.use(express.json())
app.use('/api/v1/users', userRoute)

// create the server
app.listen(6428, () => {
  console.log('Listening on port 6428...')
  mongoDb()
})
