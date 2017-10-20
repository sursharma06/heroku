var express = require('express');
var app = express();
var ejs = require('ejs');
app.set('view engine', 'ejs');

app.use(express.static('views'));

app.get('/', function (req, res) {
  res.render('index');
  //res.send('WELCOME TO MY EXPRESS APP');
});

app.listen(8000, function () {
  console.log('connecting to port 8000...');
});
