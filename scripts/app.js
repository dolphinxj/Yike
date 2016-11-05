angular.module('Yike', ['$ngRoute']).
config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl:'../views/body.html'
		})
	}])