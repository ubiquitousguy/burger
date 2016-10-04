var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var exphbs = require('express-handlebars');
var mysql = require('mysql');

var routes = require('./controllers/burger_controllers.js');

// connection
var connection = require('./config/connection.js');

// middleware
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//handlebars
app.enging('handlebars', exphbs ({
  
}))
