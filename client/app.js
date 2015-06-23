var me2u_store = angular.module('me2u_store', ['ngRoute']);

// Use the config method to set up routing for partials
me2u_store.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/partials/dashboard.html'
		})
		.when('/products', {
			templateUrl: '/partials/products.html'
		})
		.when('/orders', {
			templateUrl: 'partials/orders.html'
		})
		.when('/customers', {
			templateUrl: 'partials/customers.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});