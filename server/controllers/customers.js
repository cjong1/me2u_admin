var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {

// grab all customers from database
		show: function(req, res) {
			Customer.find({}, function(err, results){
				if(err)
				{
					console.log('Something went wrong');
				}
				else
				{
					res.json(results);
				}
			})
		},

// add new customer to database 
		add: function(req, res) {
			var new_customer = new Customer({name: req.body.name, email: req.body.email, phone: req.body.phone});
			Customer.findOne({name: req.body.name}, function(err, customer){
				if(customer){
					res.json({error: "This customer already exists."})
				}
				else {
					new_customer.save(function(err, response) {
						if(err) {
							console.log('Customer was not saved in database.');
						}
						else {
							console.log('Customer was saved into database.')
							res.json(response);
						}
					})
				}
			})
		},

// remove customer with specific id from database
		remove: function(req, res) {
			Customer.remove({_id: req.body._id}, function(err, response) {
				if(err) {
					console.log('Customer not deleted.');
				}
				else {
					res.json(response);
				}
			})
		}
	}
})();