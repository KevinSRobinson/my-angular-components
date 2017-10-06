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
    template:'<div class="input-group" style="display: flex"><input type="text" ng-model="vm.ngModel" placeholder="{{vm.placeholder}}" id="{{vm.fieldName}}" class="form-control"> <button class="btn btn-default" id="searchFilter"><i class="glyphicon glyphicon-search"></i></button></div>'
};


angular.module('my-angular-components').component('myFilterTextbox', myFilterTextbox);
