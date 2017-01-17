describe("Components", function () {

    describe("Modals", function () {

        describe("Modal Buttons", function () {

            var vm;

            //instantiate module
            beforeEach(bard.appModule('my-angular-components'));

            //instantiate component controller
            beforeEach(function () {
                bard.inject(this, '$componentController');
                vm = $componentController('myModalButtons', null);
            });


            it("should be defined", function () {
                expect(vm).toBeDefined();
            });
        });

    });
});
