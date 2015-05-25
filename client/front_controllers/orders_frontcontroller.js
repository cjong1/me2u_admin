me2u_store.controller('ordersController', function ($scope, storeFactory){

	// get all the customers from the factory
	storeFactory.getCustomers(function(data){
		$scope.customers = data;
	})

	// get all the orders from the factory
	storeFactory.getOrders(function(data){
		$scope.orders = data;
	})

	// get all the orders from the factory
	storeFactory.getProducts(function(data){
		$scope.products = data;
	})

	// add an order in the orders page
	$scope.addOrder = function(){
		storeFactory.addOrder($scope.newOrder, function(){
			$scope.newOrder = {};
			storeFactory.getOrders(function(data){
				$scope.orders = data;
			});
		})
	}

})