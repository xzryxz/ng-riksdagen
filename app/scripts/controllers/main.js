'use strict';

angular.module('ngRiksdagenApp')
  .controller('MainCtrl', function ($scope, $http, $log) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.jsonSources = [
      {
        name : 'Local file',
        url : '/data.riksdagen.json'
      },{
        name : 'data.riksdagen.se',
        url : 'http://data.riksdagen.se/personlista/?utformat=json'
      },{
        name : 'json-generator.com',
        url : 'http://www.json-generator.com/j/cepOZnofQO?indent=2'
      }
    ];

    $scope.fetch = function (sourceUrl) {
      $scope.fetching = true;
      $http({
        method : 'GET',
        url : sourceUrl
      }).success(function (data) {
          $scope.data = data;
        }).error(function (data, status) {
          $scope.data = data;
          $log.error(status + ' Error fetching data.');
        }).then(function () {
          $log.info($scope.data);
          $scope.fetching = false;
        });
    };

  });
