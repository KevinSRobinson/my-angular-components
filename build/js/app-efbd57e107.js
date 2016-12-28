var app = angular.module('my-angular-components', ['ngAnimate', 'ui.bootstrap', 'ngSanitize', 'ui.select']);


app.$inject = ['ngAnimate', 'ui.bootstrap', 'ngSanitize', 'ui.select'];


  


// app.config(function($momentProvider){
//     $momentProvider
//         .asyncLoading(true)
//         .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');
// });
// //
// app.config([ '$momentProvider',
//     function($momentProvider) {
//
//         $momentProvider
//             .defaultViewFormat('LL')
//             .defaultModelFormat('MM/DD/YYYY')
//             .strictView(false);
//
//     } ]);
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
var templateService =  function ($http) {
    var getTemplates = function () {
        return $http.get('src/client/app/Components/templates.json');
    };

    return {
        getTemplates: getTemplates
    };
};

angular.module("my-angular-components").factory("templateService", templateService);
angular.module('examples', ['my-angular-components', 'ngFabForm']);

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

var common = {
    templateUrl: "src/client/app/Examples/Common/commonTemplate.html"
};

angular.module('examples').component('statusAlerts', common);


var dates = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

    

        vm.$onInit = function(){
            vm.sampleDate = new Date();
        };
    },
    templateUrl: "src/client/app/Examples/Dates/datesTemplate.html"
};

angular.module('examples').component('datesExamples', dates);


var exampleForm = {
    controllerAs: 'vm',
    controller: function (ngFabForm, $timeout) {
        var vm = this;
        vm.simulateError = false;
        vm.customerForm = {};
        vm.status = {
            message: "",
            isError: false,
            show: false
        };


        vm.$onInit = function () {
            vm.sampleDate = new Date();
            vm.saving = true;
            vm.selectedCats = {};
            vm.selectedTags = {};
            vm.customFormOptions = angular.copy(ngFabForm.config);
        };


        vm.submit = function () {
            vm.status.isError = vm.simulateError;

            vm.saving = true;

            $timeout(function () {
                if (vm.status.isError)
                    vm.status.message = "Something went wrong!";
                else
                    vm.status.message = "Form Submitted";

                vm.status.show = true;
                vm.saving = false;
            }, 2000);



        };

        vm.cats = [{
            id: 1,
            name: "Cat 1"
        }, {
            id: 2,
            name: "Cat 2"
        }];

        vm.tags = [{
            id: 1,
            name: "VB.net"
        }, {
            id: 2,
            name: "c# "
        }];
    },
    templateUrl: "src/client/app/Examples/ExampleForm/exampleForm.html"
};

angular.module('examples').component('exampleForm', exampleForm);

var inputs = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.startDate = new Date();
        vm.firstName = "Kevin";
        vm.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e";
       
        vm.agree = true;
    },
    templateUrl: "src/client/app/Examples/Inputs/inputsTemplate.html"
};

angular.module('examples').component('inputExamples', inputs);

var modals = {
    controllerAs: 'vm',
    controller: function ($uibModal) {
        var vm = this;

        vm.open = function () {
            return $uibModal.open({
                templateUrl: 'src/client/app/Examples/Modals/sampleModalTemplate.html',
                controllerAs: 'vm',
                controller:function($uibModalInstance){
                    var vm = this;
                    vm.close = function () {
                      $uibModalInstance.close();
                    };
                }
            });
        };
    },
    templateUrl: "src/client/app/Examples/Modals/modalsTemplate.html"
};

angular.module('examples').component('modalExamples', modals);

var panels = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

        vm.testTable = {
            Headers:['Titel 1', 'Title2'],
            Body:['Titel 1', 'Title2']
        };



        vm.add = function(){
                alert('Add Clicked');
        };

        vm.edit = function(){
                alert('Edit Clicked');
        };
    },
    templateUrl: "src/client/app/Examples/Panels/panelsTemplate.html"
};

angular.module('examples').component('panelExamples', panels);


var statusAlerts = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

 
    },
    templateUrl: "src/client/app/Examples/StatusAlerts/statusAlertsTemplate.html"
};

angular.module('examples').component('statusAlerts', statusAlerts);


var tags = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.selectedCats = {};
        vm.selectedTags = {};
        
        vm.cats = [{
            id: 1,
            name: "Cat 1"
        }, {
            id: 2,
            name: "Cat 2"
        }];

        vm.tags = [{
            id: 1,
            name: "VB.net"
        }, {
            id: 2,
            name: "c# "
        }];
    },
    templateUrl: "src/client/app/Examples/Tags/tagsTemplate.html"
};

angular.module('examples').component('tags', tags);

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


var contentItem = function ($compile, templateService, $http) {
    var getTemplate = function (templates, contentType) {
        var template = '';

        switch (contentType) {
            case 'image':
                template = templates.imageTemplate;
                break;
            case 'video':
                template = templates.videoTemplate;
                break;
            case 'notes':
                template = templates.noteTemplate;
                break;
        }

        return template;
    };

    var linker = function (scope, element, attrs) {
        scope.rootDirectory = 'images/';

        var getTemplates = $http.get('src/client/app/Components/templates.json');
        getTemplates.then(function (response) {
            var templates = response.data;
            console.log(response);
            element.html(getTemplate(templates, scope.content.content_type));

            $compile(element.contents())(scope);
        });
    };

    return {
        restrict: 'E',
        link: linker,
        scope: {
            content: '='
        }
    };
};



angular.module('my-angular-components').directive('contentItem', contentItem);
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

angular.module('my-angular-components').component('mySelectField', mySelectField);


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


// ' <div class='row'>' +
// ' <div class='col-md-6'>{{vm.footerLeftLabel}}</div>'+
// ' <div class='col-md-6'>{{vm.footerRightLabel}}</div>'+
// '</div>' +
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

angular.module('my-angular-components').run(['$templateCache', function($templateCache) {$templateCache.put('app/Components/Reports/reportViewerTemplate.html','<div ej-reportviewer id=container e-reportserviceurl={{vm.reportUrl}} e-processingmode={{vm.processingMode}} e-reportpath={{vm.report}} style=height:680px></div>');
$templateCache.put('app/Examples/Common/commonTemplate.html','<h1>Common Properties</h1><table class="table table-striped"><thead><tr><td>Property</td><td>Required</td><td>Description</td></tr></thead><tr><td>field-label</td><td>No</td><td>Set the label value <small>Default: Date</small></td></tr><tr><td>field-name</td><td>No</td><td>Set the Name and ID values of the input.<br><small>Default: Uses the field-label to create a value</small></td></tr><tr><td>help-text</td><td>No</td><td>Set the information text to appear under the control<br><small>Default: empty</small></td></tr></table>');
$templateCache.put('app/Examples/Dates/datesTemplate.html','<form class=for-horizontal><div class="col-md-8 center-block"><h1>Dates</h1><div class=well><h4>Date Field</h4><my-date-field ng-model=vm.sampleDate horizontal=true tooltip="Please Enter a Date" label-width=4 inout-width=8 field-label="Start Date"></my-date-field><br></div><div class=well><h4>Date Field</h4><my-date-field ng-model=vm.sampleDate horizontal=true tooltip=ddfgdfgdf field-label="Start Date" help-text="Enter a Date"></my-date-field><br></div><div class=well><h4>Date Field Read-only</h4><my-date-field ng-model=vm.sampleDate read-only=true horizontal=true field-label="Start Date"></my-date-field><br></div></div></form>');
$templateCache.put('app/Examples/ExampleForm/exampleForm.html','<div class="col-md-6 center-block"><h1>Example Form</h1><form role=form name=vm.customerForm ng-submit=submit() ng-fab-form-options=customFormOptions><my-status-alert message={{vm.status.message}} ng-show=vm.status.show is-error={{vm.status.isError}}></my-status-alert><my-input-field field-label="First Name" ng-model=vm.firstName placeholder="Enter Your First name" tooltip="We need your First Name" required=vm.required></my-input-field><my-input-field field-label="Last Name" ng-model=vm.lastName placeholder="Enter Your Last name" , tooltip="We need your Last Name"></my-input-field><my-input-field field-label="About Me" input-type=textarea ng-model=vm.aboutMe placeholder="Enter a description about yourself"></my-input-field><my-input-field field-label="Simulate Error" input-type=checkbox ng-model=vm.simulateError placeholder="Enter a description about yourself"></my-input-field><my-input-field field-label="Start Date" input-type=date ng-model=vm.sampleDate placeholder="Enter a description about yourself"></my-input-field><my-spinner-button button-text="Submit Form" saving=vm.saving is-disabled=!vm.customerForm.$valid ng-click=vm.submit()></my-spinner-button></form></div>');
$templateCache.put('app/Examples/Inputs/inputsTemplate.html','<div class="col-md-8 center-block"><h1>Textbox</h1><div class=well><h4>Text Box With Placeholder</h4><my-input-field field-label="First Name" placeholder="Enter Your First name" ng-model=vm.firstName></my-input-field></div><div class=well><h4>Textbox With ToolTip</h4><my-input-field field-label="First Name" ng-model=vm.firstName tooltip="Please Enter your fristname"></my-input-field></div><div class=well><h4>Textbox Horizontal</h4><my-input-field field-label="First Name" horizontal=true ng-model=vm.firstName tooltip="Please Enter your fristname"></my-input-field><br></div><div class=well><h4>Textbox Read-only</h4><my-input-field field-label="First Name" read-only=true horizontal=true ng-model=vm.firstName tooltip="Please Enter your fristname"></my-input-field><br></div><h1>Textarea</h1><div class=well><h4>TextArea</h4><my-input-field field-label=Description input-type=textarea ng-model=vm.description tooltip="Please Enter a description"></my-input-field><br></div><div class=well><h4>TextArea Read-only</h4><my-input-field field-label=Description input-type=textarea read-only=true ng-model=vm.description tooltip="Please Enter a description"></my-input-field><br></div><h1>Checkboxes</h1><div class=well><h4>Checkbox</h4><my-input-field field-label="I Agree" input-type=checkbox ng-model=vm.agree></my-input-field><br></div><div class=well><h4>Checkbox Read-only</h4><my-input-field field-label="I Agree" input-type=checkbox read-only=true ng-model=vm.agree tooltip="Please Enter a description"></my-input-field><br></div></div>');
$templateCache.put('app/Examples/Modals/modalsTemplate.html','<div class=example><h5>Modals</h5><hr><div ng-click=vm.open() class="btn btn-success">Click To Open</div></div>');
$templateCache.put('app/Examples/Modals/sampleModalTemplate.html','<my-modal-header title="Edit My Contact1"></my-modal-header><div class=modal-body><my-text-field field-label=FirstName ng-model=vm.contact.FirstName></my-text-field><my-text-field field-label=LastName ng-model=vm.contact.LastName></my-text-field></div><my-modal-buttons save="alert(\'Saved\')" close=vm.close()></my-modal-buttons>');
$templateCache.put('app/Examples/Panels/panelsTemplate.html','<div class=example><h1>Panels</h1><hr><h2>Moreless Panel</h2><div class=row><div class=col-md-6><my-moreless-panel expand-button-text="Show me more!" collapse-button-text="Ive seen Enough">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris lectus, consectetur gravida mattis eget, maximus a lectus. Donec luctus sagittis arcu vel ultricies. Cras id porttitor erat, non sodales nunc. Etiam gravida lobortis pulvinar. Sed nibh turpis, elementum id sodales ac, ullamcorper vitae ipsum. Nam efficitur lacus vitae cursus tincidunt. Ve</my-moreless-panel></div><div class=col-md-6><div class=usage><code>\r\n                    <b>\r\n                        <span class=tag>&lt;my-moreless-panell&gt;</span><br>\r\n                        <spam class=value>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris lectus .. <br>\r\n                        <span class=tag>&lt;/my-moreless-panel&gt;</span>\r\n                    </spam></b>\r\n                </code></div><my-panel title=Options theme=success><table class="table table-striped"><thead><tr><td>Property</td><td>Required</td><td>Description</td></tr></thead><tr><td>expand-button-text</td><td>Yes</td><td>Sets the Expand button text</td><small>Default: More</small></tr><tr><td>field-name</td><td>No</td><td>Sets the Collapse button text</td><small>Default: Less</small></tr><tr><td>is-collapsed</td><td>No</td><td>Allows you set the default state<br><small>Default: true</small></td></tr></table></my-panel></div><p></p><h3>Info Panel</h3><my-panel title="My Great Info Panel" icon=info show-add-button=true show-edit-button=true show-footer=true footer-left-label="Left Footer Text" footer-right-label="Right Footer Text" add=vm.add() edit=vm.edit() icon-size=2>"orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</my-panel><p></p><h3>Info Panel</h3><my-info-panel info-text="Some infromation"></my-info-panel></div></div>');
$templateCache.put('app/Examples/StatusAlerts/statusAlertsTemplate.html','<div class=example><h1>Status Alerts</h1><hr><my-status-alert show=true is-error=true error-message="Something Went Wrong!!"></my-status-alert><my-status-alert show=true is-success=true success-message="Everyginng is Great!!"></my-status-alert></div>');
$templateCache.put('app/Examples/Tags/tagsTemplate.html','<div class="col-md-6 center-block"><h1>Select Fields</h1><div class=usage><code>\r\n                    <b>\r\n                        <span class=tag>&lt;my-select-field&gt;</span><br>\r\n                       \r\n                        <span class=tag>&lt;/my-select-field&gt;</span>\r\n                    </b>\r\n                </code></div><my-panel title=Options theme=success><table class="table table-striped"><thead><tr><td>Property</td><td>Required</td><td>Description</td></tr></thead><tr><td>ng-model</td><td>Yes</td><td>Selected Value</td></tr><tr><td>items</td><td>Yes</td><td>The List if options</td></tr><tr><td>input-tpye</td><td>No</td><td>The type of select: Tags or Combobox <small>default : tags</small></td></tr></table></my-panel><div class=well><h4>Tags</h4><my-select-field field-label=Languages items=vm.tags tooltip="Please Select a Language" ng-model=vm.selectedTags></my-select-field><h4>Tags</h4><my-select-field field-label=Languages items=vm.cats input-type=combobox tooltip="Please Select a Language" ng-model=vm.selectedTags></my-select-field></div></div>');
$templateCache.put('app/Components/Buttons/CreateButton/createButtonTemplate.html','<div class={{vm.cssClass} id={{vm.id}} ng-click=vm.click()>{{vm.buttonText}}<i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/Components/Buttons/DeleteButton/deleteButtonTemplate.html','<div class={{vm.cssClass} id={{vm.id}} ng-click=vm.click()>{{vm.buttonText}}<i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/Components/Buttons/EditButton/editButtonTemplate.html','<div class={{vm.cssClass} id={{vm.id}} ng-click=vm.click()>{{vm.buttonText}}<i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/Components/Buttons/SpinnerButton/spinnerButtonTemplate.html','<button id={{vm.id}} class="btn btn-success" ng-click=vm.click() n ng-disabled=vm.isDisabled>{{vm.buttonText}}<i class="fa fa-circle-o-notch fa-spin" ng-if=vm.saving></i></button>');
$templateCache.put('app/Components/ComboBoxes/CategorySelect/categorySelectTemplate.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">{{vm.fieldLabel}}</label><select ng-model=vm.selected class=form-control><option ng-repeat="category in vm.cats" value={{category}}>{{category}}</option></select></div>');
$templateCache.put('app/Components/Filters/FilterTextbox/filterTextboxTemplate.html','<div class=input-group style="display: flex"><input type=text ng-model=vm.ngModel placeholder={{vm.placeholder}} id={{vm.fieldName}} class=form-control> <button class="btn btn-default" id=searchFilter><i class="glyphicon glyphicon-search"></i></button></div>');
$templateCache.put('app/Components/Headers/PageHeader/pageHeaderTemplate.html','<h1 id=pagetitle>{{ vm.title }}</h1>');
$templateCache.put('app/Components/Inputs/InputField/inputFieldTemplate.html','<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 100% !important;\r\n    }\r\n    \r\n    .input-group .form-control {\r\n        z-index: 100;\r\n    }\r\n\r\n</style><div class=form-group><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for=vm.fieldName>{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if=!vm.readOnly class=input-group><input ng-if="vm.inputType===\'textbox\'" ng-model=vm.ngModel type=text class=form-control id=vm.fieldName placeholder={{vm.placeholder}} required><input ng-if="vm.inputType===\'email\'" type=email class=form-control id=vm.fieldName placeholder={{vm.placeholder}}><textarea ng-if="vm.inputType===\'textarea\'" class=form-control id=vm.fieldName ng-model=vm.ngModel placeholder={{vm.placeholder}}></textarea><input ng-if="vm.inputType===\'checkbox\'" type=checkbox id=vm.fieldName ng-model=vm.ngModel><span ng-if="vm.inputType===\'date\'"><input type=text class=form-control uib-datepicker-popup={{vm.format}} ng-model=vm.ngModel is-open=vm.isOpened style="width: 82%" datepicker-options=vm.dateOptions ng-required=true close-text=Close alt-input-formats=altInputFormats> <span class="btn btn-default" ng-click=vm.open()><i class="fa fa-bars"></i></span></span> <span ng-show="vm.tooltip!==\'\'" class=input-group-addon uib-popover={{vm.tooltip}} popover-title=Info popover-class=popover popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show=vm.readOnly><p ng-if="vm.inputType!==\'checkbox\'">{{vm.ngModel}}</p><i ng-if="vm.inputType===\'checkbox\'" ng-show=vm.ngModel class="fa fa-check fa-2x"></i></div><p class=help-block>{{vm.helpText}}</p></div></div>');
$templateCache.put('app/Components/Inputs/SelectField/selectFieldTemplate.html','<style>\r\n.popover\r\n{\r\n    min-width: 200px;\r\n}\r\n.input-group{\r\n    width: 100% !important; \r\n}\r\n</style><div class=form-group><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for=vm.fieldName>{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if=!vm.readOnly class=input-group><ui-select ng-if="vm.inputType===\'tags\'" multiple ng-model=vm.ngModel theme=bootstrap><ui-select-match placeholder="Select a Tag...">{{$item.name}}</ui-select-match><ui-select-choices repeat="item in (vm.items | filter: $select.search) track by item.id"><span ng-bind=item.name></span></ui-select-choices></ui-select><select ng-if="vm.inputType===\'combobox\'" size=vm.size multiple=vm.multiSelect ng-model=vm.ngModel class=form-control id={{vm.fieldName}}><option ng-repeat="option in vm.items" ng-value={{option.id}}>{{option.name}}</option></select><span ng-show="vm.tooltip!==\'\'" class=input-group-addon uib-popover={{vm.tooltip}} popover-title=Info popover-class=popover popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show=vm.readOnly><span ng-repeat="tag in vm.items" class=badge>{{tag.name}} <span></span></span></div><p class=help-block>{{vm.helpText}}</p></div></div>');
$templateCache.put('app/Components/Inputs/ToolTip/tooltipTemplate.html','<div>Help</div><div class=form-group><input type=text ng-model=dynamicPopover.title class=form-control></div>');
$templateCache.put('app/Components/Modals/ModalButtons/modalButtonsTempalte.html','{{vm.save}}<div class=modal-footer><span><button class="btn btn-primary btn-large pull-left" ng-if=vm.saveVisible id=save ng-click=vm.save() type=submit>{{vm.saveText}}</button><button class="btn btn-default pull-left" ng-if=vm.closeVisible id=close ng-click=vm.close() type=button>{{vm.closeText}}</button></span></div>');
$templateCache.put('app/Components/Modals/ModalHeader/modalHeaderTempalte.html','<div class=modal-header id=vm.id><h3 class=modal-title>{{vm.title}}</h3></div>');
$templateCache.put('app/Components/Other/Spinner/spinnerTemplate.html','<div class="row text-center"><img style="height: 100px" ng-src=http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif></div>');
$templateCache.put('app/Components/Panels/InfoPanel/infoPanelTemplate.html','<div class=well><i class="fa fa-{{vm.icon}}"></i> {{vm.infoText}}<ul class=on-page-nav></ul></div>');
$templateCache.put('app/Components/Panels/MoreLessButton/moreLessButtonTemplate.html','<button type=button class={{vm.cssClass} id={{vm.id}} ng-click="vm.isCollapsed = !vm.isCollapsed"><i ng-class=vm.getButtonIcon() aria-hidden=true></i>{{vm.getButtonText() }}</button>');
$templateCache.put('app/Components/Panels/MoreLessPanel/moreLessPanel.html','<div uib-collapse=vm.isCollapsed><div class=panel-body ng-transclude></div></div><button type=button class="btn btn-default" ng-click="vm.isCollapsed = !vm.isCollapsed">{{vm.getButtonText()}}</button>');
$templateCache.put('app/Components/Panels/Panel/panelTemplate.html','<div class="panel panel-{{vm.theme}}" ng-style={{vm.getPanelStyle()}}><div class=panel-heading ng-style={{vm.getPanelHeadingStyle()}} id={{vm.fieldName}}><i class="fa fa-{{vm.icon}} fa-{{vm.iconSize}}x"></i><span style="padding-left: 10px; font-weight: 700" ng-style={{vm.getTitleStyle()}}>{{vm.title}}</span><div ng-show=vm.showAddButton id={{vm.addButtonId}} ng-click=vm.add() ng-style={{vm.getButtonStyle()}} class="btn btn-default pull-right" style="padding: 3px;"><i class="fa fa-plus"></i></div><div ng-show=vm.showEditButton id={{vm.editButtonId}} ng-click=vm.edit() ng-style={{vm.getButtonStyle()}} class="btn btn-default pull-right" style="padding: 3px;"><i class="fa fa-bars"></i></div></div><div class=panel-body ng-transclude style={{vm.getPanelContentStyle()}}></div><div class=panel-footer ng-if=vm.showFooter style={{vm.getPanelStyle()}}><div class=row><div class=col-md-6><span class=pull-left>{{vm.footerLeftLabel}}</span></div><div class=col-md-6><span class=pull-right>{{vm.footerRightLabel}}</span></div></div></div></div>');
$templateCache.put('app/Components/SelectLists/SelectList/selectListTemplate.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">{{vm.fieldLabel}}</label><select ng-model=vm.ngModel class=form-control id={{vm.fieldName}}><option ng-repeat="option in vm.items" value={{option.Id}}>{{option.Id}}</option></select></div>');
$templateCache.put('app/Components/StatusAlerts/StatusAlert/statusAlertTemplate.html','<div ng-class=vm.getClass() id=getId()><i class=vm.getIcon()></i>{{vm.message}}</div>');
$templateCache.put('app/Components/Tags/TagsFilter/tagsFilterTemplate.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">Tags</label><div class=form-control><span ng-repeat="tag in vm.tagList track by $index"><span class=badge ng-click=vm.tagClicked(tag) style="cursor: pointer">{{tag}}</span></span></div></div>');
$templateCache.put('app/Examples/ExampleForm/CreateButton/createButtonTemplate.html','<div class={{vm.cssClass} id={{vm.id}} ng-click=vm.click()>{{vm.buttonText}}<i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/Components/Inputs/DatesField/DateField/dateFieldTemplate.html','<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 40% !important;\r\n    }\r\n\r\n</style><div class=form-group><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for=vm.fieldName>{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if=!vm.readOnly class=input-group><input type=text class=form-control uib-datepicker-popup={{vm.format}} ng-model=vm.ngModel is-open=vm.isOpened datepicker-options=vm.dateOptions ng-required=true close-text=Close alt-input-formats=altInputFormats><span class=input-group-btn><button type=button class="btn btn-default" ng-click=vm.open()><i class="fa fa-bars"></i></button></span><span ng-show="vm.tooltip!==\'\'" class=input-group-addon uib-popover={{vm.tooltip}} popover-title=Info popover-class=popover popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show=vm.readOnly>{{vm.ngModel | date}}</div><p class=help-block>{{vm.helpText}}</p></div></div>');}]);