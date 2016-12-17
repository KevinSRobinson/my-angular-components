var myTextField = {
    bindings: {
        fieldLabel: '@',
        fieldName: '@',
        ngModel: '=',
        required: '@',
        toolTip: '@',
        helpText: '@',
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;


        vm.$onInit = function () {

            //defaults
            vm.showToolTip = false;
            vm.showHelpText = false;
            vm.required = false;
        };

    },
    templateUrl: 'src/client/app/Components/Fields/TextField/textFieldTemplate.html'
};


angular.module('myComponents').component('myTextField', myTextField);
