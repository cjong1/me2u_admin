var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports =(function() {
	return {
		show: function(req, res) {
			Product.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},

		add: function(req, res) {
			var new_product = new Product({name: req.body.name, image: req.body.image, description: req.body.description, quantity: req.body.quantity});
			new_product.save(function(err, response) {
				if(err) {
					console.log('Product was not saved in database.');
				}
				else {
					console.log('Product was saved into database.');
					res.json(response);
				}
			})
		}
	}
})();