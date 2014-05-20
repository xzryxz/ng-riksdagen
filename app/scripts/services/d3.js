'use strict';

angular.module('ngRiksdagenApp')
  .service('D3', function($document, $window, $q) {
    var d = $q.defer(),
      d3service = {
        d3: function() { return d.promise; }
      };
  
    d.resolve($window.d3);

    return d3service;
  });