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

        if (vm.toolTip) {
            vm.showToolTip = true;
        }

        if (vm.fieldName == null) {
            vm.fieldName = vm.fieldLabel.replace(' ', '');
        }

        if (vm.required == null) {
            vm.required = false;
        }
    },
   templateUrl: 'app/Fields/TextArea/textAreaFieldTemplate.html'
};


angular.module('myComponents').component('myTextareaField', myTextareaField);
