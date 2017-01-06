var gulp = require('gulp'),
    $g = require('gulp-load-plugins')({lazy:true}),
    del = require('del'),
    config = requrie('./gulp.config')(),
    port = process.env.PORT || config.defaultPort;

gulp.task('styles', ['clear'] ,function() {
    log('Compiling Sass to css');
	return gulp.src(config.filePaths.allSass)
        .pipe($g.plumber())
		.pipe($g.sass({style: 'expanded'}))
        .pipe($g.autoprefixer({browsers:['last 2 version']}))
		.pipe(gulp.dest(config.filePaths.cssDest))
});

gulp.task('clear',function(cb){
    log('Clearing css files');
    var files = config.filePaths.cssDest + '/*.css';
    del(files,cb);
});

gulp.task('js', function() {
    log('Compiling js');
	return gulp.src(config.filePaths.allJs)
		.pipe($g.uglify())
		.pipe($g.concat(config.jsConcatFname))
		.pipe(gulp.dest(config.filePaths.jsDest))
});

gulp.task('lint', function() {
    log('Linting js');
    return gulp.src(config.filePaths.allJs)
		.pipe($g.jscs())
        .pipe($g.jshint())
        .pipe($g.jshint.reporter('jshint-stylish',{verbose:true}))
		.pipe($g.jshint.reporter('fail'));
});

gulp.task('watch', function() {
    log('Found File changes. Triggering compilation');
	gulp.watch(config.filePaths.allJs, ['js']);
	gulp.watch(config.filePaths.allSass, ['styles']);
});

gulp.task('wiredep',function(){
    log('wire up bower css and js and appjs into html');
    var options = config.getDefOptWiredep();
    var wiredep = require('wiredep').stream();
    
    return gulp
        .src(config.filePaths.html)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.jsForInject)))
        .pipe(gulp.dest(config.client))
});

gulp.task('inject',['wiredep','styles'],function(){
    log('Inject app css into html');   
    return gulp
        .src(config.filePaths.html)
        .pipe($.inject(gulp.src(config.cssForInject)))
        .pipe(gulp.dest(config.client))
});

gulp.task('serve-dev',['inject'],function(){
    var isDev = true;
    var nodeOptions = {
        script : config.nodeServer,
        delay : 1,
        env : {
            'PORT' : port,
            'NODE_ENV' : isDev ? 'dev' : 'build'
        },
        watch : config.filePaths.server
    };
    return $.nodemon(nodeOptions)
        .on('start',function(){
            log('** Nodemon started **');
        }).on('restart',function(ev){
            log('** Nodemon restarted **');
            log('** Files changed:\n'+ev);
        }).on('crash',function(){
            log('** Nodemon crashed **');
        }).on('exit',function(){
            log('** Nodemon exited **');
        });
});

function log(msg){
    $g.util.color.blue(msg);
}

//gulp.task('default', ['styles', 'js','lint']);