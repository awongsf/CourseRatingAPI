var mongoose = require('mongoose');
var ReviewSchema = new mongoose.Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
		/* http://mongoosejs.com/docs/populate.html */
	},
	postedOn: {
		type: Date,
		default: Date.now
	},
	rating: {
		type: Number,
		required: true,
		min: 1,
		max: 5
	},
	review: String
});
var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;