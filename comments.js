// Create web server
// 1. Define a port
// 2. Create a server
// 3. Create a route
// 4. Create a response

var http = require('http');
var url = require('url');

var port = 8080;

var server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (path === '/comments') {
    res.end('Comments');
  } else {
    res.end('Hello world');
  }
});

server.listen(port, function() {
  console.log('Server running at http://localhost:' + port);
});