var modalButtons = {
    bindings: {
        save: '&',
        close: '&',
        saveText: '@',
        saveVisible: '@',
        closeVisible: '@',
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;
        
        //defaults        
        vm.saveText= 'Save';
        vm.closeText= 'Close';

        vm.saveVisible=true;
        vm.closeVisible = true;        
      },
    templateUrl: 'app/Modals/ModalButtons/modalButtonsTemplate.html'
};

angular.module('myComponents').component('modalButtons', modalButtons);
