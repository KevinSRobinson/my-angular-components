var gulp = require('gulp');
var config = require('./gulp.config')();
var wiredep = require('wiredep').stream;
var $ = require('gulp-load-plugins')({lazy : true});
var embedTemplates = require('gulp-angular-embed-templates');
var utils = require('./gulptasks/gulp.Utils');
var versioning = require('./gulptasks/gulp.Versioning');
var tests = require('./gulp.Test');
var fontsAndImageOptimizer = require('./gulptasks/gulp.FontsImages');
var myGulp_Styles = require('./gulptasks/gulp.Styles');
var myGulp_BrowserSync = require('./gulptasks/gulp.BrowserSync');
var myGulp_Build = require('./gulptasks/gulp.Build');
var myGulp_CodeQuality = require('./gulptasks/gulp.CodeQuality');

var port = 7205;

gulp.task('default', ['help']);
gulp.task('help', $.taskListing);

gulp.task('test', ['inject-js-karma-conf'],  function(done){
    tests.startTests(true, done);
})
gulp.task('vet', myGulp_CodeQuality.analyze);






//////////////////////////////////////////////
// Builds
//////////////////////////////////////////////
gulp.task('serve-build', ['optimize'], function(){
   myGulp_BrowserSync.serve(false, port);
});

gulp.task('serve-dev', ['watchTemplates','embedTemplates', 'wiredep', 'inject', 'styles'], function(){
   myGulp_BrowserSync.serve(true, port);
});



//////////////////////////////////////////////
// optimize
//////////////////////////////////////////////
gulp.task('optimize', ['wiredepBuild', 'inject'], myGulp_Build.optimize);

gulp.task('bump', ['optimize'], versioning.bump);

gulp.task('embedTemplates', ['styles'], function () {
      utils.log('...........................................');
        utils.log('......embedTemplates........');
          utils.log('.....................................');


    gulp.src('./src/client/app/**/**/*.js')
      .pipe(embedTemplates({'basePath':'./'}))
     .pipe(gulp.dest('./.tmp/'));
     
});
var watchTemplates = function(){
    utils.log('..............Watching Templates');
    gulp.watch(['./src/client/app/**/*.*'], ['embedTemplates']);
}
gulp.task('watchTemplates', watchTemplates);

gulp.task('reload', function(){
    myGulp_BrowserSync.reload();
})
gulp.task('wiredepBuild',  function(){

    var options = config.getWiredepDefaultOptions();
  utils.log('...........................................');
   utils.log('......embedTemplates........');
    utils.log('.....................................');

    
    return gulp
            .src(config.index)
            .pipe(wiredep(options))
            .pipe(gulp.dest(config.build));
});
gulp.task('wiredep',  function(){

    var options = config.getWiredepDefaultOptions();
  utils.log('...........................................');
   utils.log('......embedTemplates........');
    utils.log('.....................................');

    
    return gulp
            .src(config.index)
            .pipe(wiredep(options))
            .pipe(gulp.dest(config.client));
});

gulp.task('inject', function(){
  return gulp
            .src(config.index)
            .pipe($.inject(gulp.src(config.css)))
             .pipe($.inject(gulp.src(config.componentSourceFiles, {read: false, }), {relative: true, ignorePath: '/app', addRootSlash: true}))
            //inject the clientexamples js files
            .pipe($.inject(gulp.src(config.examplesSourceFiles, {read: false, }),      {
                starttag: '<!-- inject:examples:js -->',
                relative: true,
                ignorePath: '/app', addRootSlash: true
            }))          
            .pipe(gulp.dest(config.temp));
});



gulp.task('gitadd', function(){
  return gulp.src(config.componentSourceFiles)
    .pipe($.git.add());
});
gulp.task('patch', ['gitadd', 'embedTemplates', 'optimize', 'bump'], function() { return inc('patch'); })
gulp.task('feature', function() { return inc('minor'); })
gulp.task('release', function() { return inc('major'); })
function inc(importance) {
    // get all the files to bump version in 
    return gulp.src(['./bower.json'])
        // bump the version number in those files 
        .pipe($.bump({type: importance}))
        // save it back to filesystem 
        .pipe(gulp.dest('./'))
        // commit the changed version number 
        .pipe($.git.commit('bumps package version'))
 
        // **tag it in the repository** 
        .pipe($.tagVersion());
}



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