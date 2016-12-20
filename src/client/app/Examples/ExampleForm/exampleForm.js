var exampleForm = {
    controllerAs: 'vm',
    controller: function (ngFabForm) {
        var vm = this;
        vm.simulateError = false;
        vm.customerForm = {};
        vm.status = {
            message: "",
            isError: false,
            show: false
        };

        vm.selectedCats = {};
        vm.selectedTags = {};
        vm.customFormOptions = angular.copy(ngFabForm.config);

        vm.submit = function () {
            vm.status.isError = vm.simulateError;

            if (vm.status.isError)
                vm.status.message = "Something went wrong!";
            else
                vm.status.message = "Form Submitted";

            vm.status.show = true;
        };

        vm.cats = [{
            id: 1,
            name: "Cat 1"
        }, {
            id: 2,
            name: "Cat 2"
        }];

        vm.tags = [{
            id: 1,
            name: "VB.net"
        }, {
            id: 2,
            name: "c# "
        }];
    },
    templateUrl: "src/client/app/Examples/ExampleForm/exampleForm.html"
};

angular.module('examples').component('exampleForm', exampleForm);
