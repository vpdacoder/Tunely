var db = require("./models");

var sampleAlbums = [{
   artistName: 'Flatbush Zombies',
   name: 'Vacation in Hell',
   releaseDate: '2018, April 8',
   genres: [ 'hip-hop', 'rap' ],
   imageurl: "https://i.redd.it/rh03c1zn9uh01.jpg"
   imageurl: ''
 },
 {
   artistName: 'Kendrick Lamar',
   name: 'good kid, m.A.A.d city',
   releaseDate: '2013, February 17',
   genres: [ '10s hip-hop'],
   imageurl: "https://images.genius.com/7ce90585a9da57d4ee67a09f27d8d6bc.1000x1000x1.jpg"
   imageurl: ''
 },
 {
   artistName: 'MF Doom',
   name: 'Operation: Doomsday',
   releaseDate: '1999',
   genres: [ 'hip-hop', 'rap' ],
   imageurl: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Fc0a80e3098696bdf600f54a76667c069.1000x1000x1.jpg"
   imageurl: ''
 },
 {
   artistName: 'Backstreet Boys',
   name: 'Backstreet Boys',
   releaseDate: '1997',
   genres: [ 'pop' ],
   imageurl: "https://cdn-s3.allmusic.com/release-covers/500/0000/049/0000049030.jpg"
   imageurl: ''
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
