;(function() {
"use strict";

var app = angular.module('examples', ['hljs', 'my-angular-components', 'ngFabForm',

    'ui.router',
    'auth0.lock', 'angular-jwt', 'firebase',
]);

app.run(["$rootScope", "authService", "lock", function ($rootScope, authService, lock) {

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
}]);

angular.module("examples").config(["hljsServiceProvider", "$locationProvider", "$stateProvider", "$httpProvider", "lockProvider", "$urlRouterProvider", "jwtOptionsProvider", function (hljsServiceProvider, $locationProvider, $stateProvider, $httpProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) {

    hljsServiceProvider.setOptions({
    // replace tab with 4 spaces
    tabReplace: '    '
  });
    var login = {
        name: 'login',
        url: '/login',
        controllerAs: 'vm',
        template: '<login></login>',
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
}]);

(function () {

    'use strict';

    authService.$inject = ["lock", "authManager", "$q"];
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

  LoginController.$inject = ["authService"];
  angular
    .module('examples')
    .controller('LoginController', LoginController);

  function LoginController(authService) {

    var vm = this;

    vm.authService = authService;

  }
})();
angular.module("examples").config(["$locationProvider", "$stateProvider", "$urlRouterProvider", function ($locationProvider, $stateProvider, $urlRouterProvider) {

    var homeState = {
        name: 'home',
        url: '/',
        controllerAs: "vm",
        template: '<home></home>'
    };
    var buttonsState = {
        name: 'buttons',
        url: '/buttons',
        controllerAs: "vm",
        template: '<button-examples></button-examples>'
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

    $locationProvider.html5Mode(true);
 $stateProvider.state(homeState);

 
     $stateProvider.state(buttonsState);
    $stateProvider.state(datesExampleState);
    $stateProvider.state(selectListExamplesState);
    $stateProvider.state(gridExamplesState);
    $stateProvider.state(textEditorExampleState);
    $stateProvider.state(statusExamplesState);
    $stateProvider.state(panelExamplesState);
    $stateProvider.state(inputsState);
   
    $stateProvider.state(firebaseState);
    $stateProvider.state(aboutState);
    $stateProvider.state(userProfileState);
    $stateProvider.state(formsState);
    $stateProvider.state(modalsState);
    $stateProvider.state(tagsState);

    $urlRouterProvider.otherwise('/');
}]);

var buttonExamples = {
       controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.doSomething = function() {
            alert('You Clicked me!');
        }   

    },
    templateUrl:'./src/client/app/Examples/Buttons/buttonExamplesTemplate.html'
};

angular.module('examples').component('buttonExamples', buttonExamples);


var common = {
    template:'<h1>Common Properties</h1><table class="table table-striped"><thead><tr><td>Property</td><td>Required</td><td>Description</td></tr></thead><tr><td>field-label</td><td>No</td><td>Set the label value <small>Default: Date</small></td></tr><tr><td>field-name</td><td>No</td><td>Set the Name and ID values of the input.<br><small>Default: Uses the field-label to create a value</small></td></tr><tr><td>help-text</td><td>No</td><td>Set the information text to appear under the control<br><small>Default: empty</small></td></tr></table>'
};

angular.module('examples').component('statusAlerts', common);


var dateExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

    
    },
    template:'<h1>Dates</h1>{{vm.timeDifference}}<my-date-time-difference-field ng-model="vm.timeDifference"></my-date-time-difference-field>'
};

angular.module('examples').component('dateExamples', dateExamples);

var exampleForm = {
    controllerAs: 'vm',
    controller: function (ngFabForm, $timeout) {
        var vm = this;
        vm.simulateError = false;
        vm.customerForm = {};
        vm.age = 99;
        
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
    template:'<div class="col-md-6 center-block"><h1>Example Form1</h1>{{ vm.customerForm.$valid }}<my-spinner-button button-text="Submit Form" saving="vm.saving" is-disabled="!vm.customerForm.$valid" ng-click="vm.submit()"></my-spinner-button><form role="form" name="vm.customerForm" ng-submit="submit()" ng-fab-form-options="customFormOptions"><my-status-alert message="{{vm.status.message}}" ng-show="vm.status.show" is-error="{{vm.status.isError}}"></my-status-alert><my-input-field input-type="textbox" field-label="First Name" ng-model="vm.firstName" placeholder="Enter Your First name" tooltip="We need your First Name" required="vm.required"></my-input-field><my-input-field input-type="textbox" field-label="Last Name" ng-model="vm.lastName" placeholder="Enter Your Last name" , tooltip="We need your Last Name"></my-input-field><my-input-field field-label="Age" input-type="number" ng-model="vm.age" placeholder="Enter Your Age" tooltip="We need your First Name" required="vm.required"></my-input-field><my-input-field field-label="About Me" input-type="textarea" ng-model="vm.aboutMe" placeholder="Enter a description about yourself"></my-input-field><my-input-field field-label="Simulate Error" input-type="checkbox" ng-model="vm.simulateError" placeholder="Enter a description about yourself"></my-input-field></form></div>'
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
    template:'<h1>Firebase</h1><ul><li class="badge" ng-repeat="message in messages">{{message.firstname}}</li></ul><input type="text" ng-model="vm.message"><div class="btn btn-success" ng-click="addMessage(vm.message)">Add</div>'
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
    template:'<h1>Grid</h1><my-grid ng-model="vm.myData" class="myGrid"></my-grid>'
};

angular.module('examples').component('gridExamples', gridExamples);

var home = {
    templateUrl:'./src/client/app/Examples/Home/homeTemplate.html'
};

angular.module('examples').component('home', home);


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
        },{
            state: "buttons",
            linkText: "Buttons",
            icon: "check",
            requiresLogin: false
        },{
            state: "firebase",
            linkText: "Firebase",
            icon: "check",
            requiresLogin: false
        }, {
            state: "panelexamples",
            linkText: "Panels",
            icon: "users",
            requiresLogin: false
        },{
            state: "inputs",
            linkText: "Inputs",
            icon: "users",
            requiresLogin: false
        },{
            state: "forms",
            linkText: "Example Form",
            icon: "users",
            requiresLogin: false
        },{
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
    template:'<admin-layout title="Admidn" theme="success" side-menu-items="vm.sideMenuItems" user-menu-items="vm.userMenuItems" alert-menu-items="vm.alertMenuItems" , footer-links="vm.footerLinks" user-name="{{vm.userName}}"><div ui-view></div></admin-layout>'
};

angular.module("examples").component("adminLayoutExample", adminLayoutExample)

var inputs = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.startDate = new Date();
        vm.firstName = "Kevin";
        vm.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e";
       
        vm.agree = true;
    },
    template:'<div class="col-md-8 center-block"><h1>Textbox</h1><div class="well"><h4>Text Box With Placeholder</h4><my-input-field field-label="First Name" placeholder="Enter Your First name" ng-model="vm.firstName"></my-input-field></div><div class="well"><h4>Textbox With ToolTip</h4><my-input-field field-label="First Name" ng-model="vm.firstName" tooltip="Please Enter your fristname"></my-input-field></div><div class="well"><h4>Textbox Horizontal</h4><my-input-field field-label="First Name" horizontal="true" ng-model="vm.firstName" tooltip="Please Enter your fristname"></my-input-field><br></div><div class="well"><h4>Textbox Read-only</h4><my-input-field field-label="First Name" read-only="true" horizontal="true" ng-model="vm.firstName" tooltip="Please Enter your fristname"></my-input-field><br></div><h1>Textarea</h1><div class="well"><h4>TextArea</h4><my-input-field field-label="Description" input-type="textarea" ng-model="vm.description" tooltip="Please Enter a description"></my-input-field><br></div><div class="well"><h4>TextArea Read-only</h4><my-input-field field-label="Description" input-type="textarea" read-only="true" ng-model="vm.description" tooltip="Please Enter a description"></my-input-field><br></div><h1>Dates</h1><div class="well"><h4>Date Field</h4><my-input-field field-label="Register Date" input-type="datepopup" ng-model="vm.startDate"></my-input-field><br></div><div class="well"><h4>Date Field Read-only</h4><my-input-field field-label="Register Date" input-type="datepopup" read-only="true" ng-model="vm.startDate" tooltip="Please Select a date"></my-input-field><br></div><h1>Checkboxes</h1><div class="well"><h4>Checkbox</h4><my-input-field field-label="I Agree" input-type="checkbox" ng-model="vm.agree"></my-input-field><br></div><div class="well"><h4>Checkbox Read-only</h4><my-input-field field-label="I Agree" input-type="checkbox" read-only="true" ng-model="vm.agree" tooltip="Please Enter a description"></my-input-field><br></div><h1>Number Input</h1><div class="well"><h4>Number</h4><my-input-field field-label="I Agree" input-type="number" ng-model="vm.hours"></my-input-field><br></div></div>'
};

angular.module('examples').component('inputExamples', inputs);

var login = {
    template:'<h1>sdfsdfsdfs</h1><button class="btn btn-primary" ng-click="vm.authService.login()">Log In</button>'
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
    template:'<h1>Map</h1><my-map ng-model="vm.mapOptions"></my-map>'
};

angular.module('examples').component('mapExample', mapExample);

var modals = {
    controllerAs: 'vm',
    controller: function ($uibModal) {
        var vm = this;

        vm.open = function () {
            return $uibModal.open({
                template:'<my-modal-header title="Edit My Contact1"></my-modal-header><div class="modal-body"><my-input-field field-label="FirstName" ng-model="vm.contact.FirstName"></my-input-field><my-input-field field-label="LastName" ng-model="vm.contact.LastName"></my-input-field></div><my-modal-buttons save="alert(\'Saved\')" close="vm.close()"></my-modal-buttons>',
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
    template:'<div class="example"><h5>Modals</h5><hr><div ng-click="vm.open()" class="btn btn-success">Click To Open</div></div><div class="example"><h1>Modal Helpers</h1><hr><h2>Moreless Panel</h2></div>'
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
    templateUrl:'./src/client/app/Examples/Panels/panelsTemplate.html'
};

angular.module('examples').component('panelExamples', panels);


var selectListExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.items = [
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
    template:'<h1>Selected Items</h1>Selected : {{vm.selected}}<my-select-list field-label="Slect a option" items="vm.items" ng-model="vm.selected"><my-select-list></my-select-list></my-select-list>'
};

angular.module('examples').component('selectListExamples', selectListExamples);

var statusAlerts = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

 
    },
    template:'<div class="example"><h1>Status Alerts</h1><hr><my-status-alert show="true" is-error="true" error-message="Something Went Wrong!!"></my-status-alert><my-status-alert show="true" is-success="true" success-message="Everyginng is Great!!"></my-status-alert></div>'
};

angular.module('examples').component('statusAlertExamples', statusAlerts);


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
    template:'<div class="col-md-6 center-block"><h1>Select Fields</h1><div class="usage"><code>\r\n                    <b>\r\n                        <span class="tag">&lt;my-select-field&gt;</span><br>\r\n                       \r\n                        <span class="tag">&lt;/my-select-field&gt;</span>\r\n                    </b>\r\n                </code></div><my-panel title="Options" theme="success"><table class="table table-striped"><thead><tr><td>Property</td><td>Required</td><td>Description</td></tr></thead><tr><td>ng-model</td><td>Yes</td><td>Selected Value</td></tr><tr><td>items</td><td>Yes</td><td>The List if options</td></tr><tr><td>input-tpye</td><td>No</td><td>The type of select: Tags or Combobox <small>default : tags</small></td></tr></table></my-panel><div class="well"><h4>Tags</h4><my-select-field field-label="Languages" items="vm.tags" tooltip="Please Select a Language" ng-model="vm.selectedTags"></my-select-field><h4>Tags</h4><my-select-field field-label="Languages" items="vm.cats" input-type="combobox" tooltip="Please Select a Language" ng-model="vm.selectedTags"></my-select-field></div></div>'
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
    template:'<my-rich-text-editor ng-model="vm.sampleText"></my-rich-text-editor><div markdown="{{vm.sampleText}}"></div>'
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
    template:'<h1>USer Profile</h1><my-input-field field-label="Email" ng-model="vm.profile.email"></my-input-field>'

};


angular.module('examples').controller('userProfileExample', userProfileExample);

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
    template:'<div class="{{vm.cssClass}" id="{{vm.id}}" ng-click="vm.click()">{{vm.buttonText}}<i class="fa fa-{{vm.icon}}"></i></div>]'
};


angular.module('my-angular-components').component('myCreateButton', myCreateButton);




//todo: allow customize height
var mySpinner = {
    bindings: {
        ngModel: '='
    },
    template:'<div class="row text-center"><img style="height: 100px" ng-src="http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif"></div>'
};

angular.module('my-angular-components').component('mySpinner', mySpinner);




angular.module('my-angular-components').directive('markdown', ["$window", function ($window) {
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
}]);

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
    template:'<div ui-ace="vm.options" ng-model="vm.ngModel"></div>'
};


angular.module('my-angular-components').component('myTextEditor', myTextEditor);
}());
