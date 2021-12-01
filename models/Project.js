const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    techs: { type: Array, required: true },
    webpage: { type: Array, default: null },
    github: { type: Array, default: null },
    youtube: { type: Array, default: null },
    status: { type: String, default: 'active' },
    range: { type: Number, default: 1 }
})

const Project = mongoose.model('project', projectSchema)

module.exports = Project