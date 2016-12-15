var myTextareaField = {
    bindings: {
        fieldLabel: '@',
        fieldName: '@',
        ngModel: '=',
        required: '@',
        toolTip: '@',
        showToolTip: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
        vm.fieldLabel = 'Change the with the field-label property';
       
        //defautlts
        vm.showToolTip = false;
        vm.required = false;

        //Set the field name using the fieldLabel
        if (vm.fieldName === null) {
            vm.fieldName = vm.fieldLabel.replace(' ', '');
        }

    },
   templateUrl: 'src/client/app/Components/Fields/TextArea/textAreaFieldTemplate.html'
};


angular.module('myComponents').component('myTextareaField', myTextareaField);
