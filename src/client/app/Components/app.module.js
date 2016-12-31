var app = angular.module('my-angular-components', [
    //angular
    'ngAnimate',
    'ngSanitize',

    //angular ui
    'ui.ace',
    'ui.bootstrap',
    'ui.select'
]);

app.$inject = ['ngAnimate', 'ngSanitize', 'ui.ace', 'ui.bootstrap', 'ui.select'];
