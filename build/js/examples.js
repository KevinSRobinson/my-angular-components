var app = angular.module('examples', ['my-angular-components', 'ngFabForm',

    'ui.router',
    'auth0.lock', 'angular-jwt', 'firebase',
]);

app.config(function ($locationProvider, $stateProvider, $httpProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) {

    $locationProvider.html5Mode(true);

    var homeState = {
        name: 'home',
        url: '/',
        controllerAs: "vm",
        template: '<h3>Home</h3>'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<div sp-login-form></div>'
    };

    var userProfileState = {
        name: 'userprofile',
        url: '/userprofile',
        controller: 'userProfileController',
        templateUrl: 'src/client/app/Examples/UserProfile/userProfileTemplate.html'
    };

    var firebaseState = {
        name: 'firebase',
        url: '/firebase',
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
            //            

            //  vm.authService = authService;

            //     authService.getProfileDeferred().then(function (profile) {
            //         console.log(angular.toJson(profile.email));
            //       vm.profile = profile;
            //     });
        },
        templateUrl: 'src/client/app/Examples/Firebase/firebaseTemplate.html'
    };

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

    $stateProvider.state(homeState);
    $stateProvider.state(firebaseState);
    $stateProvider.state(aboutState);
    $stateProvider.state(login);
    $stateProvider.state(logout);
    $stateProvider.state(userProfileState);

    $urlRouterProvider.otherwise('/');
});




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
var common = {
    templateUrl: "src/client/app/Examples/Common/commonTemplate.html"
};

angular.module('examples').component('statusAlerts', common);


var dates = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

    

        vm.$onInit = function(){
            vm.sampleDate = new Date();
        };
    },
    templateUrl: "src/client/app/Examples/Dates/datesTemplate.html"
};

angular.module('examples').component('datesExamples', dates);


var exampleForm = {
    controllerAs: 'vm',
    controller: function (ngFabForm, $timeout) {
        var vm = this;
        vm.simulateError = false;
        vm.customerForm = {};
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
            }, 2000);



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


var gridExample = {
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

angular.module('examples').component('gridExample', gridExample);

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
            linkText: "home",
            icon: "check",
            requiresLogin: false
        },{
            state: "firebase",
            linkText: "firebase",
            icon: "check",
            requiresLogin: false
        }, {
            state: "about",
            linkText: "about",
            icon: "users",
            requiresLogin: false
        }];

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


var statusAlerts = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

 
    },
    templateUrl: "src/client/app/Examples/StatusAlerts/statusAlertsTemplate.html"
};

angular.module('examples').component('statusAlerts', statusAlerts);


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

var userProfileController = function (authService) {
    var vm = this;
    vm.profile = {
        email : ''
    };

    vm.authService = authService;

    authService.getProfileDeferred().then(function (profile) {
        console.log(angular.fromJson(profile));
        console.log(angular.isString(profile.email));
        vm.profile = angular.fromJson(profile);
    });


};

angular.module('examples').controller('userProfileController', userProfileController);

var tags = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.selectedCats = {};
        vm.selectedTags = {};
        
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
    templateUrl: "src/client/app/Examples/Tags/tagsTemplate.html"
};

angular.module('examples').component('tags', tags);

var myCreateButton = {
    bindings: {
        id: '@',
        buttonText: '@',
        click: '&',
        cssClass:'@'
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;
      
        vm.$onInit = function () {
            //default options
            vm.id = 'create';
            vm.buttonText = 'Create';
            vm.icon = 'plus';
            vm.cssClass = 'btn btn-success';
        };       
    },
    templateUrl: 'src/client/app/Components/Buttons/CreateButton/createButtonTemplate.html'
};


angular.module('my-angular-components').component('myCreateButton', myCreateButton);




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
