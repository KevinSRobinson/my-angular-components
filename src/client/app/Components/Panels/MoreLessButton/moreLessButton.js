var myMoreLessButton = {
    bindings: {
        id: '@',
        buttonText: '@',
        click: '&',
        cssClass:'@',
        isCollapsed: '='
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';
        var vm = this;
        vm.buttonText = '';

        vm.getButtonText = function () {
            if (vm.isCollapsed) {
                return 'More Search Options';
            }
            else {
                return 'Fewer Search Options';
            }
        };

        vm.getButtonIcon = function () {

            if (vm.isCollapsed) {
                return 'fa fa-arrow-down';
            }
            else {
                return 'fa fa-arrow-up';
            }
        };
    },
    templateUrl: 'app/Panels/Panel/moreLessButtonTemplate.html' 
};

angular.module('myComponents').component('myMoreLessButton', myMoreLessButton);