const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    techs: { type: Array, required: true },
    webpage: { type: Array },
    github: { type: Array },
    youtube: { type: Array },
    status: { type: String, default: 'active' },
})

const Project = mongoose.model('project', projectSchema)

module.exports = Project