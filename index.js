var http = require('http');

var srv = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-type': 'text/plain'});
  req.pipe(process.stdout);
  res.end();
});

srv.listen(3000);
