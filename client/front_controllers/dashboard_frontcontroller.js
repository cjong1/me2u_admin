me2u_store.controller('dashboardController', function ($scope, storeFactory){

	storeFactory.getCustomers(function(data){
		$scope.customers = data;
	})

	storeFactory.getOrders(function(data){
		$scope.orders = data;
	})

	storeFactory.getProducts(function(data){
		$scope.products = data;
	})

	// set the amount of products to be show when page first loads
	// limit will be set to 4
	$scope.limitedProduct = 3;

	// when showAllProducts is called from the partial, the limit wil be reassigned to 20
	$scope.showAllProducts = function() {
		$scope.limitedProduct = 100;
	}

	$scope.limitedOrder = 3;

	// when showAllProducts is called from the partial, the limit wil be reassigned to 20
	$scope.showAllOrders = function() {
		$scope.limitedOrder = 20;
	}

	$scope.limitedCustomer = 3;

	$scope.showAllCustomers = function() {
		$scope.limitedCustomer = 20;
	}

})