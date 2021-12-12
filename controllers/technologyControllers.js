const Technology = require('../models/Technology')

const technologyControllers = {
    getAllTechnologies: async (req, res) => {
        try {
            let techs = await Technology.find()
            res.status(200).json({ success: true, response: techs })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    createTechnology: async (req, res) => {
        const { name, languages, category, image, order, active } = req.body
        const newTech = new Technology({
            name,
            languages,
            category,
            image,
            order,
            active
        })
        try {
            if (!req.user.admin) return res.status(401).send("You don't have access to do this.")
            await newTech.save()
            res.status(200).json({ success: true, response: newTech })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getOneTechnology: async (req, res) => {
        try {
            let tech = await Technology.findOne({ _id: req.params.id })
            res.status(200).json({ success: true, response: tech })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    updateTechnology: async (req, res) => {
        try {
            if (!req.user.admin) return res.status(401).send("You don't have access to do this.")
            let edited = await Technology.findOneAndUpdate(
                { _id: req.params.id },
                { ...req.body },
                { new: true }
            )
            res.status(200).json({ success: true, response: edited })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    deleteTechnology: async (req, res) => {
        try {
            if (!req.user.admin) return res.status(401).send("You don't have access to do this.")
            await Technology.findOneAndDelete({ _id: req.params.id })
            res.status(200).json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    }
}

module.exports = technologyControllers