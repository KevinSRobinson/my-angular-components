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
    template:'<h1>Map</h1><my-map ng-model="vm.mapOptions"></my-map>'
};

angular.module('examples').component('mapExample', mapExample);
