var express = require('express');
var moviecontroller = require('./controller/moviecontroller.js');
var app = express();
require('./model/db.js');
//var Movies = require('./model/movie-model.js');
app.set('view engine','ejs');

app.use(express.static('./public'));

// var movie = new Movies(
//     {
//         name:'Avenger Endgame',
//         img: '/public/movie_img/avenger_end.jpg',
//         summary: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.It is the sequel to 2012's The Avengers, 2015's Avengers: Age of Ultron and 2018's Avengers: Infinity War, and the twenty-second film in the Marvel Cinematic Universe (MCU).It was directed by Anthony and Joe Russo, written by Christopher Markus and Stephen McFeely, and features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, and Josh Brolin. In the film, the surviving members of the Avengers and their allies attempt to reverse the damage caused by Thanos in Infinity War"
//     }
// );
// movie.save(function(err){
//     if (err)
//         console.log(err);
//     console.log('data stored');
// })
moviecontroller(app);
app.listen('3000');
