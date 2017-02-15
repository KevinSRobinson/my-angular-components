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
    template:'<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 100% !important;\r\n    }\r\n    \r\n    .input-group .form-control {\r\n        z-index: 100;\r\n    }\r\n\r\n\r\n\r\n    .checkbox label:after, \r\n.radio label:after {\r\n    content: \'\';\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\n.checkbox .cr,\r\n.radio .cr {\r\n    position: relative;\r\n    display: inline-block;\r\n    border: 1px solid #a9a9a9;\r\n    border-radius: .25em;\r\n    width: 1.3em;\r\n    height: 1.3em;\r\n    float: left;\r\n    margin-right: .5em;\r\n}\r\n\r\n.radio .cr {\r\n    border-radius: 50%;\r\n}\r\n\r\n.checkbox .cr .cr-icon,\r\n.radio .cr .cr-icon {\r\n    position: absolute;\r\n    font-size: .8em;\r\n    line-height: 0;\r\n    top: 50%;\r\n    left: 20%;\r\n}\r\n\r\n.radio .cr .cr-icon {\r\n    margin-left: 0.04em;\r\n}\r\n\r\n.checkbox label input[type="checkbox"],\r\n.radio label input[type="radio"] {\r\n    display: none;\r\n}\r\n\r\n.checkbox label input[type="checkbox"] + .cr > .cr-icon,\r\n.radio label input[type="radio"] + .cr > .cr-icon {\r\n    transform: scale(3) rotateZ(-20deg);\r\n    opacity: 0;\r\n    transition: all .3s ease-in;\r\n}\r\n\r\n.checkbox label input[type="checkbox"]:checked + .cr > .cr-icon,\r\n.radio label input[type="radio"]:checked + .cr > .cr-icon {\r\n    transform: scale(1) rotateZ(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n.checkbox label input[type="checkbox"]:disabled + .cr,\r\n.radio label input[type="radio"]:disabled + .cr {\r\n    opacity: .5;\r\n}\r\n</style><div class="form-group"><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for="vm.fieldName">{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if="!vm.readOnly" class="input-group"><input ng-if="vm.inputType===\'textbox\'" ng-model="vm.ngModel" type="text" class="form-control" id="{{vm.fieldName}}" placeholder="{{vm.placeholder}}" required><input ng-if="vm.inputType===\'number\'" ng-model="vm.ngModel" type="number" class="form-control" id="{{vm.fieldName}}" required><input ng-if="vm.inputType===\'email\'" type="email" class="form-control" id="vm.fieldName" placeholder="{{vm.placeholder}}"><textarea ng-if="vm.inputType===\'textarea\'" class="form-control" id="vm.fieldName" ng-model="vm.ngModel" placeholder="{{vm.placeholder}}"></textarea><checkbox large class="btn-default" indeterminate="{{vm.hasIntermediateState}}" ng-indeterminate-value="{{vm.intermediateValue}}" ng-if="vm.inputType===\'checkbox\'" ng-model="vm.ngModel"></checkbox><select ng-if="vm.inputType===\'select\'" class="form-control" ng-model="vm.ngModel" ng-options="item for item in vm.items"></select><input ng-if="vm.inputType===\'time\'" uib-timepicker ng-model="vm.ngModel" id="vm.fieldName" ng-change="vm.changed()" hour-step="vm.hourStep" minute-step="vm.minStep" show-meridian="vm.showMeridian"><span ng-if="vm.inputType===\'datepopup\'"><input type="text" class="form-control" uib-datepicker-popup="{{vm.format}}" ng-model="vm.ngModel" is-open="vm.isOpened" style="width: 82%" ng-required="true" close-text="Close"> <span class="btn btn-default glyphicon glyphicon-calendar" ng-click="vm.open()"></span></span> <span ng-show="vm.tooltip!==\'\'" class="input-group-addon" uib-popover="{{vm.tooltip}}" popover-title="Info" popover-class="popover" popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show="vm.readOnly"><p ng-if="vm.inputType!==\'checkbox\'">{{vm.ngModel}}</p><i ng-if="vm.inputType===\'checkbox\'" ng-show="vm.ngModel" class="fa fa-check fa-2x"></i></div><p class="help-block">{{vm.helpText}}</p></div></div>'
};

myInputField.$inject = ['$scope', 'cssClassService'];

angular.module('my-angular-components').component('myInputField', myInputField);
