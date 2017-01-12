var $ = require('gulp-load-plugins')({
    lazy: true
});
var utils = require('./gulp.Utils');
var config = require('../gulp.config')();
var gulp = require('gulp');


var styles = function(){
    utils.log('Compiling Less ->> Css');

    return gulp
                .src(config.less)
                .pipe($.debug())
                .pipe($.less())
                .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
                .pipe(gulp.dest(config.temp));

}


var stylesDev = function(){
    utils.log('Compiling Less Dev ->> Css');

    return gulp
                .src(config.less)
                .pipe($.debug())
                .pipe($.less())
                .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
                .pipe(gulp.dest(config.temp));

}

var cleanStyles = function(done){
    var files = config.temp + '**/*.css';
    utils.clean(files, done);    
}

var watchStyles = function(){
    utils.log('Watching ' + config.less);
    gulp.watch([config.less], ['styles']);
}


module.exports.styles = styles;
module.exports.stylesDev = stylesDev;
module.exports.cleanStyles = cleanStyles;
module.exports.watchStyles = watchStyles;


