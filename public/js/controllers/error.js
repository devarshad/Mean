angular.module('controllers')
.controller('errorController',['$routeParams','$scope',function($routeParams,$scope){
	$scope.message='Page not found !';
}])