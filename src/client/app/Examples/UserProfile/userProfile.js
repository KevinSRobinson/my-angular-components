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
