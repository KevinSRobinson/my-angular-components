var myPageTitle = {
    transclude: "true",
    bindings: {
        icon: "@"
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
        
        
    },
    template:'<h1 id="pageTitle"><i class="fa fa-{{vm.icon}}"><div ng-transclude></div></i></h1>'
};

angular.module('my-angular-components').component('myPageTitle', myPageTitle);
