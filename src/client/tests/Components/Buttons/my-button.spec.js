describe('Components', function () {

    describe('Buttons', function () {

        describe('Button', function () {

            var vm;

            //instantiate module
            beforeEach(bard.appModule('my-angular-components'));

            //instantiate component controller
            beforeEach(function () {
                bard.inject(this, '$componentController', '$compile', '$rootScope', '$httpBackend');
                vm = $componentController('myButton', null);
            });


            it('should be defined', function () {
                expect(vm).toBeDefined();
            });

            it('should initialize options', function () {
                expect(vm.preset).toEqual('');
                expect(vm.class).toEqual('btn ');
                expect(vm.buttonIcon).toEqual('');
                expect(vm.preset).toEqual('');
                expect(vm.buttonText).toEqual('');
                expect(vm.icon).toEqual('');
                expect(vm.theme).toEqual('');
            });


            describe('Size', function () {
                it('setting size to large should change the css class btn-large', function () {
                    vm.size = 'large';
                    $rootScope.$apply();
                    expect(vm.class).toEqual('btn btn-large');
                });

                it('setting size to small should change the css class btn-small', function () {
                    vm.size = 'small';
                    $rootScope.$apply();
                    expect(vm.class).toEqual('btn btn-small');
                });
            });


            describe('Presets', function () {
                it('Save', function () {
                    vm.preset = 'save';
                    $rootScope.$apply();
                    expect(vm.class).toEqual('btn btn-info');
                    expect(vm.text).toEqual('Save');
                     expect(vm.buttonIcon).toEqual('fa fa-floppy-o fa-2x');
                });

                it('Create', function () {
                    vm.preset = 'create';
                    $rootScope.$apply();
                    expect(vm.class).toEqual('btn btn-success');
                    expect(vm.text).toEqual('Create');
                    expect(vm.buttonIcon).toEqual('fa fa-plus fa-2x');
                });

                 it('Details', function () {
                    vm.preset = 'details';
                    $rootScope.$apply();
                    expect(vm.class).toEqual('btn btn-info');
                    expect(vm.text).toEqual('Details');
                    expect(vm.buttonIcon).toEqual('fa fa-info-circle fa-2x');
                });

                it('Delete', function () {
                    vm.preset = 'delete';
                    $rootScope.$apply();
                    expect(vm.class).toEqual('btn btn-danger');
                    expect(vm.text).toEqual('Delete');
                    expect(vm.buttonIcon).toEqual('fa fa-times fa-2x');
                });

                //  it('Default', function () {
                //     vm.preset = '';
                //     $rootScope.$apply();
                //     vm.$onInit()
                //     //expect(vm.class).toEqual('btn ');
                //     expect(vm.text).toEqual('');
                //     //expect(vm.buttonIcon).toEqual('');
                // }); 

            });

        });

    });
});
