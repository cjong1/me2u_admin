me2u_store.factory('storeFactory', function($http) {

	var factory = {};

	factory.getCustomers = function (callback){
		$http.get('/customers').success(function(output){
			callback(output);
		})
	};

	factory.addCustomer = function (info, callback) {
		console.log(info);
		$http.post('/add_customer', info).success(function(data) {
				callback(data);
		});
	}

	factory.removeCustomer = function(info, callback) {
		$http.post('/remove_customer', info).success(function(output){
			callback(output);
		})
	}

	factory.getOrders = function (callback){
		$http.get('/orders').success(function(output){
			callback(output);
		})
	}

	factory.addOrder = function(info, callback) {
		$http.post('add_order', info).success(function(output){
			callback(output);
		})
	}

	factory.getProducts = function(callback){
		$http.get('/products').success(function(output){
			callback(output);
		})
	}

	factory.addProduct = function(info, callback) {
		$http.post('add_product', info).success(function(output){
			callback(output);
		})
	}

	return factory;

})