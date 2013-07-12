var fs = require("fs");
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var k = fs.readFileSync('index.html', 'utf8');
  var str = k.toString();
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
