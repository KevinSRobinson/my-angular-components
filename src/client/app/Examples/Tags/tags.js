var tags = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

        vm.selected = {};
vm.selectedTags = {};
 vm.cats = [{
            id: 1,
            name: "Cat 1"
        },
        {
            id: 2,
            name: "Cat 2"
        }];

        vm.items = [{
            id: 1,
            name: "Tag 1"
        },
        {
            id: 2,
            name: "Tag 2"
        }];
    },
    templateUrl: "src/client/app/Examples/Tags/tagsTemplate.html"
};

angular.module('examples').component('tags', tags);

