var utils = require('./gulp.Utils');
var config = require('../gulp.config')();
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    lazy: true
});

var getWiredepDefaultOptions = function () {
    return {
        bowerJson: require('../bower.json'),
        directory:  '../../bower_components/',
        ignorePath:  '../..',
        "overrides": {
            "ace-builds": {
                "main": [
                    "./bower_components/ace-builds/src-noconflict/ace.js",
                ]
            }
        },
        onError: function (err) {
            console.log("error !!! ");
            console.log("-----------------------");
            console.log(err);
        },

        onFileUpdated: function (filePath) {
            console.log("onFileUpdated ");
            console.log("-----------------------");
            console.log(filePath);
        },

        onPathInjected: function (fileObject) {
        },

        onMainNotFound: function (pkg) {
            console.log('No Main Found');
            console.log(pkg);
        },
    };
};

var wiredep = function () {

    utils.log('wiredep starting');

    var options = getWiredepDefaultOptions();
    utils.log(config.componentSourceFiles);

   
    return gulp
        .src('./src/client/index.html')
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.componentSourceFiles)))
        // //inject the clientexamples js files
        // .pipe($.inject(gulp.src(config.examplesSourceFiles), {
        //     starttag: '<!-- inject:examples:js -->'
        // }))
        .pipe(gulp.dest('../src/client/'));
}

module.exports.wiredep = wiredep;
