var myGrid = {
    bindings: {
        ngModel: '=',
        options: '<'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            vm.options = {
                enableFiltering: true,
                data: vm.ngModel,
                enablePaginationControls: false,
                paginationPageSize: 2,
            };
        };


    },
    templateUrl: 'src/client/app/Components/Grid/gridTemplate.html'
};

angular.module('my-angular-components').component('myGrid', myGrid);
