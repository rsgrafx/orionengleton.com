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

orionApp.directive('compile', ['$compile', function($compile) {
    
    return function(scope, element, attrs) {
      scope.$watch(
        function(scope) {
          // watch the 'compile' expression for changes
          // return scope.$eval(attrs.myCompileUnsafe);
          return scope.$eval(attrs.compile);
        },
        function(value) {
          // when the 'compile' expression changes
          // assign it into the current DOM element
          element.html(value);

          // compile the new DOM and link it to the current
          // scope.
          // NOTE: we only compile .childNodes so that
          // we don't get into infinite loop compiling ourselves
          $compile(element.contents())(scope);
        }
      );
    };
  }]);

orionApp.controller('ShowPostController', ['$scope', '$compile', '$location', '$http', '$routeParams',  
                    function ShowPostController($scope, $compile, $location, $http, $routeParams) {
  
  $scope.title = 'THIS IS THE ITEM!';
  $scope.post_id = $routeParams.postId;
  $scope.$location = $location;
  
  $http.get( set_base_url() + '/show/' + $scope.post_id ).success(function(data) {
    $scope.blogPost = data;
    $scope.body_of_post = data.html_body;
  })

  $scope

  $scope.trustDataWithDirectives = function() {
    // return $sce.trustAsHtml($scope.body_of_post)
  }

}])