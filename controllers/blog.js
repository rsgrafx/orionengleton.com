orionApp.controller('BlogController', ['$scope', function BlogController($scope){
  $scope.pagetitle = "Blog Title";
  

  $scope.blogTags = [
  
    { name: 'growth'},
    { name: 'travel'},
    { name: 'life'},
    { name: 'food'},
    { name: 'code'},
    { name: 'family'}
    ]

}]);


orionApp.controller('ShowPostController', ['$scope', '$location', '$http' ,'$routeParams', function ShowPostController($scope, $location, $http, $routeParams) {
  
  $scope.title = 'THIS IS THE ITEM!';
  $scope.post_id = $routeParams.postId;
  $scope.$location = $location;
  console.log($scope.post_id)
  
  // $scope.getPost = function(_id) {
    $http.get( set_base_url() + '/show/' + $scope.post_id ).success(function(data) {
      $scope.blogPost = data;
      console.log($scope.blogPost);
    })    

  $scope.templateUrl = '/templates/post.html'
  // }

}])