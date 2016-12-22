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
    templateUrl: 'src/client/app/Components/Headers/PageHeader/pageHeaderTemplate.html'
};

angular.module('my-angular-components').component('myPageTitle', myPageTitle);
