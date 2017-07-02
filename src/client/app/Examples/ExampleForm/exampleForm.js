var exampleForm = {
    controllerAs: 'vm',
    controller: function (ngFabForm, $timeout, $uibModal) {
        var vm = this;
        vm.simulateError = false;
        vm.customerForm = {};
        vm.age = 99;
        
        vm.status = {
            message: "",
            isError: false,
            show: false
        };


        vm.$onInit = function () {
            vm.sampleDate = new Date();
            vm.saving = true;
            vm.selectedCats = {};
            vm.selectedTags = {};
            vm.customFormOptions = angular.copy(ngFabForm.config);
        };


        vm.submit = function () {
            vm.status.isError = vm.simulateError;

            vm.saving = true;

            $timeout(function () {
                if (vm.status.isError)
                    vm.status.message = "Something went wrong!";
                else
                    vm.status.message = "Form Submitted";

                vm.status.show = true;
                vm.saving = false;
            }, 0);



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


        vm.viewTermsAndConditions = function () {
            return $uibModal.open({
                templateUrl:'./src/client/app/Examples/ExampleForm/termsandConditionsTemplate.html',
                controllerAs: 'vm',
                controller:function($uibModalInstance){
                    var vm = this;
                    vm.close = function () {
                      $uibModalInstance.close();
                    };
                     vm.saveContact = function () {
                      $uibModalInstance.close();
                    };
                }
            });
        };


    },
    templateUrl:'./src/client/app/Examples/ExampleForm/exampleForm.html'
};

angular.module('examples').component('exampleForm', exampleForm);
