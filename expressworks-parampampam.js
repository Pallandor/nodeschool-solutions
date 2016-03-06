var express = require('express');
var crypto = require('crypto');

var app = express();

app.put('/message/:RESTOFPATH', function(req, res) {
    // WHOOPS - the whole after message dir is the message id... lol 

    // FIRST i'll do it all internally inside app.put req handler.
    // THEN i'll write it out as express middlewar.
    // FINALLY i'll use the req.param middleware advised below.. 
    // console.log(req.url);
    // console.log('whole message param is: ' + req.params.RESTOFPATH);
    var id = req.params.RESTOFPATH;
    // id = /\d{3}/.exec(id)[0];  // No need to search for specific digits. 
    // WHOLE thing is the message id apparently. 
    // console.log('id is now: ' + id);

    var encryptedDateID = crypto.createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex');

    res.end(encryptedDateID);
    // var id = '';

    // var hashedData = crypto.createHash('sha1')
    //     .update(new Date().toDateString() + id)
    //     .digest('hex');

}).listen(process.argv[2]);



// // Express.js apps can also be mounted to paths that contain a variable by
// // prepending a: to the beginning of a variable name.For instance, in
// //     the following, app handles PUT requests in any subdirectory of / path / :

//     app.put('/path/:NAME', function(req, res) { /* ... */ });

// The given variable is then stored in req.params.So, to extract
// parameters from within the request handlers, use:

//     req.params.NAME

// BONUS

// You can use req.param middleware to parse the URL parameter.

// For example,

// app.param('id', function(req, res, next, id) {
//     req.id = id
//         ...
//     next()
// })

// app.get('/message/:id', function(req, res, next) {
//     console.log(req.id)
//     next()
// })

// Videos: [http: //bit.ly/1jW1sBf](http://bit.ly/1jW1sBf).


//         »To print these instructions again, run: expressworks print» To execute your program in a test environment, run: expressworks run program.js» To verify your program, run: expressworks verify program.js» For help run: expressworks help
