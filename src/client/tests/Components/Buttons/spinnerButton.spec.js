describe("Components", function () {

    describe("Buttons", function () {

        describe("Spinner Button", function () {

            var vm;

            //instantiate module
            beforeEach(bard.appModule('my-angular-components'));

            //instantiate component controller
            beforeEach(function () {
                bard.inject(this, '$componentController');
                vm = $componentController('mySpinnerButton', null);
            });


            it("should be defined", function () {
                expect(vm).toBeDefined();
            });
        });

    });
});
