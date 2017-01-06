module.exports = function(){
    var client = 'client/',
        clientApp = client + 'app/',
        server = 'server/';
    
    var config = {
        filePaths : {
            allJs : client + 'sripts/*.js',
            jsDest : client + 'assets/js',
            allSass : client + 'styles/sass/*.scss',
            cssDest : client + 'assets/css',
            html : client + 'index.html',
            server : server,
        },
        client : client,
        jsConcatFname : 'scripts.js',
        jsForInject : [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js', 
            '!' + clientApp + '**/*.js'
        ],
        cssForInject : client + 'assets/css/app.css',
        bower : {
            json : require('./bower.json'),
            directory : './bower_components/',
            ignorepath : '../..'
        },
        nodeServer : server + 'app.js',
        defaultPort : 4545
    };
    
    config.getDefOptWiredep = function(){
        var options = {
            bowerjson : config.bower.json,
            directory : config.bower.directory,
            ignorePath : config.bower.ignorePath
        };
        
        return options;
    };
    
    return config;
    //ref https://github.com/johnpapa/pluralsight-gulp
};