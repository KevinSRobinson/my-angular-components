//Todo: Allow customize header size
var myModalHeader = {
    bindings: {
        id: '@',
        title: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            //defaults
            vm.title = 'Set this text using the title property';
            vm.id = 'modalHeader';
        };


    },
    templateUrl: 'src/client/app/Components/Modals/ModalHeader/modalHeaderTempalte.html'
};


var app = angular.module('myComponents').component('myModalHeader', myModalHeader);
