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
