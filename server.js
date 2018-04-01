var express = require('express'); 
var http = require("http");

var MongoClient = require('mongodb').MongoClient;

var app = express(); 

var port = 3008;

var bodyParser = require('body-parser'); 

var cookieParser = require('cookie-parser');

var db;

//var mongo = require('mongodb').MongoClient;   //storage of data
app.use(express.static('views'));
app.set('views', './views'); 







//connect to the database
/*
var db; 
mongo.connect("mongodb://localhost:27017/3008DB", function(err, database) {
	if(err) throw err; 
        db = database; 
        app.listen(3008, function() {console.log("server listening on port 3008");});
});
*/



app.use(function(req, res, next) {
	console.log(req.method + " request for " + req.url); 
    next();
}); 

app.use('/submit', bodyParser.urlencoded({extended:true}));
app.post('/submit', function(req, res) {

	if(req.body===""){
		res.sendStatus(400);
		console.log("problems");
	} else {
		MongoClient.connect("mongodb://localhost:27017/3008DB",function(err,database) {
		
		
		    if(err) {
				console.log("error connecting to the DB");
				console.log(err);
			} else {
				var dbo = database.db("3008DB");
				
				console.log("The following is being submitted");
				console.log(req.body);
			
			    dbo.collection("passwords").insertOne(req.body, function(err, res) {
					if (err) throw err;
					console.log("Document inserted");
					database.close();
				});
				//console.log(collection);
	
				//database.collection.insert(req.body);
				
			}
		});
	}	
});


app.get(['/', '/index.html', '/home', '/index/'], function(req, res) {

	res.render('index', {}); 

});


app.listen(3008, function(){console.log("Server running on port 3008");});

	
