var myInputField = {
    bindings: {

        // timePicker
        hourStep: '@',
        minStep: '@',
        showMeridian: '@',

        // common
        ngModel: '=',
        inputType: '@',
        readOnly: '@',
        horizontal: '@',
        placeholder: '@',
        required: '@',
        tooltip: '@',
        helpText: '@',
        fieldLabel: '@',
        fieldName: '@',
        labelWidth: '@',
        inputWidth: "@",

        //select
        items: '=',

        //checkbox
        hasIntermediateState: "@",
        intermediateValue: "@",
    },
    controllerAs: 'vm',
    controller: function ($scope, cssClassService) {
        var vm = this;

        vm.cssClassService = cssClassService;


        //Clean these or expose this as an option
        vm.dateFormats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        vm.format = vm.dateFormats[0];
        vm.altInputFormats = ['M!/d!/yyyy'];


        //checkbox
        vm.hasIntermediateState = false;
        vm.intermediateValue = null;


        //Listen for chanes to ngModel 
        
        vm.unbind = $scope.$watch("vm.ngModel", function () {
            if (angular.isDefined(vm.ngModel)) {
                if (vm.inputType === 'datepopup') {
                    //convert to Date
                    //this helps when binding javascript dates
                    vm.ngModel = new Date(vm.ngModel);

                    //remove watch
                    vm.unbind();
                }
            }
        })

        vm.$onInit = function () {

            //defaults
            if (!angular.isDefined(vm.fieldName)) {
                vm.fieldName = vm.fieldLabel.replace(" ", "").toLowerCase();
            }

            if (angular.isUndefined(vm.inputType)) {
                vm.inputType = 'textbox';
            }


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
        };

        // open the date popup
        vm.open = function () {
            vm.isOpened = true;
        };


    },
    templateUrl: 'inputFieldTemplate.html'
};

myInputField.$inject = ['$scope', 'cssClassService'];

angular.module('my-angular-components').component('myInputField', myInputField);
