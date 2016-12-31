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
    templateUrl: 'src/client/app/Components/Inputs/TextEditor/textEditorTemplate.html'
};


angular.module('my-angular-components').component('myTextEditor', myTextEditor);
