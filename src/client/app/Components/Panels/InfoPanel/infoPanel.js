var myInfoPanel = {
    bindings: {
        info: '@',
        icon: '@',
        color: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';
        var vm = this;

        //deafults
        vm.icon = 'fa fa-info fa-2x';
        vm.color = '#64518A';
        


        //TODO: Improve this
        vm.getStyle = function () {
            return ' border-left: 5px solid #64518A;' +
                ' border-radius: 0 15px 15px 0; !important; ' +
                ' padding: 1rem 1rem;   !important; ' +
                ' background: ' + vm.color + ' !important;' +
                ' font-size: 1.65rem; !important; margin: 0;  !important; ' +
                ' color: ' + vm.color + ' !important;';
        };
    

    },
    templateUrl: 'app/Panels/InfoPanel/infoPanelTemplate.html'
};


angular.module('myComponents').component('myInfoPanel', myInfoPanel);