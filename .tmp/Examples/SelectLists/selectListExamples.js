var selectListExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

         vm.selectedCats = {};
        vm.selectedTags = {};

        vm.cats = [{
            id: 1,
            name: "Cat 1"
        }, {
            id: 2,
            name: "Cat 2"
        }];

        vm.tags = [{id: 1, name: "VB.net" }, 
                   { id: 2, name: "c# " }];
    },
    template:'<div class="example"><h1>Select Lists</h1><hr><h3>Tags Field</h3><p><hljs><my-select-field field-label="Languages" items="vm.tags" tooltip="Please Select a Language" ng-model="vm.selectedTags"></my-select-field></hljs><my-select-field field-label="Languages" items="vm.tags" tooltip="Please Select a Language" ng-model="vm.selectedTags"></my-select-field></p><hr><h3>Select List Field</h3><p><hljs><my-select-field field-label="Languages" items="vm.cats" input-type="combobox" tooltip="Please Select a Language" ng-model="vm.selectedTags"></my-select-field></hljs><my-select-field field-label="Languages" items="vm.cats" input-type="combobox" tooltip="Please Select a Language" ng-model="vm.selectedTags"></my-select-field></p></div>'
};

angular.module('examples').component('selectListExamples', selectListExamples);
