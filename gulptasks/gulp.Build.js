var utils = require('./gulp.Utils');
var config = require('../gulp.config')();
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    lazy: true
});

var optimize = function(){
  utils.log('------------------------');
    utils.log('Optimize the javascrtipt');
      utils.log('-----------------------------');
   //var assets = $.useref.assets({searchPath: './ass'});
    
    var cssFilter = $.filter('**/*.css', { restore: true });
    var jsLibFilter = $.filter('**/' + config.optimized.lib, { restore: true });
    var appFilter = $.filter('**/' + config.optimized.app, { restore: true });
    var examplesFilter = $.filter('**/' + config.optimized.examples, { restore: true });
   
      return gulp
        .src(config.index)
        //  .pipe($.inject(gulp.src(config.templateCache, { read: false}), {
        //     starttag: '<!-- inject:templates:js -->'
        // }))
     //   .pipe(assets)
    //     //css
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore)
        

    //      //js
    //      //minify vendor librarys 
         .pipe(jsLibFilter)
       .pipe($.uglify())
       .pipe(jsLibFilter.restore)


    //     //minify appr librarys
    //     .pipe(examplesFilter)
    //    .pipe($.iife())
    //     .pipe($.ngAnnotate()) //di helper
    //     //.pipe($.uglify())
    //     .pipe(examplesFilter.restore)


    //     .pipe(appFilter)
    //     .pipe($.iife())
    //     //.pipe($.ngAnnotate()) //di helper
    //     //.pipe($.uglify())
    //     .pipe(appFilter.restore)
    //     //revisions npm install --save-dev gulp-iife
    //    // .pipe($.rev())

    //     //assets
    //     .pipe(assets.restore())
    //     .pipe($.useref())

    //     //renameing
    //     //.pipe($.revReplace())

    //     //finish
    //     .pipe(gulp.dest(config.build))

    //     //revision manifest
    //     .pipe($.rev.manifest())
        .pipe(gulp.dest(config.build));
        

}

var clean = function(done){
    var files =[].concat(
        config.temp + '**/*.js',
        config.build + '**/*.html',
        config.build + 'js/**/*.js');

    utils.clean(files, done);    
}

module.exports.optimize = optimize;
module.exports.clean = clean;


