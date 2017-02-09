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
    controller: function (cssClassService) {
        var vm = this;

        vm.cssClassService = cssClassService;



        vm.dateFormats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        vm.format = vm.dateFormats[0];
        vm.altInputFormats = ['M!/d!/yyyy'];


        vm.$onInit = function () {

            //defaults
            if(!angular.isDefined(vm.fieldName)){
               vm.fieldName = vm.fieldLabel.replace(" ", "").toLowerCase();           
            }
            
            if(angular.isUndefined(vm.inputType)){
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
            if(vm.inputType === 'datepopup'){
                console.log("This  is a date");

                vm.ngModelDate = new Date(vm.ngModel);
            }
        };

        // open the date popup
        vm.open = function () {
            vm.isOpened = true;
        };


    },
    template:'<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 100% !important;\r\n    }\r\n    \r\n    .input-group .form-control {\r\n        z-index: 100;\r\n    }\r\n</style><div class="form-group"><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for="vm.fieldName">{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if="!vm.readOnly" class="input-group"><input ng-if="vm.inputType===\'textbox\'" ng-model="vm.ngModel" type="text" class="form-control" id="{{vm.fieldName}}" placeholder="{{vm.placeholder}}" required><input ng-if="vm.inputType===\'number\'" ng-model="vm.ngModel" type="number" class="form-control" id="{{vm.fieldName}}" required><input ng-if="vm.inputType===\'email\'" type="email" class="form-control" id="vm.fieldName" placeholder="{{vm.placeholder}}"><textarea ng-if="vm.inputType===\'textarea\'" class="form-control" id="vm.fieldName" ng-model="vm.ngModel" placeholder="{{vm.placeholder}}"></textarea><input ng-if="vm.inputType===\'checkbox\'" type="checkbox" id="vm.fieldName" ng-model="vm.ngModel"><select ng-if="vm.inputType===\'select\'" ng-model="vm.ngModel" ng-options="item for item in vm.items"></select><input ng-if="vm.inputType===\'time\'" uib-timepicker ng-model="vm.ngModel" id="vm.fieldName" ng-change="vm.changed()" hour-step="vm.hourStep" minute-step="vm.minStep" show-meridian="vm.showMeridian"><span ng-if="vm.inputType===\'datepopup\'"><input type="text" class="form-control" uib-datepicker-popup="{{vm.format}}" ng-model="vm.ngModelDate" is-open="vm.isOpened" style="width: 82%" ng-required="true" close-text="Close"> <span class="btn btn-default glyphicon glyphicon-calendar" ng-click="vm.open()"></span></span> <span ng-show="vm.tooltip!==\'\'" class="input-group-addon" uib-popover="{{vm.tooltip}}" popover-title="Info" popover-class="popover" popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show="vm.readOnly"><p ng-if="vm.inputType!==\'checkbox\'">{{vm.ngModel}}</p><i ng-if="vm.inputType===\'checkbox\'" ng-show="vm.ngModel" class="fa fa-check fa-2x"></i></div><p class="help-block">{{vm.helpText}}</p></div></div>'
};

myInputField.$inject = ['cssClassService'];

angular.module('my-angular-components').component('myInputField', myInputField);
