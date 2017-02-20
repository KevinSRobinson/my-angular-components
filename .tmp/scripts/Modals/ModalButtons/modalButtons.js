var myModalButtons = {
    bindings: {
        save: '&',
        close: '&',
        saveText: '@',
        saveVisible: '@',
        closeVisible: '@',
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            //defaults        
            vm.saveText = 'Save';
            vm.closeText = 'Close';

            vm.saveVisible = true;
            vm.closeVisible = true;
        };

    },
    template:'<div class="modal-footer"><span><button class="btn btn-primary btn-large pull-left" ng-if="vm.saveVisible" id="save" ng-click="vm.save()" type="submit">{{vm.saveText}}</button><button class="btn btn-default pull-left" ng-if="vm.closeVisible" id="close" ng-click="vm.close()" type="button">{{vm.closeText}}</button></span></div>'
};

angular.module('my-angular-components').component('myModalButtons', myModalButtons);
