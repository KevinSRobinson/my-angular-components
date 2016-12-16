var myDisplayHtmlTag = {
    bindings: {
         tagName: '@',
         isClose: '@',
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;

        vm.$onInit = function () {
            vm.tagName = '';
            vm.isClose = false;
        };

    },
    templateUrl: 'src/client/app/Components/HtmlHelpers/DisplayHtmlTag/displayHtmlTagTemplate.html'
};


angular.module('myComponents').component("myDisplayHtmlTag", myDisplayHtmlTag);