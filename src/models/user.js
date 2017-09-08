var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true
	},
	emailAddress: {
		type: String,
		unique: true,
		required: true,
		match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email address']
	},
	password: {
		type: String,
		required: true
	}
});
var User = mongoose.model('User', UserSchema);
module.exports = User;