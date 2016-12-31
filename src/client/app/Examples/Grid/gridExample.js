var gridExample = {
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
    templateUrl: "src/client/app/Examples/Grid/gridExampleTemplate.html"
};

angular.module('examples').component('gridExample', gridExample);
