var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

var input = '';
//var buffer = new Buffer(256);

fs.readFile('index.html', function(err, data) {
  if (err) throw err;
  var buffer = new Buffer(data);	
  input = buffer.toString();
  //console.log(input);
});

app.get('/', function(request, response) {
  response.send(input);
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
