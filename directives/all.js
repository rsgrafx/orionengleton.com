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
      if (attrs.site == 'youtube.com' || attrs.site == 'www.youtube.com') {
        var tag = '<iframe width="450" height="320" src="' + attrs.url +'" frameborder="0" allowfullscreen></iframe> <br/>'
        myE.append(tag) 
      } else if (attrs.site == 'vimeo.com' || attrs.site =='www.vimeo.com') {
        var tag = '<iframe src="' +attrs.url+ '"  width="450" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <br/>'
                

                  // <iframe src="//player.vimeo.com/video/76164532" 
                  // width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen 
                  // allowfullscreen></iframe> <p><a href="http://vimeo.com/76164532">
                  // Adventure Time Full Episode - The Vault</a> from <a href="http://vimeo.com/naytaviabrown">
                  // Naytavia Brown</a> on <a href="https://vimeo.com">Vimeo</a>.</p> -->

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

orionApp.directive('photo', function() {
  return {
    restrict: 'AE',
    scope: { url: '@url', site: '@site' },
    template: '<img src="http://{{url}}"" alt="{{site}}" />'
  }
})
// http://stackoverflow.com/questions/12371159/how-to-get-evaluated-attributes-inside-a-custom-directive

orionApp.directive('question',['$http', function($http) {
  return {
    restrict: 'AE',
    scope:  {
      course_id: '@course', 
      answer_id: '@answer' 
    },
    
    link: function(scope, element, attrs) {
      // var _course = scope.$eval(attrs.course)
      // console.log(_course)
        attrs.$observe('course', function (value) {
                if (value) {
                    console.log(value);
                    // pass value to app controller
                    scope.courseid = value;
                }
          
          var endpoint = set_base_url()+ '/show/' + scope.courseid
          
          $http.get(endpoint).success( function(data) {
              _data = data;
              console.log(data)
              _block = $(element);
              
              _form = '<form action=# >' + 
              '<label name="course-id" > Course: ' + _data.created_at + '</label>' +
              '<input type="text" name="hellman" />' +
              '</form>' 
              _block.append(_form);
              
          })

          // console.log(_data)
      });

    }
  }
}])