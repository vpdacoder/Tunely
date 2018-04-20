var db = require("./models");

var sampleAlbums = [{
   artistName: 'Flatbush Zombies',
   name: 'Vacation in Hell',
   releaseDate: '2018, April 8',
   genres: [ 'hip-hop', 'rap' ]
 },
 {
   artistName: 'Kendrick Lamar',
   name: 'good kid, m.A.A.d city',
   releaseDate: '2013, February 17',
   genres: [ '10s hip-hop']
 },
 {
   artistName: 'MF Doom',
   name: 'Operation: Doomsday',
   releaseDate: '1999',
   genres: [ 'hip-hop', 'rap' ]
 },
 {
   artistName: 'Backstreet Boys',
   name: 'Backstreet Boys',
   releaseDate: '1997',
   genres: [ 'pop' ]
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
