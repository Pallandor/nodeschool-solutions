// Express solution

var express = require('express');
var bodyparser = require('body-parser');

var app = express();
var mountPath = '/form';
var port = process.argv[2];

app.use(bodyparser.urlencoded({ extended: false }));

app.post(mountPath, function(req, res) {
    var str = req.body.str.split('').reverse().join('');
    res.end(str);
}).listen(port);