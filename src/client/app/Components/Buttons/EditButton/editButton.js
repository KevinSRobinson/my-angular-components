var myEditButton = {
    bindings: {
        click: '&',
        id: '@',
        cssClass:'@'        
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            //default options
            vm.id = 'delete';
            vm.buttonText = 'Delete';
            vm.icon = 'bars';
        };
    },
    template: 'src/client/app/Components/Buttons/EditButton/editButtonTemplate.html'
};

angular.module('my-angular-components').component('myEditButton', myEditButton);
