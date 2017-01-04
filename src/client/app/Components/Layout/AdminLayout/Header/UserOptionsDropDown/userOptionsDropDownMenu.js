var userOptionsDropDownMenu = {
    bindings: {
        menuItems:'=',
        userName: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;
        
       

    },
    templateUrl: 'userOptionsDropDownMenuTemplate.html'
};


angular.module('my-angular-components').component('userOptionsDropDownMenu', userOptionsDropDownMenu);
