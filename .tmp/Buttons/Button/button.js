var myButton1 = {
    bindings: {
        id: '@',
        text: '@',
        click: '&',
        theme: '@',
        preset: '@',
        size: '@'
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        var vm = this;

        vm.$onInit = function () {
            //default options
            vm.id = '';
            vm.text = '';
            vm.icon = '';
            vm.size = '';
            vm.theme = 'btn btn-success';
        };

        vm.getClass = function () {
            var cssClass = 'btn ';

            if (vm.preset !== '' & vm.text === '') {
                switch (vm.preset) {
                    case 'Create':
                        cssClass += ' btn-success ';
                        break;
                    case 'Delete':
                        cssClass += ' btn-danger '
                        break;
                    case 'Edit':
                        cssClass += ' btn-primary '
                        break;
                    default:
                        cssClass += ' btn-success '
                        break;
                }
            }
            else{
                 cssClass += ' btn-success '
            }


            return cssClass;
        }


        vm.getSizeClass = function () {
            var cssClass = 'btn ';

            if (vm.size !== '') {
                switch (vm.size) {
                    case 'Small':
                        cssClass += ' btn-sm ';
                    case 'Large':
                        cssClass += ' btn-lg ';

                }
            }

            return cssClass;
        }

        vm.getText = function () {

            if (vm.preset !== '' & vm.text === '') {
                switch (vm.preset) {
                    case 'Create':
                        return ' Create ';
                    case 'Delete':
                        return ' Delete '
                    case 'Edit':
                        return ' Edit '
                    default:
                        ''
                }
            } else {
                return vm.text;
            }
        };

        vm.getIcon = function () {

            if (vm.preset !== '' & vm.icon === '') {
                switch (vm.preset) {
                    case 'Create':
                        return ' fa fa-plus ';
                    case 'Delete':
                        return ' fa fa-times '
                    case 'Edit':
                        return ' fa fa-bars '
                    default:
                        ''
                }
            } else {
                return 'fa fa-' + vm.icon + ' ';
            }
        };

        vm.getId = function () {
            if (vm.isError === 'true')
                return "errorMessage";
            else
                return "successMessage";
        };




    },
    template : 'buttonTemplate.html'
};

angular.module('my-angular-components').component('myButton', myButton1);
