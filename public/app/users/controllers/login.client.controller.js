angular.module('dynamicFormBuilderApp').controller('loginController', ['$scope', function($scope) {
    $scope.mode = 'signin';

    $scope.showSignUp = function() {
        $scope.mode = 'signup';
    }

    $scope.showSignIn = function() {
        $scope.mode = 'signin';
    }

    $scope.isSignIn = function() {
        return $scope.mode == 'signin';
    }
}]);