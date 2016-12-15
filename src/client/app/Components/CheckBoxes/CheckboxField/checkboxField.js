var myCheckboxField = {
  bindings: {
    checked: '@',
    Label: '@',
    icon: '@'
  },
  controllerAs:'vm',
  controller:function(){
    var vm = this;
    vm.checked = true;
  },
  templateUrl: 'app/CheckBoxes/CheckboxField/checkboxField.html'

};

angular.module('myComponents').component('myCheckboxField', myCheckboxField);
  