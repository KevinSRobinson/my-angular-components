var modals = {
    controllerAs: 'vm',
    controller: function ($uibModal) {
        var vm = this;

        vm.open = function () {
            return $uibModal.open({
                template:'<my-modal-header title="Edit My Contact1"></my-modal-header><div class="modal-body"><my-input-field field-label="FirstName" ng-model="vm.contact.FirstName"></my-input-field><my-input-field field-label="LastName" ng-model="vm.contact.LastName"></my-input-field></div><my-modal-buttons save="alert(\'Saved\')" close="vm.close()"></my-modal-buttons>',
                controllerAs: 'vm',
                controller:function($uibModalInstance){
                    var vm = this;
                    vm.close = function () {
                      $uibModalInstance.close();
                    };
                }
            });
        };
    },
    template:'<div class="example"><h5>Modals</h5><hr><div ng-click="vm.open()" class="btn btn-success">Click To Open</div></div><div class="example"><h1>Modal Helpers</h1><hr><h2>Moreless Panel</h2></div>'
};

angular.module('examples').component('modalExamples', modals);
