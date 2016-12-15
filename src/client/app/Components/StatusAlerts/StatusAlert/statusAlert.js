// var myStatusMessage = {
//     bindings: {
//         ngModel: '<',
//         form: '<',
//         successMessage:'@'
//     },
//     controllerAs: 'vm',
//     controller: function () {
//         var vm = this;
//         vm.message = '';
//         vm.error = false;
//         vm.success = false;


//         vm.$onChanges =  function (ddd) {
//             vm.error = false;
//             vm.success = false;

//             if (vm.ngModel != null) {
//                 if (vm.ngModel.ExceptionMessage !== undefined) {
//                     console.log(vm.ngModel);
//                     vm.error = true;
//                     vm.message = vm.ngModel.ExceptionMessage;
//                 }
//                 else if (vm.ngModel !== '') {
//                     vm.success = true;
//                     vm.message = vm.successMessage;
//                 }
//             }
//         };

//     },
//     templateUrl: 'app/StatusAlerts/StatusAlert/StatusAlertTemplate.html'
// };


// angular.module('myComponents').component('myStatusMessage', myStatusMessage);





