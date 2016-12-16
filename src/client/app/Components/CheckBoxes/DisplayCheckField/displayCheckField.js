var myDisplayCheckField = {
    bindings: {
        fieldLabel: '@',
        ngModel: '='
    },
    controllerAs: 'vm',
    controller: function(){

        // todo:tidy this
        vm.$onInit = function () {


            //default options
            vm.checked = false;
        };
    },
    templateUrl: 'app/CheckBoxes/DisplayCheckField/displayCheckField.js' 
};
angular.module('myComponents').component('myDisplayCheckField', myDisplayCheckField);