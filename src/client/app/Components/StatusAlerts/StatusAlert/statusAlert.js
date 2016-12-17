var myStatusAlert = {
    bindings: {
        ngModel: '<',
        form: '<',
        successMessage:'@',
        errorMessage: '@',
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


    },
    templateUrl: 'src/client/app/Components/StatusAlerts/StatusAlert/statusAlertTemplate.html'
};


angular.module('myComponents').component('myStatusAlert', myStatusAlert);





