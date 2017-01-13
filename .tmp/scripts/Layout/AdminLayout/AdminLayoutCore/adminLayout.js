var adminLayout = {
    transclude: true,
    bindings: {
        title: '@',
        theme: '@',
        sideMenuItems: '=',
        userMenuItems: '=',
        alertMenuItems: '=',
        footerLinks: '=',
        userName:'@'
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        'use strict';

        var vm = this;
        vm.colapsed = false;
     

        vm.userName = "";

        $scope.toggle = true;

        var mobileView = 992;

        // // $scope.getWidth = function () {
        // //     return window.innerWidth;
        // // };

        // $scope.$watch($scope.getWidth, function (newValue, oldValue) {
        //     if (newValue >= mobileView) {
        //         if (angular.isDefined($cookieStore.get('toggle'))) {
        //             $scope.toggle = !$cookieStore.get('toggle') ? false : true;
        //         } else {
        //             $scope.toggle = true;
        //         }
        //     } else {
        //         $scope.toggle = false;
        //     }

        // });

        $scope.toggleSidebar = function () {
            $scope.toggle = !$scope.toggle;
            // $cookieStore.put('toggle', $scope.toggle);
        };

        window.onresize = function () {
            $scope.$apply();
        };

        vm.getState = function () {
            if (vm.colapsed)
                return "open";
            else
                return "";
        };

        vm.getViewCssClass= function(){
            console.log(vm.colapsed);

            if (vm.colapsed)
                return "uiView.colapsed";
            else
                return "uiView";
        };
    },
    template:'<style>\r\n.uiView.colapsed{\r\n    margin-left:10px;\r\n}\r\n.uiView{\r\n    margin-left:160px;\r\n}\r\n</style><div id="page-wrapper" ng-cloak ng-class="vm.getState()"><div id="sidebar-wrapper"><admin-side-menu colapsed="vm.colapsed" footer-links="vm.footerLinks" side-menu-items="vm.sideMenuItems"></admin-side-menu></div><div id="content-wrapper"><div class="page-content"><admin-header-bar title="Timebanking" alert-menu-items="vm.alertMenuItems" user-menu-items="vm.userMenuItems" user-name="{{vm.userName}}"></admin-header-bar><div ng-class="vm.getViewCssClass()"><ng-transclude></ng-transclude></div></div></div></div>'
};

adminLayout.$inject = ['$scope'];

angular.module('my-angular-components').component('adminLayout', adminLayout);
