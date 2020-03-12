
//import and initialize variales and modules.
var express		= require("express"),
app				= express(),
//REST API - express is the framework to use REST API with Node
mongoose		= require("mongoose"),
//Mongoose interacts with MongoDB
port 			= 8080;
//sets listening port for site. 




app.use(express.static(__dirname + "/public"));
//serves all files in public directly to / 
mongoose.connect("mongodb://localhost/assetManagement");
//Connects with database
app.set("views", __dirname + "/views/");
app.set("view engine", "ejs");
//adds the middleware to all the routes without explicitly adding it. 

app.get("/", function(req, res){
	res.send("Hello World");
});

app.listen(port, function(){
	console.log("Asset Management Application listening on: " + port);
});