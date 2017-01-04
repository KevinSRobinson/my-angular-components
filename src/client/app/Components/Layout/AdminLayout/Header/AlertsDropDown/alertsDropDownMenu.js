var alertsDropDownMenu = {
    bindings: {
        menuItems:'=',
    },
    controllerAs: 'vm',
    templateUrl: 'alertsDropDownMenuTemplate.html'
};


angular.module('my-angular-components').component('alertsDropDownMenu', alertsDropDownMenu);
