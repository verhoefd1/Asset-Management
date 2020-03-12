var express		= require("express"),
app				= express(),
mongoose		= require("mongoose"),
port 			= 8080;

app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost/assetManagement");

app.set("views", __dirname + "/views/");
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.send("Hello World");
});

app.listen(port, function(){
	console.log("Asset Management Application listening on: " + port);

});