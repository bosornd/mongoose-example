var mongoose = require('mongoose')
var Schema   = mongoose.Schema

var lessonSchema = new Schema({
	'title' : String,
	'students' : [{ 'user' : Object }],
})

module.exports = mongoose.model('lesson', lessonSchema);
