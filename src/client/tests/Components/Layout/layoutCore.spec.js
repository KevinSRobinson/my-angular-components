describe("Components", function () {

    describe("Admin Layout Component", function () {

        describe("Admin Layout Core Component", function () {


            var vm;

            //instantiate module
            beforeEach(bard.appModule('my-angular-components'));

            //instantiate component controller
            beforeEach(function () {
                bard.inject(this, '$componentController');
                vm = $componentController('adminLayout', null);
            });


            it("should be defined", function () {
                expect(vm).toBeDefined();
            });

            describe("Admin Layout Core Side Menu - Expand/Colapse", function () {

                describe("Admin Layout Core Side Menu - Expand/Colapse", function () {

                    it("should return open when colapsed", function () {
                        vm.colapsed = true;
                        var css = vm.getState();

                        expect(css).toEqual('open');
                    });

                    it("should return nothing when open (not colapsed)", function () {
                        vm.colapsed = false;
                        var css = vm.getState();
                        expect(css).toEqual('');
                    });

                });

                describe("Transclude Div - Css ", function () {
                    it("should return uiView.colapsed class when colapsed", function () {
                        vm.colapsed = true;
                        var css = vm.getViewCssClass();
                        expect(css).toEqual('uiView.colapsed');
                    });

                    it("should return uiView class when open (not colapsed)", function () {
                        vm.colapsed = false;
                        var css = vm.getViewCssClass();
                        expect(css).toEqual('uiView');
                    });
                });

                describe("Transclude Div - Css ", function () {
                          it("should return uiView class when open (not colapsed)", function () {
                        vm.colapsed = false;
                        var width = vm.getWidth();
                        expect(width).toEqual(0);
                    });
                });
            });





            // vm.getState = function () {
            //             if (vm.colapsed)
            //                 return "open";
            //             else
            //                 return "";
            //         };
        });
    });
});
