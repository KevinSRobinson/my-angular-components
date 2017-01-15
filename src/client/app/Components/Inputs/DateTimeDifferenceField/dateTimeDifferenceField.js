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
        vm.toDate = new Date();
        vm.showMeridian = true;

        vm.$onInit = function () {

        };


        vm.fromTimeChanged = function(){
            
        }

        vm.toTimeChanged = function(){

        }

    },
    templateUrl: 'dateTimeDifferenceFieldTemplate.html'
};


angular.module('my-angular-components').component('myDateTimeDifferenceField', myDateTimeDifferenceField);
