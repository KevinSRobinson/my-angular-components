var app = angular.module('my-angular-components', [
    //angular
    'ngAnimate',
    'ngSanitize',

    //angular ui
    'ui.ace',
    'ui.bootstrap',
    'ui.select',
    'ui.grid',
    'uiGmapgoogle-maps'
]);
app.$inject = ['ngAnimate', 'ngSanitize', 'ui.ace', 'ui.bootstrap', 'ui.select',  'ui.grid',
    'uiGmapgoogle-maps'];

app.config(
    ['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyBLwVRSezE3I1cYZki0qcCuCy18u9wOVQ4',
            v: '3.1.7'
        });
    }]
);




var cssClassService =  function () {
    

     var getlabelClass = function (horizontal, labelWidth) {
            if (horizontal === "true") {
                return "control-label col-sm-" + labelWidth;
            } else {
                return "";
            }
        };

        var getInputClass = function (horizontal, inputWidth) {
            if (horizontal)
                return  "col-sm-" + inputWidth;
            else
                return "";
        };


    return {
        getlabelClass: getlabelClass,
        getInputClass: getInputClass
    };
};

angular.module("my-angular-components").factory("cssClassService", cssClassService);
var myGrid = {
    bindings: {
        ngModel: '=',
        options: '<'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            vm.options = {
                enableFiltering: true,
                data: vm.ngModel,
                enablePaginationControls: false,
                paginationPageSize: 2,
            };
        };


    },
    templateUrl: 'src/client/app/Components/Grid/gridTemplate.html'
};

angular.module('my-angular-components').component('myGrid', myGrid);

var myMap = {
    bindings: {
        ngModel: '=',
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;


            
        

    },
    templateUrl: 'src/client/app/Components/Map/mapTemplate.html'
};

angular.module('my-angular-components').component('myMap', myMap);

var myReportViewer = {
    bindings: {
        reportUrl: '@',
        report: '@',
        serverMode: '@',
        processingMode: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;
        vm.processingMode = 'ej.ReportViewer.ProcessingMode.Remote';

        vm.init = function () {

            // // //set the binding defaults
            // // if (vm.processingMode == undefined) {
            // //     vm.processingMode = 'ej.ReportViewer.ProcessingMode.Local';
            // // }
            // // else{                
            // //     vm.processingMode = 'ej.ReportViewer.ProcessingMode.Remote';
            // // }

            // if (vm.reportUrl === undefined) {
            //     vm.reportUrl = 'https://volnowreportserver.azurewebsites.net/en-us/reports/view/';
            // }

                           
            //             //   reportServiceUrl: '/api/ReportApi',
            //             //   processingMode: ej.ReportViewer.ProcessingMode.Remote,
            //             //   reportPath: '~/Report/GroupingAgg.rdl'


        };


        vm.init();
    },
    templateUrl: 'app/Reports/ReportViewer/reportViewer.html'

};


angular.module('my-angular-components').component('myReportViewer', myReportViewer);

var myCreateButton = {
    bindings: {
        id: '@',
        buttonText: '@',
        click: '&',
        cssClass:'@'
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;
      
        vm.$onInit = function () {
            //default options
            vm.id = 'create';
            vm.buttonText = 'Create';
            vm.icon = 'plus';
            vm.cssClass = 'btn btn-success';
        };       
    },
    templateUrl: 'src/client/app/Components/Buttons/CreateButton/createButtonTemplate.html'
};


angular.module('my-angular-components').component('myCreateButton', myCreateButton);




var myDeleteButton = {
    bindings: {
        id: '@',
        buttonText: '@',
        click: '&',
        cssClass:'@'
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

        vm.$onInit = function () {
            //default options
            vm.id = 'delete';
            vm.buttonText = 'Delete';
            vm.icon = 'cross';
        };
    },
    templateUrl: 'src/client/app/Components/Buttons/DeleteButton/deleteButton.js'

};


angular.module('my-angular-components').component('myDeleteButton', myDeleteButton);




var myEditButton = {
    bindings: {
        click: '&',
        id: '@',
        cssClass:'@'        
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            //default options
            vm.id = 'delete';
            vm.buttonText = 'Delete';
            vm.icon = 'bars';
        };
    },
    template: 'src/client/app/Components/Buttons/EditButton/editButtonTemplate.html'
};

angular.module('my-angular-components').component('myEditButton', myEditButton);

var mySpinnerButton = {
    bindings: {
        buttonText:'@',
        saving: '=',
        isDisabled:'@'
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;
      
        vm.$onInit = function () {
            //default options
            // vm.id = 'spinnerButton';
            // vm.ngModel = 'Cliock';
            // vm.icon = 'fa fa-circle-o-notch';
            // vm.cssClass = 'btn btn-success';
             vm.saving = false;
             vm.isDisabled = false;
        };       
    },
    templateUrl: 'src/client/app/Components/Buttons/SpinnerButton/spinnerButtonTemplate.html'
};


angular.module('my-angular-components').component('mySpinnerButton', mySpinnerButton);




/**
 * 
 * @type {
 
  */
var myCategorySelect = {
    bindings: {
        selected: '=',
        items: '=',
        fieldName: '@',
        fieldLabel: '@',
        categoryField: '@'
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        'use strict';

        var vm = this;
        vm.cats = [];
 // todo:tidy this
        vm.init = function () {
            if(vm.fieldLabel === undefined){
                vm.fieldLabel = 'Category';
            }

            if(vm.categoryField === undefined){
                vm.categoryField = 'Category';
            }
        };

       


        


        var isJson = function isJson(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        };

        var getCats = function (tags) {

            if (isJson(tags)) {
                return angular.fromJson(tags);
            }
            else {
                return tags.split(',');
            }

        };


var buildList = function () {

            //create a temporary list for building the list
            var catsList = [];


            // loop through all the tags in the list
            angular.forEach(vm.items, function (key, value) {

                // separate out tags
                var cats = getCats(key[vm.categoryField]);
                                
                //add unique values to the temporary list
                angular.forEach(cats, function (key, value) {
                    if (catsList.indexOf(key.trim()) === -1) {
                        catsList.push(key.trim());
                    }
                });

            });

            // copy sorted list to the main category list*/
            vm.cats = catsList.sort();

            //add an All option to the first item in the list
            vm.cats.unshift('All');

            // set the default option to All
            vm.selected = 'All';
        };

        // watch for changes
        $scope.$watch('vm.items', function () {

            if (vm.items !== undefined) {
                buildList();
            }
        });


        vm.init();

    },
    template: 'categorySelectTemplate.html'
};

myCategorySelect.$inject = ['$scope'];

angular.module('my-angular-components').component('myCategorySelect', myCategorySelect);
var myFilterTextbox = {
    bindings: {
        placeholder: '@',
        ngModel: '=',
        fieldName: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            vm.fieldName = 'filterTextBox';
            vm.placeholder = 'Filter';
        };


    },
    templateUrl: 'src/client/app/Components/Filters/FilterTextbox/filterTextbox.js'
};


angular.module('my-angular-components').component('myFilterTextbox', myFilterTextbox);

var myPageTitle = {
    bindings: {
        ngModel: '@'
    },
    controllerAs: 'vm',
    controller: function () {

        vm.$onInit = function () {
            vm.ngModel = 'Set this text using ngModel';
        };
    },
    templateUrl: 'src/client/app/Components/Headers/PageHeader/pageHeaderTemplate.html'
};

angular.module('my-angular-components').component('myPageTitle', myPageTitle);

var myInputField = {
    bindings: {
        fieldLabel: '@',
        fieldName: '@',
        labelWidth: '@',
        inputWidth: "@",
        ngModel: '=',
        required: '@',
        tooltip: '@',
        helpText: '@',
        readOnly: '@',
        horizontal: '@',
        inputType: '@',
        placeholder: '@'
    },
    controllerAs: 'vm',
    controller: function (cssClassService) {
        var vm = this;

        vm.cssClassService = cssClassService;


        vm.$onInit = function () {

            //defaults

            vm.inputType = 'textbox';

            vm.required = false;
            vm.horizontal = false;
            vm.labelWidth = 3;
            vm.inputWidth = 9;
            vm.readOnly = false;
            vm.horizontal = false;
            vm.tooltip = "";
            vm.placeholder = "";
            vm.helpText = "";

            //defaults
            vm.fieldLabel = "Date";
            vm.locale = 'en-GB';
            vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            vm.format = vm.formats[0];
            vm.isOpened = false;
            vm.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };
        };

        // open the date popup
        vm.open = function () {
            vm.isOpened = true;
        };


    },
    templateUrl: 'src/client/app/Components/Inputs/InputField/inputFieldTemplate.html'
};

myInputField.$inject = ['cssClassService'];

angular.module('my-angular-components').component('myInputField', myInputField);

var mySelectField = {
    bindings: {
        fieldLabel: '@',
        fieldName: '@',
        labelWidth: '@',
        SelectWidth: "@",
        ngModel: '=',
        required: '@',
        tooltip: '@',
        helpText: '@',
        readOnly: '@',
        horizontal: '@',
        items: '=',
        inputType: '@',
        size:"@",
        multiSelect:"@"
    },
    controllerAs: 'vm',
    controller: function (cssClassService) {
        var vm = this;

         vm.cssClassService= cssClassService;

        

        vm.$onInit = function () {

            //defaults
            vm.inputType = "tags";
             vm.required = false;
            vm.horizontal = false;
            vm.labelWidth = 3;
            vm.inputWidth = 9;
            vm.readOnly = false;           
            vm.horizontal = false;
            vm.tooltip = "";
            vm.placeholder = "";
            vm.helpText = "";
            vm.multiSelect = false;
            
        };




    },
    templateUrl: 'src/client/app/Components/Inputs/SelectField/selectFieldTemplate.html'
};

mySelectField.$inject = ['cssClassService'];

angular.module('my-angular-components').component('mySelectField', mySelectField);

angular.module('my-angular-components').directive('markdown', ["$window", function ($window) {
    //ar Showdown = require('showdown');
    var converter = new Showdown.converter();


    var link = function (scope, element, attrs) {
        attrs.$observe('markdown', function (value) {
            var markup = converter.makeHtml(value);
            element.html(markup);
        });
    };

    return {
        restrict: 'A',
        link: link
    };
}]);

var myTextEditor = {
    bindings: {
        ngModel: '=',
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.options = {
            useWrapMode: true,
            showGutter: false,
            mode: 'markdown',
            firstLineNumber: 5,
        };
    },
    templateUrl: 'src/client/app/Components/Inputs/TextEditor/textEditorTemplate.html'
};


angular.module('my-angular-components').component('myTextEditor', myTextEditor);

var myModalButtons = {
    bindings: {
        save: '&',
        close: '&',
        saveText: '@',
        saveVisible: '@',
        closeVisible: '@',
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;
        
         vm.$onInit = function() {
            //defaults        
            vm.saveText= 'Save';
            vm.closeText= 'Close';

            vm.saveVisible = true;
            vm.closeVisible = true;
         };
              
      },
    templateUrl: 'src/client/app/Components/Modals/ModalButtons/modalButtonsTempalte.html'
};

angular.module('my-angular-components').component('myModalButtons', myModalButtons);

//Todo: Allow customize header size
var myModalHeader = {
    bindings: {
        id: '@',
        title: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            //defaults
            vm.title = 'Set this text using the title property';
            vm.id = 'modalHeader';
        };


    },
    templateUrl: 'src/client/app/Components/Modals/ModalHeader/modalHeaderTempalte.html'
};


var app = angular.module('my-angular-components').component('myModalHeader', myModalHeader);

//todo: allow customize height
var mySpinner = {
    bindings: {
        ngModel: '='
    },
    templateUrl: 'app/Other/Spinner/spinnerTemplate.html'
};

angular.module('my-angular-components').component('mySpinner', mySpinner);




angular.module('my-angular-components').directive('markdown', ["$window", function ($window) {
    //ar Showdown = require('showdown');
    var converter = new Showdown.converter();


    var link = function (scope, element, attrs) {
        attrs.$observe('markdown', function (value) {
            var markup = converter.makeHtml(value);
            element.html(markup);
        });
    };

    return {
        restrict: 'A',
        link: link
    };
}]);

var myTextEditor = {
    bindings: {
        ngModel: '=',
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.options = {
            useWrapMode: true,
            showGutter: false,
            mode: 'markdown',
            firstLineNumber: 5,
        };
    },
    templateUrl: 'src/client/app/Components/Inputs/TextEditor/textEditorTemplate.html'
};


angular.module('my-angular-components').component('myTextEditor', myTextEditor);

var myInfoPanel = {
    bindings: {
        infoText: '@',
        icon: '@',
        color: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            //deafults
            vm.ngModel = "Set this Text using ngModel";
            vm.icon = 'fa fa-info fa-2x';
            vm.color = '#64518A';
        };


        //TODO: Improve this
        vm.getStyle = function () {
            return ' border-left: 5px solid #64518A;' +
                ' border-radius: 0 15px 15px 0; !important; ' +
                ' padding: 1rem 1rem;   !important; ' +
                ' background: ' + vm.color + ' !important;' +
                ' font-size: 1.65rem; !important; margin: 0;  !important; ' +
                ' color: ' + vm.color + ' !important;';
        };

    },
    templateUrl: 'src/client/app/Components/Panels/InfoPanel/infoPanelTemplate.html'
};


angular.module('my-angular-components').component('myInfoPanel', myInfoPanel);

var myMoreLessButton = {
    bindings: {
        id: '@',
        buttonText: '@',
        click: '&',
        cssClass: '@',
        isCollapsed: '='
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';
        var vm = this;


        vm.$onInit = function () {
            //defaults
            vm.buttonText = 'More Search Options';
        };


        vm.getButtonText = function () {
            if (vm.isCollapsed) {
                return 'More Search Options';
            } else {
                return 'Fewer Search Options';
            }
        };

        vm.getButtonIcon = function () {
            if (vm.isCollapsed) {
                return 'fa fa-arrow-down';
            } else {
                return 'fa fa-arrow-up';
            }
        };
    },
    templateUrl: 'src/client/app/Components/Panels/MoreLessButton/moreLessButtonTemplate.html'
};

angular.module('my-angular-components').component('myMoreLessButton', myMoreLessButton);

var myMorelessPanel = {
    transclude: true,
    bindings: {
         isCollapsed: '@',
         buttonText: '@',
         expandButtonText: '@',
         collapseButtonText: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;

        vm.$onInit = function () {
            vm.buttonText = '';
            vm.isCollapsed = true;
            vm.collapseButtonText = "Less";
            vm.expandButtonText = "More";
        };


        //TODO: Allow chaning of Button text
        vm.getButtonText = function () {
            if (vm.isCollapsed) {
                return vm.expandButtonText;
            } else {
                return vm.collapseButtonText;
            }
        };

        //TODO: Allow changing of icon;
        vm.getButtonIcon = function () {
            if (vm.isCollapsed) {
                return 'fa fa-arrow-down';
            } else {
                return 'fa fa-arrow-up';
            }
        };



        // TODO: don't like this tidy
        // Returs a constructed style
        vm.getPanelStyle = function () {
            return 'overflow-y: ' + vm.getScrollBarVisibility(vm.showVerticalScrollBar);
        };

        vm.getPanelHeadingStyle = function () {
            if (vm.smallHeading !== undefined) {
                return 'padding: 3px 5px !important; ';
            }
            return 'padding: 10px 15px';
        };

        vm.getPanelContentStyle = function () {
            return 'overflow-y: auto;';
        };


        vm.getScrollBarVisibility = function (showVerticalScrollBar) {
            if (showVerticalScrollBar) {
                return 'scroll';
            } else {
                return 'hidden';
            }
        };

        //TODO: allow customization here
        vm.getButtonStyle = function () {
            if (vm.smallHeading !== undefined) {
                return 'margin-left: 5px; padding: 3px;';
            }
            return 'margin-left: 5px; padding: 10px;';
        };

        

    },
    templateUrl: 'src/client/app/Components/Panels/MoreLessPanel/moreLessPanel.html'
};


angular.module('my-angular-components').component("myMorelessPanel", myMorelessPanel);
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
    templateUrl:'src/client/app/Components/Panels/Panel/panelTemplate.html'
};


angular.module('my-angular-components').component('myPanel', myPanel);
var mySelectList = {
    bindings: {
        ngModel: '=',
        items: '=',
        fieldLabel: '@',
        fieldName: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            vm.items = [];
            vm.fieldLabel = 'You can set this text using field-label';
            vm.fieldName = 'mySelectField';
            vm.ngModel = 'null';
        };

    },
    templateUrl: 'src/client/app/Components/SelectLists/SelectList/selectListTemplate.html'

};


angular.module('my-angular-components').component('mySelectList', mySelectList);

var myStatusAlert = {
    bindings: {
        message: "@",
        isError: "@"
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;


        vm.$onInit = function () {
            vm.message = "";
            vm.isError = false;
        };

        vm.getClass = function () {
            if (vm.isError === 'true')
                return "errorMessage";
            else
                return "successMessage";
        };

        vm.getIcon = function () {
            if (vm.isError === 'true')
                return "fa fa-warning fa-2x";
            else
                return "fa fa-check fa-2x";
        };

        vm.getId = function () {
            if (vm.isError === 'true')
                return "errorMessage";
            else
                return "successMessage";
        };
       


    },
    templateUrl: 'src/client/app/Components/StatusAlerts/StatusAlert/statusAlertTemplate.html'
};


angular.module('my-angular-components').component('myStatusAlert', myStatusAlert);

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

        vm.$onInit = function () {
            //defaults
            vm.selected = {};
            vm.tagsFieldName = 'Tags';
            vm.tagList = [];
        };


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
            } else {
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


angular.module('my-angular-components').component('myTagsFilterList', myTagsFilterList);

/**
 * Date field component with Field Label, Date Popup, Help Popup
 */
var myDateField = {
    bindings: {
        ngModel: '=',
        fieldName: '@',
        fieldLabel: '@',
        tooltip: '@',
        dateOptions: '@',
        helpText: '@',
        readOnly: '@',
        horizontal: '@'
    },
    controllerAs: 'vm',
    controller: function (cssClassService) {
        'use strict';
        var vm = this;
        vm.cssClassService= cssClassService;
        vm.$onInit = function () {

            //defaults
            vm.fieldLabel = "Date";
            vm.locale = 'en-GB';
            vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            vm.format = vm.formats[0];
            vm.isOpened = false;
            vm.readOnly = false;
            vm.tooltip = "";
            vm.horizontal = false;
            vm.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };
        };



        // open the date popup
        vm.open = function () {
            vm.isOpened = true;
        };

    },
    templateUrl: 'src/client/app/Components/Inputs/DatesField/DateField/dateFieldTemplate.html'
};


var app = angular.module('my-angular-components')
    .component('myDateField', myDateField);

var adminLayout = {
    transclude: true,
    bindings: {
        title: '@',
        theme: '@',
        sideMenuItems: '=',
        userMenuItems: '=',
        alertMenuItems: '=',
        footerLinks: '=',
        userName:'@'
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        'use strict';

        var vm = this;
        vm.colapsed = false;
     

        vm.userName = "";

        $scope.toggle = true;

        var mobileView = 992;

        // // $scope.getWidth = function () {
        // //     return window.innerWidth;
        // // };

        // $scope.$watch($scope.getWidth, function (newValue, oldValue) {
        //     if (newValue >= mobileView) {
        //         if (angular.isDefined($cookieStore.get('toggle'))) {
        //             $scope.toggle = !$cookieStore.get('toggle') ? false : true;
        //         } else {
        //             $scope.toggle = true;
        //         }
        //     } else {
        //         $scope.toggle = false;
        //     }

        // });

        $scope.toggleSidebar = function () {
            $scope.toggle = !$scope.toggle;
            // $cookieStore.put('toggle', $scope.toggle);
        };

        window.onresize = function () {
            $scope.$apply();
        };

        vm.getState = function () {
            if (vm.colapsed)
                return "open";
            else
                return "";
        };


    },
    templateUrl: 'src/client/app/Components/Layout/AdminLayout/AdminLayoutCore/adminLayoutTemplate.html'
};


angular.module('my-angular-components').component('adminLayout', adminLayout);

var adminSideMenu = {
    transclude: true,
    bindings: {
        colapsed: '=',
        sideMenuItems:'=',
        footerLinks: '='
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;
        
        vm.$onInit = function () {
            vm.colapsed = true;
        };

        vm.toggleSidebar = function () {
            vm.colapsed = !vm.colapsed;
        };

    },
    templateUrl: 'src/client/app/Components/Layout/AdminLayout/SideMenu/SideMenu/sideMenuTemplate.html'
};


angular.module('my-angular-components').component('adminSideMenu', adminSideMenu);

var sideMenuFooter = {
    bindings: {
        links:'='
    },
    controllerAs: 'vm',
    templateUrl: 'src/client/app/Components/Layout/AdminLayout/SideMenu/SideMenuFooter/sideFooterTemplate.html'
};


angular.module('my-angular-components').component('sideMenuFooter', sideMenuFooter);

var adminSideMenuItems = {
    bindings: {
        menuItems:'='
    },
    controllerAs: 'vm',
    controller: function($rootScope){
        var vm = this;
        
        vm.isAuthenticated = $rootScope.isAuthenticated;
    },
    templateUrl: 'src/client/app/Components/Layout/AdminLayout/SideMenu/SideMenuItems/sideMenuItemsTemplate.html'
};


angular.module('my-angular-components').component('adminSideMenuItems', adminSideMenuItems);

var alertsDropDownMenu = {
    bindings: {
        menuItems:'=',
    },
    controllerAs: 'vm',
    templateUrl: 'src/client/app/Components/Layout/AdminLayout/Header/AlertsDropDown/alertsDropDownMenuTemplate.html'
};


angular.module('my-angular-components').component('alertsDropDownMenu', alertsDropDownMenu);

var adminHeaderBar = {
    transclude: true,
    bindings: {
        title: '@',
        theme: '@',
        userMenuItems: "=",
        alertMenuItems: "=",
        userName: '@'
    },
    controllerAs: 'vm',
    templateUrl:'src/client/app/Components/Layout/AdminLayout/Header/HeaderBar/headerBarTemplate.html'
};


angular.module('my-angular-components').component('adminHeaderBar', adminHeaderBar);
var userOptionsDropDownMenu = {
    bindings: {
        menuItems:'=',
        userName: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;
        
       

    },
    templateUrl: 'src/client/app/Components/Layout/AdminLayout/Header/UserOptionsDropDown/userOptionsDropDownMenuTemplate.html'
};


angular.module('my-angular-components').component('userOptionsDropDownMenu', userOptionsDropDownMenu);
