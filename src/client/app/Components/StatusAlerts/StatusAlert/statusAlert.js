var myStatusAlert = {
    bindings: {
        ngModel: '<',
        form: '<',
        successMessage:'@',
        errorMessage:'@',
        isSuccess:'@',
        isError: '@',
        show:'@',
        false: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
    
      vm.$onInit = function(){
            vm.errorMessage = '';
            vm.show = false;
            vm.isError = false;
            vm.success = false;
      };


        vm.$onChanges =  function (ddd) {
            // vm.error = false;
            // vm.success = false;

            // if (vm.ngModel != null) {
            //     if (vm.ngModel.ExceptionMessage !== undefined) {
            //         console.log(vm.ngModel);
            //         vm.error = true;
            //         vm.message = vm.ngModel.ExceptionMessage;
            //     }
            //     else if (vm.ngModel !== '') {
            //         vm.success = true;
            //         vm.message = vm.successMessage;
            //     }
            // }
        };

    },
    templateUrl: 'src/client/app/Components/StatusAlerts/StatusAlert/statusAlertTemplate.html'
};


angular.module('myComponents').component('myStatusAlert', myStatusAlert);





