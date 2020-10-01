const mongoose = require('mongoose')

const mongoDb = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://blake:jaxcode@cluster0.fipfk.mongodb.net/travel-agency?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    console.log('MongoDB Connected...')
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = mongoDb
