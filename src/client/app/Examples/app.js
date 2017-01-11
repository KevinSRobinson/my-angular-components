var app = angular.module('examples', ['my-angular-components', 'ngFabForm',

    'ui.router',
    'auth0.lock', 'angular-jwt',
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

    var firebaseState = {
        name: 'firebase',
        url: '/firebase',
        controller: function(authService){
            var vm = this;
 vm.authService = authService;

    authService.getProfileDeferred().then(function (profile) {
        console.log(angular.toJson(profile.email));
      vm.profile = profile;
    });
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
        tokenGetter: function() {
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
