var Yike = angular.module('Yike', ['ngRoute']);
Yike.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './views/body.html',
        
    })
    .when('/older',{
    	templateUrl:'./views/older.html',
       
    })
}]);


Yike.run(['$rootScope',function($rootScope){
	$rootScope.collapsed = false;
	$rootScope.toggle = function(){
		$rootScope.collapsed = !$rootScope.collapsed;
	}
}])



