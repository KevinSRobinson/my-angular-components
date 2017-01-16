var $ = require('gulp-load-plugins')({
    lazy: true
});
//var utils = require('./gulptasks/gulp.Utils');


var startTests = function (singleRun, done) {
    var karma = require('karma').server;
    //var excludeFiles = [];
    //var serverIntegrationsSpecs = ['/tests/server-integrations/**'];
    //var specHelpers = ['test-helpers/*.js']
    
    //excludeFiles = serverIntegrationsSpecs;

    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: singleRun
    }, function () {
        done();
    });

    function karmaCompleted(karmaResult) {
        //utils.utils.log('Karma Completed');
        if (karmaResult === 1) {
            done('karma: tests failed with code: ' + karmaResult);
        } else {
            done();
        }
    }
}




module.exports.startTests = startTests;
