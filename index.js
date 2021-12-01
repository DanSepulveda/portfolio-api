const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
require('dotenv').config()
require("./config/passport")
require('./config/databse')
const router = require('./routes/index')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

exports.app = functions.https.onRequest(app)