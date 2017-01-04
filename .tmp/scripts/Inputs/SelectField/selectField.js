var mySelectField = {
    bindings: {
        fieldLabel: '@',
        fieldName: '@',
        labelWidth: '@',
        SelectWidth: "@",
        ngModel: '=',
        required: '@',
        tooltip: '@',
        helpText: '@',
        readOnly: '@',
        horizontal: '@',
        items: '=',
        inputType: '@',
        size: "@",
        multiSelect: "@"
    },
    controllerAs: 'vm',
    controller: function (cssClassService) {
        var vm = this;

        vm.cssClassService = cssClassService;



        vm.$onInit = function () {

            //defaults
            vm.inputType = "tags";
            vm.required = false;
            vm.horizontal = false;
            vm.labelWidth = 3;
            vm.inputWidth = 9;
            vm.readOnly = false;
            vm.horizontal = false;
            vm.tooltip = "";
            vm.placeholder = "";
            vm.helpText = "";
            vm.multiSelect = false;

        };




    },
    template:'<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 100% !important;\r\n    }\r\n\r\n</style><div class="form-group"><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for="vm.fieldName">{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if="!vm.readOnly" class="input-group"><ui-select ng-if="vm.inputType===\'tags\'" multiple ng-model="vm.ngModel" theme="bootstrap"><ui-select-match placeholder="Select a Tag...">{{$item.name}}</ui-select-match><ui-select-choices repeat="item in (vm.items | filter: $select.search) track by item.id"><span ng-bind="item.name"></span></ui-select-choices></ui-select><select ng-if="vm.inputType===\'combobox\'" size="vm.size" multiple="vm.multiSelect" ng-model="vm.ngModel" class="form-control" id="{{vm.fieldName}}"><option ng-repeat="option in vm.items" ng-value="{{option.id}}">{{option.name}}</option></select><span ng-show="vm.tooltip!==\'\'" class="input-group-addon" uib-popover="{{vm.tooltip}}" popover-title="Info" popover-class="popover" popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show="vm.readOnly"><span ng-repeat="tag in vm.items" class="badge">{{tag.name}} <span></span></span></div><p class="help-block">{{vm.helpText}}</p></div></div>'
};

mySelectField.$inject = ['cssClassService'];

angular.module('my-angular-components').component('mySelectField', mySelectField);

