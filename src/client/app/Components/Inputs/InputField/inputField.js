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
        items: '='
    },
    controllerAs: 'vm',
    controller: function ($scope, cssClassService) {
        var vm = this;

        vm.cssClassService = cssClassService;



        vm.dateFormats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        vm.format = vm.dateFormats[0];
        vm.altInputFormats = ['M!/d!/yyyy'];

        $scope.$watch("vm.ngModel", function () {
            if (angular.isDefined(vm.ngModel)) {
                if (vm.inputType === 'datepopup') {
                    vm.ngModel = new Date(vm.ngModel);
                }
            };
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

            console.log(vm.inputType);
            //dates 

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
