var myModalButtons = {
    bindings: {
        save: '&',
        close: '&',
        saveText: '@',
        saveVisible: '@',
        closeVisible: '@',
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            //defaults        
            vm.saveText = 'Save';
            vm.closeText = 'Close';

            vm.saveVisible = true;
            vm.closeVisible = true;
        };

    },
    templateUrl: 'modalButtonsTempalte.html'
};

angular.module('my-angular-components').component('myModalButtons', myModalButtons);
