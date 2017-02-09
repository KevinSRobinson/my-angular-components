var myStatusAlert = {
    bindings: {
        message: "@",
        isError: "@",
        timeout: '@'
    },
    controllerAs: 'vm',
    controller: function ($scope, $timeout) {
        var vm = this;
        vm.timeout = 2500,



        $scope.$watch("vm.message", function (oldValue, newValue) {
            console.log('old = ', oldValue);
            console.log('new = ', newValue);
              vm.show = true;
            if (oldValue !== newValue) {
                $timeout(function () {
                    vm.show = false;
                }, vm.timeout);
            }
        });

        vm.$onInit = function () {
            vm.message = "";
            vm.isError = false;
            vm.show = false;
        };

        vm.getClass = function () {
            if (vm.isError === 'true')
                return "errorMessage";
            else
                return "successMessage";
        };

        vm.getIcon = function () {
            if (vm.isError === 'true')
                return "fa fa-warning fa-2x";
            else
                return "fa fa-check fa-2x";
        };

        vm.getId = function () {
            if (vm.isError === 'true')
                return "errorMessage";
            else
                return "successMessage";
        };



    },
    templateUrl: 'statusAlertTemplate.html'
};

myStatusAlert.$inject = ['$scope', '$timeout'];

angular.module('my-angular-components').component('myStatusAlert', myStatusAlert);
