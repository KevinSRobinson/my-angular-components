var app = angular.module('my-angular-components', ['ngAnimate', 'ui.bootstrap', 'ngSanitize', 'ui.select']);


app.$inject = ['ngAnimate', 'ui.bootstrap', 'ngSanitize', 'ui.select'];


  


// app.config(function($momentProvider){
//     $momentProvider
//         .asyncLoading(true)
//         .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');
// });
// //
// app.config([ '$momentProvider',
//     function($momentProvider) {
//
//         $momentProvider
//             .defaultViewFormat('LL')
//             .defaultModelFormat('MM/DD/YYYY')
//             .strictView(false);
//
//     } ]);