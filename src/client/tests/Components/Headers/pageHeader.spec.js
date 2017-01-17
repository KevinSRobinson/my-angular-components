describe("Components", function () {

    describe("Headers", function () {

        describe("Page Header", function () {

            var vm;

            //instantiate module
            beforeEach(bard.appModule('my-angular-components'));

            //instantiate component controller
            beforeEach(function () {
                bard.inject(this, '$componentController');
                vm = $componentController('myPageTitle', null);
            });


            it("should be defined", function () {
                expect(vm).toBeDefined();
            });
        });

    });
});
