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
        dateOptions: '@',
        helpText: '@',
        readOnly: '@',
        horizontal: '@'
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        'use strict';
        var vm = this;

  $scope.$watch("vm.horizontal", function(){
           vm.setlabelClass ();
           
        });

        $scope.$watch("vm.readOnly", function(){
           vm.setlabelClass ();

           
        });

        vm.$onInit = function () {

            //defaults
            vm.fieldLabel = "Date";
            vm.locale = 'en-GB';
            vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            vm.format = vm.formats[0];
            vm.isOpened = false;
            vm.readOnly = false;
            vm.horizontal = false;
            vm.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };
        };



        // open the date popup
        vm.open = function () {
            vm.isOpened = true;
        };

        vm.setlabelClass = function () {
            console.log('setlabelClass');
            console.log(vm.horizontal);

            if (vm.horizontal === "true") {
                vm.labelClass = "control-label col-sm-2";
            } else {
                vm.labelClass = "";
            }

        };

        vm.setInputClass = function () {
            if (vm.horizontal) {
                vm.inputClass = "col-sm-10";
            } else {
                vm.inputClass = "";
            }
        };

        vm.getOrientation = function () {
            if (vm.horizontal) {
                return "form-horizontal";
            } else {
                return "";
            }
        };


    },
    templateUrl: 'src/client/app/Components/Inputs/DatesField/DateField/dateFieldTemplate.html'
};


var app = angular.module('myComponents')
    .component('myDateField', myDateField);
