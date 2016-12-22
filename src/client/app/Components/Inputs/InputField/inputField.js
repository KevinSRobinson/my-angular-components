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
        inputType: '@',
        placeholder: '@'
    },
    controllerAs: 'vm',
    controller: function (cssClassService) {
        var vm = this;

        vm.cssClassService = cssClassService;


        vm.$onInit = function () {

            //defaults

            vm.inputType = 'textbox';

            vm.required = false;
            vm.horizontal = false;
            vm.labelWidth = 3;
            vm.inputWidth = 9;
            vm.readOnly = false;
            vm.horizontal = false;
            vm.tooltip = "";
            vm.placeholder = "";
            vm.helpText = "";

            //defaults
            vm.fieldLabel = "Date";
            vm.locale = 'en-GB';
            vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            vm.format = vm.formats[0];
            vm.isOpened = false;
            vm.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };
        };

        // open the date popup
        vm.open = function () {
            vm.isOpened = true;
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



angular.module('my-angular-components').directive('contentItem', contentItem);
angular.module('my-angular-components').component('myInputField', myInputField);
