// define a collection schema for our application.
const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
	name: {
		type: String,
		// required: true,
	},
	address: {
		type: String,
		// required: true,
	},
	city: {
		type: String,
		// required: true,
	},
	state: {
		type: String,
		// required: true,
	},
	zip_code: {
		type: Number,
		// required: true,
	},
	phone_number: {
		type: String,
		// required: true,
	},
	Website: {
		type: String,
		// default: "N/A",
	},
});

const Provider = mongoose.model('provider', ProviderSchema);

module.exports = Provider;
