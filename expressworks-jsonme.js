//  Master Express.js and have fun!
// ─────────────────────────────────
//  JSON ME
//  Exercise 8 of 8

// Most of the times we're building RESTful API servers with JSON.

// Write a server that, when it receives a GET, reads a file, parses it to JSON,
// and responds with that content to the user.

// The server should respond to any GET that matches the /books resource path.
// As always, the port is passed in process.argv[2]. The file to read is passed
// in process.argv[3].

// Express solution
// // Streaming version 
var express = require('express');
var fs = require('fs');
var through = require('through2');
var concat = require('concat-stream'); 

var app = express();
var port = process.argv[2];
var fileToRead = process.argv[3];

// SOLUTION V3 (async entire file read... don't know why concatstream isnt
// equivalent to this though. Needs further investigation.)



// SOLUTION V2
// They're expecting a single JSON string chunk. So use concat-stream 
// Although apparently they just do it synchronously reading file lol.. 
// app.get('/books', function(req, res) {
//     fs.createReadStream(fileToRead)
//         .pipe(concat(function(finalBuffer){
//         	// console.log(typeof finalBuffer); // assume its obj.. 
//         	res.end(finalBuffer.toString()); 
//         	// res.send(finalBuffer.toString()); 
//         }));
// }).listen(port);

// // SOLUTION V1
// // Unsure if I'm supposed to be passing pure objects i.e. non-string.
// // Would need to enable objectMode options on all streams. 
// app.get('/books', function(req, res) {
//     fs.createReadStream(fileToRead)
//         .pipe(through(function(chunk, _, next) {
//             this.push(chunk.toString()); // Try using the encoding option instead. 
//             next();
//         }))
//         .pipe(res);
// }).listen(port);








// Respond with:

//     res.json(object)

// Everything should match the /books resource path.

// For reading the file, use the fs module, e.g.,

//     fs.readFile(filename, callback)
