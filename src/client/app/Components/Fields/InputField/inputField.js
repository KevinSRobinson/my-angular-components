var myInputField = {
    bindings: {
        fieldLabel: '@',
        fieldName: '@',
        labelWidth: '@',
        inputWidth: "@",
        ngModel: '=',        
        required: '@',
        toolTip: '@',
        helpText: '@',
        readOnly: '@',
        horizontal : '@',
        inputType :'@'
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        var vm = this;
        
        if (angular.isUndefined(vm.horizontal)){
            vm.horizontal = true;
        }
            
        $scope.$watch("vm.horizontal", function(){
           vm.setlabelClass ();
           
        });

        $scope.$watch("vm.readOnly", function(){
           vm.setlabelClass ();

           
        });


        vm.$onInit = function () {

            //defaults
            vm.showToolTip = false;
            vm.showHelpText = false;
            vm.required = false;
            vm.displayOnly = false;
             vm.horizontal = false;
             vm.labelWidth = 3;
             vm.inputWidth = 9;
             vm.labelClass = "";
             vm.inputClass = "";
             vm.readOnly = false;
             vm.inputType ='textbox';
                vm.horizontal = false;
              vm.setlabelClass();
            vm.setInputClass();
        };



        vm.setlabelClass = function(){
               console.log('setlabelClass');
            console.log(vm.horizontal);

            if(vm.horizontal === "true"){
               vm.labelClass = "control-label col-sm-2";              
            }
            else{
                vm.labelClass =  "";
            }
            
        };
        
        vm.setInputClass = function(){
             if(vm.horizontal){
               vm.inputClass = "col-sm-10";
            }
            else{
                vm.inputClass =  "";
            }
        };

        vm.getOrientation = function(){
            if(vm.horizontal){
                return "form-horizontal";
            }
            else{
                return "";
            }
        };

    },
    templateUrl: 'src/client/app/Components/Fields/InputField/InputFieldTemplate.html'
};


var contentItem =  function ($compile, templateService, $http) {
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

        var getTemplates  = $http.get('src/client/app/Components/templates.json');
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
