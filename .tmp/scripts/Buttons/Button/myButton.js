var myButton = {    
     bindings: {
        id: '@',
        icon:'@',
        text: '@',
        click: '&',
        theme:'@'
    },
    controllerAs: 'vm',
    controller: function($scope){
        var vm = this;
        

        $scope.$watch("vm.icon", function(){
            vm.buttonIcon = "fa fa-" + vm.icon;
        });

         $scope.$watch("vm.cssClass", function(){
            vm.class = "btn btn-" + vm.theme;
        });

        vm.$onInit = function () {
            //default options
            vm.id = 'button';
            vm.buttonText = 'Click Here';
            vm.icon = 'bars';
            vm.cssClass = 'success';
        };       
    },
    template:'<div ng-class="vm.class" id="{{vm.id}}" ng-click="vm.click()">{{vm.text}}<i ng-class="vm.buttonIcon"></i></div>'
}

angular.module('my-angular-components').component('myButton', myButton);