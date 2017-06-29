var firebaseExamples = {
    controllerAs: 'vm',
    controller: function ($scope, authService, $firebaseObject, $firebaseArray) {
        var vm = this;
        var ref = firebase.database().ref();
        //var ref = new Firebase("https://quiz-fd4f2.firebaseio.com/");
        vm.array = $firebaseObject(ref);
        var ref = firebase.database().ref().child("Contacts");
        $scope.messages = $firebaseArray(ref);
        // add new items to the array
        // the message is automatically added to our Firebase database!
        $scope.addMessage = function (message) {
            console.log(message);
            $scope.messages.$add({
                firstname: message
            });
        };
    },
    template:'<h1>Firebase</h1><ul><li class="badge" ng-repeat="message in messages">{{message.firstname}}</li></ul><input type="text" ng-model="vm.message"><div class="btn btn-success" ng-click="addMessage(vm.message)">Add</div>'
};

angular.module("examples").component('firebaseExamples', firebaseExamples);
