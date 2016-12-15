//Todo: Allow customize header size
var myModalHeader = {
    bindings: {
        id: '@',
        title: '@'
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

        //defaults
        vm.title = 'Title not set';
        vm.id = 'modalHeader';


    },
    templateUrl: 'app/Modals/ModalHeader/modalHeaderTemplate.html'
};


var app = angular.module('myComponents').component('myModalHeader', myModalHeader);
