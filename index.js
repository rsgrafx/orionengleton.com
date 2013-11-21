orionApp.controller('HomeController', ['$scope', '$location', '$http', function HomeController($scope, $location, $http) {
  
  // scope specific stuff here.  
  // $sceProvider.enabled(false);

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

orionApp.directive('itemlocation', function() {
  return {
    restrict: 'AE',
    scope: false,
    priority: 1,
    template: '<div> Original Item location directive. </div>'
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
