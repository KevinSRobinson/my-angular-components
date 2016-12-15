var myFilterTextbox = {
  bindings: {
    placeholder: '@',
    ngModel: '=',
    fieldName: '@'
  },
  controllerAs: 'vm',
  controller: function () {
    'use strict';

    var vm = this;

    vm.fieldName = 'filterTextBox';
    vm.placeholder = 'Filter ';
    
  },
  templateUrl: 'app/Filters/FilterTextBox/filterTextBoxTemplate.html'
};


angular.module('myComponents').component('myFilterTextbox', myFilterTextbox);
