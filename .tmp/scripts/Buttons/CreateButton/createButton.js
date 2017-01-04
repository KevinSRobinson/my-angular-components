var myCreateButton = {
    bindings: {
        id: '@',
        buttonText: '@',
        click: '&',
        cssClass:'@'
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;
      
        vm.$onInit = function () {
            //default options
            vm.id = 'create';
            vm.buttonText = 'Create';
            vm.icon = 'plus';
            vm.cssClass = 'btn btn-success';
        };       
    },
    template:'<div class="{{vm.cssClass}" id="{{vm.id}}" ng-click="vm.click()">{{vm.buttonText}}<i class="fa fa-{{vm.icon}}"></i></div>'
};


angular.module('my-angular-components').component('myCreateButton', myCreateButton);



