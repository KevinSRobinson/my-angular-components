var mySelectList = {
    bindings: {
        ngModel: '=',
        items: '=',
        fieldLabel: '@',
        fieldName: '@'
    },
    controllerAs: 'vm',
    controller: function() {
        var vm = this;
        
        vm.items = [];
        
        vm.fieldLabel = 'You can set this text using field-label';
        vm.fieldName = 'mySelectField';
        vm.ngModel = 'null';
        

    },
    templateUrl:'app/SelectLists/panelTemplate.html'

};


angular.module('myComponents').component('mySelectList', mySelectList);
