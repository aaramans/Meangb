(function () {
    app.factory('urlUtil',[function () {
        var config = {
            'users' : {'off': 'models/users.json', 'on': 'users/getUsers'},
            'dbData' : {'off': 'models/dashboard.json', 'on': 'dboard/getdbBdata'}
        }, defaultStatus = 'off'; // 'off' for offline and 'on' for online;

        return {
            "url" : function(path,status){
                status = status ? status : defaultStatus;
                if(config.hasOwnProperty(path) && path!== 'defaultStatus'){
                    return config[path][status];
                }else{
                    return "";
                }
            }
        };
    }]);
})();
