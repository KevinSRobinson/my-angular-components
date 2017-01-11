var dates = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

    

        vm.$onInit = function(){
            vm.sampleDate = new Date();
        };
    },
    templateUrl: "src/client/app/Examples/Dates/datesTemplate.html"
};

angular.module('examples').component('datesExamples', dates);

