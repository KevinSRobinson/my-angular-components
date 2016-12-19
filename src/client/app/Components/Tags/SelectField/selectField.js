var mySelectField = {
    bindings: {
        fieldLabel: '@',
        fieldName: '@',
        labelWidth: '@',
        SelectWidth: "@",
        ngModel: '=',
        required: '@',
        toolTip: '@',
        helpText: '@',
        readOnly: '@',
        horizontal: '@',
        items: '=',
        inputType: '@',
        selected: '=',
        size:"@",
        multiSelect:"@"
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        var vm = this;

        if (angular.isUndefined(vm.horizontal)) {
            vm.horizontal = true;
        }

        $scope.$watch("vm.horizontal", function () {
            vm.setlabelClass();
            vm.setInputClass();
        });

        $scope.$watch("vm.readOnly", function () {
            vm.setlabelClass();


        });


        vm.$onInit = function () {

            //defaults
            vm.showToolTip = false;
            vm.showHelpText = false;
            vm.required = false;
            vm.displayOnly = false;
            vm.horizontal = false;
            vm.labelWidth = 3;
            vm.SelectWidth = 9;
            vm.labelClass = "";
            vm.SelectClass = "";
            vm.readOnly = false;
            vm.inputClass = "";
            vm.horizontal = false;
            vm.setlabelClass();
            vm.setInputClass();
            vm.selected = null;
            vm.multiSelect = false;
        };



        vm.setlabelClass = function () {
            if (Boolean(vm.horizontal)) {
                vm.labelClass = "control-label col-sm-2";
            } else {
                vm.labelClass = "";
            }

        };

        vm.setInputClass = function () {
            console.log('setInputClass');
            console.log(vm.horizontal);
            if (Boolean(vm.horizontal)) {
                console.log("2");
                vm.inputClass = "col-sm-10";
            } else {
                vm.inputClass = "";
            }
        };



    },
    templateUrl: 'src/client/app/Components/Tags/SelectField/selectFieldTemplate.html'
};

angular.module('myComponents').component('mySelectField', mySelectField);
