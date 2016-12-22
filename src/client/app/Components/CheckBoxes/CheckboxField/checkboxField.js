/**
 * T
 */
var myCheckboxField = {
  bindings: {
    checked: '@',
    Label: '@',
    icon: '@'
  },
  controllerAs:'vm',
  controller:function(){
    var vm = this;
   // todo:tidy this
    vm.$onInit = function () {
      //default options
      vm.checked = false;
    };
  },
  templateUrl: 'src/client/app/Components/CheckBoxes/CheckboxField/checkboxField.html'

};

angular.module('my-angular-components').component('myCheckboxField', myCheckboxField);
  