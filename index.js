orionApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
  // Set the location provider enable base urls.
  $locationProvider.html5Mode(true)

  delete $httpProvider.defaults.headers.common['X-Requested-With'];


  $routeProvider.
    when('/', {templateUrl: 'templates/home.html', controller: 'HomeController'}).
    when('/about', {templateUrl: 'templates/about.html', controller: 'AboutController' }).
    when('/tools', {templateUrl: 'templates/tools.html', controller: 'ToolsController'}).
    when('/home', {templateUrl: 'templates/blog.html', controller: 'BlogController' }).
    otherwise({redirectTo: '/'});
}]);

orionApp.controller('HomeController', ['$scope', '$http', function HomeController($scope, $http) {
  // scope specific stuff here.
  $scope.mainTitle='These are my posts';
  
  $http({method: 'GET', url: 'http://test.orionengleton.com/home/index'}).
      success( function(response, status, headers, config) {
        $scope.myposts = response;
        
      // when the response is available
    }).
    error(function(data, status, headers, config) {
      // Error response
   });

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

