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


orionApp.controller('ShowPostController', ['$scope', '$compile', '$location', '$http', '$routeParams',  
                    function ShowPostController($scope, $compile, $location, $http, $routeParams) {
  
  $scope.title = 'THIS IS THE ITEM!';
  $scope.post_id = $routeParams.postId;
  $scope.$location = $location;
  $scope.children = 'base-url'
  
  $http.get( set_base_url() + '/show/' + $scope.post_id ).success(function(data) {

    $scope.blogPost = data;
    $scope.body_of_post = data.html_body;
  })

  $scope.trustDataWithDirectives = function() {
    // return $sce.trustAsHtml($scope.body_of_post)
  }

}])