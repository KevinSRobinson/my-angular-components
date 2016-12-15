var myEditButton = {
    bindings: {
        click: '&',
        id: '@',
         cssClass:'@'
        
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

         //default options
        vm.id = 'delete';
        vm.buttonText = 'Delete';
        vm.icon = 'bars';
    
    },
    template: 'editButtonTemplate.html'
};

angular.module('myComponents').component('myEditButton', myEditButton);
