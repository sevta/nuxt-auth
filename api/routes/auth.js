const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { Router } = require('express')
const router = Router()

let loadedUser
let token

/**
 * TODO:
 * separate function into controller
 * validation
 */

router.post('/auth/register', async (req, res) => {
  const { username, password2, email, password } = req.body

  console.log('register')
  const user = await User.findOne({
    email,
  })
  console.log('user', user)

  if (user) return res.send({ msg: 'user has been registered' })

  if (password !== password2) return res.send({ msg: 'password not match' })

  console.log('password match')
  const hashPassword = bcrypt.hashSync(password, 10)

  const newuser = await User.create({
    username,
    email,
    password: hashPassword,
  })

  console.log('newuser', newuser)

  token = jwt.sign({ user: newuser }, process.env.JWT_SECRET)

  loadedUser = newuser

  console.log({ token })
  res.send({ token })
})

router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({
    email,
  })

  if (!user) return res.send({ msg: 'user not found' })

  const isValidPassword = bcrypt.compareSync(password, user.password)

  if (!isValidPassword) return res.send({ msg: 'password not valid' })

  token = jwt.sign({ user }, process.env.JWT_SECRET)

  loadedUser = user

  console.log({ token })
  res.send({ token })
})

router.get('/auth/user', (req, res) => {
  const { username, email, _id } = loadedUser
  const user = {
    token,
    user: {
      username,
      email,
      _id,
    },
  }
  res.send({
    user,
  })
})

router.post('/auth/logout', (req, res) => {
  token = null
  loadedUser = null
  res.send({ msg: 'ok' })
})

module.exports = router
