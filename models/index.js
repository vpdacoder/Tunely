var mongoose = require("mongoose");

var url = process.env.DATABASEURL || "mongodb://localhost/tunely"
mongoose.connect(url);
// console.log(process.env.DATABASEURL);
// mongoose.connect("mongodb://localhost/tunely");
// mongoose.connect("mongodb://vpdacoder:password@ds127564.mlab.com:27564/tunely");


module.exports.Album = require("./albums");
