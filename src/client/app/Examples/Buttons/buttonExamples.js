var buttonExamples = {
       controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.doSomething = function() {
            alert('You Clicked me!');
        }   

    },
    templateUrl:'./src/client/app/Examples/Buttons/buttonExamplesTemplate.html'
};

angular.module('examples').component('buttonExamples', buttonExamples);

