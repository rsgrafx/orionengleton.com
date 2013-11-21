window.set_base_url = function() {
  if (window.location.origin == 'http://localhost:8000') {
    return 'http://localhost:3000'
  } else {
    return 'http://test.orionengleton.com'
  }
}

// DO NOT UPGRADE TO * ANGULAR 1.2 UNTIL YOU UNDERSTANd what the hell your doing...
// Angular App.
// var orionApp = angular.module('OrionApplication', ['ngRoute','ngSanitize', 'truncate']);

// orionApp.config(['$locationProvider', '$httpProvider', '$sceProvider', '$compileProvider' , function( $locationProvider, $httpProvider, $sceProvider, $compileProvider) {
//   delete $httpProvider.defaults.headers.common['X-Requested-With'];
// }]);


var orionApp = angular.module('OrionApplication', ['ngSanitize', 'truncate']);

orionApp.config(['$locationProvider', '$httpProvider',  '$compileProvider' , function( $locationProvider, $httpProvider, $compileProvider) {
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
