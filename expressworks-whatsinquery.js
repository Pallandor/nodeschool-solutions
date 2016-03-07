// Express solution

var express = require('express');
var bodyparser = require('body-parser');
var querystring = require('querystring');

var app = express();

app.get('/search', function(req, res) {
	res.end(JSON.stringify(req.query)); 
	// or can use Express' res.send method for auto JSON stringification
	// res.send(req.query); 
}).listen(process.argv[2]);
