var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/tunely");
mongoose.connect("mongodb://vpdacoder:password@ds127564.mlab.com:27564/tunely");


module.exports.Album = require("./albums");
