angular.module("examples").config(function ($locationProvider, $stateProvider, $httpProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) {

    $locationProvider.html5Mode(true);

    var homeState = {
        name: 'home',
        url: '/',
        controllerAs: "vm",
        template: '<h3>Home</h3>'
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
        },
        templateUrl: 'src/client/app/Examples/Firebase/firebaseTemplate.html'
    };

  


   

    $locationProvider.html5Mode(true);

    // Add the jwtInterceptor to the array of HTTP interceptors
    // so that JWTs are attached as Authorization headers
    $httpProvider.interceptors.push('jwtInterceptor');



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

    $urlRouterProvider.otherwise('/');
});
