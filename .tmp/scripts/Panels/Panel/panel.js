var myPanel = {
    transclude: true,
    bindings: {
        title: '@',
        fieldName: '@',
        theme: '@',
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
        

         vm.$onInit = function() {
             vm.height = 150;
            vm.showVerticalScrollBar = false;
            vm.showAddButton = false;
            vm.showEditButton = false;
            vm.editButtonId = 'panelEditButton';
            vm.addButtonId = 'panelAddButton';
            vm.showFooter = false;
            vm.footerLeftLabel = '';
            vm.footerRightLabel = '';
            vm.theme = "success";
        };

        
     


        vm.getPanelStyle = function () {

            //var s = 'overflow-y: ' + vm.getScrollBarVisibility(vm.showVerticalScrollBar) ;
          //  console.log(s);
            
            return ''//overflow-y: ' + vm.getScrollBarVisibility(vm.showVerticalScrollBar) ;
            
        };
        
        vm.getPanelHeadingStyle = function () {
           if (vm.smallHeading !== undefined) {
                return ''//  'padding: 3px 5px !important; ';
            }
            return '' // 'padding: 10px 15px';
        };

        vm.getPanelContentStyle = function () {
            return ''//overflow-y: auto;';
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
                return '';
            }
            return '';
        };


    },
    template:'<div class="panel panel-{{vm.theme}}" ng-style="{{vm.getPanelStyle()}}"><div class="panel-heading" ng-style="{{vm.getPanelHeadingStyle()}}" id="{{vm.fieldName}}"><i class="fa fa-{{vm.icon}} fa-{{vm.iconSize}}x"></i><span style="padding-left: 10px; font-weight: 700" ng-style="{{vm.getTitleStyle()}}">{{vm.title}}</span><div ng-show="vm.showAddButton" id="{{vm.addButtonId}}" ng-click="vm.add()" ng-style="{{vm.getButtonStyle()}}" class="btn btn-default pull-right" style="padding: 3px;"><i class="fa fa-plus"></i></div><div ng-show="vm.showEditButton" id="{{vm.editButtonId}}" ng-click="vm.edit()" ng-style="{{vm.getButtonStyle()}}" class="btn btn-default pull-right" style="padding: 3px;"><i class="fa fa-bars"></i></div></div><div class="panel-body" ng-transclude style="{{vm.getPanelContentStyle()}}"></div><div class="panel-footer" ng-if="vm.showFooter" style="{{vm.getPanelStyle()}}"><div class="row"><div class="col-md-6"><span class="pull-left">{{vm.footerLeftLabel}}</span></div><div class="col-md-6"><span class="pull-right">{{vm.footerRightLabel}}</span></div></div></div></div>'
};


angular.module('my-angular-components').component('myPanel', myPanel);