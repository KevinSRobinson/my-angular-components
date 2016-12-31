var app = angular.module('my-angular-components', [
    //angular
    'ngAnimate',
    'ngSanitize',

    //angular ui
    'ui.ace',
    'ui.bootstrap',
    'ui.select',
    'ui.grid',
    'uiGmapgoogle-maps'
]);
app.$inject = ['ngAnimate', 'ngSanitize', 'ui.ace', 'ui.bootstrap', 'ui.select',  'ui.grid',
    'uiGmapgoogle-maps'];

app.config(
    ['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyBLwVRSezE3I1cYZki0qcCuCy18u9wOVQ4',
            v: '3.1.7'
        });
    }]
);



