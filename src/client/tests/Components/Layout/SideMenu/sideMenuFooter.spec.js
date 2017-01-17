describe("Components", function () {

    describe("Admin Layout Component", function () {

        describe("Side Menu", function () {

            describe("Side Menu Footer", function () {

                var vm;

                //instantiate module
                beforeEach(bard.appModule('my-angular-components'));

                //instantiate component controller
                beforeEach(function () {
                    bard.inject(this, '$componentController');
                    vm = $componentController('sideMenuFooter', null);
                });


                it("should be defined", function () {
                    expect(vm).toBeDefined();
                });
            });
        });
    });
});
