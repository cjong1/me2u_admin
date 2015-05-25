me2u_store.controller('productsController', function ($scope, storeFactory){

	// set the amount of products to be shown when page first loads
	$scope.limitedAmount = 12;

	$(document).ready(function(){
	    $(".show_more").click(function(){
	        $(".show_more").hide();
	    });
	});

	// get all the products from the factory
	storeFactory.getProducts(function(data){
		$scope.products = data;
	})

	// add a product to the db
	$scope.addProduct = function(){
		storeFactory.addProduct($scope.newProduct, function(){
			$scope.newProduct = {};
			storeFactory.getProducts(function(data){
				$scope.products = data;
			});
		})
	}

	$scope.showAllProducts = function() {
		$scope.limitedAmount = 100;
	}
})