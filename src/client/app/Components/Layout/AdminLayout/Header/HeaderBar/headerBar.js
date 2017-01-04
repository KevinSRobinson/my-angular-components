var adminHeaderBar = {
    transclude: true,
    bindings: {
        title: '@',
        theme: '@',
        userMenuItems: "=",
        alertMenuItems: "=",
        userName: '@'
    },
    controllerAs: 'vm',
    templateUrl:'headerBarTemplate.html'
};


angular.module('my-angular-components').component('adminHeaderBar', adminHeaderBar);