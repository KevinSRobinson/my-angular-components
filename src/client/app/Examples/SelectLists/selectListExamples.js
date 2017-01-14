var selectListExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.items = [
        {
            "firstName": "Cox",
            "lastName": "Carney"
        },
        {
            "firstName": "Kevin",
            "lastName": "Robinons"
        },
        {
            "firstName": "Sean",
            "lastName": "Robinons"
        }];
    },
    templateUrl: "src/client/app/Examples/SelectLists/selectListExamplesTemplate.html"
};

angular.module('examples').component('selectListExamples', selectListExamples);
