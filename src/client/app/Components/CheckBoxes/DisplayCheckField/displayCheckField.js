var myDisplayCheckField = {
    bindings: {
        fieldLabel: '@',
        ngModel: '='
    },
    templateUrl: 'app/CheckBoxes/DisplayCheckField/displayCheckField.js' 
};
angular.module('myComponents').component('myDisplayCheckField', myDisplayCheckField);