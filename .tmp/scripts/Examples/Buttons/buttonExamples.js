var buttonExamples = {
       controllerAs: 'vm',
    controller: function () {
        var vm = this;

    
    },
    template:'<my-page-title icon="users">Buttons</my-page-title><my-button1 text="Click Here!" icon="check"></my-button1>'
};

angular.module('examples').component('buttonExamples', buttonExamples);

