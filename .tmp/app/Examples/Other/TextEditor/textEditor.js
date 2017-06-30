var myTextEditor = {
    bindings: {
        ngModel: '=',
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.options = {
            useWrapMode: true,
            showGutter: false,
            mode: 'markdown',
            firstLineNumber: 5,
        };
    },
    template:'<div ui-ace="vm.options" ng-model="vm.ngModel"></div>'
};


angular.module('my-angular-components').component('myTextEditor', myTextEditor);
