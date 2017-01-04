var myPageTitle = {
    bindings: {
        ngModel: '@'
    },
    controllerAs: 'vm',
    controller: function () {

        vm.$onInit = function () {
            vm.ngModel = 'Set this text using ngModel';
        };
    },
    template:'<h1 id="pagetitle">{{ vm.title }}</h1>'
};

angular.module('my-angular-components').component('myPageTitle', myPageTitle);
