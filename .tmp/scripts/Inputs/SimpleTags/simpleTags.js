var mySimpleTagsField = {
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
    template:'<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 100% !important;\r\n    }\r\n\r\n</style><div class="form-group"><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for="vm.fieldName">{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if="!vm.readOnly" class="input-group"><ui-select multiple ng-model="vm.ngModel" theme="bootstrap"><ui-select-match placeholder="Select a Tag...">{{$item}}</ui-select-match><ui-select-choices repeat="item in (vm.items | filter: $select.search) track by $index">{{item}}</ui-select-choices></ui-select><span ng-show="vm.tooltip!==\'\'" class="input-group-addon" uib-popover="{{vm.tooltip}}" popover-title="Info" popover-class="popover" popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show="vm.readOnly"><span ng-repeat="tag in vm.items track by $index" class="badge">{{tag}} <span></span></span></div><p class="help-block">{{vm.helpText}}</p></div></div>'
};

mySimpleTagsField.$inject = ['cssClassService'];

angular.module('my-angular-components').component('mySimpleTagsField', mySimpleTagsField);

