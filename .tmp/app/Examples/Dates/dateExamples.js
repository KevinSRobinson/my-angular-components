var dateExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

    
    },
    template:'<h1>Dates</h1>{{vm.timeDifference}}<my-date-time-difference-field ng-model="vm.timeDifference"></my-date-time-difference-field>'
};

angular.module('examples').component('dateExamples', dateExamples);
