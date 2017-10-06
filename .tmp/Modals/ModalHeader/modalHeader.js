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
    template:'<div class="modal-header" id="vm.id"><h3 class="modal-title">{{vm.title}}</h3></div>'
};


var app = angular.module('my-angular-components').component('myModalHeader', myModalHeader);
