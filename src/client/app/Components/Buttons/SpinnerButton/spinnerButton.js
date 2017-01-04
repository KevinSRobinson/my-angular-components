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
    templateUrl: 'spinnerButtonTemplate.html'
};


angular.module('my-angular-components').component('mySpinnerButton', mySpinnerButton);



