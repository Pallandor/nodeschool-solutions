// // Express solution

// HTML without styles is boring so this exercise will teach you how to use Stylus
//  with Express on the fly.

// Style the HTML from the "STATIC" exercise using Stylus middleware.
// Stylus <https://github.com/stylus/stylus> generates .css files on-the-fly from
// .styl files.

// Your solution should listen on the port supplied by process.argv[2] for
// GET requests, one of which will be for main.css, which should be
// automatically generated by your Stylus middleware. index.html and main.styl
// can be found in process.argv[3] (they are in the same directory).

var express = require('express');
var stylus = require('stylus');
var path = require('path');

var port = process.argv[2];
var app = express();

app.use(stylus.middleware({
	src: process.argv[3],
	dest: process.argv[3]
}));
app.use(express.static(process.argv[3]+'/public'));

app.get('/main.css', function(req, res) {
    res.end();
}).listen(port);

// You could also create your own folder and use these, if you like:

// The main.styl file:

//     p
//       color red

// The index.html file:

//     <html>
//       <head>
//         <title>expressworks</title>
//         <link rel="stylesheet" type="text/css" href="/main.css"/>
//       </head>
//       <body>
//         <p>I am red!</p>
//       </body>
//     </html>

// -------------------------------------------------------------------------------

// // ## HINTS

// // You'll want to plug in some stylus middleware using app.use again.
// // It'll look something like this:

// //     app.use(require('stylus').middleware('/path/to/*.styl' ))

// // In addition to producing in the "STATIC" exercise, you'll need to serve static files.
// // Remember that middleware is executed in the order app.use is called!

// // ## NOTE
