orionApp.controller('HomeController', ['$scope', '$location', '$http', function HomeController($scope, $location, $http) {
  // scope specific stuff here.
  $scope.mainTitle='These are my posts';
  
  $http({method: 'GET', url:  set_base_url() + '/home/index'}).
      success( function(response, status, headers, config) {
        $scope.myposts = response;
      // when the response is available
    }).
    error(function(data, status, headers, config) {
      // Error response
   });

  $scope.viewPost = function(post_id) {
    $location.url('/post/'+post_id);
  }

}])

orionApp.directive('postDetails', function() {
  return {
    restrict: 'A',
    scope: {
      postdetails: '=details'
    }
  }
});

orionApp.controller('ToolsController', ['$scope', '$http', function ToolsController($scope, $http) {
  $scope.pagetitle = "What I love to work with.";
}]);

orionApp.controller('AboutController', ['$scope', '$http', function AboutCtrl($scope, $http) {
  $scope.pagetitle = "About Me.";
}])

orionApp.controller('BaseCtrl', ['$scope', function BaseCtrl($scope) {
    $scope.title = "Ramblings of a Belizean Fijian Developer Designer Traveler";
  }]
);
