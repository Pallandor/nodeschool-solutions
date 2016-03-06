var express = require('express');
var crypto = require('crypto');
var initialMountPath = '/message/:RESTOFPATH';
var app = express();

// Superfluous function for demonstrative purpose only. 

function urlPrinter(req, res, next){
    console.log(req.url);
    next(); 
}

function extractId(req, res, next) {
    console.log('restof path: ' + req.params.RESTOFPATH);
    req.messageId = req.params.RESTOFPATH || null;
    console.log('inside extractId middlewar, messageId is: ' + req.messageId);
    if (req.messageId) {
        return next(); // does return do anything here?
    }
    throw new Error('req.messageId is falsy!');
}

function encryptWithSha(req, res, next) {
    var encryptedDateID = crypto.createHash('sha1')
        .update(new Date().toDateString() + req.messageId)  // I forgot to add the date to the data. 
        .digest('hex');

    req.messageId = encryptedDateID;
    console.log('inside encryptWithSha middleware, messageId is: ' + req.messageId);
    next(); // should I do next && next(); ?? as check for no more next middleware? 
    // actually if no more middleware, then res.end() ? 
}

app.use(urlPrinter); // for debugging purposes .. 
app.use(initialMountPath, extractId); // so app.use is not strict with mountPath
// ... but app.put is. 
app.use(encryptWithSha);
app.put('/message/*', function(req, res) {
    console.log('Entered app put');
    res.end(req.messageId);
}).listen(process.argv[2]);


// NEXT challenge is to to use the below. 

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
