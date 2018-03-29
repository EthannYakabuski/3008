var express = require('express'); 
var http = require("http");


var app = express(); 

var port = 3008;

var bodyParser = require('body-parser'); 

var cookieParser = require('cookie-parser');

 

//var mongo = require('mongodb').MongoClient;   //storage of data

app.set('views', './views'); 

app.set('view engine', 'pug');





//connect to the database
/*
var db; 

mongo.connect("mongodb://localhost:27017/3008DB", function(err, database) {

	if(err) throw err; 

        db = database; 

        app.listen(3008, function() {console.log("server listening on port 3008");});

});
*/


app.use(express.static('views')); 

app.use(function(req, res, next) {
	console.log(req.method + " request for " + req.url); 
        next();
}); 


app.get(['/', '/index.html', '/home', '/index/'], function(req, res) {

	res.render('index', {}); 

});

app.listen(port, (err) => {
	if (err) {
		return console.log("Error", err); 
	}
	
	console.log("Server listening on port: " + port)
})

