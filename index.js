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

orionApp.directive('song', function() {
  return {
    restrict: 'AE',
    scope: { 
      url: '@url'
    },
    template: '<audio><source src={{url}} type="audio/mpeg"> Audio File not supported.</audio>',
    link: function(scope, element, attrs) {
      var jqElement = $(element);
      jqElement.attr('controls', 'controls')
    }
  }
});

orionApp.directive('clip', function() {
  return {
    restrict: 'AE', 
    scope: {
      url: '@url',
      poster: '@poster'
    },
    // template: '<video controls poster="default" src={{url}}></video>',
    link: function(scope, element, attrs) {
      myE = $(element);
      if (attrs.site == 'youtube.com') {
        var tag = '<iframe width="450" height="320" src="' + attrs.url +'" frameborder="0" allowfullscreen></iframe>'
        myE.append(tag) 
      } else {
        
        var tag = ' <video controls poster="' + attrs.poster + '" width="450" height="320"> ' + 
        ' <source src="'+attrs.url +'" type="video/mp4"> '+
        '<a href="'+attrs.url+'">Download song</a> </video>'
        myE.append(tag)
      }
    }
  }
})

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
