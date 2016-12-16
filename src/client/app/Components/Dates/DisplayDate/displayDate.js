var myDisplayDateField = {
    bindings: {
        fieldLabel: '@',
        ngModel: '=',
        fieldName: '@'
    },
    controllerAs:'vm',
    controller: function () {
        'use strict';
         var vm = this;

        vm.$onInit = function() {
            //defaults
        };
        
    },
   templateUrl: 'src/client/app/Components/Dates/DisplayDate/displayDateTemplate.html'
};

angular.module('myComponents').component('myDisplayDateField', myDisplayDateField);