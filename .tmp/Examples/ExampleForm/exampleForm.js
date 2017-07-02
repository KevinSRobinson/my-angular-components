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
                template:'<my-modal-header title="Term And Conditions"></my-modal-header><div class="modal-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div><my-modal-buttons save-visible="false" close="vm.close()" close-text="OK"></my-modal-buttons>',
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
    template:'<div class="col-md-8 center-block"><h1>Example Form</h1><form role="form" name="vm.customerForm" ng-submit="submit()" ng-fab-form-options="customFormOptions"><my-status-alert message="{{vm.status.message}}" ng-show="vm.status.show" is-error="{{vm.status.isError}}"></my-status-alert><my-input-field input-type="textbox" field-label="First Name" ng-model="vm.firstName" placeholder="Enter Your First name" tooltip="We need your First Name" required="vm.required"></my-input-field><my-input-field input-type="textbox" field-label="Last Name" ng-model="vm.lastName" placeholder="Enter Your Last name" , tooltip="We need your Last Name"></my-input-field><my-input-field field-label="Age" input-type="number" ng-model="vm.age" placeholder="Enter Your Age" tooltip="We need your First Name" required="vm.required"></my-input-field><my-input-field field-label="About Me" input-type="textarea" ng-model="vm.aboutMe" placeholder="Enter a description about yourself"></my-input-field><my-input-field field-label="Simulate Error" input-type="checkbox" ng-model="vm.simulateError" placeholder="Enter a description about yourself"></my-input-field><my-input-field field-label="Start Date" input-type="datepopup" ng-model="vm.sampleDate" placeholder="Enter a description about yourself"></my-input-field><my-select-field field-label="Languages" items="vm.cats" input-type="combobox" tooltip="Please Select a Language" ng-model="vm.selectedTags"></my-select-field><my-select-field field-label="Languages" items="vm.tags" tooltip="Please Select a Language" ng-model="vm.selectedTags"></my-select-field><div ng-click="vm.viewTermsAndConditions()" class="btn btn-success">View Terms and Conditions</div><my-spinner-button button-text="Submit Form" saving="vm.saving" is-disabled="!vm.customerForm.$valid" ng-click="vm.submit()"></my-spinner-button></form></div>'
};

angular.module('examples').component('exampleForm', exampleForm);
