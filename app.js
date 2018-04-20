// SERVER-SIDE JAVASCRIPT

var db          = require('./models');

/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////


//require express in our app
var express     = require('express'),
    bodyParser  = require('body-parser');

// generate a new express app and call it 'app'
var app         = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));


// set the view engine to ejs
app.set('view engine', 'ejs');


// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index');
});

//READ

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

//CREATE


//UPDATE


//DELETE

app.listen(3000);
console.log('3000 is the magic port');
