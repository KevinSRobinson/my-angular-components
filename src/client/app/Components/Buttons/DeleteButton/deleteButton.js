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

        vm.$onInit = function () {
            //default options
            vm.id = 'delete';
            vm.buttonText = 'Delete';
            vm.icon = 'cross';
        };
    },
    templateUrl: 'src/client/app/Components/Buttons/DeleteButton/deleteButton.js'

};


angular.module('myComponents').component('myDeleteButton', myDeleteButton);



