const functions = require("firebase-functions");
const express = require('express')
require('dotenv').config()
require('./config/databse')
// const admin = require('firebase-admin');

const app = express()


exports.app = functions.https.onRequest(app)