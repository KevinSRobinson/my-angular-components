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
    templateUrl: 'src/client/app/Components/Layout/AdminLayout/Header/UserOptionsDropDown/userOptionsDropDownMenuTemplate.html'
};


angular.module('my-angular-components').component('userOptionsDropDownMenu', userOptionsDropDownMenu);
