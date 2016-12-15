/**
 * Date field component with Field Label, Date Popup, Help Popup
  */
var myDateField = {
    bindings: {
        ngModel: '=',
        fieldName: '@',
        fieldLabel: '@',
        toolTip: '@',
        showToolTip: '@'
    },
    controllerAs: 'vm',
    controller: function($log) {
        'use strict';
        var vm = this;


        vm.fieldLabel = 'Set this Text using field-label';
        

        this.$onInit = function() {
          
            
           //'initializeDate();

            // if the field name is not specified set the field name to the label text 
            if (vm.fieldName == null) {
                vm.fieldName = vm.fieldLabel.replace(' ', '');
            }

            // if the tooltip text is specified show the tooltip
            if (vm.toolTip) {
                vm.showToolTip = true;
            }

            // start with the date popup closed
            vm.popup1 = {
                opened: false
            };

        };





         vm.dateValue = new Date('2/3/2013');
               vm.locale = 'en-US';






        // open the date popup
        vm.open = function() {
            vm.popup1.opened = true;
        };



    },
    templateUrl: 'app/Dates/DateField/dateFieldTemplate.html'
};


var app = angular.module('myComponents')
    .component('myDateField', myDateField);
