(function() {
    angular.module("myApp")
        .controller('landingCtrl', landingCtrl);

    landingCtrl.$inject = ['$scope', '$http'];
    
    function landingCtrl($scope, $http) {
        $scope.greetings = "Hellooooo";
    }
    
})();

