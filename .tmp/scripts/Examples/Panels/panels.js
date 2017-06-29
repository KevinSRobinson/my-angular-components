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
    template:'<div class="example"><h1>Panels</h1><hr><h2>Moreless Panel</h2><div class="row"><div class="col-md-6"><my-moreless-panel expand-button-text="Show me more!" collapse-button-text="Ive seen Enough">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris lectus, consectetur gravida mattis eget, maximus a lectus. Donec luctus sagittis arcu vel ultricies. Cras id porttitor erat, non sodales nunc. Etiam gravida lobortis pulvinar. Sed nibh turpis, elementum id sodales ac, ullamcorper vitae ipsum. Nam efficitur lacus vitae cursus tincidunt. Ve</my-moreless-panel></div><div class="col-md-6"><div class="usage"><code>\r\n                    <b>\r\n                        <span class="tag">&lt;my-moreless-panell&gt;</span><br>\r\n                        <spam class="value">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris lectus .. <br>\r\n                        <span class="tag">&lt;/my-moreless-panel&gt;</span>\r\n                    </spam></b>\r\n                </code></div><my-panel title="Options" theme="success"><table class="table table-striped"><thead><tr><td>Property</td><td>Required</td><td>Description</td></tr></thead><tr><td>expand-button-text</td><td>Yes</td><td>Sets the Expand button text</td><small>Default: More</small></tr><tr><td>field-name</td><td>No</td><td>Sets the Collapse button text</td><small>Default: Less</small></tr><tr><td>is-collapsed</td><td>No</td><td>Allows you set the default state<br><small>Default: true</small></td></tr></table></my-panel></div><p></p><h3>Info Panel</h3><my-panel title="My Great Info Panel" icon="info" show-add-button="true" show-edit-button="true" show-footer="true" footer-left-Label="Left Footer Text" footer-right-Label="Right Footer Text" add="vm.add()" edit="vm.edit()" icon-size="2">"orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</my-panel><p></p><h3>Info Panel</h3><my-info-panel info-text="Some infromation"></my-info-panel></div></div>'
};

angular.module('examples').component('panelExamples', panels);
