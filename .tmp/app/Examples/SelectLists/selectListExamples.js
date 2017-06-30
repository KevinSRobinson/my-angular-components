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
    template:'<h1>Selected Items</h1>Selected : {{vm.selected}}<my-select-list field-label="Slect a option" items="vm.items" ng-model="vm.selected"><my-select-list></my-select-list></my-select-list>'
};

angular.module('examples').component('selectListExamples', selectListExamples);
