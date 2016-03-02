// Express solution
var express = require('express');

var app = express();
var mountPath = '/home';
var port = process.argv[2];
var currentDate = function() {
    return new Date().toDateString();
};

app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');

app.get(mountPath, function(req, res) {
        res.render('index', { date: currentDate() }); // if func inovcation doesnt work, just do toDateStr here 
    })
    .listen(port);

// Node solution
