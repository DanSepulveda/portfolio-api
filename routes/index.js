const express = require('express')
const userControllers = require('../controllers/userControllers')
const projectControllers = require('../controllers/projectControllers')
const technologyControllers = require('../controllers/technologyControllers')

const router = express.Router()

// USER
// router.route('/newAdmin')
//     .post(userControllers.createAdmin)

// router.route('/login')
//     .post(userControllers.login)

// TECHNOLOGY
router.route('/technologies')
    .get(technologyControllers.getAllTechnologies)
    .post(technologyControllers.createTechnology)

router.route('/technology/:id')
    .get(technologyControllers.getOneTechnology)
    .put(technologyControllers.updateTechnology)
    .delete(technologyControllers.deleteTechnology)

// PROJECT
// router.route('/projects')
//     .get(projectControllers.getAllProjects)
//     .post(projectControllers.createProject)

// router.route('/project/:id')
//     .get(projectControllers.getOneProject)
//     .put(projectControllers.updateProject)
//     .delete(projectControllers.deleteProject)

module.exports = router