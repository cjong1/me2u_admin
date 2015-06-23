me2u_store.controller('dashboardController', function ($scope, storeFactory){

	// jQuery to show all products when button is clicked
	$(document).ready(function(){
	    $(".show_more_products").click(function(){
	        $(".show_more_products").hide();
	    });
	});

	// jQuery to show all orders when button is clicked
	$(document).ready(function(){
	    $(".show_more_orders").click(function(){
	        $(".show_more_orders").hide();
	    });
	});

	// jQuery to show all customers when button is clicked
	$(document).ready(function(){
	    $(".show_more_customers").click(function(){
	        $(".show_more_customers").hide();
	    });
	});

	// call on factory to get all customers from database
	storeFactory.getCustomers(function(data){
		$scope.customers = data;
	})

	// call on factory to get all orders from database
	storeFactory.getOrders(function(data){
		$scope.orders = data;
	})

	// call on factory to get all products from database
	storeFactory.getProducts(function(data){
		$scope.products = data;
	})

	// set the amount of products to be show when page first loads
	// limit will be set to 3
	$scope.limitedProduct = 3;

	// when showAllProducts is called from the partial, the limit wil be reassigned to 100
	$scope.showAllProducts = function() {
		$scope.limitedProduct = 100;
	}

	// limit orders shown to three orders
	$scope.limitedOrder = 3;

	// when showAllProducts is called from the partial, the limit wil be reassigned to 100
	$scope.showAllOrders = function() {
		$scope.limitedOrder = 100;
	}

	// limit customers shown to three customers
	$scope.limitedCustomer = 3;

	// when showAllCustomers is called from the partial, the limit wil be reassigned to 100
	$scope.showAllCustomers = function() {
		$scope.limitedCustomer = 100;
	}

})