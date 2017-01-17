describe("Components", function () {

    describe("Admin Layout Component", function () {

        describe("Header", function () {


            describe("Admin Layout Core Component", function () {


                var vm;

                //instantiate module
                beforeEach(bard.appModule('my-angular-components'));

                //instantiate component controller
                beforeEach(function () {
                    bard.inject(this, '$componentController');
                    vm = $componentController('alertsDropDownMenu', null);
                });


                it("should be defined", function () {
                    expect(vm).toBeDefined();
                });
            });
        });
    });
});
