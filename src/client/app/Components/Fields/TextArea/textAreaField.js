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
        

        vm.$onInit = function () {
            
            //defaults
            vm.showToolTip = false;
            vm.required = false;
            vm.fieldLabel = 'Change the with the field-label property';
            vm.fieldName = vm.fieldLabel.replace(' ', '');           
        };

    },
    templateUrl: 'src/client/app/Components/Fields/TextArea/textAreaFieldTemplate.html'
};


angular.module('myComponents').component('myTextareaField', myTextareaField);
