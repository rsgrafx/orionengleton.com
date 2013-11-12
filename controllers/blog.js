orionApp.controller('BlogController', ['$scope', '$http', function BlogController($scope, $http){
  $scope.pagetitle = "Blog Title";
  
  
  $scope.blogTags = [
  
    { name: 'growth'},
    { name: 'travel'},
    { name: 'life'},
    { name: 'food'},
    { name: 'code'},
    { name: 'family'}
    ]
  
}])