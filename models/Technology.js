const mongoose = require('mongoose')

const technologySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  languages: [
    {
      language: { type: String, required: true },
      description: { type: String, required: true },
      link: { type: String, required: true },
    },
  ],
  category: { type: String, required: true },
  order: { type: Number, required: true },
  active: { type: Boolean, default: true },
})

const Technology = mongoose.model('technology', technologySchema)

module.exports = Technology
