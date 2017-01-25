var myPageTitle = {
    bindings: {
        title: '@',
        icon: "@"
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
        
        vm.$onInit = function () {
            vm.title = 'Set this text using title';
        };
    },
    template:'<h1 id="pageTitle"><i class="fa fa-{{vm.title}}" {{ vm.title }}< H1></i></h1>'
};

angular.module('my-angular-components').component('myPageTitle', myPageTitle);
