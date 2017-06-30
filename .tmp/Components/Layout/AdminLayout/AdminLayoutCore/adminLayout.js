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
    
        var currentWidth = 65;
        var mobileView = 992;

        vm.getWidth = function () {
            return window.innerWidth;
        };
      

        //Css Class Helpers
        vm.getState = function () {
            if (vm.colapsed)
                return "open";
            else
                return "";
        };
        vm.getViewCssClass= function(){
            if (vm.colapsed == true)
                return "uiViewColapsed";
            else
                return "uiView";
        };
    },
    template:'<div id="page-wrapper" ng-cloak ng-class="vm.getState()"><div id="sidebar-wrapper"><admin-side-menu colapsed="vm.colapsed" footer-links="vm.footerLinks" side-menu-items="vm.sideMenuItems"></admin-side-menu></div><div id="content-wrapper"><div class="page-content"><admin-header-bar title="Timebanking" alert-menu-items="vm.alertMenuItems" user-menu-items="vm.userMenuItems" user-name="{{vm.userName}}"></admin-header-bar><div ng-class="vm.getViewCssClass()"><ng-transclude></ng-transclude></div></div></div></div>'
};

adminLayout.$inject = ['$scope'];

angular.module('my-angular-components').component('adminLayout', adminLayout);
