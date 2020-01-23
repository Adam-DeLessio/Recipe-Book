const mongoose = require('mongoose')
const mongoURL = 'mongodb://localhost/api-project'

mongoose.Promise = Promise

mongoose.connect(mongoURL, {
	useNewUrlParser : true,
    useUnifiedTopology: true
})
	.then( feedback => console.log('connected') )
	.catch( err => console.log('connection failed', err) )

module.exports = mongoose