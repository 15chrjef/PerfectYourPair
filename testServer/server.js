var express = require('express');
var app = express();


app.get('/', function(req, res) {
  res.send(req.body);
});

app.listen(3005, function() {
  console.log('logging 3005');
});