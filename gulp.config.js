module.exports = function() {

    var client = './src/client/';
    var clientApp = client + 'app/';
    var temp = './.tmp/';
    var server = './src/server/' ;
    var root = './';


    var config = {

        //all js to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ],

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
        less : client + 'styles/styles.less',
        server: server,
        temp : temp,
        browserReloadDelay: 1000,
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },     
        defaultPort: 7203,
        nodeServer: server + 'app.js',

        //optimized files
        optimized :{
            app : "app.js",
            lib : "lib.js"
        },

        //packages
        packages: [
            './package.json',
            './bower.json'
        
        ],
        root : '',

        htmltemplates: clientApp + '**/*.html',
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'myComponents',
                standalone:false,
                root: 'app/'
            }

        }
    };

    config.getWiredepDefaultOptions = function(){
        return {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
    };

    return config;

};