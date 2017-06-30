var textEditorExample = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.sampleText = "+ item      - subitem" +
            "The HTML has a superfluous newline before this" +
            "paragraph." +
            "- subitem";
    },
    template:'<my-rich-text-editor ng-model="vm.sampleText"></my-rich-text-editor><div markdown="{{vm.sampleText}}"></div>'
};

angular.module('examples').component('textEditorExample', textEditorExample);
