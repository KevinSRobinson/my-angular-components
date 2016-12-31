var textEditorExample = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.sampleText = "+ item      - subitem" +
            "The HTML has a superfluous newline before this" +
            "paragraph." +
            "- subitem";
    },
    templateUrl: "src/client/app/Examples/TextEditor/textEditorExampleTemplate.html"
};

angular.module('examples').component('textEditorExample', textEditorExample);
