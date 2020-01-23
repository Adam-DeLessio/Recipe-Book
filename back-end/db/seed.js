const mongoose = require('./connection')
const data = require('./breweries.json')
const Brewery = require('../model/Brewery')

Brewery.deleteMany({}).then(() => {
	Brewery
		.create(data).then((returnData) => {
			console.log(returnData)
			process.exit()
		})
		.catch((err) => {
			console.log("seed didn't work")
		})
})