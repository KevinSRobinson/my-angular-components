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
    templateUrl: 'pageHeaderTemplate.html'
};

angular.module('my-angular-components').component('myPageTitle', myPageTitle);
