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
    
        var currentWidth = 992;
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
    templateUrl: 'adminLayoutTemplate.html'
};

adminLayout.$inject = ['$scope'];

angular.module('my-angular-components').component('adminLayout', adminLayout);
