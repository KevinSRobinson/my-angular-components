var $ = require('gulp-load-plugins')({lazy: true});
var args = require('yargs').argv;
var utils = require('./gulp.Utils');
var config = require('../gulp.config')();
var gulp = require('gulp');

var analyze = function(){
    utils.log('Analyzing source with jsHint and JSCS');
    utils.log(config.alljs);


    gulp.src(config.alljs)
    .pipe($.if(args.verbose, $.print()))
    .pipe($.jscs())
    .pipe($.jshint()
    //.pipe($.jshint.reporter('jshint-stylish', {verbose: true})
    //.pipe($.jshint.reporter('fail'))
    );
}





module.exports.analyze = analyze;


