var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports =(function() {
	return {
		show: function(req, res) {
			Order.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},

		add: function(req, res) {
			var new_order = new Order({name: req.body.name, product: req.body.product, quantity: req.body.quantity});
			Product.findOne({name: req.body.product}, function(err, product){
				var updated_quantity = product.quantity - new_order.quantity;

				if(product.quantity >= new_order.quantity) {
					Product.update({name: req.body.product}, {quantity: updated_quantity}, function(err, order) {
						if(err)
						{
							console.log('Product quantity not updated in the database.')
						}
						else
						{
							new_order.save(function(err, response) {
								if(err) {
									console.log('Order was not saved in database.');
								}
								else {
									console.log('Order was saved in database.');
									res.json(response);
								}
							})
						}
					})
				}
				else
				{
					console.log('There are not enough products left for requested purchase.')
				}
			})
		}
	}
})();