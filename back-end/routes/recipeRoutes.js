const express = require('express')
const recipeController = require('../controller/recipeController')
const recipeRouter = express.Router()
const Recipe = require('../model/Recipe')


recipeRouter.get('/', recipeController.index)


module.exports = recipeRouter