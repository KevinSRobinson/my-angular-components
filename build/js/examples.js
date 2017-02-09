var app = angular.module('examples', ['my-angular-components', 'ngFabForm',

    'ui.router',
    'auth0.lock', 'angular-jwt', 'firebase',
]);

app.run(function ($rootScope, authService, lock) {

    run.$inject = ['$rootScope', 'authService', 'lock'];

    function run($rootScope, authService, lock) {
        // Put the authService on $rootScope so its methods
        // can be accessed from the nav bar
        $rootScope.authService = authService;

        // Register the authentication listener that is
        // set up in auth.service.js
        authService.registerAuthenticationListener();

        // Register the synchronous hash parser
        // when using UI Router
        lock.interceptHash();
    }
});

angular.module("examples").config(function ($locationProvider, $stateProvider, $httpProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) {

    
    var login = {
        name: 'login',
        url: '/login',
        controllerAs: 'vm',
        controller: 'LoginController',
        templateUrl: 'src/client/app/Examples/login.html',
    };

    var logout = {
        name: 'logout',
        url: '/logout',
        controller: function (authService) {
            authService.logout();
        },
        template: '<h1>You have logged Out</h1>',
        controllerAs: 'vm'
    };



    lockProvider.init({
        clientID: 'UY5BHrujRwp7y1TZQl1Bif88aeeVRkrU',
        domain: 'volunteernow.auth0.com',
        options: {
            auth: {
                params: {
                    scope: 'openid'
                }
            }
        }
    });

    // Configuration for angular-jwt
    jwtOptionsProvider.config({
        tokenGetter: function () {
            return localStorage.getItem('id_token');
        },
        whiteListedDomains: ['localhost'],
        unauthenticatedRedirectPath: '/login'
    });

    $locationProvider.html5Mode(true);

    // Add the jwtInterceptor to the array of HTTP interceptors
    // so that JWTs are attached as Authorization headers
    $httpProvider.interceptors.push('jwtInterceptor');


    $stateProvider.state(login);
    $stateProvider.state(logout);
 
    $urlRouterProvider.otherwise('/');
});

(function () {

    'use strict';

    angular
        .module('examples')
        .service('authService', authService);

    function authService(lock, authManager, $q) {

      


        function login() {
            lock.show();
        }



        function getProfileDeferred() {            
            var userProfile = JSON.parse(localStorage.getItem('profile')) || null;
            var deferredProfile = $q.defer();
            if (userProfile) {
                deferredProfile.resolve(userProfile);
            }
            return deferredProfile.promise;
        }


        // Set up the logic for when a user authenticates
        // This method is called from app.run.js
        function registerAuthenticationListener() {
            lock.on('authenticated', function (authResult) {
                console.log('----------------------');
                console.log('-----------authenticated-----------');
                localStorage.setItem('id_token', authResult.idToken);
                authManager.authenticate();
            });

            lock.on('authenticated', function (authResult) {

                lock.getProfile(authResult.idToken, function (error, profile) {
                    if (error) {
                        return console.log(error);
                    }

                    localStorage.setItem('profile', JSON.stringify(profile));
                    deferredProfile.resolve(profile);
                });

            });
        }

        return {
            login: login,
            registerAuthenticationListener: registerAuthenticationListener,
            getProfileDeferred: getProfileDeferred
        }
    }
})();


(function () {
  'use strict';

  angular
    .module('examples')
    .controller('LoginController', LoginController);

  function LoginController(authService) {

    var vm = this;

    vm.authService = authService;

  }
})();
angular.module("examples").config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

    var homeState = {
        name: 'home',
        url: '/',
        controllerAs: "vm",
        template: '<home></home>'
    };
     var gridExamplesState = {
        name: 'grid',
        url: '/grid',
        controllerAs: "vm",
        template: '<grid-examples></grid-examples>'
    };
    var statusExamplesState = {
        name: 'status',
        url: '/status',
        controllerAs: "vm",
        template: '<status-alert-examples></status-alert-examples>'
    };
    var textEditorExampleState = {
        name: 'texteditor',
        url: '/texteditor',
        controllerAs: "vm",
        template: '<text-editor-example></text-editor-example>'
    };
    var tagsState = {
        name: 'tags',
        url: '/tags',
        controllerAs: "vm",
        template: '<tags-examples>Home</tags-examples>'
    };
    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<div sp-login-form></div>'
    };   
    var inputsState = {
        name: 'inputs',
        url: '/inputs',
        template: '<input-examples></input-examples>'
    };
     var selectListExamplesState = {
        name: 'selectlist',
        url: '/selectlist',
        template: '<select-list-examples></select-list-examples>'
    };
    var formsState = {
        name: 'forms',
        url: '/forms',
        template: '<example-form></example-form>'
    };
    var panelExamplesState = {
        name: 'panelexamples',
        url: '/panelexamples',
        template: '<panel-examples></panel-examples>'
    };
    var modalsState = {
        name: 'modalsstate',
        url: '/modalsstate',
        template: '<modal-examples></modal-examples>'
    };
    var userProfileState = {
        name: 'userprofile',
        url: '/userprofile',
        template: '<user-profile-example></user-profile-example>'
    };
     var datesExampleState = {
        name: 'dates',
        url: '/dates',
        template: '<date-examples></date-examples>'
    };
    var firebaseState = {
        name: 'firebase',
        url: '/firebase',
        template: '<firebase-examples></firebase-examples>'
    };
    var exampleButtonsState = {
        name: 'exampleButtons',
        url: '/exampleButtons',
        template: '<button-examples></button-examples>'
    };
    

    $stateProvider.state(exampleButtonsState);
    $stateProvider.state(datesExampleState);
    $stateProvider.state(selectListExamplesState);
    $stateProvider.state(gridExamplesState);
    $stateProvider.state(textEditorExampleState);
    $stateProvider.state(statusExamplesState);
    $stateProvider.state(panelExamplesState);
    $stateProvider.state(inputsState);
    $stateProvider.state(homeState);
    $stateProvider.state(firebaseState);
    $stateProvider.state(aboutState);
    $stateProvider.state(userProfileState);
    $stateProvider.state(formsState);
    $stateProvider.state(modalsState);
    $stateProvider.state(tagsState);



    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});

var buttonExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.showMessage = function () {
            alert('You clicked me!');
        }

    },
    templateUrl: "src/client/app/Examples/Buttons/buttonExamplesTemplate.html"
};

angular.module('examples').component('buttonExamples', buttonExamples);

var common = {
    templateUrl: "src/client/app/Examples/Common/commonTemplate.html"
};

angular.module('examples').component('statusAlerts', common);


var dateExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

    
    },
    templateUrl: "src/client/app/Examples/Dates/dateExamplesTemplate.html"
};

angular.module('examples').component('dateExamples', dateExamples);

var exampleForm = {
    controllerAs: 'vm',
    controller: function (ngFabForm, $timeout) {
        var vm = this;
        vm.simulateError = false;
        vm.customerForm = {};
        vm.age = 99;
        vm.date = '2017-02-08T00:00:00.000Z';

        vm.status = {
            message: "",
            isError: false,
            show: false
        };


        vm.$onInit = function () {
            vm.sampleDate = new Date();
            vm.saving = true;
            vm.selectedCats = {};
            vm.selectedTags = {};
            vm.customFormOptions = angular.copy(ngFabForm.config);
        };


        vm.submit = function () {
            vm.status.isError = vm.simulateError;

            vm.saving = true;

            $timeout(function () {
                if (vm.status.isError)
                    vm.status.message = "Something went wrong!";
                else
                    vm.status.message = "Form Submitted";

                vm.status.show = true;
                vm.saving = false;
            }, 0);



        };

        vm.cats = [{
            id: 1,
            name: "Cat 1"
        }, {
            id: 2,
            name: "Cat 2"
        }];

        vm.tags = [{
            id: 1,
            name: "VB.net"
        }, {
            id: 2,
            name: "c# "
        }];
    },
    templateUrl: "src/client/app/Examples/ExampleForm/exampleForm.html"
};

angular.module('examples').component('exampleForm', exampleForm);

var firebaseExamples = {
    controllerAs: 'vm',
    controller: function ($scope, authService, $firebaseObject, $firebaseArray) {
        var vm = this;
        var ref = firebase.database().ref();
        //var ref = new Firebase("https://quiz-fd4f2.firebaseio.com/");
        vm.array = $firebaseObject(ref);
        var ref = firebase.database().ref().child("Contacts");
        $scope.messages = $firebaseArray(ref);
        // add new items to the array
        // the message is automatically added to our Firebase database!
        $scope.addMessage = function (message) {
            console.log(message);
            $scope.messages.$add({
                firstname: message
            });
        };
    },
    templateUrl: "src/client/app/Examples/Firebase/firebaseTemplate.html"
};

angular.module("examples").component('firebaseExamples', firebaseExamples);

var gridExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.myData = [
        {
            "firstName": "Cox",
            "lastName": "Carney"
        },
        {
            "firstName": "Kevin",
            "lastName": "Robinons"
        },
        {
            "firstName": "Sean",
            "lastName": "Robinons"
        }];
    },
    templateUrl: "src/client/app/Examples/Grid/gridExampleTemplate.html"
};

angular.module('examples').component('gridExamples', gridExamples);

var home = {
    templateUrl: "src/client/app/Examples/Home/homeTemplate.html"
};

angular.module('examples').component('home', home);


var inputs = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.startDate = new Date();
        vm.firstName = "Kevin";
        vm.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e";
       
        vm.agree = true;
    },
    templateUrl: "src/client/app/Examples/Inputs/inputsTemplate.html"
};

angular.module('examples').component('inputExamples', inputs);

var adminLayoutExample = {
    controllerAs: "vm",
    controller: function () {
        var vm = this;

        vm.userName = "Test Username";

        vm.sideMenuItems = [{
                state: "home",
                linkText: "Home",
                icon: "check",
                requiresLogin: false
            }, {
                state: "firebase",
                linkText: "Firebase",
                icon: "check",
                requiresLogin: false
            },
            {
                state: "exampleButtons",
                linkText: "Buttons",
                icon: "check",
                requiresLogin: false
            }, {
                state: "panelexamples",
                linkText: "Panels",
                icon: "users",
                requiresLogin: false
            }, {
                state: "inputs",
                linkText: "Inputs",
                icon: "users",
                requiresLogin: false
            }, {
                state: "forms",
                linkText: "Example Form",
                icon: "users",
                requiresLogin: false
            }, {
                state: "modalsstate",
                linkText: "Modals",
                icon: "users",
                requiresLogin: false
            },
            {
                state: "tags",
                linkText: "Tags",
                icon: "users",
                requiresLogin: false
            },
            {
                state: "status",
                linkText: "Status Alerts",
                icon: "users",
                requiresLogin: false
            },
            {
                state: "texteditor",
                linkText: "Text Editor",
                icon: "users",
                requiresLogin: false
            },
            {
                state: "selectlist",
                linkText: "Select List",
                icon: "check",
                requiresLogin: false
            },
            {
                state: "grid",
                linkText: "Grid List",
                icon: "check",
                requiresLogin: false
            },
            {
                state: "dates",
                linkText: "Dates",
                icon: "check",
                requiresLogin: false
            },
        ];

        vm.userMenuItems = [{
            state: "userprofile",
            linkText: "User Profile",
            icon: "user"
        }, {
            state: "useroptions",
            linkText: "User Options",
            icon: "cogs"
        }, {
            state: "logout",
            linkText: "Logout",
            icon: "cogs"
        }, {
            state: "login",
            linkText: "Login",
            icon: "check"
        }];

        vm.alertMenuItems = [{
            state: "alert1",
            linkText: "Alert 1",
            icon: "bell"
        }, {
            state: "alert2",
            linkText: "Alert 3",
            icon: "bell"
        }];

        vm.footerLinks = [{
                state: 'link1',
                linkText: "Link 1"
            }, {
                state: 'link2',
                linkText: "Link 2"
            }, {
                state: 'link3',
                linkText: "Link 3"
            },

        ]
    },
    templateUrl: "src/client/app/Examples/Layout/adminLayoutExampleTemplate.html"
};

angular.module("examples").component("adminLayoutExample", adminLayoutExample)

var login = {
    templateUrl: "src/client/app/Examples/Login/loginTemplate.html"
};

angular.module('examples').component('login', login);


var mapExample = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.mapOptions = {
                center: {
                    latitude: 45,
                    longitude: -73
                },
                zoom: 8
            };
    },
    templateUrl: "src/client/app/Examples/Map/mapExampleTemplate.html"
};

angular.module('examples').component('mapExample', mapExample);

var modals = {
    controllerAs: 'vm',
    controller: function ($uibModal) {
        var vm = this;

        vm.open = function () {
            return $uibModal.open({
                templateUrl: 'src/client/app/Examples/Modals/sampleModalTemplate.html',
                controllerAs: 'vm',
                controller:function($uibModalInstance){
                    var vm = this;
                    vm.close = function () {
                      $uibModalInstance.close();
                    };
                }
            });
        };
    },
    templateUrl: "src/client/app/Examples/Modals/modalsTemplate.html"
};

angular.module('examples').component('modalExamples', modals);

var panels = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

        vm.testTable = {
            Headers:['Titel 1', 'Title2'],
            Body:['Titel 1', 'Title2']
        };



        vm.add = function(){
                alert('Add Clicked');
        };

        vm.edit = function(){
                alert('Edit Clicked');
        };
    },
    templateUrl: "src/client/app/Examples/Panels/panelsTemplate.html"
};

angular.module('examples').component('panelExamples', panels);


var selectListExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.items = ["Carney", "Robinons", "Sean", "Robinons"];
    },
    templateUrl: "src/client/app/Examples/SelectLists/selectListExamplesTemplate.html"
};

angular.module('examples').component('selectListExamples', selectListExamples);

var statusAlerts = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

 
    },
    templateUrl: "src/client/app/Examples/StatusAlerts/statusAlertsTemplate.html"
};

angular.module('examples').component('statusAlertExamples', statusAlerts);


var tags = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.selectedCats = [];
        vm.selectedTags = [];
        vm.selectedSimpleTags = [];

        vm.cats = [{
            id: 1,
            name: "Cat 1"
        }, {
            id: 2,
            name: "Cat 2"
        }];

        vm.tags = [{
            id: 1,
            name: "VB.net"
        }, {
            id: 2,
            name: "c# "
        }];

        vm.simpleTags = ['Blue', 'Green'];
        
    },
    templateUrl: "src/client/app/Examples/Tags/tagsTemplate.html"
};

angular.module('examples').component('tagsExamples', tags);

var textEditorExample = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.sampleText = "+ item      - subitem" +
            "The HTML has a superfluous newline before this" +
            "paragraph." +
            "- subitem";
    },
    templateUrl: "src/client/app/Examples/TextEditor/textEditorExampleTemplate.html"
};

angular.module('examples').component('textEditorExample', textEditorExample);

var userProfileExample = {
    controllerAs: 'vm',
    controller: function (authService) {
        var vm = this;

        vm.profile = {
            email: ''
        };

        vm.authService = authService;

        authService.getProfileDeferred().then(function (profile) {
            console.log(angular.fromJson(profile));
            console.log(angular.isString(profile.email));
            vm.profile = angular.fromJson(profile);
        });
    },
    templateUrl: 'src/client/app/Examples/UserProfile/userProfileTemplate.html'

};


angular.module('examples').controller('userProfileExample', userProfileExample);

//todo: allow customize height
var mySpinner = {
    bindings: {
        ngModel: '='
    },
    templateUrl: 'app/Other/Spinner/spinnerTemplate.html'
};

angular.module('my-angular-components').component('mySpinner', mySpinner);




angular.module('my-angular-components').directive('markdown', function ($window) {
    //ar Showdown = require('showdown');
    var converter = new Showdown.converter();


    var link = function (scope, element, attrs) {
        attrs.$observe('markdown', function (value) {
            var markup = converter.makeHtml(value);
            element.html(markup);
        });
    };

    return {
        restrict: 'A',
        link: link
    };
});

var myTextEditor = {
    bindings: {
        ngModel: '=',
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.options = {
            useWrapMode: true,
            showGutter: false,
            mode: 'markdown',
            firstLineNumber: 5,
        };
    },
    templateUrl: 'src/client/app/Components/Inputs/TextEditor/textEditorTemplate.html'
};


angular.module('my-angular-components').component('myTextEditor', myTextEditor);
