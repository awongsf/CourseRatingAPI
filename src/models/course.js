var mongoose = require('mongoose');
var CourseSchema = new mongoose.Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
		/* http://mongoosejs.com/docs/populate.html */
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	estimatedTime: String,
	materialsNeeded: String,
	steps: [{
		stepNumber: Number,
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	}],
	reviews: [{
		type: Schema.Types.ObjectId,
		ref: 'Review'
		/* http://mongoosejs.com/docs/populate.html */
	}]
});
var Course = mongoose.model('Course', CourseSchema);
module.exports = Course;