fdescribe("Components", function () {

    describe("Status Alert", function () {

        var vm;

        //instantiate module
        beforeEach(bard.appModule('my-angular-components'));

        //instantiate component controller
        beforeEach(function () {
            bard.inject(this, '$componentController', '$rootScope', '$timeout');
            vm = $componentController('myStatusAlert', null);

            vm.$onInit();
            $rootScope.$apply();
        });


        it("should be defined", function () {
            expect(vm).toBeDefined();
        });


        describe("vm.getClass() Set css class based on status", function () {

            it("getClass() should return successMessage by default", function () {
                expect(vm.getClass()).toEqual("successMessage");
            });

            it("getClass() should return errorMessage when isError is set", function () {
                vm.isError = true;
                expect(vm.getClass()).toEqual("errorMessage");
            });
        });

        describe("vm.getIcon() Set icon based on status", function () {

            it("getIcon() should return successMessage by default", function () {
                expect(vm.getIcon()).toEqual("fa fa-check fa-2x");
            });

            it("getIcon() should return errorMessage when isError is set", function () {
                vm.isError = true;
                expect(vm.getIcon()).toEqual("fa fa-warning fa-2x");
            });
        });

        describe("vm.getId() Set id based on status", function () {

            it("getId() should return successMessage by default", function () {
                expect(vm.getClass()).toEqual("successMessage");
            });

            it("getId() should return errorMessage when isError is set", function () {
                vm.isError = true;
                expect(vm.getClass()).toEqual("errorMessage");
            });
        });



        describe("Changing the message", function () {

            it("alert should show when the message text is changed ", function () {
                vm.message = "Different Message";
                $rootScope.$apply();
                expect(vm.show).toEqual(true);
            });

            it("alert should hide after timeout has elapsed", function () {
                vm.message = "Different Message";

                $rootScope.$apply();

                //simulate timeout end
                $timeout.flush();
                $timeout.verifyNoPendingTasks();

                expect(vm.show).toEqual(false);
            });
        });
    });


});
