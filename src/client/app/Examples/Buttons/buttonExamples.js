var buttonExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;


        vm.doSomething = function () {
            alert('You Clicked Me!');
        }

        vm.create = function () {
            alert('You Clicked Create!');
        }

        vm.delete = function () {
            alert('You Clicked Delete!');
        }

        vm.edit = function () {
            alert('You Clicked Edit!');
        }

        

    },
    templateUrl: './src/client/app/Examples/Buttons/buttonExamplesTemplate.html'
};

angular.module('examples').component('buttonExamples', buttonExamples);
