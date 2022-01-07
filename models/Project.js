const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    esDescription: { type: String, required: true },
    enDescription: { type: String, required: true },
    images: { type: Array, required: true },
    techs: { type: Array, required: true },
    webpage: { type: String, default: null },
    github: { type: String, default: null },
    youtube: { type: String, default: null },
    active: { type: Boolean, default: true },
    order: { type: Number, required: true },
    home: { type: Boolean, default: true },
    main: { type: Boolean, default: true },
})

const Project = mongoose.model('project', projectSchema)

module.exports = Project