'use strict';

angular.module('ngRiksdagenApp')
  .controller('MainCtrl', function ($scope, $http, $log) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.jsonUrl = 'http://data.riksdagen.se/personlista/?utformat=json';
    $scope.jsonUrlGenerated = 'http://www.json-generator.com/j/cepOZnofQO?indent=2';

    $scope.fetch = function () {
      $http({
        method : 'GET',
        url : $scope.jsonUrl
      }).success(function (data) {
          $scope.data = data;
        }).error(function (data, status) {
          $scope.data = data;
          $log.error(status + ' Error fetching data.');
        }).then(function () {
          $log.info($scope.data);
        });
    };

  });
