const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({

})

const Recipe = mongoose.model('Recipe', RecipeSchema)
module.exports = Recipe