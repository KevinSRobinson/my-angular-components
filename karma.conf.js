module.exports = function (config) {



    var options = {
        files: [].concat(
           // bower:js
           "bower_components/angular/angular.js",
           "bower_components/angular-animate/angular-animate.js",
           "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
           "bower_components/angular-sanitize/angular-sanitize.js",
           "bower_components/angular-ui-select/dist/select.js",
           "bower_components/angular-messages/angular-messages.js",
           "bower_components/ng-fab-form/dist/ng-fab-form.js",
           "bower_components/angular-ui-router/release/angular-ui-router.js",
           "bower_components/auth0-lock/build/lock.js",
           "bower_components/angular-lock/angular-lock.js",
           "bower_components/angular-jwt/dist/angular-jwt.js",
           "bower_components/angular-ui-ace/ui-ace.js",
           "bower_components/angular-showdown/showdown.js",
           "bower_components/angular-ui-grid/ui-grid.js",
           "bower_components/jquery/dist/jquery.js",
           "bower_components/bootstrap/dist/js/bootstrap.js",
           "bower_components/firebase/firebase.js",
           "bower_components/angularfire/dist/angularfire.js",
           "bower_components/angular-mocks/angular-mocks.js",
           "bower_components/sinon/index.js",
           "bower_components/bardjs/dist/bard.js",
           "bower_components/bardjs/dist/bard-ngRouteTester.js",
           // endbower

    // inject:js
    "src/Client/App/Components/app.js",
    "src/Client/App/Components/cssClassService.js",
    "src/Client/App/Components/Buttons/CreateButton/createButton.js",
    "src/Client/App/Components/Buttons/SpinnerButton/spinnerButton.js",
    "src/Client/App/Components/ComboBoxes/CategorySelect/categorySelect.js",
    "src/Client/App/Components/Filters/FilterTextbox/filterTextbox.js",
    "src/Client/App/Components/Headers/PageHeader/pageHeader.js",
    "src/Client/App/Components/Inputs/DateTimeDifferenceField/dateTimeDifferenceField.js",
    "src/Client/App/Components/Inputs/InputField/inputField.js",
    "src/Client/App/Components/Inputs/SelectField/selectField.js",
    "src/Client/App/Components/Inputs/TextEditor/markdown.directive.js",
    "src/Client/App/Components/Inputs/TextEditor/textEditor.js",
    "src/Client/App/Components/Modals/ModalButtons/modalButtons.js",
    "src/Client/App/Components/Modals/ModalHeader/modalHeader.js",
    "src/Client/App/Components/Panels/InfoPanel/infoPanel.js",
    "src/Client/App/Components/Panels/MoreLessButton/moreLessButton.js",
    "src/Client/App/Components/Panels/MoreLessPanel/moreLessPanel.js",
    "src/Client/App/Components/Panels/Panel/panel.js",
    "src/Client/App/Components/StatusAlerts/StatusAlert/statusAlert.js",
    "src/Client/App/Components/Inputs/DatesField/DateField/dateField.js",
    "src/Client/App/Components/Layout/AdminLayout/AdminLayoutCore/adminLayout.js",
    "src/Client/App/Components/Layout/AdminLayout/Header/AlertsDropDown/alertsDropDownMenu.js",
    "src/Client/App/Components/Layout/AdminLayout/Header/HeaderBar/headerBar.js",
    "src/Client/App/Components/Layout/AdminLayout/Header/UserOptionsDropDown/userOptionsDropDownMenu.js",
    "src/Client/App/Components/Layout/AdminLayout/SideMenu/SideMenu/sideMenu.js",
    "src/Client/App/Components/Layout/AdminLayout/SideMenu/SideMenuFooter/sideMenuFooter.js",
    "src/Client/App/Components/Layout/AdminLayout/SideMenu/SideMenuItems/sideMenuItems.js",
    // endinject

 // inject:examplesjs
    
    "src/Client/App/Examples/app.js",
    
    "src/Client/App/Examples/appconfig.js",
    
    "src/Client/App/Examples/auth.service.js",
    
    "src/Client/App/Examples/login.controller.js",
    
    "src/Client/App/Examples/routes.js",
    
    "src/Client/App/Examples/Common/common.js",
    
    "src/Client/App/Examples/Dates/dateExamples.js",
    
    "src/Client/App/Examples/Firebase/firebase.js",
    
    "src/Client/App/Examples/ExampleForm/exampleForm.js",
    
    "src/Client/App/Examples/Grid/gridExample.js",
    
    "src/Client/App/Examples/Inputs/inputs.js",
    
    "src/Client/App/Examples/Layout/adminLayoutExample.js",
    
    "src/Client/App/Examples/Map/mapExample.js",
    
    "src/Client/App/Examples/Modals/modals.js",
    
    "src/Client/App/Examples/Panels/panels.js",
    
    "src/Client/App/Examples/SelectLists/selectListExamples.js",
    
    "src/Client/App/Examples/StatusAlerts/statusAlerts.js",
    
    "src/Client/App/Examples/Tags/tags.js",
    
    "src/Client/App/Examples/TextEditor/textEditorExample.js",
    
    "src/Client/App/Examples/UserProfile/userProfile.js",
    
    "src/Client/App/Examples/ExampleForm/CreateButton/createButton.js",
    
    "src/Client/App/Examples/Other/Spinner/spinner.js",
    
    "src/Client/App/Examples/Other/TextEditor/markdown.directive.js",
    
    "src/Client/App/Examples/Other/TextEditor/textEditor.js",
    
    // endinject

    // spec:js
   
    "src/Client/tests/Components/Buttons/spinnerButton.spec.js",
   
    "src/Client/tests/Components/Headers/pageHeader.spec.js",
   
    "src/Client/tests/Components/Inputs/dateField.spec.js",
   
    "src/Client/tests/Components/Inputs/inputField.spec.js",
   
    "src/Client/tests/Components/Inputs/selectField.spec.js",
   
    "src/Client/tests/Components/Inputs/textEditor.spec.js",
   
    "src/Client/tests/Components/Layout/layoutCore.spec.js",
   
    "src/Client/tests/Components/Panels/infoPanel.spec.js",
   
    "src/Client/tests/Components/Panels/moreLessButton.spec.js",
   
    "src/Client/tests/Components/Panels/moreLessPanel.spec.js",
   
    "src/Client/tests/Components/Panels/panel.spec.js",
   
    "src/Client/tests/Components/Modals/modalButtons.spec.js",
   
    "src/Client/tests/Components/Modals/modalHeader.spec.js",
   
    "src/Client/tests/Components/StatusAlerts/statusAlert.spec.js",
   
    "src/Client/tests/Components/Layout/Header/alertsDropDown.spec.js",
   
    "src/Client/tests/Components/Layout/Header/headerBar.spec.js",
   
    "src/Client/tests/Components/Layout/Header/userOptionsDropDown.spec.js",
   
    "src/Client/tests/Components/Layout/SideMenu/sideMenu.spec.js",
   
    "src/Client/tests/Components/Layout/SideMenu/sideMenuFooter.spec.js",
   
    "src/Client/tests/Components/Layout/SideMenu/sideMenuItems.spec.js"
   
    // endinject

    // spec:examplesjs
    // endinject
        ),
        exclude: [],
        // coverage: {

        //     //dir: report + 'coverage',
        //     reporters: [{
        //         type: 'html',
        //         subdir: 'report-html'
        //     }, {
        //         type: 'lcov',
        //         subdir: 'report-lcov'
        //     }, {
        //         type: 'text-summary'
        //     }]
        // },
        preprocessors: {}
    };



    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // some available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['wiredep', 'jasmine', 'chai'],

        // list of files / patterns to load in the browser
        files: options.files,

        // list of files to exclude
        exclude: options.exclude,

        // proxies: {
        //     '/': 'http://localhost:8888/'
        // },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: options.preprocessors,

        // test results reporter to use
        // possible values: 'dots', 'progress', 'coverage'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // coverageReporter: {
        //     dir: options.coverage.dir,
        //     reporters: options.coverage.reporters
        // },

        // web server port
        port: 9876,

        plugins: [
            'karma-wiredep',
            'karma-jasmine',
            'karma-chai',
            'karma-chrome-launcher',
        ],

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        wiredep: {
            dependencies: true, // default: true  
            devDependencies: true, // default: false  
        },
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //        browsers: ['Chrome', 'ChromeCanary', 'FirefoxAurora', 'Safari', 'PhantomJS'],
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
