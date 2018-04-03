var express = require('express'); 
var http = require("http");

var MongoClient = require('mongodb').MongoClient;

var app = express(); 

var port = 3008;

var bodyParser = require('body-parser'); 

var cookieParser = require('cookie-parser');

var db;
var participant = 0; 

var bankStartTime;
var shoppingStartTime;
var emailStartTime;


http.globalAgent.maxSockets = 1000;

//var mongo = require('mongodb').MongoClient;   //storage of data

//https://stackoverflow.com/questions/23595282/error-no-default-engine-was-specified-and-no-extension-was-provided
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

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
				req.body.participantID = participant;
				participant++;
				
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
		
		res.sendStatus(200);
	}	
});

app.use('/passAttempt', bodyParser.urlencoded({extended:true}));
app.post('/passAttempt', function(req, res) {
	
	//console.log(req.body);
	
	//NOTE: assuming last entry in database is the participant we are concerned with now
	//this assumption is only accurate on the local only version of this website
	//to launch to the world wide web this would need to be fixed
	
	MongoClient.connect("mongodb://localhost:27017/3008DB",function(err,database) {
		
		var dbo = database.db("3008DB");
		
		var pictureString;
		
		if(req.body.pictureLocation == 0) {
					  
			pictureString = "http://localhost:3008/man.gif";

		} else if (req.body.pictureLocation == 1) {
			
			pictureString = "http://localhost:3008/dog.gif";
			
		} else if (req.body.pictureLocation == 2) {
			
			pictureString = "http://localhost:3008/car.gif";
			
		} else if (req.body.pictureLocation == 3) {
			
			pictureString = "http://localhost:3008/woman.gif";
			
		} else if (req.body.pictureLocation == 4) {
			
			pictureString = "http://localhost:3008/ball.gif";
			
		} else if (req.body.pictureLocation == 5) {
			
			pictureString = "http://localhost:3008/apple.gif";
			
		}
		
		console.log("Picture String:" + pictureString);

		
		
		if (req.body.passwordType == "bank") {
			
			
			  
		    var collection = dbo.collection("passwords");
		    var query = { };
		  
		    dbo.collection("passwords").find(query).toArray(function(err, result) {
			    if (err) throw err; 
			  
			    //console.log(result);
			  
			 
			    if(result[participant-1].pass1 === req.body.passwordEntered) {
				    if(result[participant-1].passImage1 == pictureString) {
					  
				       console.log("correct password");
					   
					 
					   
					   req.body.participantID = participant -1;
					   
					   console.log("inserting this login information into the database:"); 
					   console.log(req.body);
					   
					   dbo.collection("logins").insertOne(req.body, function(err, res) {
					      if (err) throw err;
					      console.log("Document inserted");
					      database.close();
				       });
					   
					   
				    } 
			    } else {
					
					console.log("wrong password");
					   
					   if(req.body.numTries == 3) {
						  
						 dbo.collection("logins").insertOne(req.body, function(err, res) {
					        if (err) throw err;
					        console.log("Document inserted");
					        database.close();
				         });
					   }
			  
			    database.close();
				}
			});
			
		    
		  
		 
		} else if (req.body.passwordType == "shopping") {
			
		  var collection = dbo.collection("passwords");
		  var query = {  };
		  
		  dbo.collection("passwords").find(query).toArray(function(err, result) {
			  if (err) throw err; 
			  
			  //console.log(result);
			  
			  if(result[participant-1].pass2 === req.body.passwordEntered) {
				  if(result[participant-1].passImage2 == pictureString) {
					  
				     console.log("correct password");
					 
					 
					 
					 req.body.participantID = participant -1;
					   
					 console.log("inserting this login information into the database:"); 
					 console.log(req.body);
					   
					 dbo.collection("logins").insertOne(req.body, function(err, res) {
					    if (err) throw err;
					    console.log("Document inserted");
					    database.close();
				     });
				  }
					   
			  } else {
				  console.log("wrong password");
					  
					  if(req.body.numTries == 3) {
						  
						 dbo.collection("logins").insertOne(req.body, function(err, res) {
					        if (err) throw err;
					        console.log("Document inserted");
					        database.close();
				         });
						  
						  
					  }
			  }
			  
			  database.close();
		  });
		
		} else {
			
		
		  console.log("in email");
		
		  var collection = dbo.collection("passwords");
		  var query = {  };
		  
		  dbo.collection("passwords").find(query).toArray(function(err, result) {
			  if (err) throw err; 
			  
			  //console.log(result);
			  
			  if(result[participant-1].pass3 === req.body.passwordEntered) {
				  if(result[participant-1].passImage3 == pictureString) {
					  
				     console.log("correct password");
					 
					 
					 
					 req.body.participantID = participant -1;
					   
					 console.log("inserting this login information into the database:"); 
					 console.log(req.body);
					   
					 dbo.collection("logins").insertOne(req.body, function(err, res) {
					    if (err) throw err;
					    console.log("Document inserted");
					    database.close();
				     });
				  }
					 	 
			  } else {
				  console.log("wrong password");
					  
					  if(req.body.numTries == 3) {
						  
						 dbo.collection("logins").insertOne(req.body, function(err, res) {
					        if (err) throw err;
					        console.log("Document inserted");
					        database.close();
				         });
						  
						  
					  }
				  
			 }
			  
			  database.close();
		  });
		
		} 
		
	});
	
	res.sendStatus(200);
	
});



app.get('/test', function(req, res) {
	
	console.log("loading the test page");
	
	bankStartTime = newDate();
	
	console.log(bankStartTime);
	
	res.render('test', {});
});


app.get(['/', '/index.html', '/home', '/index/'], function(req, res) {

	res.render('index', {}); 

});


app.listen(3008, function(){console.log("Server running on port 3008");});

	
