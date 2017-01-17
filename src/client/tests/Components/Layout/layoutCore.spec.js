

describe("Contact Tests", function () {

    describe("Contact List Component", function () {
     
       var vm;
     
        beforeEach(function () {
            beforeEach(bard.appModule('my-angular-components'));
            
            // //var bindings = {hero: {name: 'Wolverine'}};
             bard.inject(this, '$componentController');
            
             vm = $componentController('adminLayout', null);
        });

        it("should be defined", function () {
            expect(vm).toBeDefined();
        });
    });

});


		



		
