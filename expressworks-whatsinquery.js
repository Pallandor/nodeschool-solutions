// //  Master Express.js and have fun!
// // ─────────────────────────────────
// //  WHAT'S IN QUERY
// //  Exercise 7 of 8

// // Oftentimes, we need to process the data from the URL query string (urlencoded).

// // Write a route that extracts data from the query string in the GET /search URL
// // route, e.g. ?results=recent&include_tabs=true and then outputs it back to
// // the user in JSON format.

var express = require('express');
var bodyparser = require('body-parser');
var querystring = require('querystring');

var app = express();

// app.use('/search/:QUERYSTR', function(req, res, next){
// 	console.log(req.params.QUERYSTR); 
// 	console.log('in other middleware..'); 
// 	next(); 
// });

// strict pathing. no var name in mountpath for app.get ?? 

// TWO TECH: 1, var name in route path.
// 2: just use good url parser. 
// 3: regexp
// 4: expected no, of chars slice. 

app.use(bodyparser.urlencoded({extended:true})); // func returns func? 

app.get('/search', function(req, res) {
    //  console.log('QUERYSTR IS: ' + QUERYSTR); // str vers of query
    // console.log(req.params);
    // var obj = querystring.parse(req.url);
    // console.log(obj);
    var obj = querystring.parse(req.url.substr(9)); 
    // console.log(JSON.parse(obj)); 
    res.end(JSON.stringify(obj)); 
}).listen(process.argv[2]);

// // Use app.get('/search', function(){...}) for the route.

// // In Express.js, to extract query string parameters, we can use (inside the 
// request handler):

// //     req.query.NAME
