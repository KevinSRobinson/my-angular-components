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
    templateUrl:'src/client/app/Components/Layout/AdminLayout/Header/HeaderBar/headerBarTemplate.html'
};


angular.module('my-angular-components').component('adminHeaderBar', adminHeaderBar);