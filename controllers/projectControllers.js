const Project = require('../models/Project')

const projectControllers = {
    getAllProjects: async (req, res) => {
        try {
            let projects = await Project.find()
            res.status(200).json({ success: true, response: projects })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    createProject: async (req, res) => {
        const { name, description, images, techs, webpage, github, youtube, status, range } = req.body
        const newProject = new Project({
            name, description, images, techs, webpage, github, youtube, status, range
        })
        try {
            if (!req.user.admin) return res.status(401).send("You don't have access to do this.")
            await newProject.save()
            res.status(200).json({ success: true, response: newProject })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getOneProject: async (req, res) => {
        try {
            let project = await Project.findOne({ _id: req.params.id })
            res.status(200).json({ success: true, response: project })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    updateProject: async (req, res) => {
        try {
            if (!req.user.admin) return res.status(401).send("You don't have access to do this.")
            let edited = await Project.findOneAndUpdate(
                { _id: req.params.id },
                { ...req.body },
                { new: true }
            )
            res.status(200).json({ success: true, response: edited })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    deleteProject: async (req, res) => {
        try {
            if (!req.user.admin) return res.status(401).send("You don't have access to do this.")
            await Project.findOneAndDelete({ _id: req.params.id })
            res.status(200).json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    }
}

module.exports = projectControllers