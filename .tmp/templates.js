angular.module('myComponents').run(['$templateCache', function($templateCache) {$templateCache.put('app/Components/Reports/reportViewerTemplate.html','<div ej-reportviewer id=container e-reportserviceurl={{vm.reportUrl}} e-processingmode={{vm.processingMode}} e-reportpath={{vm.report}} style=height:680px></div>');
$templateCache.put('app/Examples/Inputs/inputsTemplate.html','<div class=example><h5>Text Field</h5><hr><div class=usage><code>\r\n            <b>\r\n                <span class=tag> &lt;my-text-field </span>\r\n                <span class=attrib>field-label=</span>"Firstname"  \r\n                <span class=attrib>ng-model=</span>"vm.firstName"&gt;\r\n                <span class=tag>&lt;/my-text-field&gt;</span>\r\n            </b>\r\n            </code></div><my-text-field field-label=Firstname ng-model=vm.firstName></my-text-field></div>');
$templateCache.put('app/Examples/Panels/panelsTemplate.html','<div class=example><h5>Panels</h5><hr><div class=usage><code>\r\n            <b>\r\n                <span class=tag> &lt;my-panel </span>\r\n                <span class=attrib>title=</span>"My Awesome Title"  \r\n                <span class=tag>&lt;/my-panel&gt;</span>\r\n            </b>\r\n            </code></div><my-panel title=Titesl></my-panel></div>');
$templateCache.put('app/Components/Buttons/DeleteButton/deleteButtonTemplate.html','<div class={{vm.cssClass} id={{vm.id}} ng-click=vm.click()>{{vm.buttonText}} <i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/Components/Buttons/CreateButton/createButtonTemplate.html','bklhlkjhlkj<div ej-button id={{vm.id}} ng-click=vm.click() e-text=vm.buttonText><i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/Components/Buttons/EditButton/editButtonTemplate.html','<div class={{vm.cssClass} id={{vm.id}} ng-click=vm.click()>{{vm.buttonText}} <i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/Components/CheckBoxes/CheckboxField/checkboxField.html','<input type=checkbox class=nodetext id=check1> <label for=check1 class=clslab>Music</label>');
$templateCache.put('app/Components/CheckBoxes/DisplayCheckField/displayCheckFieldTemplate.html','<div class=row><div class=col-sm-8><label class=control-label><strong>{{$ctrl.fieldLabel}}</strong></label></div><div class=col-sm-2><i ng-show=$ctrl.ngModel class="fa fa-check fa-2x"></i></div></div>]');
$templateCache.put('app/Components/ComboBoxes/CategorySelect/categorySelectTemplate.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">{{vm.fieldLabel}}</label><select ng-model=vm.selected class=form-control><option ng-repeat="category in vm.cats" value={{category}}>{{category}}</option></select></div>');
$templateCache.put('app/Components/Dates/DateField/dateFieldTemplate.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">{{vm.fieldLabel}}</label></div>');
$templateCache.put('app/Components/Dates/DisplayDate/displayDateTemplate.html','<div class=row><div class=col-md-4><span class=control-label><strong>{{vm.fieldLabel}}</strong></span></div><div class=col-md-8>{{vm.ngModel | date:\'medium\' }}</div></div>');
$templateCache.put('app/Components/Fields/DisplayField/displayFieldTemplate.html','<div class=row><div class={{vm.fieldLabelWitdh}}><label class=control-label><strong>{{vm.fieldLabel}}</strong></label></div><div class=col-sm-6>{{vm.ngModel}}</div></div>');
$templateCache.put('app/Components/Fields/DisplayTextArea/displayTextAreaTemplate.html','<div class=well><strong>{{vm.fieldLabel}}</strong><p>{{vm.ngModel}}</p></div>');
$templateCache.put('app/Components/Fields/TextArea/textAreaFieldTemplate.html','<div class=form-group><label class=control-label style="min-width: 80px !important;">{{vm.fieldLabel}}</label><div class=input-group style="width: 80% !important;"><textarea type=text class=form-control id={{vm.fieldName}} ng-model=vm.ngModel ng-required="{{ vm.required }}">\r\n\r\n         \r\n        <div class=input-group-addon style="line-height: 0 !important;" ng-show=vm.showToolTip><my-popover ng-model=vm.toolTip></my-popover></div>\r\n     </textarea></div></div>');
$templateCache.put('app/Components/Fields/TextField/textFieldTemplate.html','<div class=form-group><label class=control-label style="min-width: 80px !important;">{{vm.fieldLabel}}</label><div class=input-group style="width: 80% !important;"><input type=text class=form-control id={{vm.fieldName}} ng-model=vm.ngModel ng-required="{{ vm.required }}"><div class="input-group-addon style=line-height: 0 !important;" ng-show=vm.showToolTip><my-popover ng-model=vm.toolTip></my-popover></div></div></div>');
$templateCache.put('app/Components/Filters/FilterTextbox/filterTextboxTemplate.html','<div class=input-group style="display: flex"><input type=text ng-model=vm.ngModel placeholder={{vm.placeholder}} id={{vm.fieldName}} class=form-control> <button class="btn btn-default class=" input-group-btn\' id=searchFilter><i class="glyphicon glyphicon-search"></i></button></div>');
$templateCache.put('app/Components/Headers/PageHeader/pageHeaderTemplate.html','<h1 id=pagetitle>{{ vm.title }}</h1>');
$templateCache.put('app/Components/Modals/ModalButtons/modalButtonsTempalte.html','<div class=modal-footer><span><button class="btn btn-primary btn-large pull-left" id=save ng-click=vm.save() type=submit>{{vm.saveText}}</button><button class="btn btn-default pull-left" id=close ng-click=vm.close() type=button>{{vm.closeText}}</button></span></div>');
$templateCache.put('app/Components/Modals/ModalHeader/modalHeaderTempalte.html','<div class=modal-header id=vm.id><h3 class=modal-title>{{vm.title}}</h3></div>');
$templateCache.put('app/Components/Other/Spinner/spinnerTemplate.html','<div class="row text-center"><img style="height: 100px" ng-src=http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif></div>');
$templateCache.put('app/Components/Panels/InfoPanel/infoPanelTemplate.html','<div class=bg-success>{{vm.info}}<ul class=on-page-nav></ul></div>');
$templateCache.put('app/Components/Panels/MoreLessButton/moreLessButtonTemplate.html','<button type=button class={{vm.cssClass} id={{vm.id}} ng-click="vm.isCollapsed = !vm.isCollapsed"><i ng-class=vm.getButtonIcon() aria-hidden=true></i>{{vm.getButtonText() }}</button>');
$templateCache.put('app/Components/Panels/MoreLessPanel/moreLessPanel.html','<div class="panel panel-{{vm.style}}" style={{vm.getPanelStyle()}}><div class=panel-heading style={{vm.getPanelHeadingStyle()}} id={{vm.fieldName}}><i class="fa fa-{{vm.icon}} fa-{{vm.iconSize}}x"></i> <span style="padding-left: 10px; font-weight: 700">{{vm.title}}</span><div ng-show=vm.showAddButton id={{vm.addButtonId}} ng-click=vm.add() style={{vm.getButtonStyle()}} class="btn btn-default pull-right"><i class="fa fa-plus"></i></div><div ng-show=vm.showEditButton id={{vm.editButtonId}} ng-click=vm.edit() style={{vm.getButtonStyle()}} class="btn btn-default pull-right"><i class="fa fa-bars"></i></div></div><div class=panel-body ng-transclude style={{vm.getPanelContentStyle()}} ng-if=!vm.isCollapsed>{{vm.ngModel}}</div><div class=panel-footer ng-if=vm.showFooter style={{vm.getPanelStyle()}}><div class=row><div class=col-md-6><span class=pull-left>{{vm.footerLeftLabel}}</span></div><div class=col-md-6><span class=pull-right>{{vm.footerRightLabel}}</span></div></div></div></div>');
$templateCache.put('app/Components/Panels/Panel/panelTemplate.html','<div class="panel panel-{{vm.style}}" style={{vm.getPanelStyle()}}><div class=panel-heading style={{vm.getPanelHeadingStyle()}} id={{vm.fieldName}}><i class="fa fa-{{vm.icon}} fa-{{vm.iconSize}}x"></i><span style="padding-left: 10px; font-weight: 700">{{vm.title}}</span><div ng-show=vm.showAddButton id={{vm.addButtonId}} ng-click=vm.add() style={{vm.getButtonStyle()}} class="btn btn-default pull-right"><i class="fa fa-plus"></i></div><div ng-show=vm.showEditButton id={{vm.editButtonId}} ng-click=vm.edit() style={{vm.getButtonStyle()}} class="btn btn-default pull-right"><i class="fa fa-bars"></i></div></div><div class=panel-body ng-transclude style={{vm.getPanelContentStyle()}}></div><div class=panel-footer ng-if=vm.showFooter style={{vm.getPanelStyle()}}><div class=row><div class=col-md-6><span class=pull-left>{{vm.footerLeftLabel}}</span></div><div class=col-md-6><span class=pull-right>{{vm.footerRightLabel}}</span></div></div></div></div>');
$templateCache.put('app/Components/SelectLists/SelectList/selectListTemplate.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">{{vm.fieldLabel}}</label><select ng-model=vm.ngModel class=form-control id={{vm.fieldName}}><option ng-repeat="option in vm.items" value={{option.Id}}>{{option.Id}}</option></select></div>');
$templateCache.put('app/Components/StatusAlerts/StatusAlert/statusAlertTemplate.html','');
$templateCache.put('app/Components/Tags/TagsField/tagsFieldTemplate.html','Example {{vm.ngModel}}<div class=form-group><span for=tags>{{vm.fieldLabel}}</span><ui-select multiple ng-model=selected.value><ui-select-match><span ng-bind=$select.selected.name></span></ui-select-match><ui-select-choices repeat="item in (itemArray | filter: $select.search) track by item.id"><span ng-bind=item.name></span></ui-select-choices></ui-select></div>');
$templateCache.put('app/Components/Tags/TagsFilter/tagsFilterTemplate.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">Tags</label><div class=form-control><span ng-repeat="tag in vm.tagList track by $index"><span class=badge ng-click=vm.tagClicked(tag) style="cursor: pointer">{{tag}}</span></span></div></div>');}]);