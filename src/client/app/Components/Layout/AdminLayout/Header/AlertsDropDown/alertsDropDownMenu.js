var alertsDropDownMenu = {
    bindings: {
        menuItems:'=',
    },
    controllerAs: 'vm',
    templateUrl: 'src/client/app/Components/Layout/AdminLayout/Header/AlertsDropDown/alertsDropDownMenuTemplate.html'
};


angular.module('my-angular-components').component('alertsDropDownMenu', alertsDropDownMenu);
