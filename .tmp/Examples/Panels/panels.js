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
    template:'<div class="example"><h1>Panels</h1><hr><div hljs><my-moreless-panel ng-model="sdfsdfsdf" expand-button-text="Show me more!" collapse-button-text="Ive seen Enough">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris lectus, consectetur gravida mattis eget, maximus a lectus. Donec luctus sagittis arcu vel ultricies. Cras id porttitor erat, non sodales nunc. Etiam gravida lobortis pulvinar. Sed nibh turpis, elementum id sodales ac, ullamcorper vitae ipsum. Nam efficitur lacus vitae cursus tincidunt. Ve</my-moreless-panel></div></div>'
};

angular.module('examples').component('panelExamples', panels);

