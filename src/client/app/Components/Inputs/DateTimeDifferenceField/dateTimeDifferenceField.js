/**
 * Date field component with Field Label, Date Popup, Help Popup
 */
var myDateTimeDifferenceField = {
    bindings: {
        ngModel: '=',
        fieldName: '@',
        fieldLabel: '@',
        tooltip: '@',
        dateOptions: '@',
        helpText: '@',
        readOnly: '@',
        horizontal: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';
        var vm = this;
        vm.hourStep = 1;
        vm.minStep = 15;
        vm.fromDate = new Date();
        vm.showMeridian = true;

        vm.$onInit = function () {

        };

    },
    templateUrl: 'dateTimeDifferenceFieldTemplate.html'
};

myDateTimeDifferenceField.$inject = ['cssClassService'];

angular.module('my-angular-components').component('myDateTimeDifferenceField', myDateTimeDifferenceField);
