var utils = require('./gulp.Utils');
var config = require('../gulp.config')();
var gulp = require('gulp');
var embedTemplates = require('gulp-angular-embed-templates');
var $ = require('gulp-load-plugins')({
    lazy: true
});

var optimize = function(){

    utils.log('Optimize the javascrtipt');
    
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
        //.pipe($.uglify())
        .pipe(jsLibFilter.restore)


        .pipe(appFilter)
        .pipe(embedTemplates())
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


