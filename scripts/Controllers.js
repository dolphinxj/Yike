
// 控制器模块
angular.module('Controllers', [])

// 处理导航
.controller('NavsController', ['$scope', function($scope) {
	$scope.navs = [
		{link: '#/today', text: '今日一刻', icon: 'icon-home'},
		{link: '#/older', text: '往期内容', icon: 'icon-file-empty'},
		{link: '#/', text: '热门作者', icon: 'icon-pencil'},
		{link: '#/', text: '栏目浏览', icon: 'icon-menu'},
		{link: '#/', text: '我的喜欢', icon: 'icon-heart'},
		{link: '#/', text: '设置', icon: 'icon-cog'},
	];
}])

// 今日一刻
.controller('TodayController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
	
	$rootScope.loaded = false;
	$rootScope.title = '今日一刻';
	$rootScope.index = 0;

	// 异步请求
	$http({
		url: './api/today.php',
		// method: '',
		// params: {}
	}).success(function (info) {
		// info 返回的数据
		// 获取到的数据
		$scope.posts = info.posts;

		$scope.date = info.date;

		$rootScope.loaded = true;
	});

}])

// 往期内容
.controller('OlderController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {

	$rootScope.loaded = false;
	$rootScope.title = '往期内容';
	$rootScope.index = 1;
	// 
	$http({
		url: './api/older.php',
		method: 'get',
		params: {}
	}).success(function (info) {
		// info 返回的数据
		console.log(info);

		$scope.posts = info.posts;

		$rootScope.loaded = true;
	});

}])