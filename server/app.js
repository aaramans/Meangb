/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compress = require('compression');
var cors = require('cors');
var logger = require('morgan');
var port = process.env.PORT || 4000;
var routes;

var environment = process.env.NODE_ENV;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(compress());
app.use(logger('dev'));
app.use(cors());

routes = require('./routes/index.js');

console.log('About to start the node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.post('/login', routes.login);

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
});
