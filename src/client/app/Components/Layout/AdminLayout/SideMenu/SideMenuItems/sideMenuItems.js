var adminSideMenuItems = {
    bindings: {
        menuItems:'='
    },
    controllerAs: 'vm',
    controller: function($rootScope){
        var vm = this;
        
        vm.isAuthenticated = $rootScope.isAuthenticated;
    },
    templateUrl: 'sideMenuItemsTemplate.html'
};

adminSideMenuItems.$inject = ['$rootScope'];

angular.module('my-angular-components').component('adminSideMenuItems', adminSideMenuItems);
