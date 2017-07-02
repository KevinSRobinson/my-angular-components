var modals = {
    controllerAs: 'vm',
    controller: function ($uibModal) {
        var vm = this;

        vm.open = function () {
            return $uibModal.open({
                template:'<my-modal-header title="Edit My Contact"></my-modal-header><div class="modal-body"><my-input-field field-label="First Name" ng-model="vm.contact.FirstName"></my-input-field><my-input-field field-label="Last Name" ng-model="vm.contact.LastName"></my-input-field></div><my-modal-buttons save="vm.save()" close="vm.close()"></my-modal-buttons>',
                controllerAs: 'vm',
                controller:function($uibModalInstance){
                    var vm = this;
                    vm.close = function () {
                      $uibModalInstance.close();
                    };
                     vm.saveContact = function () {
                      $uibModalInstance.close();
                    };
                }
            });
        };

    },
    template:'<div class="example"><h1>Modals</h1><hr><p><div hljs><my-modal-header title="Edit My Contact1"></my-modal-header><div class="modal-body"><my-input-field field-label="First Name" ng-model="vm.contact.FirstName"></my-input-field><my-input-field field-label="Last Name" ng-model="vm.contact.LastName"></my-input-field></div><my-modal-buttons save="vm.save()" close="vm.close()"></my-modal-buttons></div><div ng-click="vm.open()" class="btn btn-success">Click To Open</div></p><hr></div>'
};

angular.module('examples').component('modalExamples', modals);
