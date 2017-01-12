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
var requireDir = require('require-dir');
var utils = require('./gulptasks/gulp.Utils');
var versioning = require('./gulptasks/gulp.Versioning');
var tests = require('./gulptasks/gulp.Test');
var fontsAndImageOptimizer = require('./gulptasks/gulp.FontsImages');
var myGulp_Styles = require('./gulptasks/gulp.styles');
var myGulp_BrowserSync = require('./gulptasks/gulp.BrowserSync');
var myGulp_Build = require('./gulptasks/gulp.Build');
var myGulp_DevBuild = require('./gulptasks/gulp.DevBuild');
var myGulp_CodeQuality = require('./gulptasks/gulp.CodeQuality');

var port = 7203;

gulp.task('default', ['help']);

gulp.task('help', $.taskListing);

gulp.task('test', ['js:build'], function(done){
    tests.startTests(true, done);
})

gulp.task('vet', myGulp_CodeQuality.analyze);


gulp.task('serve-build', ['js:build','optimize'], function(){
   myGulp_BrowserSync.serve(false, port);
});

gulp.task('serve-dev', ['inject'], function(){
   myGulp_BrowserSync.serve(true, port);
});









//////////////////////////////////////////////
// optimize
//////////////////////////////////////////////
gulp.task('optimize', ['inject', 'js:build'], myGulp_Build.optimize);


gulp.task('bump', versioning.bump);



gulp.task('js:build', function () {
    gulp.src('src/client/app/Components/**/*.js')
        .pipe(embedTemplates())
        .pipe(gulp.dest('./.tmp/scripts/'));
});

// gulp.task('build-app.js', function() {
//     return gulp.src('src/client/app/Components/**/*.js')
//         //.pipe(concat your app js files somehow)

//         // append the template js onto app.js
//         .pipe(addStream.obj(prepareTemplates()))
//         .pipe(concat('app.js'))

//         //.pipe(ng annotate, minify, etc)
//         .pipe(gulp.dest('build/scripts'));
// });


gulp.task('wiredep',  function(){

    utils.log('wiredep starting');

    var options = config.getWiredepDefaultOptions();
    utils.log(config.componentSourceFiles);

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

    utils.log('inject starting');

    return gulp
            .src(config.index)
            .pipe($.inject(gulp.src(config.css)))
            .pipe(gulp.dest(config.client));
});





//////////////////////////////////////////////
// fonts images and styles
//////////////////////////////////////////////
gulp.task('images', fontsAndImageOptimizer.images);

gulp.task('fonts', fontsAndImageOptimizer.fonts);

gulp.task('styles',  myGulp_Styles.styles);

gulp.task('styles-dev',  myGulp_Styles.stylesDev);

gulp.task('less-watcher', myGulp_Styles.watchStyles);
////////////////////////////////////////




////////////////////////////////////////
// Clean Tasks
////////////////////////////////////////
gulp.task('clean', utils.clean);
gulp.task('clean-images', fontsAndImageOptimizer.cleanImages);
gulp.task('clean-fonts', fontsAndImageOptimizer.cleanFonts);
gulp.task('clean-styles', myGulp_Styles.cleanStyles);
gulp.task('clean-code', myGulp_Build.clean);






// ////////////////////////////////////////
// // functions
// ////////////////////////////////////////
// function changeEvent(event){
//     var srcPattern = new RegExp('./.*(?=/' + config.source + ')/');

//     utils.log('file ' + event.path.replace(srcPattern, '') + ' ' + event.type);

// }





