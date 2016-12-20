module.exports = function () {

    var client = './src/client/';
    var clientApp = client + 'app/';
    var temp = './.tmp/';
    var server = './src/server/';
    var report = './report/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];

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
            clientApp + '**/*.module.js',            
            clientApp + '**/*.js',
            '!' + clientApp + '**/*spec.js',
            '!' + './bower_components/**'
        ],
        html: clientApp + "**/",
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
            lib: "lib.js"
        },

        //packages
        packages: [
            './package.json',
            './bower.json'

        ],
        root: '',

        htmltemplates: clientApp + '**/*.html',
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'myComponents',
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
            ignorePath: config.bower.ignorePath
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
        options.preprocessors[clientApp + '**/!(*.spec)*(.js)'] = ['coverage'];
        return options;
    }

};
