const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {
  createAdmin: async (req, res) => {
    const { username, password } = req.body
    const { key } = req.user.admin
    let hashedPass = bcrypt.hashSync(password, 10)
    try {
      let match = key && bcrypt.compareSync(process.env.SECRETORKEY, key)
      if (!match) throw new Error('key error')
      const newKey = bcrypt.hashSync(process.env.SECRETORKEY)
      const user = new User({
        username,
        password: hashedPass,
        admin: { flag: true, key: newKey },
      })
      await user.save()
      res.status(200).json({ success: true, response: user })
    } catch (error) {
      res.json({ success: false, error: error.message })
    }
  },
  login: async (req, res) => {
    const { username, password } = req.body
    try {
      let user = await User.findOne({ username })
      if (!user) throw new Error('Username and/or password are incorrect.')
      let passMatch = bcrypt.compareSync(password, user.password)
      if (!passMatch) throw new Error('Username and/or password are incorrect.')
      const token = jwt.sign(
        { _id: user._id, username: user._username },
        process.env.SECRETORKEY
      )
      res.status(200).json({ success: true, response: { username, token } })
    } catch (e) {
      res.json({ success: false, error: e.message })
    }
  },
  verifyToken: (req, res) => {
    res.status(200).json({
      success: true,
      response: { username: req.user.username },
    })
  },
}

module.exports = userControllers
