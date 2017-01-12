var adminSideMenuItems = {
    bindings: {
        menuItems: '='
    },
    controllerAs: 'vm',
    controller: function ($rootScope) {
        var vm = this;

        vm.isAuthenticated = $rootScope.isAuthenticated;

        vm.showItem = function (item) {
            if (item.requiresLogin) {
                if (vm.isAuthenticated) {
                    return true;
                }
            } else
                return true;

        };
    },
    template:'<li class="sidebar-list" ng-repeat="item in vm.menuItems"><a ui-sref="{{item.state}}" ng-if="vm.showItem(item)">{{item.linkText}} <span class="menu-icon fa fa-{{item.icon}}"></span></a></li>'
};

adminSideMenuItems.$inject = ['$rootScope'];

angular.module('my-angular-components').component('adminSideMenuItems', adminSideMenuItems);
