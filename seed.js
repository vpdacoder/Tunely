var db = require("./models");

var sampleAlbums = [{
   artistName: 'Ladyhawke',
   name: 'Ladyhawke',
   releaseDate: '2008, November 18',
   genres: [ 'new wave', 'indie rock', 'synth pop' ]
 },
 {
   artistName: 'The Knife',
   name: 'Silent Shout',
   releaseDate: '2006, February 17',
   genres: [ 'synth pop', 'electronica', 'experimental' ]
 },
 {
   artistName: 'Juno Reactor',
   name: 'Shango',
   releaseDate: '2000, October 9',
   genres: [ 'electronic', 'goa trance', 'tribal house' ]
 },
 {
   artistName: 'Philip Wesley',
   name: 'Dark Night of the Soul',
   releaseDate: '2008, September 12',
   genres: [ 'piano' ]
 }];

// remove all records that match {} -- which means remove ALL records
  db.Album.remove({}, function(err, albums){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all books');
  // create new records based on the array sampleAlbums
  db.Album.create(sampleAlbums, function(err, albums){
    if (err) { return console.log('ERROR', err); }
    console.log("all albums:", albums);
    console.log("created", albums.length, "albums");
    process.exit();
    });
  }
});
