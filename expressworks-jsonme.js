// Express solution
// // Streaming version / ES6
var express = require('express');
var fs = require('fs');
var through = require('through2');
var concat = require('concat-stream');

var app = express();
var port = process.argv[2];
var fileToRead = process.argv[3];

// I understand their solution. I was assuming a valid JSON string
// was being read from file. But I can't assume. And the only way
// to test if it's valid is to JSON.parse the buffer/string being read
// and catch any errors. If there's no error, then onforward it again
// as stringified JSON. 
app.get('/books', (req, res) => {
    fs.createReadStream(fileToRead)
        .pipe(concat(finalBuffer => {
            try {
                var books = JSON.parse(finalBuffer.toString());
            } catch (err) {
                res.sendStatus(500);
            }
            res.send(JSON.stringify(books)); // They used res.json(obj); 
        })); 
}).listen(port);