var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	name: String,
	email: String,
	phone: String,
	created: { type: Date, default: Date.now }
});

mongoose.model('Customer', CustomerSchema);

var OrderSchema = new mongoose.Schema({
	name: String,
	product: String,
	quantity: Number,
	created: {type: Date, default: Date.now }
})

mongoose.model('Order', OrderSchema);

var ProductSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	quantity: Number
})

mongoose.model('Product', ProductSchema);