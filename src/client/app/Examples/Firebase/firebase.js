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
    templateUrl: "src/client/app/Examples/Firebase/firebaseTemplate.html"
};

angular.module("examples").component('firebaseExamples', firebaseExamples);
