describe("Components", function () {

    describe("Inputs", function () {

        describe("Input Field", function () {

            var vm;

            //instantiate module
            beforeEach(bard.appModule('my-angular-components'));

            //instantiate component controller
            beforeEach(function () {
                bard.inject(this, '$componentController');
                vm = $componentController('myInputField', null);
            });


            it("should be defined", function () {
                expect(vm).toBeDefined();
            });
        });

    });
});