var selectListExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.items = ["Carney", "Robinons", "Sean", "Robinons"];
    },
    templateUrl: "src/client/app/Examples/SelectLists/selectListExamplesTemplate.html"
};

angular.module('examples').component('selectListExamples', selectListExamples);
