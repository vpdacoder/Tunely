var mongoose = require('mongoose');

var AlbumSchema = new mongoose.Schema({
  artistName: String,
  name: String,
  releasedDate: String,
  genres: String,
  imageurl: String
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
