var fs = require("fs");
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var k = fs.readFile('index.html', "utf8");
//  console.log(k);
//  response.send('Hello World 2!');
//  var str = k.toString();
  response.send(k);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
