var inputs = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.startDate = new Date();
        vm.firstName = "Kevin";
        vm.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e";
       
        vm.agree = true;
    },
    template:'<div class="col-md-8 center-block"><h1>Textbox</h1><div class="well"><h4>Text Box With Placeholder</h4><my-input-field field-label="First Name" placeholder="Enter Your First name" ng-model="vm.firstName"></my-input-field></div><div class="well"><h4>Textbox With ToolTip</h4><my-input-field field-label="First Name" ng-model="vm.firstName" tooltip="Please Enter your fristname"></my-input-field></div><div class="well"><h4>Textbox Horizontal</h4><my-input-field field-label="First Name" horizontal="true" ng-model="vm.firstName" tooltip="Please Enter your fristname"></my-input-field><br></div><div class="well"><h4>Textbox Read-only</h4><my-input-field field-label="First Name" read-only="true" horizontal="true" ng-model="vm.firstName" tooltip="Please Enter your fristname"></my-input-field><br></div><h1>Textarea</h1><div class="well"><h4>TextArea</h4><my-input-field field-label="Description" input-type="textarea" ng-model="vm.description" tooltip="Please Enter a description"></my-input-field><br></div><div class="well"><h4>TextArea Read-only</h4><my-input-field field-label="Description" input-type="textarea" read-only="true" ng-model="vm.description" tooltip="Please Enter a description"></my-input-field><br></div><h1>Dates</h1><div class="well"><h4>Date Field</h4><my-input-field field-label="Register Date" input-type="datepopup" ng-model="vm.startDate"></my-input-field><br></div><div class="well"><h4>Date Field Read-only</h4><my-input-field field-label="Register Date" input-type="datepopup" read-only="true" ng-model="vm.startDate" tooltip="Please Select a date"></my-input-field><br></div><h1>Checkboxes</h1><div class="well"><h4>Checkbox</h4><my-input-field field-label="I Agree" input-type="checkbox" ng-model="vm.agree"></my-input-field><br></div><div class="well"><h4>Checkbox Read-only</h4><my-input-field field-label="I Agree" input-type="checkbox" read-only="true" ng-model="vm.agree" tooltip="Please Enter a description"></my-input-field><br></div><h1>Number Input</h1><div class="well"><h4>Number</h4><my-input-field field-label="I Agree" input-type="number" ng-model="vm.hours"></my-input-field><br></div></div>'
};

angular.module('examples').component('inputExamples', inputs);
