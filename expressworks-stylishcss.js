// Investigating their Express solution
var express = require('express')
var app = express()

// I did this before. Compiling from the home workshopper module, lesson public dir. 
app.use(require('stylus').middleware(process.argv[3]));
// Won't this serve the compiled files etc on any type of request including
// post, etc? Not just GET? 
app.use(express.static(process.argv[3]));

app.listen(process.argv[2])

// PS i got it to work because I think it's an issue with my own node / installation
// permissions etc. I know I need to sudo install npm packages for them to work properly.
// So I just did a sudo workshopper module run call, and this solution worked. 


/// ----------- 
// My further testing, create POST request.  

var http = require('http');
var req = http.request({
	// host defaults to localhost which is correct
    port: process.argv[2],
    path: '/public/main.css', // or is this public/main.css hm we'll see. 
    method: 'POST',
}, function(res) {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8'); 
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.')
    })
});

req.write('stuff');
req.end(); 

// Result is a 404 cannot POST. But the original app server DID serve up the
// css content like I predicted. Lol so much for proper routing guys. 
// Though my solution also suffers from the exact same problem, as my
// app.get handler doesn't do anything itself... hm. 



// // My Express solution
// var express = require('express');
// var stylus = require('stylus');
// var path = require('path');

// var port = process.argv[2];
// var app = express();

// // doesn't distinguish by get.. which means express static before app.get
// // is doing all the heavy lifting.. 
// app.use(stylus.middleware(__dirname + '/public')); //later add path.join TMMP 
// app.use(express.static(__dirname + '/public')); 

// app.get('/main.css', function(req, res) {
// 	// app.use inside here with express static does NOT work. 
// 	// but this solution makes app.get instance seems superfluous.. 
//     res.end();
// }).listen(port);

// // The expected result after a verify call in Terminal is the same issue I came up
// // with when using the process.argv[3] directory and pathnames: 

// // "Error: EACCES: permission denied, open &#39;/usr/local/lib/node_modules/expressworks/exercises/stylish_css/public/main.css&#39;<br> &nbsp; &nbsp;at Error (native)"
