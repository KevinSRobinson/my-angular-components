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
