var express = require('express');
var app = express();


// view engine setup
app.set('views', 'views');
app.set('view engine', 'ejs');


app.use(express.static('public'));

// index page
app.get('/', function(req, res) {
	res.render('pages/index');
});


app.listen(3000, function() {
  console.log('http://localhost:3000/');
});
