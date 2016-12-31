var app = angular.module('examples', ['my-angular-components', 'ngFabForm', 
      
        'ui.router', 
        //auth0
        'auth0.lock', 'angular-jwt']);

app.config(function ($stateProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) {
  
  
    var helloState = {
        name: 'hello',
        url: '/hello',
        controllerAs: "vm",
        controller: function ($rootScope) {
            var vm = this;
            vm.isAuthenticated = $rootScope.isAuthenticated;

        },
        template: '<h3>{{vm.isAuthenticated}}</h3>'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    var login = {
        name: 'login',
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'src/client/app/Examples/login.html',
        controllerAs: 'vm'
    };

    var logout = {
        name: 'logout',
        url: '/logout',
        controller: function(authService){
          authService.logout();
        },
        template: '<h1>You have logged Out</h1>',
        controllerAs: 'vm'
    };


    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
    $stateProvider.state(login);
     $stateProvider.state(logout);

    // Configuration for angular-jwt
    jwtOptionsProvider.config({
        tokenGetter: function () {
            return localStorage.getItem('id_token');
        }
    });

    lockProvider.init({
        clientID: 'UY5BHrujRwp7y1TZQl1Bif88aeeVRkrU',
        domain: 'volunteernow.auth0.com'
    });

    $urlRouterProvider.otherwise('/hello');
});

app.run(run);

run.$inject = ['$rootScope', 'authService', 'lock', 'authManager'];

function run($rootScope, authService, lock, authManager) {
    // Put the authService on $rootScope so its methods
    // can be accessed from the nav bar
    $rootScope.authService = authService;

    // Register the authentication listener that is
    // set up in auth.service.js
    authService.registerAuthenticationListener();

    // Use the authManager from angular-jwt to check for
    // the user's authentication state when the page is
    // refreshed and maintain authentication
    authManager.checkAuthOnRefresh();

    // Register the synchronous hash parser
    // when using UI Router
    lock.interceptHash();
}


function authService(lock, authManager, $rootScope) {

    function login() {
        lock.show();
    }



    function logout() {
        localStorage.removeItem('id_token');
        authManager.unauthenticate();
    }

    // Set up the logic for when a user authenticates
    // This method is called from app.run.js
    function registerAuthenticationListener() {
        lock.on('authenticated', function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            authManager.authenticate();
        });
    }

    return {
        login: login,
        logout: logout,
        isAuthenticated: $rootScope.isAuthenticated,
        registerAuthenticationListener: registerAuthenticationListener
    };
}

app.service('authService', authService);
