app.controller('ReviewController', ['$scope', '$routeParams', function($scope, $routeParams) {
   data = $scope.reviews;
   $scope.detail = data[$routeParams.id];
 
}]);