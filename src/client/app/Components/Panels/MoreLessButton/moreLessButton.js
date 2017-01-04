var myMoreLessButton = {
    bindings: {
        id: '@',
        buttonText: '@',
        click: '&',
        cssClass: '@',
        isCollapsed: '='
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';
        var vm = this;


        vm.$onInit = function () {
            //defaults
            vm.buttonText = 'More Search Options';
        };


        vm.getButtonText = function () {
            if (vm.isCollapsed) {
                return 'More Search Options';
            } else {
                return 'Fewer Search Options';
            }
        };

        vm.getButtonIcon = function () {
            if (vm.isCollapsed) {
                return 'fa fa-arrow-down';
            } else {
                return 'fa fa-arrow-up';
            }
        };
    },
    templateUrl: 'moreLessButtonTemplate.html'
};

angular.module('my-angular-components').component('myMoreLessButton', myMoreLessButton);
