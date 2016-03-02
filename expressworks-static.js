// // Express solution
// var express = require('express');
// var path = require('path');

// var app = express();
// var port = process.argv[2];
// var filePath = process.argv[3];

// app.use(express.static(filePath || __dirname + '/public'));
// app.listen(port);



// // Raw Node.js solution

// Logically, app.use is storing a function (usually?) to be invoked when 
// the server receives a request. They then get lazily evaluated. 
// In this case, express.static is invoked, I assume its a subset
// of fs.createReadStream ish? 

// var http = require('http');
// var fs = require('fs');

// var port = process.argv[2];
// var filePathToServe = process.argv[3];

// var app = http.createServer(function(req, res) {
//     var str = '';
//     res.on('data', function(chunk) { 
//         str += chunk.toString();
//     })
//     res.on('end', function() {
//         console.log(str);
//     })
//     fs.createReadStream(filePathToServe + '/index.html').pipe(res); // pipe will auto res.end() on src emits end
// }).listen(port);

