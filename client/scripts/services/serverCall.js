(function () {
    app.factory('serviceCall',['$http', 'urlUtil', function ($http, urlUtil) {
        return {
            fetchData: function (u) {
                var path = urlUtil.url(u);
                if(path){
                    return $http.get(path).then(function (res) {
                        return res.data;
                    },function(err){
                        return "error";
                    });
                }else{
                    return 'error';
                }
            }
        };
    }]);
})();
