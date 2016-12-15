var myDeleteButton = {
    bindings: {
        id: '@',
        buttonText: '@',
        click: '&',
          cssClass:'@'
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

        //default options
        vm.id = 'delete';
        vm.buttonText = 'Delete';
        vm.icon = 'cross';

    },
    templateUrl: 'app/Buttons/DeleteButton/deleteButtonTemplate.html'

};


angular.module('myComponents').component('myDeleteButton', myDeleteButton);



