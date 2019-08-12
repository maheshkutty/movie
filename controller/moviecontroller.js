var Movies = require('../model/movie-model.js');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:true});
var multer = require('multer');
//var uploads = multer({dest:'movie_img'});
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/movie_img');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
  });

var upload = multer({ storage: storage });

module.exports = function(app)
{
    app.get('/movie', function(req,res){
        res.render('movie.ejs',{message:'none'});
    });
    app.post('/movie', urlencodedParser ,upload.single('m_img'), function(req,res,next){
        const file = req.file;
        if (!file) {
            const error = new Error('Please upload a file');
            error.httpStatusCode = 400;
            return next(error);
        }
        console.log(file.filename);
        var Movie = new Movies(
            {
                name : req.body.name,
                img: file.filename,
                summary: req.body.summary
            }
        );
        Movie.save(function(err, data){
            if (err)
                console.log(err);
            res.render('movie.ejs',{message:'SuccessFully uploaded the movie data'});
        });
    });
    app.get('/movielist', function(req,res){
        
        Movies.find({}, function(err,data){
            if(err)
                console.log(err);
            res.render('movielist.ejs', {movie:data});
        });
    });
    app.get('/moviedetail/:name', function(req,res){
        console.log(req.params.name);
        Movies.find({name:req.params.name}, function(err,data){
            if(err)
                console.log(err);
            console.log(data);
            data[0].img = '/movie_img/' + data[0].img; 
            res.render('moviedetail.ejs', {movie:data});
        });
    });
    app.get('/movie/api', function(req,res){
        Movies.find({}, function(err,data){
            if(err)
                console.log(err);
            res.send(data);
        });
    });
}