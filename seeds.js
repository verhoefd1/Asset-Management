var mongoose 	= require("mongoose"),
Asset			= require("./models/assets");

var data = [
	{
		category: "Laptop",
		asset_tag: "445928",
		service_tag: "DJCI39481",
		asset_name: "pvt-aksdflk-2349-djv",
		owner: "Dylan Verhoef", 
		serial: "2340981223849",
		make: "Alienware", 
		model: "15 R3", 
		asset_cost: 2000,
		date_purhased: "04/02/2017",
		date_deployed: "04/02/2017",
		warranty_exp: "04/02/2018",
		condition: "Good",
		description: "Gaming laptop"
	},
	{
		category: "Laptop",
		asset_tag: "23423",
		service_tag: "DJCI23421",
		asset_name: "pvt-aksd12344-jv",
		owner: "Dylan Verhoef", 
		serial: "14557234521",
		make: "Dell", 
		model: "XPS 13", 
		asset_cost: 1400,
		date_purhased: "05/02/2018",
		date_deployed: "05/02/2018",
		warranty_exp: "05/02/2019",
		condition: "Good",
		description: "Work Laptop"
	}, 
	{
		category: "Laptop",
		asset_tag: "441238",
		service_tag: "DJC12381",
		asset_name: "pvt-aksdflk123145-djv",
		owner: "Dylan Verhoef", 
		serial: "23412315459",
		make: "Lenovo", 
		model: "X1 Carbon Gen 3", 
		asset_cost: 400,
		date_purhased: "01/02/2020",
		date_deployed: "01/02/2020",
		warranty_exp: "04/02/2014",
		condition: "Good",
		description: "Personal Laptop"
	},
	{	
		category: "Monitor",
		asset_tag: "23566",
		service_tag: "DJ23481",
		asset_name: "pvt-aks14123-2349-djv",
		owner: "Dylan Verhoef", 
		serial: "2340981223849",
		make: "Benq", 
		model: "GL2760H", 
		asset_cost: 200,
		date_purhased: "04/02/2015",
		date_deployed: "04/02/2015",
		warranty_exp: "04/02/2016",
		condition: "Good",
		description: "Main home monitor"
	},
	{	
		category: "Desktop",
		asset_tag: "235661234",
		service_tag: "DJ23481ad",
		asset_name: "pvt-aks141asd23-2349-djv",
		owner: "Dylan Verhoef", 
		serial: "2340981223849",
		make: "Asus", 
		model: "BM460a2", 
		asset_cost: 2000,
		date_purhased: "04/02/2015",
		date_deployed: "04/02/2015",
		warranty_exp: "04/02/2021",
		condition: "Good",
		description: "Gaming computer"
	}
];
console.log("Hello World this is the Seed!");
function seedDB(){
	Asset.deleteMany({}, function(err){
		if(err){
			console.log(err);
		} else {
			console.log("Remove all assets");
		}
		data.forEach(function(seed){
			Asset.create(seed, function(err, asset){
				if(err){
					console.log(err);
				} else {
					console.log("Created a new assets");
					asset.save();
				}
			});
		});
	});
}
module.exports = seedDB;