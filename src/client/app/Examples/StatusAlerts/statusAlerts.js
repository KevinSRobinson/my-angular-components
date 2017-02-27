var statusAlerts = {
    controllerAs: 'vm',
    controller: function ($scope) {
        var vm = this;
        vm.isError = false;

        vm.message = "Every this is great";

        vm.submit = function () {
            
        };

        $scope.$watch("vm.isError", function(){
            if (vm.isError)
                vm.message = "Something went wrong";
            else
                vm.message = "Everything is ok";
        });
        

    },
    templateUrl: "src/client/app/Examples/StatusAlerts/statusAlertsTemplate.html"
};

angular.module('examples').component('statusAlertExamples', statusAlerts);
