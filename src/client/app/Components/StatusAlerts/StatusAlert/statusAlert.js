var myStatusAlert = {
    bindings: {
           successMessage: "@",
        errorMessage: "@",
        message: "@",
        isError: "@"
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;


        vm.$onInit = function () {
            vm.errorMessage = "";
            vm.successMessage = "";
            vm.isError = false;
        };


        vm.getMessage = function () {
            if (vm.isError === 'true')
                return vm.errorMessage;
            else
                return vm.successMessage;
        };

        vm.getClass = function () {
            if (vm.isError === 'true')
                return " errorMessage";
            else
                return " successMessage";
        };

        vm.getIcon = function () {
            if (vm.isError === 'true')
                return " fa fa-warning fa-2x";
            else
                return " fa fa-check fa-2x";
        };

        vm.getId = function () {
            if (vm.isError === 'true')
                return "errorMessage";
            else
                return "successMessage";
        };
       


    },
    templateUrl:'./src/client/app/Components/StatusAlerts/StatusAlert/statusAlertTemplate.html'
};


angular.module('my-angular-components').component('myStatusAlert', myStatusAlert);
