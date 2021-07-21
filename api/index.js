const express = require('express')
const config = require('./config')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

/**
 * load models
 */
const User = require('./models/User')

/**
 * express middleware
 */
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

/**
 * routes api
 */
const auth = require('./routes/auth')

app.use(auth)

/**
 * [] move routes
 */
app.get('/events', config.isAuthenticated, async (req, res) => {
  res.send({ msg: 'ok' })
})

app.get('/users', config.isAuthenticated, async (req, res) => {
  try {
    const users = await User.find().select('username email')
    console.log(users)
    res.send({ users })
  } catch (error) {
    consol.log(error)
    res.send({ error })
  }
})

module.exports = app
