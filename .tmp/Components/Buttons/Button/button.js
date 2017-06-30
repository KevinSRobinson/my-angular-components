var myButton1 = {
    bindings: {
        id: '@',
        text: '@',
        buttonclick: '&',
        theme: '@'
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        var vm = this;

        vm.$onInit = function () {
            //default options
            vm.id = 'create';
            vm.text = '';
            vm.icon = 'bars';
            vm.theme = 'success';
        };

        $scope.$watch('vm.theme', function () {
            vm.theme += ' btn btn-' + vm.theme;
        })

        $scope.$watch('vm.icon', function () {
            vm.icon += ' fa fa-' + vm.icon;
        })

    },
    template:'<div class="{{vm.theme}}" id="{{vm.id}}" ng-click="vm.buttonclick()">{{vm.text}}<i class="{{vm.icon}}"></i></div>'
};

angular.module('my-angular-components').component('myButton', myButton1);
