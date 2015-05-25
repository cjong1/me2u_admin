me2u_store.controller('customersController', function ($scope, storeFactory){

	// get all the customers from the factory
	storeFactory.getCustomers(function(data){
		$scope.customers = data;
	})

	// add a customer to the db
	$scope.addCustomer = function(){
		storeFactory.addCustomer($scope.newCustomer, function(data1){
			$scope.newCustomer = {};
			$scope.error = data1;
			storeFactory.getCustomers(function(data){
				$scope.customers = data;
			})
		})
	}

	// remove a customer from the db
	$scope.removeCustomer = function(customer){
		storeFactory.removeCustomer(customer, function() {
			storeFactory.getCustomers(function(data){
				$scope.customers = data;
			})
		})
	}

})