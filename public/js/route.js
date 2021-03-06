angular.module('routes',['ngRoute'])
.config(['$routeProvider','$locationProvider','$httpProvider',function($routeProvider,$locationProvider,$httpProvider){
	$routeProvider
		.when('/home',{templateUrl:'/views/home/index.htm',
					controller:'homeController'})
		.when('/student',{templateUrl:'/views/student/index.htm',
					controller:'studentController'})					
		.when('/student/create',{templateUrl:'/views/student/create.htm',
					controller:'studentController'})
		.when('/error',{templateUrl:'/views/error/index.htm',
					controller:'errorController'})
		.when('/',{redirectTo:'/home'})
		.otherwise({redirectTo:'/error'})
	$locationProvider.html5Mode(true);
}]);