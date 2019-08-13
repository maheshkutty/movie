var express = require('express');
var moviecontroller = require('./controller/moviecontroller.js');
var app = express();
require('./model/db.js');

app.set('view engine','ejs');

app.use(express.static('./public'));


moviecontroller(app);
app.listen('3000');
