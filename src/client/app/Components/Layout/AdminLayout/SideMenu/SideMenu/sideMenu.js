var adminSideMenu = {
    transclude: true,
    bindings: {
        colapsed: '=',
        sideMenuItems:'=',
        footerLinks: '='
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;
        
        vm.$onInit = function () {
            vm.colapsed = true;
        };

        vm.toggleSidebar = function () {
            vm.colapsed = !vm.colapsed;
            //todo: Add to local storage
            // $cookieStore.put('toggle', $scope.toggle);
        };

    },
    templateUrl: 'sideMenuTemplate.html'
};


angular.module('my-angular-components').component('adminSideMenu', adminSideMenu);
