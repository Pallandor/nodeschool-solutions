// // Express solution
// var express = require('express');

// var app = express();
// var mountPath = '/home';
// var port = process.argv[2];
// var currentDate = function() {
//     return new Date().toDateString();
// };

// app.set('views', __dirname + '/templates');
// app.set('view engine', 'jade');

// app.get(mountPath, function(req, res) {
//         res.render('index', { date: currentDate() }); // if func inovcation doesnt work, just do toDateStr here 
//     })
//     .listen(port);

// Node solution
var http = require('http');
var jade = require('jade');
var port = process.argv[2];

var myServer = http.createServer(function(req, res) {
    var html = jade.renderFile(__dirname + '/templates/index.jade', { date: new Date().toDateString() });
    res.end(html);
}).listen(port);

// // Modular function checker, test this out later. otherwise too many moving parts.
// // access to req, res objs may be issue. Closure or pass by argument, pass by obj..?   
// var pathSpecific = function(mountPath, callback) {
//     if (req.url = mountPath) {
//         callback();
//     }
// }

// Express solution with Promises
