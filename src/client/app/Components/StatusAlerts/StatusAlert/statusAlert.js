var myStatusAlert = {
    bindings: {
        message: "<",
        isError: '=?',
        timeout: '=?',
        show: '=?',
    },
    controllerAs: 'vm',
    controller: function ($scope, $timeout) {
        var vm = this;


        //watch for changes
        vm.$onChanges = function (args) {

            //if the message changes show the alert for the timeout period
            if (args.message.currentValue !== args.message.previousValue) {
                temporarlyShowAlert();
            }

        }


        // makes the alert visible for the specified timeout period
        var temporarlyShowAlert = function () {
            vm.show = true;
            $timeout(function () {
                vm.show = false;
            }, vm.timeout);
        };

        vm.$onInit = function () {
            vm.timeout = 2500;
            vm.message = "";
            vm.isError = false;
            vm.show = false;
        };



        vm.getClass = function () {
            if (vm.isError === true)
                return "errorMessage";
            else
                return "successMessage";
        };

        vm.getIcon = function () {
            if (vm.isError === true)
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
