
//import and initialize variales and modules.
var express		= require("express"),
app				= express(),
//REST API - express is the framework to use REST API with Node
mongoose		= require("mongoose"),
//Mongoose interacts with MongoDB
Asset 			= require("./models/assets.js"),
//links up model for assets
//seedDB 			= require("./seeds"),
//links up seed model filling db
port 			= 8080;
//sets listening port for site. 

app.use(express.static(__dirname + "/public"));
//serves all files in public directly to / 
mongoose.connect("mongodb://localhost/assetManagement", {useNewUrlParser: true});
//Connects with database
app.set("views",__dirname + "/views/");
app.set("view engine", "ejs");
//adds the middleware to all the routes without explicitly adding it. 

app.get("/", function(req, res){
	res.render("index");
});

//list - page to list all assets and to sort by category, warranty expiration, age etc...
app.get("/assets", function(req, res){
	res.render("assets/assets");
});

//new - new asset form
app.get("/assets/new", function(req, res){
	res.render("assets/new");
});

//Reporting Page
app.get("/assets/reports", function(req, res){
	Asset.find({}).sort('category').exec(function(err, allAssets){
		if(err){
			console.log(err);
		} else {
			res.render("assets/reports", {assets:allAssets, currentUser:req.user, page: 'repots'});
		}
	});
});

//add - submit new asset
app.post("/assets", function(req, res){
	//pass in assets
	category		= req.body.category;		
	asset_tag		= req.body.asset_tag;		
	service_tag		= req.body.service_tag;		
	asset_name		= req.body.asset_name;		
	owner			= req.body.owner;			 
	serial			= req.body.serial;			
	make			= req.body.make;			 
	model			= req.body.model;			 
	asset_cost		= req.body.asset_cost;		
	date_purhased	= req.body.date_purhased;	
	date_deployed	= req.body.date_deployed;	
	warranty_exp	= req.body.warranty_exp;	
	condition		= req.body.condition;		
	description		= req.body.description;
	var newAsset	= {category:category, asset_tag:asset_tag, service_tag:service_tag, 
		asset_name:asset_name, owner:owner, serial:serial, make:make, model:model, 
		asset_cost:asset_cost, date_purhased:date_purhased, date_deployed:date_deployed, 
		warranty_exp:warranty_exp, condition:
		condition, description:description};
	//Logic to add new asset to database
	Asset.create(newAsset, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			console.log(newlyCreated);
			res.redirect("/assets");
		}
	});		
});

//show - show selected asset
app.get("/assets/:asset_id", function(req, res){
	Asset.findById(req.params.asset_id).exec(function(err, foundAsset){
		if(err){
			console.log(err);
		} else {
			console.log(foundAsset);
			res.render("assets/show", {asset: foundAsset});
		}
	});
});

//edit - edit selected asset
app.get("/assets/:asset_id/edit", function(req, res){
	Asset.findById(req.params.asset_id, function(err, foundAsset){
		if(err){
			console.log(err);
		} else { 
			console.log(foundAsset);
			res.render("assets/edit", {asset: foundAsset, page: 'edit'});
		}
	});
});

//update - update selected asset
app.put("/assets/:asset_id", function(req, res){
	Asset.findByIdAndUpdate(req.params.asset_id, req.body.asset, function(err){
		if(err){
			console.log(err);
		} else {
			res.redirect("/assets/" + req.params.asset_id);
		}
	});
});

//delete - delete selected asset
app.delete("/assets/:asset_id", function(req, res){
	Asset.findByIdAndDelete(req.params.asset_id, function(err){
		if(err){
			console.log(err);
		} else {res.redirect("/assets")}
	});
});


app.listen(port, function(){
	console.log("Asset Management Application listening on: " + port);
});