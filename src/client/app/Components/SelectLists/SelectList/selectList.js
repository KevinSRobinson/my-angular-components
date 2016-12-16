var mySelectList = {
    bindings: {
        ngModel: '=',
        items: '=',
        fieldLabel: '@',
        fieldName: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            vm.items = [];
            vm.fieldLabel = 'You can set this text using field-label';
            vm.fieldName = 'mySelectField';
            vm.ngModel = 'null';
        };

    },
    templateUrl: 'src/client/app/Components/SelectLists/SelectList/selectListTemplate.html'

};


angular.module('myComponents').component('mySelectList', mySelectList);
