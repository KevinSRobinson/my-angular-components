var myButton = {
    bindings: {
        id: '@',
        icon: '@',
        text: '@',
        click: '&',
        theme: '@',
        preset: '@'
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        var vm = this;
        vm.preset = "";

        $scope.$watch("vm.icon", function () {
            vm.buttonIcon = "fa fa-" + vm.icon;

        });

        $scope.$watch("vm.cssClass", function () {
            vm.class = "btn btn-" + vm.theme;
        });

        $scope.$watch("vm.preset", function () {
            if (angular.isDefined(vm.preset) && (vm.preset != "")) {
                switch (vm.preset) {
                    case 'save':
                        vm.buttonIcon = "fa fa-floppy-o fa-2x"
                        vm.text = "Save";
                        vm.class = "btn btn-info";
                        break;
                    case 'create':
                        vm.buttonIcon = "fa fa-plus  fa-2x"
                        vm.text = "Create";
                        vm.class = "btn btn-success";
                        break;
                    case 'delete':
                        vm.buttonIcon = "fa fa-times fa-2x"
                        vm.text = "Delete";
                        vm.class = "btn btn-danger";
                    default:
                        break;
                }
            }
        });

        vm.$onInit = function () {
            //default options
            vm.id = 'button';
            vm.buttonText = 'Click Here';
            vm.icon = 'bars';
            vm.theme = 'success';
        };



    },
    template:'<div ng-class="vm.class" id="{{vm.id}}" ng-click="vm.click()"><strong>{{vm.text}}</strong><i style="margin-left:4px" ng-class="vm.buttonIcon"></i></div>'
}

angular.module('my-angular-components').component('myButton', myButton);
