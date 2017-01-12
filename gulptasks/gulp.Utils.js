var $ = require('gulp-load-plugins')({
    lazy: true
});


var errorLogger = function (error) {
    log(' *** Start of Error ***');
    log(error);
    log(' *** Start of Error ***');
    this.emit('end');
}

var log = function (msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.red(msg));
    }
}


var clean = function(done){

    var delConfig =  [].concat(config.build, config.temp);

    log('Cleaning Images');

    del(delConfig, done);

}



module.exports.errorLogger = errorLogger;
module.exports.log = log;


