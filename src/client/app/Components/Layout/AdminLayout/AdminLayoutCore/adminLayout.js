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


    },
    templateUrl: 'adminLayoutTemplate.html'
};

adminLayout.$inject = ['$scope'];

angular.module('my-angular-components').component('adminLayout', adminLayout);
