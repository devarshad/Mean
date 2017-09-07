angular.module('controllers')
.controller('studentController',['$routeParams','$scope','studentService',function($routeParams,$scope,studentService){
	$scope.formData={};
	
	function list(key){		
		studentService.getList(key)
		.then(function(data){
			$scope.students=data;
		});
	}
	
	list();
	
	$scope.search=function(key){
		list(key);		
	}
	$scope.create=function(form){
		studentService.create($scope.formData)
		.then(function(data){
			$scope.formData={};
			$scope.students=data;
		});
	}
	
	$scope.edit=function(id){
		studentService.edit(id)
		.then(function(data){
			$scope.formData.name=data.name;
			$scope.formData._id=data._id;
		});		
	}
	
	$scope.update=function(id){
		$scope.formData._id=id;
		studentService.update($scope.formData)
		.then(function(data){
			$scope.formData={};
			$scope.students=data;
		});		
	}
	
	$scope.remove=function(id){
		studentService.remove(id)
		.then(function(data){
			$scope.formData={};
			$scope.students=data;
		});		
	}
}])