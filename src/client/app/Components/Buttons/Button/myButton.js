var myButton = {
    bindings: {
        id: '@',
        icon: '@',
        text: '@',
        click: '&',
        theme: '@',
        preset: '@',
        size: '@'
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        var vm = this;
        vm.preset = '';
        vm.class = 'btn ';
        vm.buttonIcon = '';
        vm.preset = '';
        vm.text = '';
        vm.icon = '';
        vm.theme = '';

        $scope.$watch('vm.icon', function () {
            vm.buttonIcon = 'fa fa-' + vm.icon;
        });

        $scope.$watch('vm.size', function () {
            switch (vm.size) {
                case 'large':
                    vm.class += ' btn-large ';
                    break;
                case 'small':
                    vm.class += ' btn-small ';
                default:
                    break;
            }
        });

        var getIconSize = function () {
            switch (vm.size) {
                case 'large':
                    return "fa-3x"
                case 'small':
                    return "fa-1x"
                default:
                    return "fa-2x"
            }
        };

        $scope.$watch('vm.preset', function () {
            if (angular.isDefined(vm.preset) && (vm.preset != '')) {
                switch (vm.preset) {
                    case 'save':
                        vm.buttonIcon = 'fa fa-floppy-o ' + getIconSize();
                        vm.text = 'Save';
                        vm.class += ' btn-default ';
                        break;
                    case 'create':
                        vm.buttonIcon = 'fa fa-plus ' + getIconSize();
                        vm.text = 'Create';
                        vm.class += ' btn-success ';
                        break;
                    case 'details':
                        vm.buttonIcon = 'fa fa-info-circle ' + getIconSize();
                        vm.text = 'Details';
                        vm.class += ' btn-info ';
                        break;
                    case 'delete':
                        vm.buttonIcon = 'fa fa-times ' + getIconSize();
                        vm.text = 'Delete';
                        vm.class += ' btn-danger ';
                        break;
                    default:
                        vm.buttonIcon = ''
                        vm.class += ' btn-default ';
                        break;
                }
            }
        });

        vm.$onInit = function () {
            //default options
            vm.id = 'button';
            vm.text = '';
        };



    },
    templateUrl: 'myButtonTemplate.html'
}

angular.module('my-angular-components').component('myButton', myButton);
