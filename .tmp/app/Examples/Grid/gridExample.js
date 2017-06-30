var gridExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.myData = [
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
    template:'<h1>Grid</h1><my-grid ng-model="vm.myData" class="myGrid"></my-grid>'
};

angular.module('examples').component('gridExamples', gridExamples);
