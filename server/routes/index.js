exports.login = function(req, res){
    console.log(":: Login ::",req.body);
    if(req.body && req.body.uname && req.body.pwd){
        if(req.body.uname === "Aditya" && req.body.pwd === "123456"){
            res.send({"status":true,"message":"Logged in Successfully"});
        }else{
            res.send({"status":false,"message":"Invalid Credentials"});
        }
    }else{
        res.send({"status":false,"message":"Invalid Request"});
    }
};
