const express = require('express')
const userControllers = require('../controllers/userControllers')
const projectControllers = require('../controllers/projectControllers')
const technologyControllers = require('../controllers/technologyControllers')
const mailControllers = require('../controllers/mailControllers')
const passport = require("passport").authenticate('jwt', { session: false })

const router = express.Router()

// USER
router.route('/newAdmin')
    .post(passport, userControllers.createAdmin)

router.route('/login')
    .post(userControllers.login)

router.route('/verifyToken')
    .post(passport, userControllers.verifyToken)

// TECHNOLOGY
router.route('/technologies')
    .get(technologyControllers.getAllTechnologies)
    .post(passport, technologyControllers.createTechnology)

router.route('/technology/:id')
    .get(technologyControllers.getOneTechnology)
    .put(passport, technologyControllers.updateTechnology)
    .delete(passport, technologyControllers.deleteTechnology)

// PROJECT
router.route('/projects')
    .get(projectControllers.getAllProjects)
    .post(passport, projectControllers.createProject)

router.route('/projects/home')
    .get(projectControllers.getHomeProjects)

router.route('/project/:id')
    .get(projectControllers.getOneProject)
    .put(passport, projectControllers.updateProject)
    .delete(passport, projectControllers.deleteProject)

router.route('/sendMail')
    .post(mailControllers.sendMail)

module.exports = router