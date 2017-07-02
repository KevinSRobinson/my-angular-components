var buttonExamples = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;


        vm.doSomething = function () {
            alert('You Clicked Me!');
        }

        vm.create = function () {
            alert('You Clicked Create!');
        }

        vm.delete = function () {
            alert('You Clicked Delete!');
        }

        vm.edit = function () {
            alert('You Clicked Edit!');
        }

        

    },
    template:'<my-page-title icon="users">my-button</my-page-title><hr><div hljs><my-button text="Click Here!" icon="check" click="vm.doSomething()"></my-button></div><my-button text="Click Here!" icon="check" click="vm.doSomething()"></my-button><h3>Presets</h3><h4>Create</h4><p><div hljs><my-button click="vm.create()" preset="Create"></my-button></div><my-button click="vm.create()" preset="Create"></my-button></p><br><br><h4>Delete</h4><p><div hljs><my-button click="vm.delete()" preset="Delete"></my-button></div><my-button click="vm.delete()" preset="Delete"></my-button></p><br><h4>Edit</h4><p><div hljs><my-button click="vm.edit()" preset="Edit"></my-button></div><my-button click="vm.edit()" preset="Edit"></my-button></p><br><br><br><br><h3>Sizes</h3><h4>Small</h4><p><div hljs><my-button click="vm.doSomething()" text="Small Button" size="Small"></my-button></div><my-button click="vm.doSomething()" text="Small Button" size="Small"></my-button></p><br><h4>Medium</h4><p><div hljs><my-button click="vm.doSomething()" text="Medium Button" size="Medium"></my-button></div><my-button click="vm.doSomething()" text="Medium Button" size="Medium"></my-button></p><br><h4>Large</h4><p><div hljs><my-button click="vm.doSomething()" text="Large Button" size="Large"></my-button></div><my-button click="vm.doSomething()" text="Large Button" size="Large"></my-button></p>'
};

angular.module('examples').component('buttonExamples', buttonExamples);
