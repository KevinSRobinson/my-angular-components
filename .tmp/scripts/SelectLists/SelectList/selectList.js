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
    template:'<div class="form-group"><label class="control-label" style="min-width: 110px; text-align: left">{{vm.fieldLabel}}</label><select ng-model="vm.ngModel" class="form-control" id="{{vm.fieldName}}"><option ng-repeat="option in vm.items" value="{{option.Id}}">{{option.Id}}</option></select></div>'

};


angular.module('my-angular-components').component('mySelectList', mySelectList);
