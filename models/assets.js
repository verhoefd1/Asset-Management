var	mongoose = require("mongoose");

//schema setup
var assetSchema = new mongoose.Schema({
	category: String,
	asset_tag: String,
	service_tag: String,
	asset_name: String,
	owner: String, 
	serial: String,
	make: String, 
	model: String, 
	asset_cost: Number,
	date_purhased: Date,
	date_deployed: Date,
	warranty_exp: Date,
	condition: String,
	description: String
});

//converts Schema to a model.
module.exports = mongoose.model("Asset", assetSchema);