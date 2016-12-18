// var myTextField = {
//     bindings: {
//         fieldLabel: '@',
//         fieldName: '@',
//         labelWidth: '@',
//         inputWidth: "@",
//         ngModel: '=',        
//         required: '@',
//         toolTip: '@',
//         helpText: '@',
//         displayOnly: '@',
//         horizontal : '@'
//     },
//     controllerAs: 'vm',
//     controller: function () {
//         var vm = this;


//         vm.$onInit = function () {

//             //defaults
//             vm.showToolTip = false;
//             vm.showHelpText = false;
//             vm.required = false;
//             vm.displayOnly = false;
//              vm.horizontal = false;
//              vm.labelWidth = 3;
//              vm.inputWidth = 9;
//         };


//         vm.getlabelWidth = function(){
//             return "col-sm-9";
//         };
        
//         vm.getinputlWidth = function(){
//             return "col-sm-3";
//         };

//         vm.getOrientation = function(){
//             if(vm.horizontal == true){
//                 return "form-horizontal";
//             }
//             else{
//                 return "";
//             }
//         };

//     },
//     templateUrl: 'src/client/app/Components/Fields/TextField/textFieldTemplate.html'
// };


// angular.module('myComponents').component('myTextField', myTextField);
