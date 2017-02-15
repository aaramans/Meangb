(function () {
    app.controller('userContrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('models/users.json').then(function(users){
            $scope.users = users.data;
        },function(a,b,c){
            console.log(a,b,c);
        });
    }]);
})();
