var textEditorExample = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
        //   vm.sampleText = ';; Scheme code in here.\n' +
        //       '(define (double x)\n\t(* x x))\n\n\n' +
        //       '<!-- XML code in here. -->\n' +
        //       '<root>\n\t<foo>\n\t</foo>\n\t<bar/>\n</root>\n\n\n' +
        //       '// Javascript code in here.\n' +
        //       'function foo(msg) {\n\tvar r = Math.random();\n\treturn "" + r + " : " + msg;\n}';
        vm.sampleText = '# Heading 1\n';
        vm.sampleText += ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus sagittis arcu vel ultricies. \n\n';

        vm.sampleText += '## Heading 2\n';
        vm.sampleText += ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus sagittis arcu vel ultricies. \n\n';

        vm.sampleText += '### Heading 3\n';
        vm.sampleText += ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus sagittis arcu vel ultricies. \n\n';

    },
    templateUrl: './src/client/app/Examples/TextEditor/textEditorExampleTemplate.html'
};

angular.module('examples').component('textEditorExample', textEditorExample);
