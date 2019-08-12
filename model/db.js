var mongoose = require('mongoose');
var url="mongodb://localhost:27017/movie";
mongoose.connect(url, {useNewUrlParser:true}, function(err){
    if (err)
        throw err;
    console.log("connection established");
});

require('./movie-model.js');