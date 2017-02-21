var mongoose = require('mongoose');

exports.User = mongoose.model('User', new mongoose.Schema({
	firstname: {type:String, required: true},
	lastname: {type:String, required: true},
	username: {type:String, index: { unique: true }, required: true},
	email: {type: String, index: { unique: true }, required: true },
	password: {type:String, required: true},
	role: {type:String, required:true},
	address: {type:String, required:true},
	mobile: {type:String, required:true},
	avatarUrl: {type:String, default: ''},
	status: {type:Boolean, default:true},
	accessToken: {type:String, default:''},
	created: {type: Date, default: Date.now },
	updated: {type: Date, default: Date.now }
}));
