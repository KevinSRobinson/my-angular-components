/**
 * Date field component with Field Label, Date Popup, Help Popup
  */
var myDateField = {
    bindings: {
        ngModel: '=',
        fieldName: '@',
        fieldLabel: '@',
        toolTip: '@',
        showToolTip: '@',
        dateOptions: '@'
    },
    controllerAs: 'vm',
    controller: function($log) {
        'use strict';
        var vm = this;
        

        vm.fieldLabel = 'Set this Text using field-label';
         // todo:tidy this

        vm.$onInit = function() {
           
               //defaults
               vm.locale = 'en-GB';               
               vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
               vm.format = vm.formats[0];
               vm.isOpened = false;
               vm.dateOptions = {
                    formatYear: 'yy',
                    maxDate: new Date(2020, 5, 22),
                    minDate: new Date(),
                    startingDay: 1
                };
        };



        // open the date popup
        vm.open = function() {
            vm.isOpened = true;
        };



    },
    templateUrl: 'src/client/app/Components/Dates/DateField/dateFieldTemplate.html'
};


var app = angular.module('myComponents')
    .component('myDateField', myDateField);
