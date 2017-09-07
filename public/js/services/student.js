angular.module('services')
.factory('studentService',['$http','$q',function($http,$q){
	var stu={};
	stu.getList=function(key){
		var defer=$q.defer();
		if(key==undefined) key="";
		$http.get('/api/student/',{params:{'key':key}})
			.success(function(data) {
				defer.resolve(data);
			})
			.error(function(data) {
				defer.resolve(data);
				console.log('Error: ' + data);
			});
		
		return defer.promise;
	}
	
	stu.create=function(form){
		var defer=$q.defer();
		$http.post('/api/student/',form)
			.success(function(data) {
				defer.resolve(data);
			})
			.error(function(data) {
				defer.resolve(data);
				console.log('Error: ' + data);
			});
		
		return defer.promise;
	}
	
	stu.edit=function(id){
		var defer=$q.defer();
		$http.get('/api/student/edit',{params:{'id':id}})
			.success(function(data) {
				defer.resolve(data);
			})
			.error(function(data) {
				defer.resolve(data);
				console.log('Error: ' + data);
			});
		
		return defer.promise;
	}
	
	stu.update=function(form){
		var defer=$q.defer();
		$http.put('/api/student/',form)
			.success(function(data) {
				defer.resolve(data);
			})
			.error(function(data) {
				defer.resolve(data);
				console.log('Error: ' + data);
			});
		
		return defer.promise;
	}
	
	stu.remove=function(id){
		var defer=$q.defer();
		$http.delete('/api/student/',{params:{'id':id}})
			.success(function(data) {
				defer.resolve(data);
			})
			.error(function(data) {
				defer.resolve(data);
				console.log('Error: ' + data);
			});
		
		return defer.promise;
	}
	return stu;
}])