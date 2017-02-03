var myButton = {
    bindings: {
        id: '@',
        text: '@',
        click: '&',
        theme:'@'
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;
      
        vm.$onInit = function () {
            //default options
            vm.id = 'create';
            vm.buttonText = '';
            vm.icon = 'bars';
            vm.theme = 'success';
        };  

        vm.getClass = function(){
             return 'btn btn-' + vm.theme;   
        }    

        vm.getIcon =function(){
            return 'fa fa-' + vm.icon;   
        } 
    },
    template:'<div ng-class="{{vm.getClass()}" id="{{vm.id}}" ng-click="vm.click()">{{vm.buttonText}}<i ng-class="ng-class=" {{vm.getIcon()}\'\'></i></div>'
};

angular.module('my-angular-components').component('myButton', myButton);



