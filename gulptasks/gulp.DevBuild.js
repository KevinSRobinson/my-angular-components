var utils = require('./gulp.Utils');
var config = require('../gulp.config')();
var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    lazy: true
});


var inject = function(){
    utils.log('inject starting');

    return gulp
            //use index.html as source
            .src(config.index)

            //inject css files
            .pipe($.inject(gulp.src(config.css)))

             .pipe($.inject(gulp.src(config.js)))

            //save in temp
            .pipe(gulp.dest(config.src));
};

var wiredep = function () {

    var options = {
        bowerJson: require('../bower.json')
    };

    return gulp

            .src('./src/client/app/Components/**/*.js')

            // init wiredep
            .pipe(wiredep(options))
            
            //inject the component js files
            //.pipe($.inject(gulp.src(config.componentSourceFiles)))

            // //inject the client examples js files
            // .pipe($.inject(gulp.src(config.examplesSourceFiles), {
            //     starttag: '<!-- inject:examples:js -->'
            // }))

            //save in temp
            .pipe(gulp.dest(config.temp));
}

module.exports.wiredep = wiredep;
module.exports.inject = inject;