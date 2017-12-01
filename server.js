
// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
var secret = process.env.SESSION_SECRET || 'MEAN';
app.use(session({ 
	secret:secret ,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());





// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));



// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});




const port = process.env.PORT || '3100';

// Create HTTP server
const server = http.createServer(app);
//models
var models = require("./server/models/models.server.js")(app);
//services
require("./server/app.js")(app,models);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen( port , ()=>console.log("Running"));
