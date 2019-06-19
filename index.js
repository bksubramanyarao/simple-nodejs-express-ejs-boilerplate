const express = require('express');
const app = express();


// view engine setup
app.set('views', 'views');
app.set('view engine', 'ejs');


app.use(express.static('public'));

// index page
app.get('/', (req, res) => {
	res.render('pages/index');
});

const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('http://localhost:3000/');
});
