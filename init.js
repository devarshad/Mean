// set up ======================================================================

// modules======================================================================
var express  = require('express');
var app      = express();                       
var mongoose = require('mongoose');        // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var port = process.env.PORT || 8080;

// configuration files ===============================================================
var db=require('./config/db');

//connect to our mongoDB database 
mongoose.connect(db.url);
var path = require('path');
// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
var studentRoute=require('./routes/student');
app.use('/api/student/',studentRoute);

// log every request to the consoleapp.use(methodOverride());
app.use(morgan('dev'));

// view engine setup
app.set('views', path.join(__dirname, '/public/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// application -------------------------------------------------------------
app.get('*', function(req, res){
   res.render('index.html');
});

app.use(function(req, res, next){
    res.status(404).render('404_error_template.ejs', { message: "Sorry, page not found"});
});

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);

module.exports = app;