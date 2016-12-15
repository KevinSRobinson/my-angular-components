var myTagsMultiSelect = {
    bindings: {
        fieldLabel: '@',
        fieldName: '@',
        selected: '=',
        tags: '=',
        ngModel:'='
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        'use strict';
        
        var vm = this;
         

      $scope.itemArray = [
        {id: 1, name: 'first'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'},
        {id: 4, name: 'fourth'},
        {id: 5, name: 'fifth'},
    ];

    $scope.selected = { value: $scope.itemArray[0] };
    
        
    },
    templateUrl: 'app/Tags/TagsField/tagsFieldTemplate.html'
};

angular.module('myComponents').component('myTagsMultiSelect', myTagsMultiSelect);
