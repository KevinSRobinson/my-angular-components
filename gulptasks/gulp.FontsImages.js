var $ = require('gulp-load-plugins')({
    lazy: true
});
var utils = require('./gulp.Utils');
var config = require('../gulp.config')();
var gulp = require('gulp');


var images = function(){
    utils.log('Copying anf compressing the Images');

    return gulp.src(config.images)
    .pipe($.imagemin({optimizationLevel: 4}))
    .pipe(gulp.dest(config.build + 'images'));     
}


var fonts = function(){
    utils.log('Copying our fonts');

    return gulp.src(config.fonts)
    .pipe(gulp.dest(config.build + 'fonts'));

}

var cleanImages = function(done){
    utils.log('Cleaning Images');
    clean(config.build + 'images/**/*.*', done);
}
var cleanFonts = function(done){
    utils.log('Cleaning fonts');
    clean(config.build + 'fonts/**/*.*', done);
}



module.exports.images = images;
module.exports.fonts = fonts;
module.exports.cleanFonts = cleanFonts;
module.exports.cleanImages = cleanImages;




