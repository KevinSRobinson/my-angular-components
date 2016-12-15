/**
 * This component displays a list of clickable tags.
 * It extracts out unique Tag values from the supplied list *
  */
var myTagsFilterList = {
    bindings: {
        items: '=',
        tagsFieldName: '@',
        selected: '='
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        'use strict';

        var vm = this;
        vm.selected = {};


        //use the default field for tags if none is specified
        if (vm.tagsFieldName === undefined) {
            vm.tagsFieldName = 'Tags';
        }


        vm.tagList = [];

        var isJson = function isJson(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        };

        var getTags = function (tags) {

            if (isJson(tags)) {
                return angular.fromJson(tags);
            }
            else {
                return tags.split(',');
            }

        };


        // watch for changes
        $scope.$watch('vm.items', function () {


            if (vm.items !== undefined) {

                vm.tagList.push('All');
                
                // loop through all the tags in the list
                angular.forEach(vm.items, function (key, value) {
                    if (key[vm.tagsFieldName] !== undefined) {

                        // separate out tags
                        var tags = getTags(key[vm.tagsFieldName]);


                        // add the tags to the tagList if not already
                        angular.forEach(tags, function (key, value) {
                            if (vm.tagList.indexOf(key) === -1) {
                                vm.tagList.push(key);
                            }
                        });
                    }
                });

                vm.selected = 'All';
            }
        });

        vm.tagClicked = function (tag) {
            vm.selected = tag;
        };


    },
    templateUrl: 'app/Tags/TagFilter/tagsFielterTemplate.html'
};


myTagsFilterList.$inject = ['$scope'];


angular.module('myComponents').component('myTagsFilterList', myTagsFilterList);