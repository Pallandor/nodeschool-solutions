// Raw Node.js solution
var http = require("http");

var rogerServer = http.createServer(function(req, res) {
    if (req.method === 'GET' && req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
    }
}).listen(process.argv[2]);

