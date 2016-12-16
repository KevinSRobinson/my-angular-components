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

angular.module('myComponents').component('myPageTitle', myPageTitle);
