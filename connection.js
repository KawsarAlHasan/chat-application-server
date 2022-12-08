const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(
  `mongodb+srv://love-messages:Eo2ZP60Wlkc3ogKE@cluster0.pmj8vq0.mongodb.net/love-messages?retryWrites=true&w=majority`,
  () => {
    console.log('connected to mongodb')
  },
)
