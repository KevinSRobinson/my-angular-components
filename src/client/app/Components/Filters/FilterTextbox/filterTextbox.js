var myFilterTextbox = {
    bindings: {
        placeholder: '@',
        ngModel: '=',
        fieldName: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            vm.fieldName = 'filterTextBox';
            vm.placeholder = 'Filter';
        };


    },
    templateUrl: 'src/client/app/Components/Filters/FilterTextbox/filterTextbox.js'
};


angular.module('myComponents').component('myFilterTextbox', myFilterTextbox);
