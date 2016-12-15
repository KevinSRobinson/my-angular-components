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
            showVerticalScrollBar: '@',
            buttonText: '@'
        },
        controllerAs: 'vm',
        controller: function() {
            'use strict';

            var vm = this;

            vm.buttonText = '';
            vm.isCollapsed = false;
            vm.ngModel = 'You can set this text using ng-model';
            vm.height = 150;
            vm.showVerticalScrollBar = false;

            //buttons
            vm.showAddButton = false;
            vm.showEditButton = false;
            vm.editButtonId = 'panelEditButton';
            vm.addButtonId = 'panelAddButton';

            //footer
            vm.showFooter = false;
            vm.footerLeftLabel = '';
            vm.footerRightLabel = '';

            //TODO: Allow chaning of Button text
            vm.getButtonText = function() {
                if (vm.isCollapsed) {
                    return 'More Search Options';
                } else {
                    return 'Fewer Search Options';
                }
            };

            //TODO: Allow changing of icon;
            vm.getButtonIcon = function() {
                if (vm.isCollapsed) {
                    return 'fa fa-arrow-down';
                } else {
                    return 'fa fa-arrow-up';
                }
            };


        
        // TODO: don't like this tidy
        // Returs a constructed style
        vm.getPanelStyle = function() {
            return 'overflow-y: ' + vm.getScrollBarVisibility(vm.showVerticalScrollBar);
        };

        vm.getPanelHeadingStyle = function() {
            if (vm.smallHeading !== undefined) {
                return 'padding: 3px 5px !important; ';
            }
            return 'padding: 10px 15px';
        };

        vm.getPanelContentStyle = function() {
            return 'overflow-y: auto;';
        };


        vm.getScrollBarVisibility = function(showVerticalScrollBar) {
            if (showVerticalScrollBar) {
                return 'scroll';
            } else {
                return 'hidden';
            }
        };

        //TODO: allow customization here
        vm.getButtonStyle = function() {
            if (vm.smallHeading !== undefined) {
                return 'margin-left: 5px; padding: 3px;';
            }
            return 'margin-left: 5px; padding: 10px;';
        };

        vm.init();

    },
    templateUrl: 'app/Panels/MoreLessPanel/moreLessPanelTemplate.html'
};