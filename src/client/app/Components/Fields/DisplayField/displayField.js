var myDisplayField = {
	    bindings: {
	        fieldLabel: '@',
	        ngModel: '=',
			fieldLabelWitdh: '@'
	    }, 
		controllerAs: 'vm',
		controller: function () {
			var vm = this;
			
			if(vm.fieldLabelWitdh === undefined) {
				vm.fieldLabelWitdh = 'col-md-4';
			}
			
		},
	    templateUrl: 'app/Fields/DisplayField/displayFieldTemplate.html'
};

angular.module('myComponents').component('myDisplayField', myDisplayField);