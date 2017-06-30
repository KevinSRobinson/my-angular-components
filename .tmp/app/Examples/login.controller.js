
(function () {
  'use strict';

  angular
    .module('examples')
    .controller('LoginController', LoginController);

  function LoginController(authService) {

    var vm = this;

    vm.authService = authService;

  }
})();