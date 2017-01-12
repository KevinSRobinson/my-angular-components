var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var $ = require('gulp-load-plugins')({lazy : true});
var lazypipe = require('lazypipe');
var concat = require('gulp-concat');
var addStream = require('add-stream');
var angularTemplateCache = require('gulp-angular-templatecache');
var embedTemplates = require('gulp-angular-embed-templates');


var port = 7203;

gulp.task('default', ['help']);

gulp.task('help', $.taskListing);

gulp.task('test', ['templatecache'], function(done){
    startTests(true, done);
})



function startTests(singleRun, done){
    var karma = require('karma').server;
    var excludeFiles = [];
    var serverSpecs = config.serverInegrationSpecs;

    excludeFiles = serverSpecs;

    karma.start({
        configFile: __dirname + '/karma.conf.js',
        exclude: excludeFiles,
        singleRun: singleRun
    }, function(){  done();});
    
    function karmaCompleted(karmaResult){
        log('Karma Completed');
        if(karmaResult === 1){
            done('karma: tests failed with code: ' + karmaResult);
        }
        else{
            done();
        }
    }
}


gulp.task('vet', function(){
    log('Analyzing source with jsHint and JSCS');
    log(config.alljs);


    gulp.src(config.alljs)
    .pipe($.if(args.verbose, $.print()))
    .pipe($.jscs())
    .pipe($.jshint()
    //.pipe($.jshint.reporter('jshint-stylish', {verbose: true})
    //.pipe($.jshint.reporter('fail'))
    );
});







gulp.task('serve-build', ['js:build','optimize'], function(){
   serve(false);
});

gulp.task('serve-dev', ['inject'], function(){
   serve(true);
});



function serve(isDev){
   
    var nodeOptions = {
        script: config.nodeServer,
        delayTime: 3,
        env: {
            'PORT': port,
            'NODE_ENV': isDev ? 'dev' : 'build'
        },
        watch: [config.server]
    };

    return $.nodemon(nodeOptions)
        .on('restart', function(ev) {
            log('noode server restarted');            
            log(ev);

            // setTimeout(function(){
            //     browserSync.notify('reloading now ...');
            //     browserSync.reload({stream: false});
            // }, config.browserReloadDelay);
        })
        .on('start', function() {
            log('noode server started');
            startBrowserSync(isDev);
        })
        .on('crash', function() {
            log('noode server crashed');
        })
        .on('exit', function() {
           log('noode server exit');
        });
}





//////////////////////////////////////////////
// optimize
//////////////////////////////////////////////
gulp.task('optimize', ['inject'], function(){
    log('Optimize the javascrtipt');
    
   var assets = $.useref.assets({searchPath: './'});
    
    var cssFilter = $.filter('**/*.css', { restore: true });
    var jsLibFilter = $.filter('**/' + config.optimized.lib, { restore: true });
    var appFilter = $.filter('**/' + config.optimized.app, { restore: true });

   
      return gulp
        .src(config.index)
        //  .pipe($.inject(gulp.src(templateCache, { read: false}), {
        //     starttag: '<!-- inject:templates:js -->'
        // }))
        .pipe(assets)
        //css
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore)
        

         //js
         //minify vendor librarys 
        .pipe(jsLibFilter)
        .pipe($.uglify())
        .pipe(jsLibFilter.restore)


        //minify appr librarys
       // .pipe(examplesFilter)
        //.pipe($.iife())
        //.pipe($.ngAnnotate()) //di helper
        //.pipe($.uglify())
        //.pipe(examplesFilter.restore)


        .pipe(appFilter)
        .pipe($.iife())
        //.pipe($.ngAnnotate()) //di helper
        //.pipe($.uglify())
        .pipe(appFilter.restore)
        //revisions npm install --save-dev gulp-iife
       // .pipe($.rev())

        //assets
        .pipe(assets.restore())
        .pipe($.useref())

        //renameing
        //.pipe($.revReplace())

        //finish
        .pipe(gulp.dest(config.build))

        //revision manifest
        //.pipe($.rev.manifest())
        .pipe(gulp.dest(config.build));
        

});


gulp.task('bump', function(){

    var msg = 'Bumping Versions';
    var type = args.type;
    var version  = args.version;
    var options = {
        version: ""
    };

    if(version){
        options.version = version;
        msg += ' to ' + version;        
    }
    else{
        options.type = type;
        msg += ' fora a ' + type;
    }
    log(msg);
    return gulp
        .src(config.packages)
        .pipe($.print())
        .pipe($.bump(options))
        .pipe(gulp.dest(config.root));
});



//////////////////////////////////////////////

function prepareTemplates() {
    return gulp.src('src/client/app/Components/**/*.html')
        //.pipe(minify and preprocess the template html here)
        .pipe(angularTemplateCache({base: "/src/eeeeee/"}));
}
gulp.task('js:build', function () {
    gulp.src('src/client/app/Components/**/*.js')
        .pipe(embedTemplates())
        .pipe(gulp.dest('./.tmp/scripts/'));
});

gulp.task('build-app.js', function() {
    return gulp.src('src/client/app/Components/**/*.js')
        //.pipe(concat your app js files somehow)

        // append the template js onto app.js
        .pipe(addStream.obj(prepareTemplates()))
        .pipe(concat('app.js'))

        //.pipe(ng annotate, minify, etc)
        .pipe(gulp.dest('build/scripts'));
});

// gulp.task('templatecache', function(){
//
//     var templateCache = config.temp + config.templateCache.file;
//
//     console.log(templateCache);
//
//     return gulp.src(templateCache)
//             //.pipe($.minifyHtml({empty: true}))
//             .pipe($.angularTemplatecache(
//                 config.templateCache.file,
//                 config.templateCache.options
//             ))
//             .pipe($.inject(gulp.src(templateCache,
//                 { read: false}), {
//                  starttag: '<!-- inject:templates:js -->'
//         }))
//         .pipe($.inject(gulp.src(templateCache, { read: false}), {
//             starttag: '<!-- inject:exampletemplates:js -->'
//         }))
//             .pipe(gulp.dest(config.temp));
//
// });



gulp.task('wiredep',  function(){

    log('wiredep starting');

    var options = config.getWiredepDefaultOptions();

    return gulp
            .src(config.index)
            .pipe(wiredep(options))
            .pipe($.inject(gulp.src(config.componentSourceFiles)))
            //inject the clientexamples js files
            .pipe($.inject(gulp.src(config.examplesSourceFiles), {
                starttag: '<!-- inject:examples:js -->'
            }))
            .pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep', 'styles'], function(){

    log('inject starting');

    return gulp
            .src(config.index)
            .pipe($.inject(gulp.src(config.css)))
            .pipe(gulp.dest(config.client));
});





//////////////////////////////////////////////
// fonts images and styles
//////////////////////////////////////////////
gulp.task('images', function(){
    log('Copying anf compressing the Images');

    return gulp.src(config.images)
    .pipe($.imagemin({optimizationLevel: 4}))
    .pipe(gulp.dest(config.build + 'images'));     
});

gulp.task('fonts', function(){
    log('Copying our fonts');

    return gulp.src(config.fonts)
    .pipe(gulp.dest(config.build + 'fonts'));

});

gulp.task('styles',  function(){
    log('Compiling Less ->> Css');

    return gulp
                .src(config.less)
                .pipe($.debug())
                .pipe($.less())
                .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
                .pipe(gulp.dest(config.temp));

});

gulp.task('styles-dev',  function(){
    log('Compiling Less Dev ->> Css');

    return gulp
                .src(config.less)
                .pipe($.debug())
                .pipe($.less())
                .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
                .pipe(gulp.dest(config.temp));

});



gulp.task('less-watcher', function(){
    log('Watching ' + config.less);
    gulp.watch([config.less], ['styles']);
});
////////////////////////////////////////




////////////////////////////////////////
// Clean Tasks
////////////////////////////////////////
gulp.task('clean', function(done){
    var delConfig =  [].concat(config.build, config.temp);

    log('Cleaning Images');

    del(delConfig, done);
});


gulp.task('clean-images', function(done){
    log('Cleaning Images');

    clean(config.build + 'images/**/*.*', done);
});

gulp.task('clean-fonts', function(done){
    log('Cleaning fonts');

    clean(config.build + 'fonts/**/*.*', done);
});
gulp.task('clean-styles', function(done){
    var files = config.temp + '**/*.css';
    clean(files, done);    
});

gulp.task('clean-code', function(done){
    var files =[].concat(
        config.temp + '**/*.js',
        config.build + '**/*.html',
        config.build + 'js/**/*.js');

    clean(files, done);    
});






////////////////////////////////////////
// functions
////////////////////////////////////////
function changeEvent(event){
    var srcPattern = new RegExp('./.*(?=/' + config.source + ')/');

    log('file ' + event.path.replace(srcPattern, '') + ' ' + event.type);


}

function  startBrowserSync(isDev){
    if(args.nosync || browserSync.active){
        return;
    }

    log('starting browser-sync');

    if(isDev)
    {
       // gulp.watch([config.less], ['styles'])
         //   .on('change', function(event) { changeEvent(event); });
    }
    else{
         //gulp.watch([config.less, config.js, config.html], ['optimize', browserSync.reload])
          ///  .on('change', function(event) { changeEvent(event); });
    }

    var options = {
            proxy: 'localhost:' + port,
            port: 4000,
            files:isDev ? [
                    config.client + '**/*.*',
                    '!' + config.less,
                    config.temp + '**/*.css'
                ] : [],
            ghostMode:{
                clicks: true,
                location: false,
                forms: true,
                scroll: true
            },
            ui: {
                port: 8080,
                weinre: {
                    port: 9090
                }
            },
            injectChangees: true,
            logFileChanges: true,
            logLevel: 'debug',
            logPrefix: 'gulp-patterns',
            notify: true,
            reloadDelay: 0
            
    };

    browserSync(options);    
} 


function clean(path, done){
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
}

function errorLogger(error){
    log(' *** Start of Error ***' );
    log(error);
    log(' *** Start of Error ***' );
    this.emit('end');

}

function log(msg){
    if(typeof(msg) === 'object'){
        for (var item in msg){
            if(msg.hasOwnProperty(item)){
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    }
    else{
        $.util.log($.util.colors.red(msg));
    }
}