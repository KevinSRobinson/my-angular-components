var exampleForm = {
    controllerAs: 'vm',
    controller: function (ngFabForm, $timeout) {
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
    },
    template:'<div class="col-md-6 center-block"><h1>Example Form1</h1>{{ vm.customerForm.$valid }}<my-spinner-button button-text="Submit Form" saving="vm.saving" is-disabled="!vm.customerForm.$valid" ng-click="vm.submit()"></my-spinner-button><form role="form" name="vm.customerForm" ng-submit="submit()" ng-fab-form-options="customFormOptions"><my-status-alert message="{{vm.status.message}}" ng-show="vm.status.show" is-error="{{vm.status.isError}}"></my-status-alert><my-input-field input-type="textbox" field-label="First Name" ng-model="vm.firstName" placeholder="Enter Your First name" tooltip="We need your First Name" required="vm.required"></my-input-field><my-input-field input-type="textbox" field-label="Last Name" ng-model="vm.lastName" placeholder="Enter Your Last name" , tooltip="We need your Last Name"></my-input-field><my-input-field field-label="Age" input-type="number" ng-model="vm.age" placeholder="Enter Your Age" tooltip="We need your First Name" required="vm.required"></my-input-field><my-input-field field-label="About Me" input-type="textarea" ng-model="vm.aboutMe" placeholder="Enter a description about yourself"></my-input-field><my-input-field field-label="Simulate Error" input-type="checkbox" ng-model="vm.simulateError" placeholder="Enter a description about yourself"></my-input-field></form></div>'
};

angular.module('examples').component('exampleForm', exampleForm);
