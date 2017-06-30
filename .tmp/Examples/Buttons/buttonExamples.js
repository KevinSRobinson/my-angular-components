var buttonExamples = {
       controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.doSomething = function() {
            alert('You Clicked me!');
        }   

    },
    template:'<my-page-title icon="users">Buttons</my-page-title><my-button text="Click Here!" icon="check" click="vm.doSomething()"></my-button>'
};

angular.module('examples').component('buttonExamples', buttonExamples);

