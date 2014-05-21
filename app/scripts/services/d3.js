'use strict';

angular.module('d3', [])
  .factory('d3', function($document, $window, $q) {
    var d = $q.defer(),
      d3service = {
        d3: function() { return d.promise; }
      };
  
    d.resolve($window.d3);

    return d3service;
  });