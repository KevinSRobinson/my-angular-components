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
    template:'<my-input-field input-type="time" field-label="From" ng-model="vm.fromDate" ng-change="vm.fromTimeChanged()" hour-step="vm.hourStep" minute-step="vm.minStep" show-meridian="vm.showMeridian"></my-input-field><my-input-field input-type="time" field-label="To" ng-model="vm.toDate" ng-change="vm.toTimeChanged()" hour-step="vm.hourStep" " minute-step="vm.minStep" show-meridian="vm.showMeridian"></my-input-field>'
};


angular.module('my-angular-components').component('myDateTimeDifferenceField', myDateTimeDifferenceField);
