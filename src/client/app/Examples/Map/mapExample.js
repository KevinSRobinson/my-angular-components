var mapExample = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.mapOptions = {
                center: {
                    latitude: 45,
                    longitude: -73
                },
                zoom: 8
            };
    },
    templateUrl: "src/client/app/Examples/Map/mapExampleTemplate.html"
};

angular.module('examples').component('mapExample', mapExample);
