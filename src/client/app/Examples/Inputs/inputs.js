var inputs = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.firstName = "Kevin";
        vm.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e";
        vm.item = {
            "content_type": "notes",
            "title": "Video 00",
            "data": "http://player.vimeo.com/video/37176398"
        };
    },
    templateUrl: "src/client/app/Examples/Inputs/inputsTemplate.html"
};

angular.module('examples').component('inputExamples', inputs);
