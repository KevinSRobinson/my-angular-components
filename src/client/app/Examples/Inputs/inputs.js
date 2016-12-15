var inputs = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

        vm.firstName = "Kevin";
        
    },
    templateUrl: "src/client/app/Examples/Inputs/inputsTemplate.html"
};

angular.module('examples').component('inputExamples', inputs);

