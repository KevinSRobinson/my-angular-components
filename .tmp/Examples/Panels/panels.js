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
    template:'<div class="example"><h1>Panels</h1><h4>my-panel</h4><p><div hljs><my-panel title="My Great Info Panel" icon="info" show-add-button="true" show-edit-button="true" show-footer="true" footer-left-Label="Left Footer Text" footer-right-Label="Right Footer Text" add="vm.add()" edit="vm.edit()" icon-size="2">Lorem ipsum ....</my-panel></div><my-panel title="My Great Info Panel" icon="info" show-add-button="true" show-edit-button="true" show-footer="true" footer-left-Label="Left Footer Text" footer-right-Label="Right Footer Text" add="vm.add()" edit="vm.edit()" icon-size="2">Lorem ipsum .....</my-panel></p><hr><h4>my-moreless-panel</h4><p><div hljs><my-moreless-panel expand-button-text="Show me more!" collapse-button-text="Ive seen Enough">Lorem ipsum .....</my-moreless-panel></div><my-moreless-panel expand-button-text="Show me more!" collapse-button-text="Ive seen Enough">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris lectus, consectetur gravida mattis eget, maximus a lectus. Donec luctus sagittis arcu vel ultricies. Cras id porttitor erat, non sodales nunc. Etiam gravida lobortis pulvinar. Sed nibh turpis, elementum id sodales ac, ullamcorper vitae ipsum. Nam efficitur lacus vitae cursus tincidunt. Ve</my-moreless-panel></p><hr><h4>my-info-panel</h4><p><div hljs><my-info-panel info-text="Some infromation" theme="success-"></my-info-panel></div><my-info-panel info-text="Some infromation" theme="success-"></my-info-panel></p></div>'
};

angular.module('examples').component('panelExamples', panels);

