
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
            transform: function (filepath) {
                return "\"" + filepath.substr(1) + "\",";
            }
        }))
        .pipe($.inject(gulp.src('./src/Client/App/Examples/**/*.js'), {
            starttag: "// inject:examplesjs",
            endtag: "// endinject",
            transform: function (filepath) {
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
