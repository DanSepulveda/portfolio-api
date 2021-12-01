const Technology = require('../models/Technology')

const technologyControllers = {
    getAllTechnologies: async (req, res) => {
        try {
            let nname = 0
            if (nname === 0) return res.status(401).send("You don't have access to do this")
            let techs = await Technology.find()
            res.status(200).json({ success: true, response: techs })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    createTechnology: async (req, res) => {
        const { name, languages } = req.body
        const newTech = new Technology({
            name, languages: JSON.parse(languages)
        })
        try {
            // if (!req.user.admin) throw new Error("You don't have access to do this.")
            let picture
            const { image } = req.files
            picture = `/${newTech._id}.${image.name.split('.')[image.name.split('.').length - 1]}`
            image.mv(`${__dirname}/../assets/${newTech._id}.${image.name.split('.')[image.name.split('.').length - 1]}`, (err) => {
                if (err) return console.log(err)
            })
            newTech.image = picture
            await newTech.save()
            res.json({ success: true, response: newTech })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getOneTechnology: async (req, res) => {
        try {
            let tech = await Technology.findOne({ _id: req.params.id })
            res.json({ success: true, response: tech })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    updateTechnology: async (req, res) => {
        try {
            // if (!req.user.admin) throw new Error("You don't have access to do this.")
            let edited = await Technology.findOneAndUpdate(
                { _id: req.params.id },
                { ...req.body },
                { new: true }
            )
            res.json({ success: true, response: edited })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    deleteTechnology: async (req, res) => {
        try {
            // if (!req.user.admin) throw new Error("You don't have access to do this.")
            await Technology.findOneAndDelete({ _id: req.params.id })
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    }
}

module.exports = technologyControllers