var myPageTitle = {
    transclude: "true",
    bindings: {
        icon: "@"
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
        
        
    },
    templateUrl: 'pageHeaderTemplate.html'
};

angular.module('my-angular-components').component('myPageTitle', myPageTitle);
