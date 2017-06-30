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
            vm.text = '';
            vm.icon = 'bars';
            vm.theme = 'btn btn-success';
        };

        // $scope.$watch('vm.theme', function () {
        //     vm.theme += ' btn btn-' + vm.theme;
        // })

        // $scope.$watch('vm.icon', function () {
        //     vm.icon += ' fa fa-' + vm.icon;
        // })
        vm.getClass = function () {
            console.log('get class')
              if (vm.theme === '')
                return 'btn btn-success ' + vm.theme;
            else
                return 'btn btn-' + vm.theme;
        };

        vm.getIcon = function () {
            return " fa fa-" + vm.icon;            
        };

        vm.getId = function () {
            if (vm.isError === 'true')
                return "errorMessage";
            else
                return "successMessage";
        };

    },
    template:'<div class="{{vm.getClass()}}" id="{{vm.id}}" ng-click="vm.click()">{{vm.text}}<i class="{{vm.getIcon()}}"></i></div>'
};

angular.module('my-angular-components').component('myButton', myButton1);
