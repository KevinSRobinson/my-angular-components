var tags = {
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

        vm.tags = [{
            id: 1,
            name: "VB.net"
        }, {
            id: 2,
            name: "c# "
        }];
    },
    template:'<div class="col-md-6 center-block"><h1>Select Fields</h1><div class="usage"><code>\r\n                    <b>\r\n                        <span class="tag">&lt;my-select-field&gt;</span><br>\r\n                       \r\n                        <span class="tag">&lt;/my-select-field&gt;</span>\r\n                    </b>\r\n                </code></div><my-panel title="Options" theme="success"><table class="table table-striped"><thead><tr><td>Property</td><td>Required</td><td>Description</td></tr></thead><tr><td>ng-model</td><td>Yes</td><td>Selected Value</td></tr><tr><td>items</td><td>Yes</td><td>The List if options</td></tr><tr><td>input-tpye</td><td>No</td><td>The type of select: Tags or Combobox <small>default : tags</small></td></tr></table></my-panel><div class="well"><h4>Tags</h4><my-select-field field-label="Languages" items="vm.tags" tooltip="Please Select a Language" ng-model="vm.selectedTags"></my-select-field><h4>Tags</h4><my-select-field field-label="Languages" items="vm.cats" input-type="combobox" tooltip="Please Select a Language" ng-model="vm.selectedTags"></my-select-field></div></div>'
};

angular.module('examples').component('tagsExamples', tags);
