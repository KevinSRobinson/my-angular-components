var myButton1 = {
    bindings: {
        id: '@',
        text: '@',
        click: '&',
        theme: '@'
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        var vm = this;

        vm.$onInit = function () {
            //default options
            vm.id = 'create';
            vm.buttonText = '';
            vm.icon = 'bars';
            vm.theme = 'success';
        };

        $scope.watch('vm.theme', function () {
            vm._theme += 'btn btn-' + vm.theme;
        })

        $scope.watch('vm.icon', function () {
            vm._icon += 'fa fa-' + vm.icon;
        })

    },
    templateUrl: 'buttonTemplate.html'
};

angular.module('my-angular-components').component('myButton1', myButton1);
