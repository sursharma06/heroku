var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('WELCOME TO MY EXPRESS APP');
});

app.listen(8000, function () {
  console.log('connecting to port 8000...');
});
