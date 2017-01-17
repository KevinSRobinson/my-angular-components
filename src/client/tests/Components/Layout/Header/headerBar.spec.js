describe("Components", function () {

    describe("Admin Layout Component", function () {


        describe("Header", function () {

            var vm;

            //instantiate module
            beforeEach(bard.appModule('my-angular-components'));

            //instantiate component controller
            beforeEach(function () {
                bard.inject(this, '$componentController');
                vm = $componentController('adminHeaderBar', null);
            });


            it("should be defined", function () {
                expect(vm).toBeDefined();
            });

        });
    });
});
