// Express solution
var express = require('express');
var app = express();

app.get('/home', function(req, res) {
    res.end('Hello World!');
    // self-query: Why can't I req.pipe(process.stdout)?
}).listen(process.argv[2]);


// // Raw Node.js solution
// var http = require("http");

// var rogerServer = http.createServer(function(req, res) {
//     if (req.method === 'GET' && req.url === '/home') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Hello World!');
//     }
// }).listen(process.argv[2]);
