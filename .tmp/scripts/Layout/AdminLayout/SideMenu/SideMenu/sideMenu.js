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
        };

    },
    template:'<ul class="sidebar"><li class="sidebar-main"><a ng-click="vm.toggleSidebar()">Dashboard <span class="fa fa-switch"></span></a></li><admin-side-menu-items menu-items="vm.sideMenuItems"></admin-side-menu-items></ul><side-menu-footer links="vm.footerLinks"></side-menu-footer>'
};


angular.module('my-angular-components').component('adminSideMenu', adminSideMenu);
