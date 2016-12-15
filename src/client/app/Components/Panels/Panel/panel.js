var myPanel = {
    transclude: true,
    bindings: {
        title: '@',
        fieldName: '@',
        style: '@',
        icon: '@',
        iconSize: '@',
        smallHeading: '@',
        showAddButton: '@',
        showEditButton: '@',
        addButtonId: '@',
        editButtonId: '@',
        add: '&',
        edit: '&',
        showFooter: '@',
        footerLeftLabel: '@',
        footerRightLabel: '@',
        height: '@',
        showVerticalScrollBar: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;


        vm.init = function () {
            vm.setDefaults();
        };

        vm.setDefaults = function () {
            vm.height = 150;
            vm.showVerticalScrollBar = false;
            vm.showAddButton = false;
            vm.showEditButton = false;
            vm.editButtonId = 'panelEditButton';
            vm.addButtonId = 'panelAddButton';
            vm.showFooter = false;
            vm.footerLeftLabel = '';
            vm.footerRightLabel = '';
        };


        vm.getPanelStyle = function () {

            var s = 'overflow-y: ' + vm.getScrollBarVisibility(vm.showVerticalScrollBar) ;
            console.log(s);
            
            return 'overflow-y: ' + vm.getScrollBarVisibility(vm.showVerticalScrollBar) ;
            
        };
        
        vm.getPanelHeadingStyle = function () {
           if (vm.smallHeading !== undefined) {
                return  'padding: 3px 5px !important; ';
            }
            return   'padding: 10px 15px';
        };

        vm.getPanelContentStyle = function () {
            return 'overflow-y: auto;';
        };

        
        vm.getScrollBarVisibility = function (showVerticalScrollBar) {
            if(showVerticalScrollBar){
                return 'scroll';
            }
            else {
                return 'hidden';
            }
        };

        vm.getButtonStyle = function () {
            if (vm.smallHeading !== undefined) {
                return 'margin-left: 5px; padding: 3px;';
            }
            return 'margin-left: 5px; padding: 10px;';
        };

        vm.init();

    },
    templateUrl:'app/Panels/Panel/panelTemplate.html'
};


// ' <div class='row'>' +
// ' <div class='col-md-6'>{{vm.footerLeftLabel}}</div>'+
// ' <div class='col-md-6'>{{vm.footerRightLabel}}</div>'+
// '</div>' +
angular.module('myComponents').component('myPanel', myPanel);