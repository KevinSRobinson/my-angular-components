angular.module("examples").config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

    var homeState = {
        name: 'home',
        url: '/',
        controllerAs: "vm",
        template: '<h3>Home</h3>'
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
    var firebaseState = {
        name: 'firebase',
        url: '/firebase',
        template: '<firebase-examples></firebase-examples>'
    };

    $locationProvider.html5Mode(true);
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

    $urlRouterProvider.otherwise('/');
});
