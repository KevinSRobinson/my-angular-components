var adminHeaderBar = {
    transclude: true,
    bindings: {
        title: '@',
        theme: '@',
        userMenuItems: "=",
        alertMenuItems: "=",
        userName: '@'
    },
    controllerAs: 'vm',
    template:'<style>\r\n.uiViewColapsed{\r\n    margin-left:10px;\r\n}\r\n.uiView{\r\n    margin-left:120px;\r\n}\r\n</style><div class="row header"><div class="col-xs-12"></div>--><div class="meta"><div class="page">{{vm.title}}</div></div></div>'
};


angular.module('my-angular-components').component('adminHeaderBar', adminHeaderBar);