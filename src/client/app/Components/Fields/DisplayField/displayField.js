var myDisplayField = {
    bindings: {
        fieldLabel: '@',
        ngModel: '=',
        fieldLabelWitdh: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            //defaults
            vm.fieldLabelWitdh = 'col-md-4';
        };
   

    },
    templateUrl: 'src/client/app/Components/Fields/DisplayField/displayFieldTemplate.html'
};

angular.module('myComponents').component('myDisplayField', myDisplayField);
