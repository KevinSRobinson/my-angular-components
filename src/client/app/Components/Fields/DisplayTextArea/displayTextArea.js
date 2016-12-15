var myDispalyTextarea= {
   bindings: {
        fieldLabel: '@',
        ngModel: '='
    },
    controllerAs:'vm',
    controller: function(){
      var vm = this;
      vm.fieldLabel = 'You can set this text using field-label=';
      
      },
    templateUrl: 'app/Fields/DisplayField/displayFieldTemplate.html'
};


angular.module('myComponents').component('myDisplayTextarea', myDispalyTextarea);
