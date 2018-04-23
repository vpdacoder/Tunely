// SERVER-SIDE JAVASCRIPT

var db          = require('./models');

/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////


//require express in our app
var express          = require('express'),
    bodyParser       = require('body-parser'),
    methodOverride   = require('method-override')

// generate a new express app and call it 'app'
var app         = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));


// set the view engine to ejs
app.set('view engine', 'ejs');


//Use this for any requests with _method
app.use(methodOverride("_method"));


// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index');
});


// ===================================
//READ
// ===================================
app.get('/collections', function (req, res) {
  // send all books as JSON response
  db.Album.find({}, function(err, albums){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.render('collection',{albums:albums});
  });
});

// ===================================
//CREATE
// ===================================
app.post("/collections", function(req,res){
  //get data from the form and add to the DB thru bodyParser
  var artistName   = req.body.artistName;
  var name         = req.body.name;
  var releaseDate  = req.body.releaseDate;
  var genres       = req.body.genres;
  var imageurl     = req.body.imageurl;

  var newAlbum     = {artistName:artistName,
                      name:name,
                      releaseDate:releaseDate,
                      genres:genres,
                      imageurl:imageurl
                      }
  //Create a new album and save it to the DB
  db.Album.create(newAlbum, function(err,newlyCreatedAlbum){
    if(err){
      console.log(err);
    } else {
      //redirect back to collections page
      res.redirect('/collections');
    }
  })
})

// ===================================
//EDIT ROUTES
// ===================================
app.get("/collections/:id/edit", function(req,res){
  db.Album.findById(req.params.id, function(err,foundAlbum){
    if(err){
      res.redirect("/collections");
    } else {
      res.render("edit", {album: foundAlbum});
    }
  });
})

// ===================================
//UPDATE ROUTE
// ===================================
app.put("/collections/:id", function(req,res){
  db.Album.findByIdAndUpdate(req.params.id,req.body.album,function(err, updatedAlbum){
    if(err){
      res.redirect("/collections");
    }else {
      res.redirect("/collections");
    }
  });
});

// ===================================
//DESTROY ROUTE
// ===================================
app.delete("/collections/:id", function(req,res){
  db.Album.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect("/collections");
    } else
      res.redirect("/collections");
  });
});



app.listen(3000);
console.log('3000 is the magic port');
