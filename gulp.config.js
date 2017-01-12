module.exports = function () {

    var client = './src/client/';
  
    var temp = './.tmp/';
    var server = './src/server/';
    var report = './report/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({
        devDependencies: true
    })['js'];

    var builtComponetsSource = './.tmp/scripts/';
    // var syncFusionFiles = clientFolderRoot + 'Components/**/*.html';

    //app module paths
    //var componetsSource = clientFolderRoot + 'Components/**/*.js';
    //var builtComponetsSource = temp + 'scripts/**/*.js';
    //var componetTemplates = clientFolderRoot + 'Components/**/*.html';

    var examplesSource = client + 'Examples/**/*.js';
    var config = {

        //all js to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        report: report,
        build: './build/',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        images: client + './images/**/*.*',
        css: temp + 'styles.css',
        index: client + 'index.html',
        client: client,
        js: [
            client + '**/*.js',
            '!' + client + '**/*spec.js',
            '!' + './bower_components/**'
        ],
        componentSourceFiles: './.tmp/scripts/**/*.js',
        examplesSourceFiles: examplesSource,
        html: client + "**/",
        less: client + 'styles/styles.less',
        server: server,
        temp: temp,
        browserReloadDelay: 3000,
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },
        defaultPort: 7203,
        nodeServer: server + 'app.js',

        //optimized files
        optimized: {
            app: "app.js",
            lib: "lib.js",
            examples: "examples.js",
        },

        //packages
        packages: [
            './package.json',
            './bower.json'

        ],
        root: '',

        htmltemplates: client + '**/*.html',
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'my-angular-components',
                standalone: false,
                root: 'app/'
            }

        },


        // Karma and Testsing
        serverIntegrationsSpecs: [client + '/tests/server-integrations/**'],
        specHelpers: [client + 'test-helpers/*.js']

    };

    config.getWiredepDefaultOptions = function () {
        return {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath,
            "overrides": {
                "ace-builds": {
                    "main": [
                        "./bower_components/ace-builds/src-noconflict/ace.js",
                    ]
                }
            },
            onError: function (err) {
                // If not overridden, an error will throw. 

                // err = Error object. 
                // err.code can be: 
                //   - "PKG_NOT_INSTALLED" (a Bower package was not found) 
                //   - "BOWER_COMPONENTS_MISSING" (cannot find the `bower_components` directory) 
                console.log("error !!! ");
                console.log("-----------------------");
                console.log(err);
            },

            onFileUpdated: function (filePath) {
                // filePath = 'name-of-file-that-was-updated' 
                console.log("onFileUpdated ");
                console.log("-----------------------");
                console.log(filePath);
            },

            onPathInjected: function (fileObject) {
                // fileObject.block = 'type-of-wiredep-block' ('js', 'css', etc) 
                // fileObject.file = 'name-of-file-that-was-updated' 
                // fileObject.path = 'path-to-file-that-was-injected' 
                //console.log(fileObject);
            },

            onMainNotFound: function (pkg) {
                console.log('No Main Found');
                console.log(pkg);
            },
        };
    };



    config.karma = getKarmaOptions();

    return config;



    //////////////////////////////
    function getKarmaOptions() {
        var options = {
            files: [].concat(
                bowerFiles,
                config.specHelpers,
                client + 'app/Components/templateService.js',
                client + 'app/Components/app.module.js',
                client + 'app/Components/**/*.js',
                client + 'tests/**/*.js',
                temp + config.templateCache.file
            ),
            exclude: [],
            coverage: {
                dir: report + 'coverage',
                reporters: [{
                    type: 'html',
                    subdir: 'report-html'
                }, {
                    type: 'lcov',
                    subdir: 'report-lcov'
                }, {
                    type: 'text-summary'
                }]
            },
            preprocessors: {}
        };
        options.preprocessors[client + '**/!(*.spec)*(.js)'] = ['coverage'];
        return options;
    }

};
