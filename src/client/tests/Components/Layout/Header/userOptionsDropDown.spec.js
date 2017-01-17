describe("Components", function () {

    describe("Admin Layout Component", function () {

        describe("Header", function () {

            describe("User Options Component", function () {


                var vm;

                //instantiate module
                beforeEach(bard.appModule('my-angular-components'));

                //instantiate component controller
                beforeEach(function () {
                    bard.inject(this, '$componentController');
                    vm = $componentController('userOptionsDropDownMenu', null);
                });


                it("should be defined", function () {
                    expect(vm).toBeDefined();
                });
            });
        });
    });
});
