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
       
        
    },
   templateUrl: 'app/Dates/DisplayDate/displayDateTemplate.html'
};

angular.module('myComponents').component('myDisplayDateField', myDisplayDateField);