'use strict';
angular
    .module('app.core')
    .controller('HomeController', function($scope, PageValues, $http) {
        //Set page title and description
        PageValues.title = "HOME";
        PageValues.description = "Learn AngularJS using best practice real world examples.";
        //Setup view model object
        var vm = this;
        $scope.placeholder = 87132144;
        $scope.num = ""; 
        $scope.display = "none";

        $scope.requestSerial = function(serial)
        {
           $http({
              method: 'GET',
              url: "http://www.slim.localhost.com/tsdrapi/trademark/serial/num/"+serial,
              responseType: "json",
                }).then(function successCallback(response) {
                    $scope.trademarkData = response.data.data;
                    $scope.display = "block";
                 }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                    console.log("error");
              });
        }
    });
