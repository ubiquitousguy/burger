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
app.engine('handlebars', exphbs ({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

//routes
//routes goes here

//confirmation

var port = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('app is listening on Port: ' + PORT);
});
