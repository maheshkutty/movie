var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var movie = new Schema(
    {
        name: String,
        img: String,
        summary: String
    }
);

module.exports = mongoose.model("Movie", movie);