var $ = require('gulp-load-plugins')({lazy: true});
var args = require('yargs').argv;
var utils = require('./gulp.Utils');
var config = require('../gulp.config')();
var gulp = require('gulp');

var bump = function(){

    var msg = 'Bumping Versions';
    var type = args.type;
    var version  = args.version;
    var options = {
        version: ""
    };

    if(version){
        options.version = version;
        msg += ' to ' + version;        
    }
    else{
        options.type = type;
        msg += ' fora a ' + type;
    }
    //utils.log(msg);
    console.log(config.packages);
    return gulp
        .src(config.packages)
        .pipe($.print())
        .pipe($.bump(options))
        .pipe(gulp.dest(config.root));
}



module.exports.bump = bump;


