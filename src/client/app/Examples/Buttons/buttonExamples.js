var buttonExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.showMessage = function () {
            alert('You clicked me!');
        }

    },
    templateUrl: "src/client/app/Examples/Buttons/buttonExamplesTemplate.html"
};

angular.module('examples').component('buttonExamples', buttonExamples);
