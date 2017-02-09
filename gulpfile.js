var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var $ = require('gulp-load-plugins')({
    lazy: true
});
var lazypipe = require('lazypipe');
var concat = require('gulp-concat');
var addStream = require('add-stream');
var angularTemplateCache = require('gulp-angular-templatecache');
var embedTemplates = require('gulp-angular-embed-templates');
var requireDir = require('require-dir');
var utils = require('./gulptasks/gulp.Utils');
var versioning = require('./gulptasks/gulp.Versioning');
var tests = require('./gulp.Test');
var fontsAndImageOptimizer = require('./gulptasks/gulp.FontsImages');
var myGulp_Styles = require('./gulptasks/gulp.Styles');
var myGulp_BrowserSync = require('./gulptasks/gulp.BrowserSync');
var myGulp_Build = require('./gulptasks/gulp.Build');
var myGulp_DevBuild = require('./gulptasks/gulp.DevBuild');
var myGulp_CodeQuality = require('./gulptasks/gulp.CodeQuality');

var port = 7205;

gulp.task('default', ['help']);

gulp.task('help', $.taskListing);

gulp.task('test', ['inject-js-karma-conf'], function (done) {
    tests.startTests(true, done);
})


gulp.task("wiredep-karma-conf", function () {
    var wiredep = require("wiredep").stream;
    return gulp
        .src("./karma.conf.js")
        .pipe(wiredep())
        .pipe(gulp.dest("./"));
});
gulp.task("inject-js-karma-conf", function () {
    return gulp
        .src("./karma.conf.js")
        .pipe($.inject(gulp.src('./src/Client/App/Components/**/*.js'), {
            starttag: "// inject:js",
            endtag: "// endinject",
            transform: function (filepath, file, i, length) {
                return "\"" + filepath.substr(1) + "\",";
            }
        }))
        .pipe($.inject(gulp.src('./src/Client/App/Examples/**/*.js'), {
            starttag: "// inject:examplesjs",
            endtag: "// endinject",
            transform: function (filepath, file, i, length) {
                return "\"" + filepath.substr(1) + "\",";
            }
        }))
        .pipe($.inject(gulp.src('./src/Client/tests/Components/**/*.spec.js'), {
            starttag: "// spec:js",
            endtag: "// endinject",
            transform: function (filepath, file, i, length) {
                return "\"" + filepath.substr(1) + "\"" + (i < length - 1 ? "," : "");
            }
        }))
        .pipe($.inject(gulp.src('./src/Client/tests/Examples/**/*.spec.js'), {
            starttag: "// spec:examplesjs",
            endtag: "// endinject",
            transform: function (filepath, file, i, length) {
                return "\"" + filepath.substr(1) + "\"" + (i < length - 1 ? "," : "");
            }
        }))
        .pipe(gulp.dest("./"));
});




gulp.task('vet', myGulp_CodeQuality.analyze);


gulp.task('serve-build', ['embedTemplates', 'optimize', 'bump'], function () {
    myGulp_BrowserSync.serve(false, port);
});

gulp.task('serve-dev', ['wiredep', 'inject', 'embedTemplates'], function () {
    myGulp_BrowserSync.serve(true, port);
});




//////////////////////////////////////////////
// optimize
//////////////////////////////////////////////
gulp.task('optimize', ['inject', 'embedTemplates'], myGulp_Build.optimize);

gulp.task('bump', ['optimize'], versioning.bump);

gulp.task('embedTemplates', function () {
    gulp.src('./src/client/app/components/**/*.js')
        .pipe(embedTemplates())
        .pipe(gulp.dest('./.tmp/scripts/'));
});


gulp.task('wiredep', function () {

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

gulp.task('inject', ['embedTemplates', 'wiredep', 'styles', 'watchTemplates'], function () {
    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.client));
});

gulp.task('watchTemplates', watchTemplates);

var watchTemplates = function () {
    utils.log('..............Watching Templates');
    gulp.watch(['./src/client/app/components/**/*.*'], ['embedTemplates']);
}


gulp.task('gitadd', function () {
    return gulp.src(config.componentSourceFiles)
        .pipe($.git.add());
});
gulp.task('patch', ['embedTemplates', 'optimize', 'bump', 'gitadd'], function () {
    return inc('patch');
})
gulp.task('feature', function () {
    return inc('minor');
})
gulp.task('release', function () {
    return inc('major');
})

function inc(importance) {
    // get all the files to bump version in 
    return gulp.src(['./bower.json'])
        // bump the version number in those files 
        .pipe($.bump({
            type: importance
        }))
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
gulp.task('styles', myGulp_Styles.styles);
gulp.task('styles-dev', myGulp_Styles.stylesDev);
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
