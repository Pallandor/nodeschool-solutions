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
var mountPath = '/home';
var fakeExp = {};
fakeExp.initialise = function(req, res) {
    this.req = req;
    this.res = res;
};

// Not smart, as will return error if it's simply not '/home', but '/contact-us' instead. 
// unless accesses chained mountPaths? TMD SB (too much dude step back) 
fakeExp.get = function(mountPath, callback) {
    this.res.end(this.req.url === mountPath && callback()); //this should be fakeexp which has the req. 
}

var myServer = http.createServer(function(req, res) {
    fakeExp.initialise(req, res);
    fakeExp.get(mountPath, function() {
        return jade.renderFile(__dirname + '/templates/index.jade', { date: new Date().toDateString() });
    });
}).listen(port);

// // Modular function checker, test this out later. otherwise too many moving parts.
// access to req, res objs may be issue. Closure or pass by argument, pass by obj..?   


// Express solution with Promises
