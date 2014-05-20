'use strict';

angular.module('ngRiksdagenApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.localJsonUrl = '/data.riksdagen.json';
    $scope.dataStr = 'Need to fetch something.';
    $scope.data = [];

    $scope.d3data = [
      {name: 'Greg', score: 98},
      {name: 'Ari', score: 96},
      {name: 'Q', score: 75},
      {name: 'Loser', score: 48}
    ];

    $scope.gridData = [];
    $scope.gridOptions = { data : 'gridData' };

    $http.get($scope.localJsonUrl).success(function (data) {
      var i = 0,
          dataObj = data.dokvotering.votering,
          parti,
          rost,
          tbl = {},
          row;
      for (i; i < dataObj.length; i++) {
        parti = dataObj[i].parti;
        rost = dataObj[i].rost;
        if (tbl[parti]) {
          tbl[parti][rost] += 1;
        } else {
          tbl[parti] = {};
          tbl[parti][rost] = 1;
        }
      }
      for (row in tbl) {
        if (tbl.hasOwnProperty(row)) {
          $scope.gridData.push({
            Parti : row,
            Ja : tbl[row].Ja,
            Nej : tbl[row].Nej
          });
        }
      }
    });

    $scope.jsonSources = [
      {
        name : 'Local file',
        url : $scope.localJsonUrl
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
          $scope.data.push(data);
        }).error(function (data) {
          $scope.data.push(data);
        }).then(function () {
          $scope.dataStr = JSON.stringify($scope.data);
          $scope.fetching = false;
        });
    };

  });
