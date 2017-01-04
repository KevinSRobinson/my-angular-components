var adminSideMenuItems = {
    bindings: {
        menuItems:'='
    },
    controllerAs: 'vm',
    controller: function($rootScope){
        var vm = this;
        
        vm.isAuthenticated = $rootScope.isAuthenticated;
    },
    template:'<li class="sidebar-list" ng-repeat="item in vm.menuItems"><a ui-sref="{{item.state}}" ng-if="vm.isAuthenticated">{{item.linkText}} <span class="menu-icon fa fa-{{item.icon}}"></span></a></li>'
};

adminSideMenuItems.$inject = ['$rootScope'];

angular.module('my-angular-components').component('adminSideMenuItems', adminSideMenuItems);
