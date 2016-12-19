var myInputField = {
    bindings: {
        fieldLabel: '@',
        fieldName: '@',
        labelWidth: '@',
        inputWidth: "@",
        ngModel: '=',
        required: '@',
        tooltip: '@',
        helpText: '@',
        readOnly: '@',
        horizontal: '@',
        inputType: '@'
    },
    controllerAs: 'vm',
    controller: function (cssClassService) {
        var vm = this;

        vm.cssClassService= cssClassService;


        vm.$onInit = function () {

            //defaults
            vm.showToolTip = false;
            vm.showHelpText = false;
            vm.required = false;
            vm.horizontal = false;
            vm.labelWidth = 2;
            vm.inputWidth = 10;
            vm.labelClass = "";
            vm.inputClass = "";
            vm.readOnly = false;
            vm.inputType = 'textbox';
            vm.horizontal = false;
            vm.tooltip = "";
        };


       

    },
    templateUrl: 'src/client/app/Components/Inputs/InputField/inputFieldTemplate.html'
};


var contentItem = function ($compile, templateService, $http) {
    var getTemplate = function (templates, contentType) {
        var template = '';

        switch (contentType) {
            case 'image':
                template = templates.imageTemplate;
                break;
            case 'video':
                template = templates.videoTemplate;
                break;
            case 'notes':
                template = templates.noteTemplate;
                break;
        }

        return template;
    };

    var linker = function (scope, element, attrs) {
        scope.rootDirectory = 'images/';

        var getTemplates = $http.get('src/client/app/Components/templates.json');
        getTemplates.then(function (response) {
            var templates = response.data;
            console.log(response);
            element.html(getTemplate(templates, scope.content.content_type));

            $compile(element.contents())(scope);
        });
    };

    return {
        restrict: 'E',
        link: linker,
        scope: {
            content: '='
        }
    };
};



angular.module('myComponents').directive('contentItem', contentItem);
angular.module('myComponents').component('myInputField', myInputField);
