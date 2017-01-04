var mySpinnerButton = {
    bindings: {
        buttonText:'@',
        saving: '=',
        isDisabled:'@'
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;
      
        vm.$onInit = function () {
            //default options
            // vm.id = 'spinnerButton';
            // vm.ngModel = 'Cliock';
            // vm.icon = 'fa fa-circle-o-notch';
            // vm.cssClass = 'btn btn-success';
             vm.saving = false;
             vm.isDisabled = false;
        };       
    },
    template:'<button id="{{vm.id}}" class="btn btn-success" ng-click="vm.click()" n ng-disabled="vm.isDisabled">{{vm.buttonText}}<i class="fa fa-circle-o-notch fa-spin" ng-if="vm.saving"></i></button>'
};


angular.module('my-angular-components').component('mySpinnerButton', mySpinnerButton);



