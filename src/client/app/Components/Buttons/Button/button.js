var myButton1 = {
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
    templateUrl: 'buttonTemplate.html'
};

angular.module('my-angular-components').component('myButton1', myButton1);



