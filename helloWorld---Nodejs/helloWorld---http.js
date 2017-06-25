var http = require('http');
var dt = require('./helloWorld---date');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(dt.myDate());
  res.end('<br>Hello World!');
}).listen(8080);
