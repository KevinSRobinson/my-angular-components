var panels = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

        vm.firstName = "Kevin";
        
    },
    templateUrl: "src/client/app/Examples/Panels/panelsTemplate.html"
};

angular.module('examples').component('panelExamples', panels);

