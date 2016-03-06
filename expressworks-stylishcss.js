// // Express solution
var express = require('express');
var stylus = require('stylus');
var path = require('path');

var port = process.argv[2];
var app = express();

// doesn't distinguish by get.. which means express static before app.get
// is doing all the heavy lifting.. 
app.use(stylus.middleware(__dirname + '/public')); //later add path.join TMMP 
app.use(express.static(__dirname + '/public')); 

app.get('/main.css', function(req, res) {
	// app.use inside here with express static does NOT work. 
	// but this solution makes app.get instance seems superfluous.. 
    res.end();
}).listen(port);

// The expected result after a verify call in Terminal is the same issue I came up
// with when using the process.argv[3] directory and pathnames: 

// "Error: EACCES: permission denied, open &#39;/usr/local/lib/node_modules/expressworks/exercises/stylish_css/public/main.css&#39;<br> &nbsp; &nbsp;at Error (native)"
