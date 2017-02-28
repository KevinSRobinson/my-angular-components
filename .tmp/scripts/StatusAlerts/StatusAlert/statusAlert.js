var myStatusAlert = {
    bindings: {
        message: "<",
        isError: '=?',
        timeout: '<',
        show: '=?',
    },
    controllerAs: 'vm',
    controller: function ($scope, $timeout) {
        var vm = this;
        var time = {};


        // makes the alert visible for the specified timeout period
        var temporarlyShowAlert = function () {
            vm.show = true;

            time = $timeout(function () {
                vm.show = false;
            }, vm.timeout);
        };



        vm.$onInit = function () {
            vm.timeout = 3500;
            vm.message = "";
            vm.isError = false;
            vm.show = false;
        };


        vm.cssClass = "";
        vm.iconClass = "";
        vm.idClass = "";
        vm.isErrorPre = false;
        vm.isMessagePre = "";

        vm.$doCheck = function () {

            var refresh = false;

            if (vm.isErrorPre != vm.isError) {
                vm.isErrorPre = vm.isError;
                refresh = true;
            }

            if (vm.isMessagePre != vm.message) {
                vm.isMessagePre = vm.message;
                refresh = true;
            }

            if (refresh === true) {
                vm.cssClass = getClass();
                vm.iconClass = getIcon();
                vm.idClass = getId();

                if (!vm.isError) {
                    temporarlyShowAlert();
                } else {
                    // if the message is an error just display 
                    // the message without the timeout
                    vm.show = true;
                }
            }


        }

        function getClass() {
            if (vm.isError === true)
                return "errorMessage";
            else
                return "successMessage";
        };

        function getIcon() {
            if (vm.isError === true)
                return "fa fa-warning fa-2x";
            else
                return "fa fa-check fa-2x";
        };

        function getId() {
            if (vm.isError === 'true')
                return "errorMessage";
            else
                return "successMessage";
        };



    },
    template:'<div ng-class="vm.cssClass" id="{{vm.getId()}}" ng-show="vm.show"><i ng-class="{{vm.cssIconClass}}"></i>{{vm.message}}</div>'
};

myStatusAlert.$inject = ['$scope', '$timeout'];

angular.module('my-angular-components').component('myStatusAlert', myStatusAlert);
