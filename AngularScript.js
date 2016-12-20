
    var app = angular.module("myApp", ['ngAnimate']); 
    app.controller("myCtrl", function($scope) {
        $scope.products = ["felipe@yahoo.com", "f@gmail.com"];
        $scope.addItem = function () {
            $scope.errortext = "";
            if (!$scope.addMe) {return;}
            if ($scope.products.indexOf($scope.addMe) == -1) {
                $scope.products.push($scope.addMe);
            } else {
                $scope.errortext = "Error: The item is already in your shopping list.";
            }
        }
        $scope.removeItem = function (x) {
            $scope.errortext = "";
            $scope.products.splice(x, 1);
        } 
    });

    // Retrieving data in Database
    app.controller('customersCtrl', function($scope, $http) {
        $http.get("http://www.w3schools.com/angular/customers.php")
        .then(function (response) {$scope.names = response.data.records;});
    });

    // 'Events: Get in touch Button count'
    app.controller('myCount', function($scope) {
        $scope.count = 0;
    });

    // Form Example
    app.controller('formCtrl', function($scope) {
        $scope.master = {name:"", email:""};
        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };
        $scope.reset();
    });