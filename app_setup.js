window.set_base_url = function() {
  if (window.location.origin == 'http://localhost:8000') {
    return 'http://localhost:3000'
  } else {
    return 'http://test.orionengleton.com'
  }
}

// Angular App.
var orionApp = angular.module('OrionApplication', []);

orionApp.config(['$locationProvider', '$httpProvider', function( $locationProvider, $httpProvider) {
  // Set the location provider enable base urls.
  // $locationProvider.html5Mode(true)
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

orionApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', { templateUrl: 'templates/home.html', controller: 'HomeController' }).
    when('/post/:postId',  { templateUrl: 'templates/post.html', controller: 'ShowPostController' } ).
    when('/about',    { templateUrl: '/templates/about.html', controller: 'AboutController' }).
    when('/tools',    { templateUrl: '/templates/tools.html', controller: 'ToolsController'}).
    when('/home',     { templateUrl: '/templates/blog.html', controller: 'BlogController' }).
    otherwise({redirectTo: '/'});
}]);
