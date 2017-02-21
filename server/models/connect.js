var mongoose = require('mongoose');
var db = mongoose.connection;
var schema = null;

db.on('error', function(){
	console.log("[Debug info----]","Error connecting to database");
});
db.once('open', function() {
  console.log("[Debug info----]","Connected to database");
  schema = require('../models/schema');
});

mongoose.connect('mongodb://localhost/libraryApp');
exports.Schema = schema;
