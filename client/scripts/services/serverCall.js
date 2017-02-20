(function () {
    app.factory('serviceCall',['$http', 'urlUtil', function ($http, urlUtil) {
        return {
            fetchData: function (upath, status) {
                var path = urlUtil.url(upath , status);
                if(path){
                    return $http.get(path).then(function (res) {
                        return res.data;
                    },function(err){
                        toastr.error("An error occured while processing the data");
                    });
                }else{
                    toastr.error("An error occured while connecting to the server");
                }
            },
            postData: function(upath, params, status){
                console.log(upath, params, status);
                var path = urlUtil.url(upath , status);
                console.log(path);
                if(path){
                    return $http.post(path, params).then(function (res) {
                        return res.data;
                    },function(err){
                        toastr.error("An error occured while processing the data");
                    });
                }else{
                    toastr.error("An error occured while connecting to the server");
                }
            }
        };
    }]);
})();
