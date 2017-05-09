angular.module("demo", [])
.controller('GetController',function($scope,$http) {
    $scope.click = function() {
       alert('Button clicked');
       console.log('Button clicked');
       $http.get('http://127.0.0.1:3000/execute');
    };
  });
  
