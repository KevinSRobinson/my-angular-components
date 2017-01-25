var $ = require('gulp-load-plugins')({lazy: true});
var args = require('yargs').argv;
var utils = require('./gulp.Utils');
var config = require('../gulp.config')();
var gulp = require('gulp');
var browserSync = require('browser-sync');


var startBrowserSync = function  (isDev, port){
    if(args.nosync || browserSync.active){
        return;
    }

    utils.log('starting browser-sync');

    if(isDev)
    {
       gulp.watch([config.less, config.htmltemplates, config.examplesSourceFiles], ['styles'])
           .on('change', function(event) { changeEvent(event); });
    }
    else{
         //gulp.watch([config.less, config.js, config.html], ['optimize', browserSync.reload])
          ///  .on('change', function(event) { changeEvent(event); });
    }

    var options = {
            proxy: 'localhost:' + port,
            port: 8001,
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


var serve = function (isDev, port){
   
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
            utils.log('noode server restarted');            
            utils.log(ev);

            // setTimeout(function(){
            //     browserSync.notify('reloading now ...');
            //     browserSync.reload({stream: false});
            // }, config.browserReloadDelay);
        })
        .on('start', function() {
            utils.log('noode server started');
            startBrowserSync(isDev, port);
        })
        .on('crash', function() {
            utils.log('noode server crashed');
        })
        .on('exit', function() {
           utils.log('noode server exit');
        });
}

function changeEvent(event){
    var srcPattern = new RegExp('./.*(?=/' + config.source + ')/');

    utils.log('file ' + event.path.replace(srcPattern, '') + ' ' + event.type);

}



module.exports.startBrowserSync = startBrowserSync;
module.exports.serve = serve;


