(function () {
    app.controller('mainContrl', ['$scope', 'localStorageService', function ($scope, localStorageService) {
        $scope.isSignedIn = function(){
              return (localStorageService.get('isSignedIn') ? localStorageService.get('isSignedIn') : false);
        };
    }]);
})();
