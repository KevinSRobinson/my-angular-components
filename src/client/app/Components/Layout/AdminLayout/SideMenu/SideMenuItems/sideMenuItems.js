var adminSideMenuItems = {
    bindings: {
        menuItems:'='
    },
    controllerAs: 'vm',
    controller: function($rootScope){
        var vm = this;
        
        vm.isAuthenticated = $rootScope.isAuthenticated;
    },
    templateUrl: 'src/client/app/Components/Layout/AdminLayout/SideMenu/SideMenuItems/sideMenuItemsTemplate.html'
};


angular.module('my-angular-components').component('adminSideMenuItems', adminSideMenuItems);
